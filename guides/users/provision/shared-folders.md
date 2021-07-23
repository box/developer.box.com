---
rank: 4
related_endpoints: []
related_pages: []
related_guides:
  - users/provision/architecture
  - users/deprovision/transfer-folders
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: users/provision
is_index: false
id: users/provision/shared-folders
type: guide
total_steps: 3
sibling_id: users/provision
parent_id: users/provision
next_page_id: ''
previous_page_id: users/provision/populate-content
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/users/provision/shared-folders.md
fullyTranslated: true
---
# 共有フォルダの設定

共有フォルダへのアクセスを管理する最後の手順として、必要なフォルダ構造をサービスアカウント内に作成します。次に、これらのフォルダに必要なユーザーの種類とアクセスレベルに基づいて、グループに必要な権限をマップします。ここでは、マーケティング部門を例に挙げて説明します。

<Tabs>

<Tab title="marketing_folders.json">

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

このサンプルフォルダ構造を基にし、以前に使用したフォルダツリー作成コードを使用して`etc/skel`構造を作成できます。このコードは、実際の構造に応じて変更できます。

この構造が作成されると、各グループでアクセスする必要があるフォルダのIDが必要になります。たとえば、マーケティングマネージャであれば、マーケティング部門内のすべてのフォルダに対する`editor`アクセス権限が必要になるでしょう。一方、マーケティングプロジェクトマネージャが必要なのは、`Projects`フォルダへの`editor`アクセスだけと考えられます。このため、2つのグループを作成して、それぞれに適切な権限を付与します。

<Tabs>

<Tab title="Node">

```js
"use strict";
const fs = require("fs");
const box = require("box-node-sdk");

let configFile = fs.readFileSync("config.json");
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
    marketingManagerGroup = await serviceAccountClient.groups.create(
      marketingManagersGroupName,
      {
        description: "For Marketing department leadership team.",
        invitability_level: "admins_only",
        member_viewability_level: "admins_only"
      }
    );
  } catch (e) {
    marketingManagerGroup = await handleGroupConflictError(
      e,
      marketingManagersGroupName,
      serviceAccountClient
    );
  }

  console.log(marketingManagerGroup);

  let marketingProjectManagerGroup;
  try {
    marketingProjectManagerGroup = await serviceAccountClient.groups.create(
      marketingProjectManagersGroupName,
      {
        description: "All team members who manage Marketing projects.",
        invitability_level: "admins_and_members",
        member_viewability_level: "admins_and_members"
      }
    );
  } catch (e) {
    marketingProjectManagerGroup = await handleGroupConflictError(
      e,
      marketingProjectManagersGroupName,
      serviceAccountClient
    );
  }

  console.log(marketingProjectManagerGroup);

  let collabMarketingManagers;
  try {
    collabMarketingManagers = await serviceAccountClient.collaborations.createWithGroupID(
      marketingManagerGroup.id,
      marketingDeptFolderID,
      serviceAccountClient.collaborationRoles.EDITOR
    );
  } catch (e) {
    collabMarketingManagers = await handleFolderCollaborationConflictError(
      e,
      marketingDeptFolderID,
      marketingManagerGroup.id,
      serviceAccountClient
    );
  }
  console.log(collabMarketingManagers);

  let collabMarketingProjectManagers;
  try {
    collabMarketingProjectManagers = await serviceAccountClient.collaborations.createWithGroupID(
      marketingProjectManagerGroup.id,
      marketingProjectsFolderID,
      serviceAccountClient.collaborationRoles.EDITOR
    );
  } catch (e) {
    collabMarketingProjectManagers = await handleFolderCollaborationConflictError(
      e,
      marketingProjectsFolderID,
      marketingProjectManagerGroup.id,
      serviceAccountClient
    );
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
  };
  return moveToNextItem();
}

async function handleGroupConflictError(e, groupName, boxClient) {
  let storeIteratorSetting = boxClient._useIterators;
  if (e && e.response && e.response.body && e.response.body.status === 409) {
    boxClient._useIterators = true;
    let groupsIterator = await boxClient.groups.getAll({
      name: groupName
    });
    let groups = await autoPage(groupsIterator);
    let results = groups.filter(group => {
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

async function handleFolderCollaborationConflictError(
  e,
  folderID,
  groupID,
  boxClient
) {
  let storeIteratorSetting = boxClient._useIterators;
  if (e && e.response && e.response.body && e.response.body.status === 409) {
    boxClient._useIterators = true;
    let collaborationsIterator = await boxClient.folders.getCollaborations(
      folderID
    );
    let collaborations = await autoPage(collaborationsIterator);
    let results = collaborations.filter(collaboration => {
      return collaboration.accessible_by.id === groupID;
    });
    console.log(results);
    if (results.length > 0) {
      boxClient._useIterators = storeIteratorSetting;
      return results[0];
    } else {
      throw new Error(
        "Couldn't create new collaboration or located existing collaboration."
      );
    }
  } else {
    throw e;
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

<Tab title=".NET">

<!-- markdownlint-disable line-length -->

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
                throw new Exception("Couldn't create new collaboration or find existing collaboration");
            }
        }
    }
}
```

<!-- markdownlint-enable line-length -->

</Tab>

<Tab title="CLI">

```shell
box groups:create "Marketing Managers" --invite=admins_only --view-members=admins_only
box groups:create "Marketing Project Managers" --invite=admins_and_members --view-members=admins_and_members
```

</Tab>

</Tabs>

グループを作成したら、ユーザーをそのグループに追加すると、そのユーザーにサービスアカウント内に作成された共有フォルダへの所定のアクセス権が付与されます。

<Tabs>

<Tab title="Node">

<!-- markdownlint-disable line-length -->

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
            throw new Error("Couldn't create group membership or find existing group membership.");
        }
    } else {
        throw e;
    }
}
```

<!-- markdownlint-disable line-length -->

</Tab>

<Tab title="Java">

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

<Tab title="CLI">

```shell
box groups:membership:add $user_id $group_id --role=admin
```

</Tab>

</Tabs>
