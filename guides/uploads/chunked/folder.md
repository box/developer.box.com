---
rank: 100
related_endpoints:
  - options_files_content
  - post_files_content
related_guides:
  - uploads/check
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/upload-all-files-from-a-folder
category_id: uploads
subcategory_id: uploads/chunked
is_index: false
id: uploads/chunked/folder
type: guide
total_steps: 5
sibling_id: uploads/chunked
parent_id: uploads/chunked
next_page_id: ''
previous_page_id: uploads/chunked/commit-session
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/uploads/chunked/folder.md
---
# フォルダ内のすべてのファイルのアップロード

アプリケーションによっては、1つのフォルダのすべてのファイルをアップロードできる場合もあります。SDKとCLIを使用してこの処理を実行するには、フォルダツリー内を移動してすべてのファイルを探し、そのファイルをアップロードする必要があります。

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
using System.Security.Cryptography;
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

namespace BoxPlayground {
  public class Program {
    static void Main (string[] args) {
      ExecuteMainAsync ().Wait ();
    }
    const long CHUNKED_UPLOAD_MINIMUM = 200000;
    private static async Task ExecuteMainAsync () {
      var directoryName = "dotnetUploadFolder";
      var parentFolderId = "0";
      var files = Directory.EnumerateFiles (directoryName);
      using (FileStream fs = new FileStream ("./config.json", FileMode.Open)) {
        var session = new BoxJWTAuth (BoxConfig.CreateFromJsonFile (fs));
        var client = session.AdminClient (session.AdminToken ());
        var folderId = "";
        try {
          var createdFolder = await client.FoldersManager.CreateAsync (
            new BoxFolderRequest {
              Parent = new BoxRequestEntity {
                  Id = parentFolderId
                },
                Name = directoryName
            });
          folderId = createdFolder.Id;
        } catch (BoxConflictException<BoxFolder> e) {
          folderId = e.ConflictingItems.FirstOrDefault ().Id;
          System.Console.WriteLine ($"Found existing folder: {folderId}");
        }
        var fileUploadTasks = new List<Task<BoxFile>> ();
        foreach (var file in files) {
          fileUploadTasks.Add (Task.Run (
            async () => {
              System.Console.WriteLine (file);
              var fileName = file.Split (Path.DirectorySeparatorChar)
                .Where ((item) => { return item != directoryName; }).FirstOrDefault ();
              System.Console.WriteLine (fileName);
              var fileInfo = new FileInfo (file);
              var preflightRequest = new BoxPreflightCheckRequest {
                Name = fileName,
                Size = fileInfo.Length,
                Parent = new BoxRequestEntity {
                Id = folderId
                }
              };
              using (FileStream toUpload = new FileStream (file, FileMode.Open)) {
                try {
                  var preflightCheck = await client.FilesManager.PreflightCheck (preflightRequest);
                  if (toUpload.Length < CHUNKED_UPLOAD_MINIMUM) {
                    using (SHA1 sha1 = SHA1.Create ()) {
                      var fileUploadRequest = new BoxFileRequest {
                      Name = fileName,
                      Parent = new BoxRequestEntity {
                      Id = folderId
                      }
                      };
                      var fileSHA = sha1.ComputeHash (toUpload);
                      System.Console.WriteLine (fileSHA);
                      return await client.FilesManager.UploadAsync (fileRequest: fileUploadRequest, stream: toUpload, contentMD5: fileSHA);
                    }
                  } else {
                    return await client.FilesManager.UploadUsingSessionAsync (stream: toUpload, fileName: fileName, folderId: folderId);
                  }
                } catch (BoxPreflightCheckConflictException<BoxFile> e) {
                  if (toUpload.Length < CHUNKED_UPLOAD_MINIMUM) {
                    using (SHA1 sha1 = SHA1.Create ()) {
                      var fileSHA = sha1.ComputeHash (toUpload);
                      return await client.FilesManager.UploadNewVersionAsync (fileName: e.ConflictingItem.Name, fileId: e.ConflictingItem.Id, stream: toUpload, contentMD5: fileSHA);
                    }
                  } else {
                    await client.FilesManager.UploadFileVersionUsingSessionAsync (fileId: e.ConflictingItem.Id, stream: toUpload);
                    return await client.FilesManager.GetInformationAsync (e.ConflictingItem.Id);
                  }
                }
              }

            }));
        }

        var uploaded = await Task.WhenAll (fileUploadTasks);
        foreach (var file in uploaded) {
          System.Console.WriteLine (file.Id);
        }
      }
    }
  }
}
```

</Tab>
<Tab title='Java'>

```java
public class UploadAllFilesInFolder {

 public static final int CHUNKED_UPLOAD_MINIMUM = 20000;

