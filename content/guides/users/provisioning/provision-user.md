---
rank: 6
related_endpoints:
  - post_users
related_guides:
  - users/provisioning/deprovision-user
  - users/provisioning/transfer-folders
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/provision-user-accounts
---

# Provision User Accounts

When setting up a brand new Box user account, a common need is to have that new
account be populated with standard folders, collaborations, and group
associations.

Typically there are some common questions that may be asked about the user
account to determine when standard setup may be needed for the account:

* Will the user need access to standard company files or folders immediately?
* Are collaborations associated individually or through groups? If through a
group association, are there any standard groups that the user should be added
to?
* Should the user be assigned any tasks to complete?
* Would any instructional comments on any files be helpful?

<Message type="danger">
  # New User Password Resets and Email Confirmation

  You may experience some errors when creating users and immediately trying to
  take actions with that user through the API. For example, a common error to
  receive is `user_email_confirmation_required` or `password_reset_required`.
  These kinds of errors may block some actions within the API, but you can
  still add the user as a collaborator on folders, add the user to groups, etc.
</Message>

## Sample Overview

In this scenario we'll focus on provisioning a new
[Box Managed User](guide:///authentication/user-types/managed-users), as there
are very different considerations when provisioning Box App User accounts.

We'll start with solving the most easily repeatable aspects of
provisioning a user's account, creating a general folder and file structure
that everyone will have on first login, using groups to control access to
shared files and folders for users.

## Creating a Architecture Skeleton

Our first requirement is to copy general files and folders into each individual
user's root folder on account creation. This problem has been solved within
standard Linux distributions through a special directory called `/etc/skel`,
which we'll emulate with a Box specific solution here. When adding a new user in
Linux, the files and folders within `/etc/skel` are copied to the new user's
home directory.

When creating a
[JWT-based Box application](guide://applications/custom-apps/setup-jwt), a
[Service Account](guide:///authentication/user-types/app-users) is created
within the Box Enterprise. A Service Account is similar in functionality to a
co-admin within a Box Enterprise, and most useful to this use case, can own,
copy, and collaborate other users on files and folders. More importantly, you
don't have to use a Service Account strictly for developing custom applications
for users, and instead, can use a Service Account in more of an automation
capacity.

<Message type="notice">
  # Box Custom Application Requirements

  When creating your JWT-based custom Box application for this recipe, you'll
  need to enable the following scopes:

* Manage users
* Manage groups
* Perform Actions as Users
* Generate User Access Tokens

  See [JWT Application Setup](guide://applications/custom-apps/setup-jwt) for
  more information on creating a JWT-based Box application and the scopes in a
  Box application.
</Message>

We'll start by creating the `etc` and `skel` folders and granting ownership of
the folders to the Service Account.

<Tabs>
  <Tab title='etc_skel.json'>
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
  <Tab title='skel_sub_directories.json'>
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
            "children": [{
                "name": "Big Pharma",
                "children": []
            }]
        }
    ]
    ```
  </Tab>
</Tabs>

The code here can optionally be reused to build any folder structure formatted
as the JSON objects above demonstrate.

<Tabs>
  <Tab title='Node'>
    ```js
    'use strict'
    const fs = require('fs');
    const box = require('box-node-sdk');

    class BoxFolderTreeCreator {
        constructor(boxClient, options) {
            options = options || {};
            if (options.boxClient) {
                throw new Error('Must include a boxClient field.')
            }

            options.boxFolderTreeName = options.boxFolderTreeName || 'tree.json';

            this.boxClient = boxClient;
            this.boxFolderTree = JSON.parse(fs.readFileSync(options.boxFolderTreeName));
            this.createdBoxFolders = [];
        }

        async createFolderTree(branch = null, parentFolderId = "0") {
            this.createdBoxFolders = [];
            if (Array.isArray(this.boxFolderTree)) {
                let folderTasks = [];
                this.boxFolderTree.forEach((folder) => {
                    folderTasks.push(this._createFolder(folder, ""));
                });
                await Promise.all(folderTasks);
                return this.createdBoxFolders;
            } else if (typeof(this.boxFolderTree) === 'object') {
                console.log("Is object");
                await this._createFolders(this.boxFolderTree, "");
                return this.createdBoxFolders;
            } else {
                throw new Error("Incorrectly formatted JSON folder tree.");
            }

        }

        async _createFolders(branch, parentFolderId = '0') {
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
                branch.children.forEach((child) => {
                    console.log("Creating folder...");
                    console.log(child.name);
                    createFolderTasks.push(this._createFolders(child, folder.id))
                })
                return await Promise.all(createFolderTasks);
            }
        }

        static handleFolderConflictError(e) {
            if (e && e.response && e.response.body) {
                let errorBody = e.response.body;
                if (errorBody.status === 409) {
                    if (errorBody.context_info 
                        && errorBody.context_info.conflicts 
                        && errorBody.context_info.conflicts.length > 0) {
                        let conflict = errorBody.context_info.conflicts[0];
                        if (conflict && conflict.id) {
                            return conflict.id;
                        }
                    }
                }
            }
        }
    }

    let configFile = fs.readFileSync('config.json');
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
  <Tab title='Java'>
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
  <Tab title='.NET'>
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

## Populate Content into New User Account

<Tabs>
  <Tab title='Node'>
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
  <Tab title='Java'>
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
  <Tab title='.NET'>
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

## Shared Folders

Finally, to manage access to shared folders, we'll create the folder structures
needed within the service account. Then, groups will map to the needed
permissions based on user types and level of access needed to those folders.
We'll use a Market Department as an example.

<Tabs>
  <Tab title='marketing_folders.json'>
    ```json
    {
        "name": "Marketing Department",
        "parent": {
            "id": "0"
        },
        "children": [
            {
                "name": "Projects",
                "children": []
            },
            {
                "name": "Newsletter",
                "children": [
                    {
                        "name": "Drafts",
                        "children": []
                    }
                ]
            }
        ]
    }
    ```
  </Tab>
</Tabs>

Working from this sample folder structure, we can use the folder tree creator
code we used earlier to create the `etc/skel` structure. That code may be
modified to make your own structure.

Once created, we'll need the IDs of the folders that each group will need to
access. For example, Marketing managers will likely have `editor` access to all
folders within the Marketing Department. On the other hand, Marketing project
managers will likely need `editor` access to only the `Projects` folder. We'll
create two groups and give them these permissions.

<Tabs>
  <Tab title='Node'>
    ```js
    'use strict'
    const fs = require('fs');
    const box = require('box-node-sdk');

    let configFile = fs.readFileSync('config.json');
    configFile = JSON.parse(configFile);

    let session = box.getPreconfiguredInstance(configFile);
    let serviceAccountClient = session.getAppAuthClient("enterprise");

    const marketingDeptFolderID = "45765309069";
    const marketingProjectsFolderID = "45765461670";
    const marketingManagersGroupName = "Marketing Managers";
    const marketingProjectManagersGroupName = "Marketing Project Managers";

    (async () => {
        let marketingManagerGroup;
        try {
            marketingManagerGroup = await 
                serviceAccountClient.groups.create(marketingManagersGroupName,{
                description: "For Marketing department leadership team.",
                invitability_level: "admins_only",
                member_viewability_level: "admins_only"
            });
        } catch (e) {
            marketingManagerGroup = await 
                handleGroupConflictError(e, marketingManagersGroupName, 
                serviceAccountClient);
        }

        console.log(marketingManagerGroup);

        let marketingProjectManagerGroup;
        try {
            marketingProjectManagerGroup = await 
                serviceAccountClient.groups.create(marketingProjectManagersGroupName,{
                description: "All team members who manage Marketing projects.",
                invitability_level: "admins_and_members",
                member_viewability_level: "admins_and_members"
            });
        } catch (e) {
            marketingProjectManagerGroup = await 
                handleGroupConflictError(e, 
                marketingProjectManagersGroupName, 
                serviceAccountClient);
        }

        console.log(marketingProjectManagerGroup);

        let collabMarketingManagers;
        try {
            collabMarketingManagers = await 
                serviceAccountClient.collaborations.createWithGroupID(marketingManagerGroup.id,
                  marketingDeptFolderID, 
                  serviceAccountClient.collaborationRoles.EDITOR);
        } catch (e) {
            collabMarketingManagers = await 
                handleFolderCollaborationConflictError(e, 
                marketingDeptFolderID, marketingManagerGroup.id, 
                serviceAccountClient);
        }
        console.log(collabMarketingManagers);

        let collabMarketingProjectManagers;
        try {
            collabMarketingProjectManagers = await 
                serviceAccountClient.collaborations.createWithGroupID(marketingProjectManagerGroup.id,
                marketingProjectsFolderID,
                serviceAccountClient.collaborationRoles.EDITOR);
        } catch (e) {
            collabMarketingProjectManagers = await 
                handleFolderCollaborationConflictError(e, 
                marketingProjectsFolderID, marketingProjectManagerGroup.id,
                serviceAccountClient);
        }
        console.log(collabMarketingProjectManagers);
    })();

    async function autoPage(iterator, collection = []) {
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

    async function handleGroupConflictError(e, groupName, boxClient) {
        let storeIteratorSetting = boxClient._useIterators;
        if (e && e.response 
            && e.response.body 
            && e.response.body.status === 409) {
            boxClient._useIterators = true;
            let groupsIterator = await boxClient.groups.getAll({
                name: groupName
            });
            let groups = await autoPage(groupsIterator);
            let results = groups.filter((group) => {
                return group.name === groupName;
            });
            if (results.length > 0) {
                boxClient._useIterators = storeIteratorSetting;
                return results[0];
            } else {
                throw new Error("Couldn't create group or find existing group.");
            }
        } else {
            throw e;
        }
    }

    async function handleFolderCollaborationConflictError(e, 
        folderID, groupID, boxClient) {
        let storeIteratorSetting = boxClient._useIterators;
        if (e && e.response 
            && e.response.body 
            && e.response.body.status === 409) {
            boxClient._useIterators = true;
            let collaborationsIterator = await boxClient.folders.getCollaborations(folderID);
            let collaborations = await autoPage(collaborationsIterator);
            let results = collaborations.filter((collaboration) => {
                return collaboration.accessible_by.id === groupID;
            });
            console.log(results);
            if (results.length > 0) {
                boxClient._useIterators = storeIteratorSetting;
                return results[0];
            } else {
                throw new Error("Couldn't create new collaboration 
                    or located existing collaboration.");
            }
        } else {
            throw e;
        }
    }
    ```
  </Tab>
  <Tab title='Java'>
    ```java
    package com.box;

    import java.io.BufferedReader;
    import java.nio.charset.Charset;
    import java.nio.file.Files;
    import java.nio.file.Path;
    import java.nio.file.Paths;
    import java.util.Collection;
    import java.util.Optional;
    import com.box.sdk.BoxAPIException;
    import com.box.sdk.BoxCollaboration;
    import com.box.sdk.BoxConfig;
    import com.box.sdk.BoxDeveloperEditionAPIConnection;
    import com.box.sdk.BoxFolder;
    import com.box.sdk.BoxGroup;
    import com.eclipsesource.json.JsonObject;

    public class BoxPlayground {

        public static void main(String[] args) throws Exception {
            Path configPath = Paths.get("config.json");
            try (BufferedReader reader = 
                Files.newBufferedReader(configPath, Charset.forName("UTF-8"))) {
                String marketingDeptFolderID = "45765309069";
                String marketingProjectsFolderID = "45765461670";
                String marketingManagersGroupName = "Marketing Managers";
                String marketingProjectManagersGroupName = "Marketing Project Managers";

                BoxConfig boxConfig = BoxConfig.readFrom(reader);
                BoxDeveloperEditionAPIConnection serviceAccountClient = BoxDeveloperEditionAPIConnection
                    .getAppEnterpriseConnection(boxConfig);

                BoxGroup.Info marketingManagerGroup;
                try {
                    marketingManagerGroup = BoxGroup.createGroup(serviceAccountClient,
                        marketingManagersGroupName, null,
                        null, "For Marketing department leadership team.", 
                        "admins_only", "admins_only");
                } catch (BoxAPIException e) {
                    JsonObject errorMessage = JsonObject.readFrom(e.getResponse());
                    int status = errorMessage.get("status").asInt();
                    if (status == 409) {
                        marketingManagerGroup =
                            handleGroupConflictError(marketingManagersGroupName,
                            serviceAccountClient);
                    } else {
                        throw e;
                    }
                }
                System.out.println(marketingManagerGroup.getID());

                BoxGroup.Info marketingProjectManagerGroup;
                try {
                    marketingProjectManagerGroup = BoxGroup.createGroup(serviceAccountClient,
                        marketingProjectManagersGroupName, null, null,
                        "All team members who manage Marketing projects.", 
                        "admins_and_members", "admins_and_members");
                } catch (BoxAPIException e) {
                    JsonObject errorMessage = JsonObject.readFrom(e.getResponse());
                    int status = errorMessage.get("status").asInt();
                    if (status == 409) {
                        marketingProjectManagerGroup = handleGroupConflictError(marketingProjectManagersGroupName,
                            serviceAccountClient);
                    } else {
                        throw e;
                    }
                }
                System.out.println(marketingProjectManagerGroup.getID());

                BoxFolder marketDeptFolder = 
                    new BoxFolder(serviceAccountClient, marketingDeptFolderID);
                BoxCollaboration.Info marketingDeptFolderCollaboration;
                try {
                    marketingDeptFolderCollaboration = marketDeptFolder.collaborate(
                        new BoxGroup(serviceAccountClient, marketingManagerGroup.getID()),
                        BoxCollaboration.Role.EDITOR);
                } catch (BoxAPIException e) {
                    System.out.println("Searching for existing collaborator.");
                    JsonObject errorMessage = JsonObject.readFrom(e.getResponse());
                    int status = errorMessage.get("status").asInt();
                    if (status == 409) {
                        marketingDeptFolderCollaboration = handleFolderCollaborationConflict(marketDeptFolder,
                            marketingManagerGroup.getID());
                    } else {
                        throw e;
                    }
                }
                System.out.println(marketingDeptFolderCollaboration.getID());

                BoxFolder marketingProjectsFolder = 
                    new BoxFolder(serviceAccountClient, marketingProjectsFolderID);
                BoxCollaboration.Info marketingProjectsFolderCollaboration;
                try {
                    marketingProjectsFolderCollaboration = marketingProjectsFolder.collaborate(
                        new BoxGroup(serviceAccountClient, marketingProjectManagerGroup.getID()),
                        BoxCollaboration.Role.EDITOR);
                } catch (BoxAPIException e) {
                    System.out.println("Searching for existing collaborator.");
                    JsonObject errorMessage = JsonObject.readFrom(e.getResponse());
                    int status = errorMessage.get("status").asInt();
                    if (status == 409) {
                        marketingProjectsFolderCollaboration = handleFolderCollaborationConflict(marketingProjectsFolder,
                            marketingProjectManagerGroup.getID());
                    } else {
                        throw e;
                    }
                }
                System.out.println(marketingProjectsFolderCollaboration.getID());

            }
        }

        private static BoxCollaboration.Info 
            handleFolderCollaborationConflict(BoxFolder folder, String groupID)
        throws Exception {
            System.out.println("Already collaborated...");
            Collection<BoxCollaboration.Info > collaborations = folder.getCollaborations();
            Optional<BoxCollaboration.Info > results = 
                collaborations.stream().filter(c -> {
                return c.getAccessibleBy().getID().intern() == groupID.intern();
            }).findFirst();
            if (results.isPresent()) {
                return results.get();
            } else {
                throw new Exception("Couldn't create new 
                    collaboration or find existing collaboration.");
            }
        }

        private static BoxGroup.Info handleGroupConflictError(String groupName,
            BoxDeveloperEditionAPIConnection boxClient)
        throws Exception {
            Iterable<BoxGroup.Info > groups = 
                BoxGroup.getAllGroupsByName(boxClient, groupName);
            BoxGroup.Info foundGroup = null;
            for (BoxGroup.Info group: groups) {
                if (group.getName().intern() == groupName) {
                    foundGroup = group;
                    break;
                }
            }
            if (foundGroup != null) {
                return foundGroup;
            } else {
                throw new Exception("Couldn't create group or find existing group.");
            }
        }
    }
    ```
  </Tab>
  <Tab title='.NET'>
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
    using Box.V2.Models.Request;
    using Newtonsoft.Json.Linq;

    namespace BoxPlayground {
        public class Program {
            static void Main(string[] args) {
                ExecuteMainAsync().Wait();
            }

            private static async Task ExecuteMainAsync() {
                using(FileStream fs = 
                    new FileStream("./config.json", FileMode.Open)) {
                    var marketingDeptFolderId = "45765309069";
                    var marketingProjectsFolderId = "45765461670";
                    var marketingManagersGroupName = "Marketing Managers";
                    var marketingProjectManagersGroupName = "Marketing Project Managers";

                    var session = new BoxJWTAuth(BoxConfig.CreateFromJsonFile(fs));
                    var serviceAccountClient = session.AdminClient(session.AdminToken());

                    BoxGroup marketingManagerGroup;
                    try {
                        marketingManagerGroup = await 
                            serviceAccountClient.GroupsManager.CreateAsync(new 
                                BoxGroupRequest {
                            Name = marketingManagersGroupName,
                            InvitabilityLevel = "admins_only",
                            MemberViewabilityLevel = "admins_only"
                        });
                    }
                    catch(BoxException e) {
                        var errorMessage = JObject.Parse(e.Message);
                        if (errorMessage.GetValue("status").ToObject < int > 
                            () == 409) {
                            marketingManagerGroup = await 
                                HandleGroupConflictError(marketingManagersGroupName,
                                serviceAccountClient);
                        }
                        else {
                            throw e;
                        }
                    }
                    System.Console.WriteLine(marketingManagerGroup.Id);

                    BoxGroup marketingProjectsManagerGroup;
                    try {
                        marketingProjectsManagerGroup = await 
                            serviceAccountClient.GroupsManager.CreateAsync(new
                                BoxGroupRequest {
                            Name = marketingProjectManagersGroupName,
                            InvitabilityLevel = "admins_and_members",
                            MemberViewabilityLevel = "admins_and_members"
                        });
                    }
                    catch(BoxException e) {
                        var errorMessage = JObject.Parse(e.Message);
                        if (errorMessage.GetValue("status").ToObject < int > 
                            () == 409) {
                            marketingProjectsManagerGroup = await 
                                HandleGroupConflictError(marketingProjectManagersGroupName,
                                serviceAccountClient);
                        }
                        else {
                            throw e;
                        }
                    }
                    System.Console.WriteLine(marketingProjectsManagerGroup.Id);

                    BoxCollaboration marketingManagerCollab;
                    try {
                        marketingManagerCollab = await serviceAccountClient.CollaborationsManager.AddCollaborationAsync(
                        new BoxCollaborationRequest {
                            AccessibleBy = new BoxCollaborationUserRequest {
                                Id = marketingManagerGroup.Id,
                                Type = BoxType.group
                            },
                            Item = new BoxRequestEntity {
                                Id = marketingDeptFolderId,
                                Type = BoxType.folder
                            },
                            Role = BoxCollaborationRole.Editor.ToString()
                        });
                    }
                    catch(BoxException e) {
                        var errorMessage = JObject.Parse(e.Message);
                        if (errorMessage.GetValue("status").ToObject < int > 
                            () == 409) {
                            marketingManagerCollab = await 
                                HandleFolderCollaborationConflictError(marketingDeptFolderId,
                                marketingManagerGroup.Id, serviceAccountClient);
                        }
                        else {
                            throw e;
                        }
                    }
                    System.Console.WriteLine(marketingManagerCollab.Id);

                    BoxCollaboration marketingProjectsManagerCollab;
                    try {
                        marketingProjectsManagerCollab = await serviceAccountClient.CollaborationsManager.AddCollaborationAsync(
                        new BoxCollaborationRequest {
                            AccessibleBy = new BoxCollaborationUserRequest {
                                Id = marketingProjectsManagerGroup.Id,
                                Type = BoxType.group
                            },
                            Item = new BoxRequestEntity {
                                Id = marketingProjectsFolderId,
                                Type = BoxType.folder
                            },
                            Role = BoxCollaborationRole.Editor.ToString()
                        });
                    }
                    catch(BoxException e) {
                        var errorMessage = JObject.Parse(e.Message);
                        if (errorMessage.GetValue("status").ToObject < int > 
                            () == 409) {
                            marketingProjectsManagerCollab = await 
                                HandleFolderCollaborationConflictError(marketingProjectsFolderId,
                                  marketingProjectsManagerGroup.Id, serviceAccountClient);
                        }
                        else {
                            throw e;
                        }
                    }
                    System.Console.WriteLine(marketingProjectsManagerCollab.Id);
                }
            }

            public async static Task < BoxGroup >
                HandleGroupConflictError(string groupName, BoxClient boxClient) {
                System.Console.WriteLine("Found conflict.");
                var groups = await
                    boxClient.GroupsManager.GetAllGroupsAsync(autoPaginate: true);
                return groups.Entries.Find((group) = >{
                    return group.Name == groupName;
                });
            }
            public async static Task < BoxCollaboration > 
                HandleFolderCollaborationConflictError(string folderId, 
                string groupId, BoxClient boxClient) {
                System.Console.WriteLine("Already a collaborator");
                var collaborations = await boxClient.FoldersManager.GetCollaborationsAsync(folderId);
                var existingCollab = 
                    collaborations.Entries.Find((collaboration) = >{
                    return collaboration.AccessibleBy.Id == groupId;
                });
                if (existingCollab != null) {
                    return existingCollab;
                }
                else {
                    throw new Exception("Couldn't create new collaboration 
                        or find existing collaboration");
                }
            }
        }
    }
    ```
  </Tab>
  <Tab title='CLI'>
    ```shell
    box groups:create "Marketing Managers" --invite=admins_only --view-members=admins_only
    box groups:create "Marketing Project Managers" --invite=admins_and_members --view-members=admins_and_members
    ```
  </Tab>
</Tabs>

Once the groups are created, simply add the user to that group and they will
have the prescribed access to the shared folders created within the service
account.

<Tabs>
  <Tab title='Node'>
    ```js
    'use strict'
    const fs = require('fs');
    const box = require('box-node-sdk');

    let configFile = fs.readFileSync('config.json');
    configFile = JSON.parse(configFile);

    let session = box.getPreconfiguredInstance(configFile);
    let serviceAccountClient = session.getAppAuthClient("enterprise");

    const marketingManagerGroupID = "839790214";
    const marketingManagerUserID = "275111793";

    (async () => {
        let addedUser;
        try {
            addedUser = await 
                serviceAccountClient.groups.addUser(marketingManagerGroupID, 
                marketingManagerUserID, {
                role: serviceAccountClient.groups.userRoles.ADMIN
            });
        } catch (e) {
            addedUser = 
                await handleGroupMembershipConflictError(e, 
                marketingManagerGroupID, marketingManagerUserID, serviceAccountClient);
        }
        console.log(addedUser);
    })();

    async function autoPage(iterator, collection = []) {
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

    async function handleGroupMembershipConflictError(e, 
        groupID, userID, boxClient) {
        let storeIteratorSetting = boxClient._useIterators;
        if (e && e.response 
            && e.response.body 
            && e.response.body.status === 409) {
            boxClient._useIterators = true;
            let groupMembershipsIterator = await boxClient.groups.getMemberships(groupID);
            let groupMemberships = await autoPage(groupMembershipsIterator);
            let results = groupMemberships.filter((groupMembership) => {
                return groupMembership.user.id === userID;
            });
            if (results.length > 0) {
                boxClient._useIterators = storeIteratorSetting;
                return results[0];
            } else {
                throw new Error("Couldn't create group membership 
                    or find existing group membership.");
            }
        } else {
            throw e;
        }
    }
    ```
  </Tab>
  <Tab title='Java'>
    ```java
    package com.box;

    import java.io.BufferedReader;
    import java.nio.charset.Charset;
    import java.nio.file.Files;
    import java.nio.file.Path;
    import java.nio.file.Paths;
    import com.box.sdk.BoxAPIException;
    import com.box.sdk.BoxConfig;
    import com.box.sdk.BoxDeveloperEditionAPIConnection;
    import com.box.sdk.BoxGroup;
    import com.box.sdk.BoxGroupMembership;
    import com.box.sdk.BoxUser;
    import com.box.sdk.BoxGroupMembership.Role;
    import com.eclipsesource.json.JsonObject;

    public class BoxPlayground {

        public static void main(String[] args) throws Exception {
            Path configPath = Paths.get("config.json");
            try (BufferedReader reader = 
                Files.newBufferedReader(configPath, Charset.forName("UTF-8"))) {
                String marketingManagerGroupID = "839982796";
                String marketingManagerUserID = "275111793";

                BoxConfig boxConfig = BoxConfig.readFrom(reader);
                BoxDeveloperEditionAPIConnection serviceAccountClient = BoxDeveloperEditionAPIConnection
                    .getAppEnterpriseConnection(boxConfig);

                BoxGroupMembership.Info marketingManagerMembership = null;
                BoxGroup marketingManagerGroup = 
                    new BoxGroup(serviceAccountClient, marketingManagerGroupID);
                try {
                    marketingManagerMembership = marketingManagerGroup
                        .addMembership(new BoxUser(serviceAccountClient, 
                        marketingManagerUserID), Role.ADMIN);
                } catch (BoxAPIException e) {
                    JsonObject errorMessage = JsonObject.readFrom(e.getResponse());
                    int status = errorMessage.get("status").asInt();
                    if (status == 409) {
                        System.out.println("Found existing membership");
                        Iterable<BoxGroupMembership.Info > memberships = marketingManagerGroup.getAllMemberships();
                        for (BoxGroupMembership.Info membership: memberships) {
                            if (membership.getUser().getID().intern() 
                                == marketingManagerUserID) {
                                marketingManagerMembership = membership;
                                break;
                            }
                        }
                        if (marketingManagerMembership == null) {
                            throw new Exception("Couldn't add user to 
                                group or find existing membership");
                        }
                    } else {
                        throw e;
                    }
                }
                System.out.println(marketingManagerMembership.getID());
                System.out.println(marketingManagerMembership.getRole());
            }
        }
    }
    ```
  </Tab>
  <Tab title='.NET'>
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
    using Box.V2.Models.Request;
    using Newtonsoft.Json.Linq;

    namespace BoxPlayground {
        public class Program {
            static void Main(string[] args) {
                ExecuteMainAsync().Wait();
            }

            private static async Task ExecuteMainAsync() {
                using(FileStream fs = 
                    new FileStream("./config.json", FileMode.Open)) {
                    var marketingManagerGroupId = "839982796";
                    var marketingManagerUserId = "275111793";

                    var session = new BoxJWTAuth(BoxConfig.CreateFromJsonFile(fs));
                    var serviceAccountClient = session.AdminClient(session.AdminToken());
                    BoxGroupMembership marketingManagerMembership;
                    try {
                        marketingManagerMembership = await
                            serviceAccountClient.GroupsManager.AddMemberToGroupAsync(new
                            BoxGroupMembershipRequest {
                            User = new BoxRequestEntity {
                                Id = marketingManagerUserId
                            },
                            Group = new BoxGroupRequest {
                                Id = marketingManagerGroupId
                            },
                            Role = "admin"
                        });
                    }
                    catch(BoxException e) {
                        var errorMessage = JObject.Parse(e.Message);
                        if (errorMessage.GetValue("status").ToObject
                            < int > () == 409) {
                            var groups = await 
                                serviceAccountClient.GroupsManager.GetAllGroupMembershipsForGroupAsync(marketingManagerGroupId,
                                autoPaginate: true);
                            marketingManagerMembership = 
                                groups.Entries.Find((group) = >{
                                return group.User.Id == marketingManagerUserId;
                            });

                            if (marketingManagerMembership == null) {
                                throw new Exception("Couldn't create new 
                                    collaboration or find existing collaboration");
                            }
                        }
                        else {
                            throw e;
                        }
                    }
                    System.Console.WriteLine(marketingManagerMembership.Id);
                }
            }
        }
    }
    ```
  </Tab>
  <Tab title='CLI'>
    ```shell
    box groups:membership:add $user_id $group_id --role=admin
    ```
  </Tab>
</Tabs>
