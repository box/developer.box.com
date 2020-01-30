---
related_endpoints:
  - delete_metadata_cascade_policies_id
related_guides:
  - metadata/cascades/list
  - metadata/cascades/create
related_resources: 
  - metadata_cascade_policy
---

# Delete a metadata cascade policy

<Message warning>
  Metadata cascade policies are currently in Beta and the syntax might change in
  the future.
</Message>

A metadata cascade policy can be deleted by calling the 
[`DELETE /metadata_cascade_policies/:id`][e_delete] API endpoint with the
`id` of the policy to remove.

<Samples id='delete_metadata_cascade_policies_id' />

<Message>

  To get the `id` of the policy,
  [list all policies][g_list_policies] for the folder.

</Message>

[e_delete]: e://delete_metadata_cascade_policies_id
[g_list_policies]: g://metadata/cascades/list
