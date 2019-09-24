---
rank: 2
related_endpoints:
  - get_webhooks
related_guides:
  - webhooks/manage/create
required_guides: []
alias_paths: []
id: webhooks/manage/list-all
cId: webhooks
scId: webhooks/manage
isIndex: false
---

# List all webhooks

To fetch all for the authenticated user, use the [List Webhooks][1] API.

<Samples id='get_webhooks' >

</Samples>

<Message>

This API requires the application to have the "Manage
webhooks" scope enabled.

</Message>

This API call will only list the webhooks for the authenticated user, not
for any other users in the enterprise.

[1]: endpoint://get_webhooks