 public static void main(String[] args) throws Exception {
  String directoryName = "javaUploadFolder";
  Path configPath = Paths.get("config.json");
  Path uploadFolderPath = Paths.get(directoryName);
  try (BufferedReader reader = Files.newBufferedReader(configPath, Charset.forName("UTF-8"))) {
   BoxConfig boxConfig = BoxConfig.readFrom(reader);
   BoxDeveloperEditionAPIConnection client = BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(boxConfig);
   String parentFolderId = "0";
   String createdFolderId;
   BoxFolder createFolderInParentFolder = new BoxFolder(client, parentFolderId);
   try {
    BoxFolder.Info createdFolder = createFolderInParentFolder.createFolder(directoryName);
    System.out.println("Creating folder...");
    System.out.println(createdFolder.getID());
    createdFolderId = createdFolder.getID();
   } catch (BoxAPIException e) {
    String existingFolderId = getIdFromConflict(e.getMessage());
    System.out.println("Found existing folder...");
    System.out.println(existingFolderId);
    createdFolderId = existingFolderId;
   }
   ArrayList < BoxFile.Info > uploadedFiles = new ArrayList < > ();
   try (DirectoryStream < Path > directory = Files.newDirectoryStream(uploadFolderPath)) {

    for (Path path: directory) {
     String fileName = path.getFileName().toString();
     System.out.println(path);
     System.out.println(fileName);
     byte[] fileBytes = Files.readAllBytes(path);
     int fileSize = fileBytes.length;
     boolean useChunkedUpload = (fileSize > CHUNKED_UPLOAD_MINIMUM) ? true : false;
     uploadedFiles.add(uploadEachFile(client, createdFolderId, fileName, fileSize, fileBytes, useChunkedUpload));
    }
   }
   for (BoxFile.Info file: uploadedFiles) {
    System.out.println(file.getID());
   }
  }
 }

