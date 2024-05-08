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
---
# Change Folder Owner

To change the owner of a folder, first invite the user you wish to
transfer the folder to as a collaborator on the folder.

<Samples id='post_collaborations' >

</Samples>

Then, update the created collaboration by changing the role of
that invited user to `owner`.

<Tabs>

<Tab title='cURL'>

```curl
curl -X PUT https://api.box.com/2.0/collaborations/1234 \
    -H "authorization: Bearer <ACCESS_TOKEN>" \
    -H "content-type: application/json" \
    -d '{
      "role": "owner"
    }'
```

</Tab>

<Tab title='.NET'>

```csharp
BoxCollaborationRequest requestParams = new BoxCollaborationRequest()
{
    Id = "12345",
    Role = "owner"
};
BoxCollaboration collab = await client.CollaborationsManager.EditCollaborationAsync(requestParams);
```

</Tab>

<Tab title='Java'>

```java
Collection<BoxCollaboration.Info> pendingCollaborations = BoxCollaboration.getPendingCollaborations(api);
for (BoxCollaboration.Info collabInfo : pendingCollaborations) {
    collabInfo.setRole(BoxCollaboration.Role.OWNER);
    collabInfo.getResource().updateInfo(collabInfo);
}
```

</Tab>

<Tab title='Python'>

```python
from boxsdk.object.collaboration import CollaborationRole, CollaborationStatus

collaboration = client.collaboration(collab_id='12345')
updated_collaboration = collaboration.update_info(CollaborationRole.OWNER)
```

</Tab>

<Tab title='Node'>

```js
client.collaborations.update('12345', {role: client.collaborationRoles.OWNER})
    .then(collaboration => {
        // ...
    });
```

</Tab>

</Tabs>

<Message warning>

Depending on the settings, a user with access to a folder might be able to
invite other users, yet in all cases only the current owner of a folder can
transfer the ownership.

</Message>