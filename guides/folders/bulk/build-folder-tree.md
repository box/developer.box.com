---
rank: 5
related_endpoints:
  - get_folders_id
related_guides:
  - folders/single/create
  - folders/single/delete
required_guides: []
related_resources:
  - folder
alias_paths:
  - /docs/build-a-folder-tree
category_id: folders
subcategory_id: folders/bulk
is_index: false
id: folders/bulk/build-folder-tree
type: guide
total_steps: 1
sibling_id: folders/bulk
parent_id: folders/bulk
next_page_id: ''
previous_page_id: folders/bulk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/bulk/build-folder-tree.md
fullyTranslated: true
---
# フォルダツリーの作成

以下の例は、フォルダツリーのJSONレプリゼンテーションを作成する方法を示しています。フォルダツリーは、フォルダの名前とそのフォルダ内にあるすべてのサブフォルダで構成されます。

以下のサンプルでは、先頭の**ルート**フォルダと、コードでトラバースする最大深度を指定できます。また、初期化されたSDKクライアントを渡すことができるため、どのユーザーが認証されるかを構成することもできます。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title=".NET">

```dotnet
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using Box.V2;
using Box.V2.Auth;
using Box.V2.Config;
using Box.V2.Converter;
using Box.V2.Exceptions;
using Box.V2.JWTAuth;
using Box.V2.Models;
using Newtonsoft.Json;

namespace BoxPlayground
{
    public class Program4
    {
        static void Main(string[] args)
        {
            ExecuteMainAsync().Wait();
        }

        public class BoxFolderTreeBuilder
        {
            public BoxClient BoxClient { get; set; }
            public string RootFolderId { get; set; }
            public int MaxDepth { get; set; }

            public BoxFolderTreeBuilder(BoxClient boxClient, string rootFolderId = "0", int maxDepth = -1)
            {
                this.BoxClient = boxClient;
                this.RootFolderId = rootFolderId;
                this.MaxDepth = maxDepth;
            }

            public async Task<BoxFolderTree> BuildFolderTreeWithFlatLists()
            {
                var tree = new BoxFolderTree
                {
                    RootId = this.RootFolderId,
                    Files = new List<BoxFolderTreeItem>(),
                    Folders = new List<BoxFolderTreeFolder>()
                };
                var rootFolderItems = await this.BoxClient.FoldersManager.GetFolderItemsAsync(this.RootFolderId, limit: 1000, autoPaginate: true);
                var rootFolderChildren = new List<BoxFolderTreeFolder>();
                foreach (var item in rootFolderItems.Entries)
                {
                    var folderTreeItem = new BoxFolderTreeItem(item);
                    folderTreeItem.Path = $"{this.RootFolderId}";
                    if (item.Type == "file")
                    {
                        tree.Files.Add(folderTreeItem);
                    }
                    else if (item.Type == "folder")
                    {
                        var childFolder = new BoxFolderTreeFolder(folderTreeItem);
                        tree.Folders.Add(new BoxFolderTreeFolder(folderTreeItem));
                        rootFolderChildren.Add(childFolder);
                    }
                }
                tree = await Dive(tree, rootFolderChildren, 1);
                return tree;
            }

            private async Task<BoxFolderTree> Dive(BoxFolderTree tree,
                List<BoxFolderTreeFolder> children, int currentDepth)
            {
                if (InTooDeep(currentDepth))
                {
                    return tree;
                }
                else
                {
                    currentDepth++;
                    var additionalChildren = new List<BoxFolderTreeFolder>();
                    foreach (var child in children)
                    {
                        var folderItems = await this.BoxClient.FoldersManager.GetFolderItemsAsync(child.Item.Id, limit: 1000, autoPaginate: true);
                        var foundFolder = tree.Folders.FindIndex((f) =>
                        {
                            return f.Item.Id == child.Item.Id;
                        });
                        foreach (var item in folderItems.Entries)
                        {
                            if (foundFolder >= 0)
                            {
                                tree.Folders[foundFolder].Children.Add(item);
                            }
                            var folderTreeItem = new BoxFolderTreeItem(item);
                            folderTreeItem.Path = $"{child.Path}/{child.Item.Id}";
                            if (item.Type == "file")
                            {
                                tree.Files.Add(folderTreeItem);
                            }
                            else if (item.Type == "folder")
                            {
                                var childFolder = new BoxFolderTreeFolder(folderTreeItem);
                                tree.Folders.Add(new BoxFolderTreeFolder(folderTreeItem));
                                additionalChildren.Add(childFolder);
                            }
                        }
                    }
                    if (additionalChildren.Count == 0)
                    {
                        return tree;
                    }
                    else
                    {
                        return await Dive(tree, additionalChildren, currentDepth);
                    }
                }
            }

            private bool InTooDeep(int depthCount)
            {
                if (this.MaxDepth < 0)
                {
                    return false;
                }
                else
                {
                    return (depthCount >= this.MaxDepth);
                }
            }
            public class BoxFolderTreeItem
            {
                [JsonProperty(PropertyName = "item")]
                public BoxItem Item { get; set; }

                [JsonProperty(PropertyName = "path")]
                public string Path { get; set; }
                public BoxFolderTreeItem(BoxItem item)
                {
                    Item = item;
                }
            }
            public class BoxFolderTreeFolder : BoxFolderTreeItem
            {
                public BoxFolderTreeFolder(BoxFolderTreeItem item) : base(item.Item)
                {
                    this.Path = item.Path;
                }

                [JsonProperty(PropertyName = "children")]
                public List<BoxItem> Children { get; set; } = new List<BoxItem>();
            }
            public class BoxFolderTree
            {
                [JsonProperty(PropertyName = "rootId")]
                public string RootId { get; set; }
                [JsonProperty(PropertyName = "files")]
                public List<BoxFolderTreeItem> Files { get; set; }

                [JsonProperty(PropertyName = "folders")]
                public List<BoxFolderTreeFolder> Folders { get; set; }

                public string writeJSON()
                {
                    var converter = new Box.V2.Converter.BoxJsonConverter();
                    return converter.Serialize<BoxFolderTreeBuilder.BoxFolderTree>(this);
                }
            }
        }
        private static async Task ExecuteMainAsync()
        {
            using (FileStream fs = new FileStream($"./config.json", FileMode.Open))
            {
                var session = new BoxJWTAuth(BoxConfig.CreateFromJsonFile(fs));
                var serviceAccountClient = session.AdminClient(session.AdminToken());
                var folderTreeBuilder = new BoxFolderTreeBuilder(serviceAccountClient, rootFolderId: "37477903736");
                var tree = await folderTreeBuilder.BuildFolderTreeWithFlatLists();
                System.Console.WriteLine(tree.writeJSON());
            }
        }
    }
}
```