 private static BoxFile.Info uploadEachFile(BoxDeveloperEditionAPIConnection client, String folderId, String fileName,
  int fileSize, byte[] fileBytes, boolean useChunkedUpload)
 throws IOException, InterruptedException, NoSuchAlgorithmException {
  try {
   BoxFolder folder = new BoxFolder(client, folderId);
   folder.canUpload(fileName, fileSize);
   if (useChunkedUpload) {
    System.out.println("Using chunked upload...");
    return folder.uploadLargeFile(new ByteArrayInputStream(fileBytes), fileName, fileSize);
   } else {
    System.out.println("Using normal upload...");
    MessageDigest md = MessageDigest.getInstance("SHA-1");
    try (Formatter formatter = new Formatter()) {
     for (byte b: md.digest(fileBytes)) {
      formatter.format("%02x", b);
     }
     String fileSHA = formatter.toString();
     FileUploadParams fileUpload = new FileUploadParams();
     fileUpload.setContent(new ByteArrayInputStream(fileBytes));
     fileUpload.setSHA1(fileSHA);
     fileUpload.setName(fileName);
     return folder.uploadFile(fileUpload);
    }
   }
  } catch (BoxAPIException e) {
   if (e.getResponseCode() == 409) {
    // You can use the ID returned from the conflict error to continue
    String conflictId = getIdFromConflict(e.getResponse());
    System.out.println("Found existing file: " + conflictId);
    BoxFile uploadFileVersion = new BoxFile(client, conflictId);
    if (useChunkedUpload) {
     System.out.println("Using chunked upload...");
     return uploadFileVersion.uploadLargeFile(new ByteArrayInputStream(fileBytes), fileSize);
    } else {
     System.out.println("Using normal upload...");
     MessageDigest md = MessageDigest.getInstance("SHA-1");
     try (Formatter formatter = new Formatter()) {
      for (byte b: md.digest(fileBytes)) {
       formatter.format("%02x", b);
      }
      String fileSHA = formatter.toString();
      uploadFileVersion.uploadVersion(new ByteArrayInputStream(fileBytes), fileSHA);
      return uploadFileVersion.getInfo();
     }
    }
   } else {
    throw e;
   }
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
}
```

</Tab>

<Tab title="Node">

```js
"use strict";
const fs = require("fs");
const path = require("path");
const box = require("box-node-sdk");
const crypto = require("crypto");

let configFile = fs.readFileSync("config.json");
configFile = JSON.parse(configFile);

let session = box.getPreconfiguredInstance(configFile);
let client = session.getAppAuthClient("enterprise");

const CHUNKED_UPLOAD_MINIMUM = 200000;

const parentFolderId = "0";
const directoryName = "uploadFolder";
let files = [];

fs.readdirSync(directoryName).forEach(file => {
  files.push({
    fileName: file,
    content: fs.readFileSync(path.join(__dirname, directoryName, file))
  });
});

client.folders
  .create(parentFolderId, directoryName)
  .then(createdFolder => {
    console.log(createdFolder);
    return processFiles(client, files, createdFolder.id);
  })
  .catch(err => {
    let conflictId = handleFolderConflictError(err);
    if (conflictId) {
      console.log(`Found an existing folder: ${conflictId}`);
      return processFiles(client, files, conflictId);
    } else {
      throw err;
    }
  })
  .then(results => {
    console.log(results);
  })
  .catch(err => {
    console.log(err);
  });

function processFiles(client, files, folderId) {
  let fileUploadPromises = [];
  files.forEach(file => {
    fileUploadPromises.push(
      uploadAFile(client, folderId, file.fileName, file.content)
    );
  });

  return Promise.all(fileUploadPromises);
}

function uploadAFile(client, folderId, fileName, toUploadFile) {
  return client.files
    .preflightUploadFile(folderId, {
      name: fileName,
      size: toUploadFile.length
    })
    .then(preflightResults => {
      console.log(preflightResults);
      if (toUploadFile.length < CHUNKED_UPLOAD_MINIMUM) {
        console.log("Using normal upload...");
        let fileSha = crypto
          .createHash("sha1")
          .update(toUploadFile)
          .digest("hex");
        client.setCustomHeader("content-md5", fileSha);
        return client.files.uploadFile(folderId, fileName, toUploadFile);
      } else {
        console.log("Using chunked upload...");
        client.setCustomHeader("content-md5", null);
        return client.files
          .getChunkedUploader(
            folderId,
            toUploadFile.length,
            fileName,
            toUploadFile
          )
          .then(uploader => {
            return new Promise((resolve, reject) => {
              uploader.on("error", err => {
                reject(err);
              });

              uploader.on("chunkUploaded", part => {
                console.log("Part uploaded...");
                console.log(part);
              });
              uploader.on("uploadComplete", file => {
                console.log("File upload complete!");
                resolve(file);
              });
              console.log("Starting chunked uploader...");
              uploader.start();
            });
          });
      }
    })
    .catch(err => {
      let conflictId = handleFileConflictError(err);
      if (conflictId) {
        console.log(`Found existing file with that name: ${conflictId}`);
        return uploadANewFileVersion(client, conflictId, toUploadFile);
      } else {
        throw err;
      }
    });
}

function uploadANewFileVersion(client, conflictId, toUploadFile) {
  if (toUploadFile.length < CHUNKED_UPLOAD_MINIMUM) {
    console.log("Using normal upload...");
    let fileSha = crypto
      .createHash("sha1")
      .update(toUploadFile)
      .digest("hex");
    client.setCustomHeader("content-md5", fileSha);
    // You can optionally rename a folder while uploading a new version.
    // let newFileName = "ubuntu-no-gui.iso";
    // let options = {
    //     name: newFileName
    // }
    // return client.files.uploadNewFileVersion(conflictId, options, toUploadFile);
    return client.files.uploadNewFileVersion(conflictId, toUploadFile);
  } else {
    console.log("Using chunked upload...");
    // You can optionally rename a folder while uploading a new version.
    // let newFileName = "ubuntu-no-gui.iso";
    // let options = {
    //     name: newFileName
    // }
    // return client.files.getNewVersionChunkedUploader(conflictId, toUploadFile.length, toUploadFile, options)
    client.setCustomHeader("content-md5", null);
    return client.files
      .getNewVersionChunkedUploader(
        conflictId,
        toUploadFile.length,
        toUploadFile,
        null
      )
      .then(uploader => {
        return new Promise((resolve, reject) => {
          uploader.on("error", err => {
            reject(err);
          });

          uploader.on("chunkUploaded", part => {
            console.log("Part uploaded...");
            console.log(part);
          });
          uploader.on("uploadComplete", file => {
            console.log("File upload complete!");
            resolve(file);
          });
          console.log("Starting chunked uploader...");
          uploader.start();
        });
      });
  }
}

function handleFileConflictError(e) {
  if (e && e.response && e.response.body) {
    let errorBody = e.response.body;
    if (errorBody.status === 409) {
      if (
        errorBody.context_info &&
        errorBody.context_info.conflicts &&
        errorBody.context_info.conflicts
      ) {
        let conflict = errorBody.context_info.conflicts;
        if (conflict && conflict.id) {
          return conflict.id;
        }
      }
    }
  }
}

function handleFolderConflictError(e) {
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
```

</Tab>

<Tab title="CLI">

```sh
box folders:upload ./folder_name_to_upload --parent-folder=$folder_id
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

## 解説

上のスクリプトは、Box SDKとCLIを使用してフォルダ全体をアップロードします。このSDKスクリプトでは、最初にローカルフォルダに対応するディレクトリをBox内に作成します。

新しいディレクトリが作成されたら、ディレクトリ内のすべてのファイルをアップロードし、利用可能なすべてのBox機能を使用してアップロードを確実に成功させます。

アップロードの前に、[事前チェック][preflight]APIを使用してファイルの競合とサイズ制限をチェックします。名前の競合が見つかった場合、代わりにそのファイルの新しいバージョンをアップロードします。

ファイルの`SHA`ハッシュを使用して、アップロード時に`content-md5`ヘッダーを追加することで、ファイルのデータが失われたり改変されたりすることなくBoxに正常にアップロードされるようにします。

最後に、ファイルサイズが20MBを超える場合、[分割アップロード][chunked]機能を使用して、大きいファイルのアップロードの信頼性を高めます。

[preflight]: g://uploads/check

[chunked]: g://uploads/chunked
