---
related_endpoints:
  - get_metadata_cascade_policies_id
related_guides:
  - metadata/cascades/list
  - metadata/cascades/create
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: false
id: metadata/cascades/get
rank: 2
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades/create
previous_page_id: metadata/cascades/list
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/6-cascades/2-get.md
---
# Get a metadata cascade policy

<Message warning>

Metadata cascade policies are currently in Beta and the syntax might change in
the future.

</Message>

Information for a metadata cascade policy can be retrieved by calling the
[`GET /metadata_cascade_policies/:id`][e_get] API endpoint with the
`id` of the policy.

<Samples id='get_metadata_cascade_policies_id' >

</Samples>

<Message>

To get the `id` of the policy,
[list all policies][g_list_policies] for the folder.

</Message>

[e_get]: e://get_metadata_cascade_policies_id
[g_list_policies]: g://metadata/cascades/list