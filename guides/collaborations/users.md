---
rank: 1
related_endpoints:
  - post_collaborations
related_guides:
  - collaborations/share-file
  - collaborations/share-folder
required_guides: []
related_resources:
  - collaborations
  - files
  - folders
cId: collaborations
scId: null
id: collaborations/users
isIndex: false
---

# Sharing With Users

To share a file or folder with a group of users, create a collaboration using
the group ID, the ID of the file or folder, and the role or permissions level
the group should have when accessing the file or folder. The collaboration
roles are `editor`, `viewer`, `previewer`, `uploader`, `previewer uploader`,
`viewer uploader`, `co-owner`, or `owner`. For a full description of each
role, please refer to our [support documentation].

When creating a collaboration, there are two nested objects within the request
body: `accessible_by` and `item`. The `accessible_by` object specifies who the
item should be shared with; this includes a group `id` and the `type`
field should be set to `"group"`. The `item` object specifies what is being
shared. It includes a `type` field which should be set as `"file"` or
`"folder"` with the `id` of the file or folder.

<Samples id='post_collaborations' >

</Samples>

[support documentation]: https://community.box.com/t5/Collaborate-By-Inviting-Others/Understanding-Collaborator-Permission-Levels/ta-p/144
