---
related_endpoints:
  - post_metadata_cascade_policies_id_apply
related_guides:
  - metadata/cascades/list
  - metadata/cascades/force-apply
  - metadata/cascades/delete
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: false
id: metadata/cascades/force-apply
rank: 4
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades/delete
previous_page_id: metadata/cascades/create
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/6-cascades/4-force-apply.md
---
# Force-apply metadata to all items in a folder

<Message warning>

Metadata cascade policies are currently in Beta and the syntax might change in
the future.

</Message>

When a metadata cascade policy already exists on a folder, the metadata instance
can be force-applied to all items in a folder by calling the
[`POST /metadata_cascade_policies/:id/apply`][e_post] API endpoint with the
`id` of the metadata cascade policy.

<Samples id='post_metadata_cascade_policies_id_apply' >

</Samples>

<Message>

To get the `id` of the policy,
[list all policies][g_list_policies] for the folder.

</Message>

<Message warning>

The metadata cascade operation will be started off asynchronously. The API
call will return directly with the `202 Accepted` HTTP status code before
the cascade operation is complete. There is currently no way to check for when
this operation is finished.

</Message>

## Conflict resolution

An additional `conflict_resolution` parameter can be passed to this API to
define how to deal with any existing instances of the template on any of the
items in the folder.

By default, without setting any value for `conflict_resolution` this API will
preserve the existing value on any items. When the value is set to `overwrite`,
it will force-apply the value of the template attached to the cascade policy
over any existing value.

[e_post]: e://post_metadata_cascade_policies_id_apply
[g_list_policies]: g://metadata/cascades/list