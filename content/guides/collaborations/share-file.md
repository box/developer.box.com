---
rank: 5
related_endpoints:
- post_collaborations
related_guides:
- collaborations/share-folder
- collaborations/users
required_guides: []
related_resources:
  - collaborations
  - files
---

# Share File With User

To share a file with a user, create a collaboration using the user ID or email
address, the ID of the file, and the role or permissions level the user should
have when accessing the file. The collaboration roles are `editor`, `viewer`,
`previewer`, `uploader`, `previewer uploader`, `viewer uploader`, `co-owner`,
or `owner`. For a full description of each role, please refer to our
[support documentation].

When creating a collaboration, there are two nested objects within the request
body: `accessible_by` and `item`. The `accessible_by` object specifies who the
item should be shared with; this includes a user `id` or email address and the
`type` field should be set to `"user"`. The `item` object specifies what is
being shared. It includes a `type` field which should be set as `"file"` with
the `id` of the file.

<Samples id='post_collaborations' />

[support documentation]: https://community.box.com/t5/Collaborate-By-Inviting-Others/Understanding-Collaborator-Permission-Levels/ta-p/144
