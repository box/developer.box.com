---
rank: 10
related_endpoints:
- post_collaborations
related_guides:
- collaborations/share-file
- collaborations/users
required_guides: []
related_resources:
  - collaborations
  - folders
---

# Share Folder With User

To share a folder with a user, create a collaboration using the user ID or
email address, the ID of the folder, and the role or permissions level the
user should have when accessing the folder. The collaboration roles are
`editor`, `viewer`, `previewer`, `uploader`, `previewer uploader`,
`viewer uploader`, `co-owner`, or `owner`. For a full description of each
role, please refer to our [support documentation].

When creating a collaboration, there are two nested objects within the request
body: `accessible_by` and `item`. The `accessible_by` object specifies who the
item should be shared with; this includes a user `id` or email address and the
`type` field should be set to `"user"`. The `item` object specifies what is
being shared. It includes a `type` field which should be set as `"folder"` with
the `id` of the folder.

<Samples id='post_collaborations' />

[support documentation]: https://community.box.com/t5/Collaborate-By-Inviting-Others/Understanding-Collaborator-Permission-Levels/ta-p/144
