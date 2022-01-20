---
rank: 7
related_endpoints:
  - put_users_id_folder_id
related_guides: []
required_guides:
  - folders/single/create
related_resources:
  - folder
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/change-owner
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/create-lock
previous_page_id: folders/single/delete
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/change-owner.md
fullyTranslated: true
---
# フォルダ所有者の変更

フォルダの所有者を変更するには、まず、フォルダの移行先となるユーザーをフォルダのコラボレータとして招待します。

<Samples id="post_collaborations">

</Samples>

次に、招待したユーザーのロールを`owner`に変更して、作成したコラボレーションを更新します。

<Tabs>

<Tab title="cURL">

```curl
curl -X PUT https://api.box.com/2.0/collaborations/1234 \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -H "content-type: application/json" \
     -d '{
       "role": "owner"
     }'
```

</Tab>

<Tab title=".NET">

```dotnet
BoxCollaborationRequest requestParams = new BoxCollaborationRequest()
{
    Id = "12345",
    Role = "owner"
};
BoxCollaboration collab = await client.CollaborationsManager.EditCollaborationAsync(requestParams);
```

</Tab>

<Tab title="Java">

```java
Collection<BoxCollaboration.Info> pendingCollaborations = BoxCollaboration.getPendingCollaborations(api);
for (BoxCollaboration.Info collabInfo : pendingCollaborations) {
    collabInfo.setRole(BoxCollaboration.Role.OWNER);
    collabInfo.getResource().updateInfo(collabInfo);
}
```

</Tab>

<Tab title="Python">

```py
from boxsdk.object.collaboration import CollaborationRole, CollaborationStatus

collaboration = client.collaboration(collab_id='12345')
updated_collaboration = collaboration.update_info(CollaborationRole.OWNER)
```

</Tab>

<Tab title="Node">

```js
client.collaborations.update('12345', {role: client.collaborationRoles.OWNER})
  .then(collaboration => {
    // ...
  });
```

</Tab>

</Tabs>

<Message warning>

設定によっては、フォルダへのアクセス権限を持つユーザーが他のユーザーを招待できることもありますが、いかなる場合でも、所有権を移管できるのは、フォルダの現在の所有者のみです。

</Message>
