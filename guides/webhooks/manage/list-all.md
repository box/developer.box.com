---
rank: 2
related_endpoints:
  - get_webhooks
related_guides:
  - webhooks/manage/for-file
related_resources:
  - webhook
required_guides: []
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/manage
is_index: false
id: webhooks/manage/list-all
type: guide
total_steps: 7
sibling_id: webhooks/manage
parent_id: webhooks/manage
next_page_id: webhooks/manage/for-file
previous_page_id: webhooks/manage
---

# List All Webhooks

To fetch all for the authenticated user, use the [List Webhooks][1] API.

<Samples id='get_webhooks' >

</Samples>

<Message type='warning'>

This API requires the application to have the "Manage
webhooks" scope enabled.

</Message>

This API call will only list the webhooks for the authenticated user, not
for any other users in the enterprise.

[1]: endpoint://get_webhooks
