---
rank: 2
related_endpoints: []
related_guides:
  - users/provision/populate-content
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: users/provision
is_index: false
id: users/provision/architecture
type: guide
total_steps: 3
sibling_id: users/provision
parent_id: users/provision
next_page_id: users/provision/populate-content
previous_page_id: users/provision
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/users/provision/architecture.md
---
# アーキテクチャスケルトンの作成

最初の要件は、アカウントの作成時に一般的なファイルとフォルダを個々のユーザーのルートフォルダにコピーすることです。この問題は、標準のLinuxディストリビューション内の`/etc/skel`と呼ばれるディレクトリを介して解決されています。このディレクトリは、Box固有のソリューションによってエミュレートされます。Linuxで新しいユーザーを追加すると、`/etc/skel`内のファイルとフォルダが新しいユーザーのホームディレクトリにコピーされます。

[ JWTベースのBoxアプリケーション](guide://applications/custom-apps/jwt-setup)を作成すると、Box Enterprise内に[サービスアカウント](guide://authentication/user-types/app-users)が作成されます。サービスアカウントはBox Enterpriseの共同管理者に似た機能を持っており、このユースケースに最も有用で、ファイルおよびフォルダに対し、所有、コピー、および他のユーザーとのコラボレーションを行うことができます。さらに重要な点は、ユーザー向けのカスタムアプリケーションの開発では厳密にはサービスアカウントを使用する必要がないことです。代わりに、自動化機能でさらにサービスアカウントを活用できます。

<Message>

# Boxカスタムアプリケーションの要件

この手順のためにJWTベースのカスタムBoxアプリケーションを作成する場合、**ユーザーを管理**、**グループを管理**、**ユーザーとして操作を実行**、および**ユーザーアクセストークンを生成**スコープを有効にする必要があります。

JWTベースのBoxアプリケーションとBoxアプリケーションのスコープの作成の詳細については、[JWTアプリケーションの設定](guide://applications/custom-apps/jwt-setup)を参照してください。

</Message>

初めに、`etc`フォルダと`skel`フォルダを作成し、サービスアカウントにフォルダの所有権を付与します。

<Tabs>

<Tab title="etc_skel.json">

```json
{
  "name": "etc",
  "parent": {
    "id": "0"
  },
  "children": [
    {
      "name": "skel",
      "children": []
    }
  ]
}
```

</Tab>

<Tab title="skel_sub_directories.json">

```json
[
  {
    "name": "Market Research",
    "parent": {
      "id": "44884797174"
    },
    "children": [
      {
        "name": "Statistics",
        "children": [
          {
            "name": "Computed",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "name": "Sales Plays",
    "parent": {
      "id": "44884797174"
    },
    "children": [
      {
        "name": "Big Pharma",
        "children": []
      }
    ]
  }
]
```

</Tab>

</Tabs>

このコードを再利用して、上のJSONオブジェクトが示すフォーマットのフォルダ構造を構築することもできます。

<Tabs>

<Tab title="Node">

```js
"use strict";
const fs = require("fs");
const box = require("box-node-sdk");

class BoxFolderTreeCreator {
  constructor(boxClient, options) {
    options = options || {};
    if (options.boxClient) {
      throw new Error("Must include a boxClient field.");
    }

    options.boxFolderTreeName = options.boxFolderTreeName || "tree.json";

    this.boxClient = boxClient;
    this.boxFolderTree = JSON.parse(fs.readFileSync(options.boxFolderTreeName));
    this.createdBoxFolders = [];
  }

  async createFolderTree(branch = null, parentFolderId = "0") {
    this.createdBoxFolders = [];
    if (Array.isArray(this.boxFolderTree)) {
      let folderTasks = [];
      this.boxFolderTree.forEach(folder => {
        folderTasks.push(this._createFolder(folder, ""));
      });
      await Promise.all(folderTasks);
      return this.createdBoxFolders;
    } else if (typeof this.boxFolderTree === "object") {
      console.log("Is object");
      await this._createFolders(this.boxFolderTree, "");
      return this.createdBoxFolders;
    } else {
      throw new Error("Incorrectly formatted JSON folder tree.");
    }
  }

  async _createFolders(branch, parentFolderId = "0") {
    if (branch.parent != null && branch.parent.id != null) {
      parentFolderId = branch.parent.id;
    }
    let folder;
    try {
      folder = await this.boxClient.folders.create(parentFolderId, branch.name);
    } catch (e) {
      let existingFolderId = BoxFolderTreeCreator.handleFolderConflictError(e);
      folder = await this.boxClient.folders.get(existingFolderId);
    }
    this.createdBoxFolders.push(folder);
    if (branch.children.length <= 0) {
      console.log("No more folders to create...");
      return;
    } else {
      let createFolderTasks = [];
      branch.children.forEach(child => {
        console.log("Creating folder...");
        console.log(child.name);
        createFolderTasks.push(this._createFolders(child, folder.id));
      });
      return await Promise.all(createFolderTasks);
    }
  }

  static handleFolderConflictError(e) {
    if (e && e.response && e.response.body) {
      let errorBody = e.response.body;
      if (errorBody.status === 409) {
        if (
          errorBody.context_info &&
          errorBody.context_info.conflicts &&
          errorBody.context_info.conflicts.length > 0
        ) {
          let conflict = errorBody.context_info.conflicts[0];
          if (conflict && conflict.id) {
            return conflict.id;
          }
        }
      }
    }
  }
}

let configFile = fs.readFileSync("config.json");
configFile = JSON.parse(configFile);

let session = box.getPreconfiguredInstance(configFile);
let serviceAccountClient = session.getAppAuthClient("enterprise");

let treeCreator = new BoxFolderTreeCreator(serviceAccountClient);

(async () => {
  let createdFolders = await treeCreator.createFolderTree();
  console.log(createdFolders);
})();
```

</Tab>

<Tab title="Java">

```java
package com.box;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.box.sdk.BoxAPIException;
import com.box.sdk.BoxConfig;
import com.box.sdk.BoxDeveloperEditionAPIConnection;
import com.box.sdk.BoxFolder;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

public class BoxFolderTreeCreator {
    private BoxDeveloperEditionAPIConnection _boxClient;
    private JsonValue _boxFolderTree;
    private ArrayList<BoxFolder.Info > _createdFolders;

    public BoxFolderTreeCreator(BoxDeveloperEditionAPIConnection
        boxClient) throws IOException {
        this(boxClient, "tree.json");
    }

    public BoxFolderTreeCreator(BoxDeveloperEditionAPIConnection boxClient,
        String folderTreeFileName)
    throws IOException {
        this._boxClient = boxClient;
        try (BufferedReader tree =
            Files.newBufferedReader(Paths.get(folderTreeFileName))) {
            this._boxFolderTree = JsonValue.readFrom(tree);
        }
        this._createdFolders = new ArrayList<>();
    }

    public ArrayList<BoxFolder.Info > createFolderTree() {
        if (this._boxFolderTree.isArray()) {
            for (JsonValue folder: this._boxFolderTree.asArray()) {
                System.out.println("Processing this folder: " + folder);
                _createFolders(folder.asObject(), null);
            }
            return this._createdFolders;
        } else {
            _createFolders(this._boxFolderTree.asObject(), null);
            return this._createdFolders;
        }
    }

    private void _createFolders(JsonObject branch, String parentFolderID) {
        if (parentFolderID == null && branch.get("parent") != null &&
            branch.get("parent").asObject().get("id") != null) {
            System.out.println("Looking for parent folder id...");
            System.out.println(branch.get("parent").asObject().get("id").asString());
            parentFolderID = branch.get("parent").asObject().get("id").asString();
        }
        System.out.println("Folder name:");
        System.out.println(branch.get("name"));
        System.out.println("Parent Folder ID:");
        System.out.println(parentFolderID);
        BoxFolder.Info createdFolder;
        try {
            BoxFolder parent = new BoxFolder(this._boxClient, parentFolderID);
            createdFolder = parent.createFolder(branch.get("name").asString());
        } catch (BoxAPIException e) {
            if (e.getResponseCode() == 409) {
                // Use the ID returned from the conflict error to continue
                String conflictId = getIdFromConflict(e.getResponse());
                createdFolder = new BoxFolder(this._boxClient, conflictId).getInfo();
            } else {
                throw e;
            }
        }

        this._createdFolders.add(createdFolder);

        if (!branch.get("children").asArray().isEmpty()) {
            for (JsonValue child: branch.get("children").asArray()) {
                _createFolders(child.asObject(), createdFolder.getID());
            }
        } else {
            return;
        }
    }

    private static String getIdFromConflict(String message) {
        String id = "";
        Pattern p = Pattern.compile("\"id\":\"[0-9]+\"");
        Pattern p2 = Pattern.compile("[0-9]+");
        Matcher m = p.matcher(message);
        if (m.find()) {
            String sub = m.group();
            Matcher m2 = p2.matcher(sub);
            if (m2.find()) {
                id = m2.group();
            }
        }
        return id;
    }

    public static void main(String[] args) throws Exception {
        Path configPath = Paths.get("config.json");
        try (BufferedReader reader =
            Files.newBufferedReader(configPath, Charset.forName("UTF-8"))) {
            BoxConfig boxConfig = BoxConfig.readFrom(reader);
            BoxDeveloperEditionAPIConnection serviceAccountClient = BoxDeveloperEditionAPIConnection
                .getAppEnterpriseConnection(boxConfig);

            BoxFolderTreeCreator treeBuilder = new
                BoxFolderTreeCreator(serviceAccountClient, "etc_skel.json");
            ArrayList<BoxFolder.Info > folders = treeBuilder.createFolderTree();
            for (BoxFolder.Info folder: folders) {
                System.out.println(folder.getID());
            }
        }
    }
}
```

</Tab>

<Tab title=".NET">

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Box.V2;
using Box.V2.Config;
using Box.V2.Exceptions;
using Box.V2.JWTAuth;
using Box.V2.Models;
using Newtonsoft.Json.Linq;

namespace BoxPlayground {
    public class Program {
        static void Main(string[] args) {
            ExecuteMainAsync().Wait();
        }

        private static async Task ExecuteMainAsync() {
            using(FileStream fs = new FileStream("./config.json",
                FileMode.Open)) {
                var session = new BoxJWTAuth(BoxConfig.CreateFromJsonFile(fs));
                var client = session.AdminClient(session.AdminToken());
                var treeCreator = new BoxFolderTreeCreator(client, "etc_skel.json");
                var createdFolders = await treeCreator.CreateFolderTree();
                foreach(var folder in createdFolders) {
                    System.Console.WriteLine(folder.Name);
                    System.Console.WriteLine(folder.Id);
                }

            }
        }

        public class BoxFolderTreeCreator {
            public BoxClient BoxClient {
                get;
                set;
            }
            public JToken BoxFolderTree {
                get;
                set;
            }
            public List < BoxFolder > CreatedBoxFolders {
                get;
                set;
            }

            public BoxFolderTreeCreator(BoxClient boxClient,
                string boxFolderTreeFileName = "tree.json") {
                this.BoxClient = boxClient;
                this.BoxFolderTree = JToken.Parse(File.ReadAllText(boxFolderTreeFileName));
                this.CreatedBoxFolders = new List < BoxFolder > ();
            }
            public async Task < List < BoxFolder >>
                CreateFolderTree(dynamic branch = null,
                string parentFolderId = "0") {
                this.CreatedBoxFolders = new List < BoxFolder > ();

                if (this.BoxFolderTree is JArray) {
                    var folderTasks = new List < Task > ();
                    foreach(JObject folder in this.BoxFolderTree) {
                        folderTasks.Add(_createFolder(folder, String.Empty));
                    }
                    await Task.WhenAll(folderTasks);
                    return this.CreatedBoxFolders;
                }
                else if (this.BoxFolderTree is JObject) {
                    System.Console.WriteLine("Is object");
                    await _createFolder(this.BoxFolderTree as JObject, String.Empty);
                    return this.CreatedBoxFolders;
                }
                else {
                    throw new Exception("Incorrectly formatted JSON folder tree.");
                }

            }

            private async Task _createFolder(dynamic branch,
                string parentFolderId = "0") {

                if (branch.parent != null && branch.parent.id != null) {
                    parentFolderId = branch.parent.id;
                }

                BoxFolder createdFolder;
                try {
                    createdFolder = await this.BoxClient.FoldersManager.CreateAsync(
                        new BoxFolderRequest {
                            Parent = new BoxRequestEntity {
                                Id = parentFolderId
                            },
                            Name = branch.name
                    });
                }
                catch(BoxConflictException < BoxFolder > e) {
                    createdFolder = await this.BoxClient.FoldersManager.GetInformationAsync(e.ConflictingItems.FirstOrDefault().Id);
                }

                this.CreatedBoxFolders.Add(createdFolder);

                if (branch.children.Count <= 0) {
                    System.Console.WriteLine("No more folders to create...");
                    return;
                }
                else {
                    var createFolderTasks = new List < Task > ();
                    foreach(var child in branch.children) {
                        System.Console.WriteLine("Creating folder...");
                        System.Console.WriteLine(child.name);
                        createFolderTasks.Add(_createFolder(child as JObject,
                            createdFolder.Id));
                    }
                    await Task.WhenAll(createFolderTasks);
                }
            }
        }
    }
}
```

</Tab>

</Tabs>
