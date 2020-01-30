---
related_endpoints:
  - post_metadata_cascade_policies
related_guides:
  - metadata/cascades/list
  - metadata/cascades/force-apply
  - metadata/cascades/delete
related_resources: 
  - metadata_cascade_policy
---

# Create a metadata cascade policy

<Message warning>
  Metadata cascade policies are currently in Beta and the syntax might change in
  the future.
</Message>

When a metadata template has been applied to a folder, a metadata cascade policy
can be created by calling the  [`POST /metadata_cascade_policies`][e_post] API
endpoint with the `folder_id` of the folder to apply the policy to, and the
`scope` and `templateKey` of metadata template to.

<Samples id='post_metadata_cascade_policies' />

<Message>

  To get the `scope` and `templateKey` for a template, either
  [list all metadata templates][g_list_templates], or
  [list all instances on an file][g_list_instances_item].

</Message>

<Message warning>
  A cascade policy can only be created if a metadata instance has already been
  applied to the folder with the given `scope` and `templateKey`.
</Message>

[e_post]: e://post_metadata_cascade_policies
[g_list_templates]: g://metadata/templates/list
[g_list_instances_item]: g://metadata/instances/list