</Tab>

<Tab title="Java">

```java
package com.box;

import java.io.BufferedReader;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import com.box.sdk.BoxConfig;
import com.box.sdk.BoxDeveloperEditionAPIConnection;
import com.box.sdk.BoxFile;
import com.box.sdk.BoxFolder;
import com.box.sdk.BoxItem;
import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;

public class BoxFolderTreeBuilder {
    private BoxDeveloperEditionAPIConnection _boxClient;
    private String _rootFolderId;
    private int _maxDepth;

    private static final String DEFAULT_ROOT_FOLDER_ID = "0";
    private static final int DEFAULT_MAX_DEPTH = -1;

    public BoxFolderTreeBuilder(BoxDeveloperEditionAPIConnection boxClient) {
        this(boxClient, DEFAULT_ROOT_FOLDER_ID, DEFAULT_MAX_DEPTH);
    }

    public BoxFolderTreeBuilder(BoxDeveloperEditionAPIConnection boxClient, String rootFolderId) {
        this(boxClient, rootFolderId, DEFAULT_MAX_DEPTH);
    }

    public BoxFolderTreeBuilder(BoxDeveloperEditionAPIConnection boxClient, int maxDepth) {
        this(boxClient, DEFAULT_ROOT_FOLDER_ID, maxDepth);
    }

    public BoxFolderTreeBuilder(BoxDeveloperEditionAPIConnection boxClient, String rootFolderId, int maxDepth) {
        this._boxClient = boxClient;
        this._rootFolderId = rootFolderId;
        this._maxDepth = maxDepth;
    }

    public BoxFolderTree buildFolderTreeWithFlatLists() {
        BoxFolderTree tree = new BoxFolderTree();
        tree.setRootId(this._rootFolderId);
        ArrayList<BoxFolderTreeFolder> rootFolderChildren = new ArrayList<>();
        BoxFolder folder = new BoxFolder(this._boxClient, this._rootFolderId);
        String path = this._rootFolderId;
        for (BoxItem.Info itemInfo : folder) {
            if (itemInfo instanceof BoxFile.Info) {
                BoxFile.Info fileInfo = (BoxFile.Info) itemInfo;
                BoxFolderTreeFile treeFile = new BoxFolderTreeFile(fileInfo, path);
                tree.files.add(treeFile);
            } else if (itemInfo instanceof BoxFolder.Info) {
                BoxFolder.Info folderInfo = (BoxFolder.Info) itemInfo;
                BoxFolderTreeFolder treeFolder = new BoxFolderTreeFolder(folderInfo, path);
                tree.folders.add(treeFolder);
                rootFolderChildren.add(treeFolder);
            }
        }
        tree = Dive(tree, rootFolderChildren, 1);
        return tree;
    }

    private BoxFolderTree Dive(BoxFolderTree tree, ArrayList<BoxFolderTreeFolder> children, int currentDepth) {
        if (inTooDeep(currentDepth)) {
            return tree;
        } else {
            currentDepth++;
            ArrayList<BoxFolderTreeFolder> additionalChildren = new ArrayList<>();
            for (BoxFolderTreeFolder child : children) {
                BoxFolder folderItems = new BoxFolder(this._boxClient, child.getItem().getID());
                int foundFolder = -1;
                for (int i = 0; i < tree.folders.size(); i++) {
                    if (child.getItem().getID() == tree.folders.get(i).getItem().getID()) {
                        foundFolder = i;
                    }
                }
                String path = String.format("%s/%s", child.getPath(), child.getItem().getID());
                for (BoxItem.Info item : folderItems.getChildren()) {
                    if (foundFolder >= 0) {
                        tree.folders.get(foundFolder).children.add(new BoxFolderTreeItem(item));
                    }
                    if (item instanceof BoxFile.Info) {
                        BoxFile.Info fileInfo = (BoxFile.Info) item;
                        tree.files.add(new BoxFolderTreeFile(fileInfo, path));
                    } else if (item instanceof BoxFolder.Info) {
                        BoxFolder.Info folderInfo = (BoxFolder.Info) item;
                        BoxFolderTreeFolder nestedFolder = new BoxFolderTreeFolder(folderInfo, path);
                        tree.folders.add(nestedFolder);
                        additionalChildren.add(nestedFolder);
                    }
                }
            }
            if (additionalChildren.size() == 0) {
                return tree;
            } else {
                return Dive(tree, additionalChildren, currentDepth);
            }
        }
    }

    private Boolean inTooDeep(int depthCount) {
        if (this._maxDepth < 0) {
            return false;
        } else {
            return (depthCount >= this._maxDepth);
        }
    }

    public class BoxFolderTree {
        private String rootId;
        private ArrayList<BoxFolderTreeFile> files = new ArrayList<>();
        private ArrayList<BoxFolderTreeFolder> folders = new ArrayList<>();

        public String getRootId() {
            return this.rootId;
        }

        public void setRootId(String id) {
            this.rootId = id;
        }

        public String writeJSON() {
            JsonObject requestJSON = new JsonObject();

            JsonArray filesJSON = new JsonArray();
            for (BoxFolderTreeFile file : files) {
                filesJSON.add(file.convertToJSON());
            }

            JsonArray foldersJSON = new JsonArray();
            for (BoxFolderTreeFolder folder : folders) {
                foldersJSON.add(folder.convertToJSON());
            }
            requestJSON.add("rootId", this.rootId);
            requestJSON.add("files", filesJSON);
            requestJSON.add("folders", foldersJSON);
            return requestJSON.toString();
        }
    }

    public class BoxFolderTreeItem {
        private BoxItem.Info item;

        public BoxFolderTreeItem(BoxItem.Info item) {
            this.item = item;
        }

        public JsonObject convertToJSON() {
            JsonObject itemJSON = new JsonObject();
            itemJSON.add("id", this.item.getID());
            itemJSON.add("name", this.item.getName());
            String type = (item instanceof BoxFile.Info == true) ? "file" : "folder";
            itemJSON.add("type", type);
            return itemJSON;
        }
    }

    public class BoxFolderTreeFile {
        private BoxFile.Info item;
        private String path;

        public BoxFolderTreeFile(BoxFile.Info item, String path) {
            this.item = item;
            this.path = path;
        }

        public BoxFile.Info getItem() {
            return this.item;
        }

        public void setItem(BoxFile.Info info) {
            this.item = info;
        }

        public String getPath() {
            return this.path;
        }

        public void setPath(String path) {
            this.path = path;
        }

        public JsonObject convertToJSON() {
            JsonObject itemJSON = new JsonObject();
            JsonObject fileJSON = new JsonObject();
            fileJSON.add("id", this.item.getID());
            fileJSON.add("type", "file");
            fileJSON.add("name", this.item.getName());

            itemJSON.add("path", this.path);
            itemJSON.add("item", fileJSON);
            return itemJSON;
        }
    }

    public class BoxFolderTreeFolder {
        private BoxFolder.Info item;
        private String path;
        private ArrayList<BoxFolderTreeItem> children;

        public BoxFolderTreeFolder(BoxFolder.Info item, String path) {
            this.item = item;
            this.path = path;
            this.children = new ArrayList<>();
        }

        public BoxFolder.Info getItem() {
            return this.item;
        }

        public void setItem(BoxFolder.Info info) {
            this.item = info;
        }

        public String getPath() {
            return this.path;
        }

        public void setPath(String path) {
            this.path = path;
        }

        public JsonObject convertFolderToJSON() {
            JsonObject itemJSON = new JsonObject();
            JsonObject folderJSON = new JsonObject();
            folderJSON.add("id", this.item.getID());
            folderJSON.add("type", "folder");
            folderJSON.add("name", this.item.getName());

            itemJSON.add("path", this.path);
            itemJSON.add("item", folderJSON);
            return itemJSON;
        }

        public JsonObject convertToJSON() {
            JsonObject folderJSON = this.convertFolderToJSON();
            JsonArray children = new JsonArray();
            for (BoxFolderTreeItem item : this.children) {
                children.add(item.convertToJSON());
            }
            folderJSON.add("children", children);
            return folderJSON;
        }
    }

    public static void main(String[] args) throws Exception {
        Path configPath = Paths.get("config.json");
        try (BufferedReader reader = Files.newBufferedReader(configPath, Charset.forName("UTF-8"))) {
            BoxConfig boxConfig = BoxConfig.readFrom(reader);
            BoxDeveloperEditionAPIConnection serviceAccountClient = BoxDeveloperEditionAPIConnection
                    .getAppEnterpriseConnection(boxConfig);

            BoxFolderTreeBuilder treeBuilder = new BoxFolderTreeBuilder(serviceAccountClient, "43491738095", 2);
            BoxFolderTree tree = treeBuilder.buildFolderTreeWithFlatLists();
            System.out.println(tree.writeJSON());
        }
    }
}
```

