---
related_endpoints:
  - get_metadata_cascade_policies_id
related_guides:
  - metadata/cascades/list
  - metadata/cascades/create
related_resources: 
  - metadata_cascade_policy
---

# Get a metadata cascade policy

<Message warning>
  Metadata cascade policies are currently in Beta and the syntax might change in
  the future.
</Message>

Information for a metadata cascade policy can be retrieved by calling the 
[`GET /metadata_cascade_policies/:id`][e_get] API endpoint with the
`id` of the policy.

<Samples id='get_metadata_cascade_policies_id' />

<Message>

  To get the `id` of the policy,
  [list all policies][g_list_policies] for the folder.

</Message>

[e_get]: e://get_metadata_cascade_policies_id
[g_list_policies]: g://metadata/cascades/list
