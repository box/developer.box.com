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
category_id: collaborations
subcategory_id: null
is_index: false
id: collaborations/share-content
type: guide
total_steps: 3
sibling_id: collaborations
parent_id: collaborations
next_page_id: collaborations/groups
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/share-content.md
---
# Share Content with User

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

<Samples id='post_collaborations' >

</Samples>

## Nested objects

When creating a collaboration there are two nested objects within the request
body: `accessible_by` and `item`.

The `accessible_by` object specifies who the item should be shared with and
includes a group `id` and the `type`. The `type` field should always be set to
`user`.

The `item` object specifies what is being shared. It includes a `type` field
which should be set as `file` and an `id` for that file.

<!-- i18n-enable localize-links -->

[support documentation]: https://support.box.com/hc/en-us/articles/360044196413-Understanding-Collaborator-Permission-Levels
<!-- i18n-disable localize-links -->