---
related_endpoints:
  - get_metadata_cascade_policies
related_guides:
  - metadata/cascades/get
  - metadata/cascades/create
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/5-cascades
is_index: false
id: metadata/cascades/list
rank: 1
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades/get
previous_page_id: ''
---

# List metadata cascade policies

Metadata cascade policies can be listed for a folder by calling the
[`GET /metadata_cascade_policies`][get_policies] API endpoint with a `folder_id`.

<Samples id="get_metadata_cascade_policies" >

</Samples>

## Pagination

This API uses [marker-based pagination][pagination] and can return a
`next_marker` value in the response body to indicate that more templates might
be available.

[get_policies]: e://get_metadata_cascade_policies
[pagination]: g://api-calls/pagination/marker-based