</Tab>

<Tab title="Node">

```js
class BoxFolderTreeBuilder {
    constructor(boxClient, options) {
        options = options || {};
        boxClient._useIterators = true;
        this.boxClient = boxClient;
        this.maxDepth = options.maxDepth || -1;
        this.rootFolderId = options.rootFolderId || "0";
    }

    async buildFolderTreeWithFlatLists() {
        let tree = {
            rootId: this.rootFolderId,
            folders: [],
            files: []
        }
        let folderItemsIterator = await this.boxClient.folders.getItems(this.rootFolderId);
        let collection = await BoxUtilities.autoPage(folderItemsIterator);
        let rootFolderChildren = [];

        const path = `${this.rootFolderId}`;
        collection.forEach((item) => {
            if (item.type === "file") {
                tree.files.push({
                    item,
                    path
                })
            } else if (item.type === "folder") {
                let folderTreeFolder = {
                    item,
                    path,
                    children: []
                }
                tree.folders.push(folderTreeFolder);
                rootFolderChildren.push(folderTreeFolder);
            }
        });
        tree = await this.dive(tree, rootFolderChildren, 1);
        return tree;
    }

    async dive(tree, children, currentDepth) {
        if (this.inTooDeep(currentDepth)) {
            return tree;
        } else {
            currentDepth++;
            let additionalChildren = [];
            let childrenPromises = [];
            children.forEach((child) => {
                let foundFolder = -1;
                childrenPromises.push(this.boxClient.folders.getItems(child.item.id)
                    .then((folderItemsIterator) => {
                        return BoxUtilities.autoPage(folderItemsIterator)
                            .then((collection) => {
                                for (let i = 0; i < tree.folders.length; i++) {
                                    if (child.item.id === tree.folders[i].item.id) {
                                        foundFolder = i;
                                    }
                                }

                                const path = `${child.path}/${child.item.id}`;
                                collection.forEach((item) => {
                                    if (foundFolder >= 0) {
                                        tree.folders[foundFolder].children.push(item);
                                    }

                                    if (item.type === "file") {
                                        tree.files.push({
                                            item,
                                            path
                                        })
                                    } else if (item.type === "folder") {
                                        let folderTreeFolder = {
                                            item,
                                            path,
                                            children: []
                                        }
                                        tree.folders.push(folderTreeFolder);
                                        additionalChildren.push(folderTreeFolder);
                                    }
                                });
                                return;
                            });
                    }));
            });
            await Promise.all(childrenPromises);
            if (additionalChildren.length === 0) {
                return tree;
            } else {
                return this.dive(tree, additionalChildren, currentDepth);
            }
        }
    }

    inTooDeep(depthCount) {
        if (this.maxDepth < 0) {
            return false;
        } else {
            return (depthCount >= this.maxDepth);
        }
    }
}

class BoxUtilities {
    static async autoPage(iterator, collection = []) {
        let moveToNextItem = async () => {
            let item = await iterator.next();
            if (item.value) {
                collection.push(item.value);
            }

            if (item.done !== true) {
                return moveToNextItem();
            } else {
                return collection;
            }
        }
        return moveToNextItem();
    }
}

let folderTreeBuilder = new BoxFolderTreeBuilder(client);
folderTreeBuilder.buildFolderTreeWithFlatLists()
  .then((tree) => {
    console.log(JSON.stringify(tree));
  })
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->
