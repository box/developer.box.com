---
rank: 3
related_endpoints:
  - post_collaborations
related_guides:
  - collaborations/share-file
  - collaborations/share-folder
required_guides: []
related_resources:
  - collaboration
  - file
  - folder
category_id: collaborations
subcategory_id: null
is_index: false
id: collaborations/groups
type: guide
total_steps: 4
sibling_id: collaborations
parent_id: collaborations
next_page_id: collaborations/pending
previous_page_id: collaborations/share-folder
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/groups.md
---
# Sharing With Groups

To share a file or folder with a group of users, create a collaboration using
the group ID, the ID of the file or folder, and the role or permissions level
the group should have when accessing the file or folder.

<Samples id='post_collaborations' variant='group' >

</Samples>

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
`group`.

The `item` object specifies what is being shared. It includes a `type` field
which should be set as `file` or `folder`, and an `id` for that file or folder.

[support documentation]: https://community.box.com/t5/Collaborate-By-Inviting-Others/Understanding-Collaborator-Permission-Levels/ta-p/144