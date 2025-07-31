---
rank: 2
related_endpoints:
  - delete_users_id
related_guides:
  - users/deprovision/transfer-folders
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/users/deprovision/user
category_id: users
subcategory_id: users/deprovision
is_index: true
id: users/deprovision
type: guide
total_steps: 1
sibling_id: users
parent_id: users
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/users/deprovision/index.md
---
# Deprovision Users

Part of regular Box enterprise maintenance is deactivating (recommended) or removing accounts for users that are no longer active in your enterprise.

## Deactivating users — recommended

User deactivation is the recommended practice as it removes the user's access but keeps all of their files, folders, and audit history.

<!--alex ignore -->

Deactivated users no longer count toward login activity or sharing metrics, but their content and history remain intact.
<!--alex enable -->

Deactivation is safe, reversible, and preserves everything your legal, IT, and content teams care about. You can always delete user's account later.

Tips for automation:

* Use Box Events or Admin Insights to detect inactive users.
* Automatically deactivate users after 90+ days of inactivity.
* Set up reactivation workflows in your internal tools.

To deactivate a user, use:

```bash
PATCH /users/

{user_id}
with body

{ "status": "inactive" }
```

## Deleting users

<Message type='danger'>

Deleting a user permanently deletes all of their data unless you transfer them to another account. It is recommended to make users inactive instead.

</Message>

The standard best practice when [deleting a user account][delete] is to move all
content owned by that user into another admin level account or into the
application service account. Once moved, you can transfer ownership of the
content to a different user or collaborate a different user on the content if
needed.

## Deprovisioning Example

Use the following code samples to transfer a user's content and then delete the
user. When content is being transferred, a new folder is created in the
destination user's root folder following this pattern:
`employee_email@email.com - employee_name's Files and Folders`

<Tabs>

<Tab title='Node'>

```js
'use strict'
const box = require('box-node-sdk');
const fs = require('fs');

let configFile = fs.readFileSync('config.json');
configFile = JSON.parse(configFile);

let session = box.getPreconfiguredInstance(configFile);
let serviceAccountClient = session.getAppAuthClient('enterprise');

const transferUserID = '3278487052';
(async () => {
    let serviceAccount = await serviceAccountClient.users.get('me');
    let transferredFolder = await serviceAccountClient.enterprise.transferUserContent(transferUserID,serviceAccount.id);
    console.log(transferredFolder);
    await serviceAccountClient.users.delete(transferUserID, null);
    console.log('Completed');
})();
```

</Tab>

<Tab title='Java'>

```java
Path configPath = Paths.get("config.json");
try (BufferedReader reader = Files.newBufferedReader(configPath,Charset.forName("UTF-8"))){
    String transferUserId = "3277722534";

    BoxConfig boxConfig = BoxConfig.readFrom(reader);
    BoxDeveloperEditionAPIConnection serviceAccountClient = BoxDeveloperEditionAPIConnection
      .getAppEnterpriseConnection(boxConfig);

    BoxUser destinationUser = new BoxUser(serviceAccountClient,
        BoxUser.getCurrentUser(serviceAccountClient).getID());
    try {
        destinationUser.moveFolderToUser(transferUserId);
    } catch (BoxAPIException e) {}

    BoxUser removeUser = new BoxUser(serviceAccountClient, transferUserId);
    removeUser.delete(false, false);
}
```

</Tab>

<Tab title='.NET'>

```csharp
using(FileStream fs = new FileStream("./config.json", FileMode.Open)) {
    var config = BoxConfig.CreateFromJsonFile(fs);
    var session = new BoxJWTAuth(config);
    var serviceAccountClient = session.AdminClient(session.AdminToken());

    var transferUserId = "3276247601";

    var serviceAccount = await serviceAccountClient.UsersManager.GetCurrentUserInformationAsync();
    var moveAction = await serviceAccountClient.UsersManager.MoveUserFolderAsync(transferUserId,serviceAccount.Id);

    System.Console.WriteLine(moveAction.Name);
    await serviceAccountClient.UsersManager.DeleteEnterpriseUserAsync(transferUserId,false,false);
}
```

</Tab>

<Tab title='CLI'>

```shell
box users:transfer-content $transfer_from_user_id $transfer_to_user_id
box users:delete $transfer_from_user_id --yes
```

</Tab>

</Tabs>

[delete]: g://users/delete-user