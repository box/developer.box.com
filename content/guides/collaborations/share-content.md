---
rank: 1
related_endpoints:
- post_collaborations
related_guides:
- collaborations/groups
required_guides: []
related_resources:
  - collaboration
  - file
---

# Share Content With User

To share content with a user, create a collaboration using
the user ID or email
address, the ID of the content, and the role or
permissions level the user
should have when accessing the content.
The collaboration roles
are `editor`,`viewer`, `previewer`, `uploader`,
`previewer uploader`,
`viewer uploader`,`co-owner`,
or `owner`. For a full description of each role,
please refer to our [support documentation].

<Samples id='post_collaborations' />

<Message>
  The collaboration roles are `editor`, `viewer`, `previewer`, `uploader`,
  `previewer uploader`, `viewer uploader`, `co-owner`, or `owner`. For a full
  description of each role, please refer to our [support documentation].
</Message>

## Nested objects

When creating a collaboration there are two nested objects within the request
body: `accessible_by` and `item`.

The `accessible_by` object specifies who the item should be shared with and
includes a group `id` and the `type`. The `type` field should always be set to
`user`.

The `item` object specifies what is being shared. It includes a `type` field
which should be set as `file` and an `id` for that file.

[support documentation]: https://community.box.com/t5/Collaborate-By-Inviting-Others/Understanding-Collaborator-Permission-Levels/ta-p/144
