---
rank: 1
related_endpoints:
  - delete_users_id
related_guides:
  - users/deprovision/transfer-folders
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: users/deprovision
is_index: false
id: users/deprovision/user
type: guide
total_steps: 2
sibling_id: users/deprovision
parent_id: users/deprovision
next_page_id: users/deprovision
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/users/deprovision/user.md
---
# ユーザーのプロビジョニング解除

通常のBox Enterpriseの保守の一部として、会社内でアクティブではなくなったユーザーのアカウントを削除します。会社からユーザーを削除する際は、ユーザーアカウントを削除する前に、そのユーザーが所有するすべてのコンテンツを別のアカウントに移動する必要があります。

<Message type="notice">

ユーザーアカウントにまだコンテンツがある場合、ユーザー削除リクエストは失敗します。ユーザーアカウントとアカウント内のすべてのコンテンツを強制的に削除するオプションである`force`パラメーターを、API呼び出しで使用できます。

</Message>

ユーザーアカウントを廃止する際の標準的なベストプラクティスは、そのユーザーが所有するすべてのコンテンツを別の管理者レベルアカウントまたはアプリケーションサービスアカウントに移動することです。移動したら、コンテンツの所有権を別のユーザーに移管するか、必要に応じてそのコンテンツで別のユーザーとコラボレーションをすることができます。

## プロビジョニング解除の例

以下のコードサンプルを使用して、ユーザーのコンテンツを転送し、ユーザーを削除できます。コンテンツが転送される際には、次のパターンに従って転送先ユーザーのルートフォルダに新しいフォルダが作成されます。`employee_email@email.com - employee_name's Files and Folders`

<Tabs>

<Tab title="Node">

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

<Tab title="Java">

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

<Tab title=".NET">

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

<Tab title="CLI">

```shell
box users:transfer-content $transfer_from_user_id $transfer_to_user_id
box users:delete $transfer_from_user_id --yes
```

</Tab>

</Tabs>
