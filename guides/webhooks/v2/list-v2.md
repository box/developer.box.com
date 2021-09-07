---
rank: 1
related_endpoints:
  - get_webhooks
related_guides:
  - webhooks/v2/create-v2
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /webhooks/manage/list-all
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/list-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/create-v2
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/list-v2.md
---
# List Webhooks for a User

To fetch all webhooks for the authenticated user, use the [list all webhooks][1]
endpoint.

<Samples id='get_webhooks' >

</Samples>

<Message type='warning'>

This endpoint requires the application to have the "Manage Webhooks" scope
enabled.

</Message>

This API call will only list the webhooks for the authenticated user, not
for any other users in the enterprise.

[1]: endpoint://get_webhooks