---
rank: 4
related_endpoints:
  - get_files_id_content
related_guides:
  - downloads/file
  - uploads/direct/file
required_guides: []
related_resources: []
alias_paths:
  - /docs/download-all-files-from-a-folder-1
  - /docs/get-all-files
category_id: downloads
subcategory_id: null
is_index: false
id: downloads/folder
type: guide
total_steps: 6
sibling_id: downloads
parent_id: downloads
next_page_id: downloads
previous_page_id: downloads/get-url
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/downloads/folder.md
fullyTranslated: true
---
# フォルダ内のすべてのファイルのダウンロード

アプリケーションによっては、1つのフォルダのすべてのファイルをダウンロードできる場合もあります。SDKとCLIを使用してこの処理を実行するには、フォルダツリー内を移動してすべてのファイルを探し、そのファイルをダウンロードする必要があります。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title=".NET">

```dotnet
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Box.V2.Config;
using Box.V2.JWTAuth;

namespace BoxDownloadAllFiles {
  class Program {
    static void Main (string[] args) {
      ExecuteMainAsync ().Wait ();
    }

    private static async Task ExecuteMainAsync () {
      using (FileStream fs = new FileStream ($"./config.json", FileMode.Open)) {
        var session = new BoxJWTAuth (BoxConfig.CreateFromJsonFile (fs));
        var client = session.AdminClient (session.AdminToken ());
        var folderId = "987654321";
        var folder = await client.FoldersManager.GetInformationAsync (folderId);
        var folderName = folder.Name;
        var localFolderPath = Path.Combine (Directory.GetCurrentDirectory (), folderName);
        ResetLocalFolder (localFolderPath);

        var items = await client.FoldersManager.GetFolderItemsAsync (folderId, 1000, autoPaginate : true);
        var fileDownloadTasks = new List<Task> ();
        var files = items.Entries.Where (i => i.Type == "file");
        foreach (var file in files) {
          fileDownloadTasks.Add (client.FilesManager.DownloadStreamAsync (file.Id).ContinueWith ((t) => {
            var localFile = File.Create (Path.Combine (localFolderPath, file.Name));
            return t.Result.CopyToAsync (localFile);
          }));
        }
        await Task.WhenAll (fileDownloadTasks);
      }
    }

    private static void ResetLocalFolder (string localFolderPath) {
      if (!Directory.Exists (localFolderPath)) {
        Directory.CreateDirectory (localFolderPath);
      } else {
        foreach (var file in Directory.EnumerateFiles (localFolderPath)) {
          File.Delete (Path.Combine (localFolderPath, file));
        }
        Directory.Delete (localFolderPath);
        Directory.CreateDirectory (localFolderPath);
      }
    }
  }
}
```

</Tab>

<Tab title="Java">

```java
package com.box;

import com.box.sdk.BoxConfig;
import com.box.sdk.BoxDeveloperEditionAPIConnection;
import com.box.sdk.BoxFile;
import com.box.sdk.BoxFolder;
import com.box.sdk.BoxItem;
import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Playground {

 public static void main(String[] args) throws Exception {
  Path configPath = Paths.get("config.json");
  Path currentDir = Paths.get("").toAbsolutePath();
  try (BufferedReader reader = Files.newBufferedReader(configPath, Charset.forName("UTF-8"))) {
   BoxConfig boxConfig = BoxConfig.readFrom(reader);
   BoxDeveloperEditionAPIConnection client = BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(boxConfig);
   String folderId = "987654321";
   BoxFolder folder = new BoxFolder(client, folderId);
   String folderName = folder.getInfo().getName();
   Path localFolderPath = currentDir.resolve(Paths.get(folderName));
   if (!Files.exists(localFolderPath)) {
    localFolderPath = Files.createDirectory(localFolderPath);
   } else {
    localFolderPath = resetLocalFolder(localFolderPath);
   }

   for (BoxItem.Info itemInfo: folder) {
    if (itemInfo instanceof BoxFile.Info) {
     BoxFile.Info fileInfo = (BoxFile.Info) itemInfo;
     BoxFile file = new BoxFile(client, fileInfo.getID());
     String localFilePath = localFolderPath.resolve(Paths.get(fileInfo.getName())).toAbsolutePath().toString();
     FileOutputStream stream = new FileOutputStream(localFilePath);
     file.download(stream);
     stream.close();
    }
   }

  }
 }

 static Path resetLocalFolder(Path localFolderPath) throws IOException {
  Files.list(localFolderPath).forEach(file -> {
   System.out.println(file.getFileName());
   try {
    Files.delete(file.toAbsolutePath());
   } catch (IOException e) {}
  });
  Files.delete(localFolderPath);
  localFolderPath = Files.createDirectory(localFolderPath);
  return localFolderPath;
 }
}
```

</Tab>

<Tab title="Node">

```js
"use strict";
const box = require("box-node-sdk");
const fs = require("fs");
const util = require("util");
const path = require("path");
let configFile = fs.readFileSync("config.json");
configFile = JSON.parse(configFile);

let session = box.getPreconfiguredInstance(configFile);
let client = session.getAppAuthClient("enterprise");
client._useIterators = true;

let folderId = "987654321";
let folderName;
let localFolderPath;
client.folders
  .get(folderId, null)
  .then(folderInfo => {
    folderName = folderInfo.name;

    return client.folders.getItems(folderId, { limit: 1000 });
  })
  .then(folderItemsIterator => {
    return autoPage(folderItemsIterator);
  })
  .then(folderItems => {
    console.log(folderName);
    console.log(folderItems.length);
    let files = folderItems.filter(item => {
      return item.type === "file";
    });
    console.log(files);
    localFolderPath = createLocalFolder(folderName);
    let downloadPromises = [];
    files.forEach(file => {
      downloadPromises.push(
        client.files.getReadStream(file.id, null).then(stream => {
          let output = fs.createWriteStream(
            path.join(localFolderPath, file.name)
          );
          stream.pipe(output);
        })
      );
    });
    return Promise.all(downloadPromises);
  })
  .then(() => {
    console.log("Downloaded all files...");
    console.log(fs.readdirSync(localFolderPath));
  });

function createLocalFolder(folderName) {
  let localFolderName = path.join(__dirname, folderName);
  try {
    fs.mkdirSync(localFolderName);
  } catch (e) {
    if (e.code === "EEXIST") {
      resetLocalFolder(localFolderName);
      fs.mkdirSync(localFolderName);
    } else {
      throw e;
    }
  }
  return localFolderName;
}

function resetLocalFolder(localFolderName) {
  if (fs.existsSync(localFolderName)) {
    fs.readdirSync(localFolderName).forEach(localFileName => {
      console.log(localFileName);
      fs.unlinkSync(path.join(localFolderName, localFileName));
    });
    fs.rmdirSync(localFolderName);
  }
}

function autoPage(iterator) {
  let collection = [];
  let moveToNextItem = () => {
    return iterator.next().then(item => {
      if (item.value) {
        collection.push(item.value);
      }
      if (item.done !== true) {
        return moveToNextItem();
      } else {
        return collection;
      }
    });
  };
  return moveToNextItem();
}
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

<Message warning>

アプリケーションには、当該ファイルおよびフォルダにアクセスしてダウンロードするための権限が必要であることに注意してください。認証済みユーザーがいずれのファイルおよびフォルダにもアクセスできない場合は、`HTTP 404 Not Found`エラーが発生します。

認証に関するガイドにある[ユーザータイプ](g://authentication/user-types)の詳細をご覧ください。

</Message>
