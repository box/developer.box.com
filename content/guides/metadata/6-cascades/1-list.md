---
related_endpoints:
  - get_metadata_cascade_policies
related_guides:
  - metadata/cascades/get
  - metadata/cascades/create
related_resources: 
  - metadata_cascade_policy
---

# List metadata cascade policies

<Message warning>
  Metadata cascade policies are currently in Beta and the syntax might change in
  the future.
</Message>

Metadata cascade policies can be listed for a folder by calling the 
[`GET /metadata_cascade_policies`][get_policies] API endpoint with a `folder_id`.

<Samples id="get_metadata_cascade_policies" />

## Pagination

This API uses [marker-based pagination][pagination] and can return a
`next_marker` value in the response body to indicate that more templates might
be available.

[get_policies]: e://get_metadata_cascade_policies
[pagination]: g://api-calls/pagination/marker-based
