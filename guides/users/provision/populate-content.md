---
rank: 3
related_endpoints: []
related_guides:
  - users/provision/shared-folders
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: users/provision
is_index: false
id: users/provision/populate-content
type: guide
total_steps: 3
sibling_id: users/provision
parent_id: users/provision
next_page_id: users/provision/shared-folders
previous_page_id: users/provision/architecture
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/users/provision/populate-content.md
fullyTranslated: true
---
# コンテンツの入力

サービスアカウントの`etc/skel`構造を使用してアーキテクチャファイルを定義すると、次のスクリプトを使用して`skel`の下にあるすべての項目を新しいユーザーのルートディレクトリに直接コピーできます。

<Tabs>

<Tab title="Node">

```js
'use strict'
const box = require('box-node-sdk');
const fs = require('fs');
const skelFolderId = "45117847998";
const userID = "275111793";

let configFile = fs.readFileSync('config.json');
configFile = JSON.parse(configFile);

let session = box.getPreconfiguredInstance(configFile);
let serviceAccountClient = session.getAppAuthClient("enterprise");

(async () => {
    // The userID can be obtained when creating the user via the
    // API or by using the search users feature.
    // The skel folder ID shouldn't ever change unless it's deleted and recreated.
    await copySkelDirectoryForUser(userID, skelFolderId, serviceAccountClient);
})();

async function copySkelDirectoryForUser(userID, skelFolderId, boxClient) {
    // Enable iterators in case there are more than the
    // default limit of items under the skel directory.
    boxClient._useIterators = true;

    // You collaborate the user temporarily on the skel directory
    // to copy all items into that user's root folder.
    let collabSkelFolder;
    try {
        collabSkelFolder = await boxClient.collaborations.createWithUserID(userID,
            skelFolderId, boxClient.collaborationRoles.EDITOR);
    } catch (e) {
        // Handle that the collaboration on the skel folder could already exist.
        if (e.response.body.code === 'user_already_collaborator') {
            let collaborationsIterator = await boxClient.folders.getCollaborations(skelFolderId);
            let collaborations = await autoPage(collaborationsIterator);
            let results = collaborations.filter((collaboration) => {
                return collaboration.accessible_by.id === userID;
            });
            console.log(results);
            if (results.length > 0) {
                collabSkelFolder = results[0];
            } else {
                throw new Error("Couldn't create new collaboration
                    or located existing collaboration.");
            }
        } else {
            throw e;
        }
    }
    console.log(collabSkelFolder);

    // Switching context to make calls on behalf of the user.
    // To access this user's root folder, the boxClient needs
    // to be scoped to make API calls as the user.
    boxClient.asUser(userID);

    // Iterate over all the items under the skel directory.
    let skelFolderItemsIterator = await boxClient.folders.getItems(skelFolderId);
    let skelFolderCollection = await autoPage(skelFolderItemsIterator);
    console.log(skelFolderCollection);

    // Now, as the user, copy the folders and files into
    // the user's root folder -- folder ID '0'.
    let copyTasks = [];
    skelFolderCollection.forEach((item) => {
        if (item.type === 'folder') {
            copyTasks.push(boxClient.folders.copy(item.id, '0')
                .catch((e) => {
                    let itemId = handleConflictError(e);
                    if (itemId) {
                        console.log(itemId);
                        return boxClient.folders.get(itemId);
                    } else {
                        throw e;
                    }
                }));
        } else if (item.type === 'file') {
            copyTasks.push(boxClient.files.copy(item.id, '0')
                .catch((e) => {
                    let itemId = handleConflictError(e);
                    if (itemId) {
                        console.log(itemId);
                        return boxClient.files.get(itemId);
                    } else {
                        throw e;
                    }
                }));
        } else {
            console.log("Unable to resolve item type to known types...");
        }
    });

    let copiedItems = await Promise.all(copyTasks);
    console.log(copiedItems);

    // Switching the boxClient context back to that of the service account.
    boxClient.asSelf();

    /*
        Since the service account owns the skel directory,
        boxClient needs to make API calls as the service account
        to remove the temporary collaboration on the skel directory.
    */
    try {
        await boxClient.collaborations.delete(collabSkelFolder.id);
        console.log("Removed collaboration on skel...");
    } catch (e) {
        console.log("Couldn't remove skel collaboration...");
        console.log(e.respose.body);
    }

    function handleConflictError(e) {
        if (e && e.response && e.response.body) {
            let errorBody = e.response.body;
            if (errorBody.status === 409) {
                if (errorBody.context_info
                    && errorBody.context_info.conflicts
                    && errorBody.context_info.conflicts) {
                    let conflict = errorBody.context_info.conflicts;
                    if (conflict && conflict.id) {
                        return conflict.id;
                    }
                }
            }
        }
    }

    function autoPage(iterator, collection = []) {
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
import java.util.Collection;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import com.box.sdk.BoxAPIException;
import com.box.sdk.BoxCollaboration;
import com.box.sdk.BoxConfig;
import com.box.sdk.BoxDeveloperEditionAPIConnection;
import com.box.sdk.BoxFile;
import com.box.sdk.BoxFolder;
import com.box.sdk.BoxItem;
import com.box.sdk.BoxUser;
import com.eclipsesource.json.JsonObject;

public class BoxPlayground {

    public static void main(String[] args) throws Exception {
        Path configPath = Paths.get("config.json");
        try (BufferedReader reader = Files.newBufferedReader(configPath,
            Charset.forName("UTF-8"))) {
            String skelFolderId = "45117847998";
            String userId = "275111793";

            BoxConfig boxConfig = BoxConfig.readFrom(reader);
            BoxDeveloperEditionAPIConnection serviceAccountClient = BoxDeveloperEditionAPIConnection
                .getAppEnterpriseConnection(boxConfig);
            BoxDeveloperEditionAPIConnection userClient = BoxDeveloperEditionAPIConnection.getAppUserConnection(userId,
                boxConfig);

            BoxFolder skelFolder = new BoxFolder(serviceAccountClient, skelFolderId);
            BoxCollaboration.Info skelFolderCollaboration;
            try {
                skelFolderCollaboration = skelFolder.collaborate(new
                    BoxUser(serviceAccountClient, userId),
                    BoxCollaboration.Role.EDITOR);
            } catch (BoxAPIException e) {
                System.out.println("Searching for existing collaborator.");
                JsonObject errorMessage = JsonObject.readFrom(e.getResponse());
                String code = errorMessage.get("code").asString().intern();
                if (code == "user_already_collaborator") {
                    System.out.println("Already collaborated...");
                    Collection<BoxCollaboration.Info > collaborations = skelFolder.getCollaborations();
                    System.out.println(collaborations.size());
                    Optional<BoxCollaboration.Info > results =
                        collaborations.stream().filter(c -> {
                        return c.getAccessibleBy().getID().intern() == userId;
                    }).findFirst();
                    if (results.isPresent()) {
                        skelFolderCollaboration = results.get();
                    } else {
                        throw new Exception("Couldn't create new collaboration
                            or find existing collaboration.");
                    }
                } else {
                    throw e;
                }
            }
            System.out.println(skelFolderCollaboration.getID());

            BoxFolder collabedSkelFolder = new BoxFolder(userClient, skelFolderId);
            ArrayList<BoxItem.Info > copiedItems = new ArrayList<>();
            for (BoxItem.Info itemInfo: collabedSkelFolder) {
                if (itemInfo instanceof BoxFile.Info) {
                    BoxFile.Info fileInfo = (BoxFile.Info) itemInfo;
                    BoxFile copyFile = new BoxFile(userClient, fileInfo.getID());
                    BoxFile.Info copiedFile;
                    try {
                        copiedFile = copyFile.copy(BoxFolder.getRootFolder(userClient));
                    } catch (BoxAPIException e) {
                        System.out.println(e.getMessage());
                        String conflictId = getIdFromConflict(e.getMessage());
                        System.out.println(conflictId);
                        copiedFile = new BoxFile(userClient, conflictId).getInfo();
                    }
                    copiedItems.add((BoxItem.Info) copiedFile);
                } else if (itemInfo instanceof BoxFolder.Info) {
                    BoxFolder.Info folderInfo = (BoxFolder.Info) itemInfo;
                    BoxFolder copyFolder = new BoxFolder(userClient, folderInfo.getID());
                    BoxFolder.Info copiedFolder;
                    try {
                        copiedFolder = copyFolder.copy(BoxFolder.getRootFolder(userClient));
                    } catch (BoxAPIException e) {
                        System.out.println(e.getMessage());
                        String conflictId = getIdFromConflict(e.getMessage());
                        System.out.println(conflictId);
                        copiedFolder = new BoxFolder(userClient, conflictId).getInfo();
                    }
                    copiedItems.add((BoxItem.Info) copiedFolder);
                }
            }

            System.out.println("Copied " + copiedItems.size() +
                " items from the skel directory.");

            BoxCollaboration tempSkelCollab = new BoxCollaboration(serviceAccountClient,
                skelFolderCollaboration.getID());
            tempSkelCollab.delete();
            System.out.println("Removed temporary skel directory collaboration.");
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
            using(FileStream fs =
                new FileStream("./config.json", FileMode.Open)) {
                var skelFolderId = "45117847998";
                var userId = "275111793";

                var session = new BoxJWTAuth(BoxConfig.CreateFromJsonFile(fs));
                var client = session.AdminClient(session.AdminToken());
                var userClient = session.UserClient(session.UserToken(userId),
                    userId);
                BoxCollaboration collabSkelFolder;
                try {
                    collabSkelFolder = await client.CollaborationsManager.AddCollaborationAsync(
                    new BoxCollaborationRequest {
                        AccessibleBy = new BoxCollaborationUserRequest {
                            Id = userId
                        },
                        Item = new BoxRequestEntity {
                            Id = skelFolderId,
                            Type = BoxType.folder
                        },
                        Role = BoxCollaborationRole.Editor.ToString()
                    });
                }
                catch(BoxException e) {
                    var errorMessage = JObject.Parse(e.Message);
                    if (errorMessage.GetValue("code").ToString()
                        == "user_already_collaborator") {
                        System.Console.WriteLine("Already a collaborator");
                        var collaborations = await client.FoldersManager.GetCollaborationsAsync(skelFolderId);
                        var existingCollab = collaborations.Entries.Find((collaboration)
                            = >{
                            return collaboration.AccessibleBy.Id == userId;
                        });
                        if (existingCollab != null) {
                            collabSkelFolder = existingCollab;
                        }
                        else {
                            throw new Exception("Couldn't create new collaboration
                                or find existing collaboration");
                        }
                    }
                    else {
                        throw e;
                    }
                }

                var items = await
                    userClient.FoldersManager.GetFolderItemsAsync(skelFolderId,
                    limit: 1000, autoPaginate: true);
                var copyTasks = new List < Task < BoxItem >> ();
                items.Entries.ForEach((item) = >{
                    if (item.Type == BoxType.folder.ToString()) {
                        copyTasks.Add(userClient.FoldersManager.CopyAsync(new
                            BoxFolderRequest {
                            Id = item.Id,
                            Parent = new BoxRequestEntity {
                                Id = "0"
                            }
                        }).ContinueWith((folder) = >{
                            try {
                                return (BoxItem) folder.Result;
                            }
                            catch(Exception e) {
                                var errorMessage = JObject.Parse(e.InnerException.Message);
                                if (errorMessage.GetValue("status").ToObject
                                    < int > () == 409) {
                                    System.Console.WriteLine("Conflict found");
                                    System.Console.WriteLine(errorMessage.SelectToken("context_info.conflicts.id"));
                                    return (BoxItem) userClient.FoldersManager.GetInformationAsync(errorMessage.SelectToken("context_info.conflicts.id").ToString()).Result;
                                }
                                else {
                                    throw e;
                                }
                            }

                        }));
                    }
                    else if (item.Type == BoxType.file.ToString()) {
                        copyTasks.Add(userClient.FilesManager.CopyAsync(new
                            BoxFileRequest {
                            Id = item.Id,
                            Parent = new BoxRequestEntity {
                                Id = "0"
                            }
                        }).ContinueWith((file) = >{
                            try {
                                return (BoxItem) file.Result;
                            }
                            catch(Exception e) {
                                var errorMessage = JObject.Parse(e.InnerException.Message);
                                if (errorMessage.GetValue("status").ToObject
                                    < int > () == 409) {
                                    System.Console.WriteLine("Conflict found");
                                    System.Console.WriteLine(errorMessage.SelectToken("context_info.conflicts.id"));
                                    return (BoxItem) userClient.FilesManager.GetInformationAsync(errorMessage.SelectToken("context_info.conflicts.id").ToString()).Result;
                                }
                                else {
                                    throw e;
                                }
                            }
                        }));
                    }
                    else {
                        System.Console.WriteLine("Couldn't process this item...");
                    }
                });
                var copiedItems = await Task.WhenAll(copyTasks);
                System.Console.WriteLine($ "Copied {copiedItems.Count()}
                    items from the skel directory.");

                if (await client.CollaborationsManager.RemoveCollaborationAsync(collabSkelFolder.Id)){
                    System.Console.WriteLine("Removed temporary skel
                        directory collaboration...");
                    System.Console.WriteLine("Complete!");
                }
                else {
                    System.Console.WriteLine("Something went wrong when
                        removing skel directory collaboration.");
                }
            }
        }
    }
}
```

</Tab>

</Tabs>
