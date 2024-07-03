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
---

# List Webhooks for a User

To fetch all webhooks for the authenticated user, use the [list all webhooks][1]
endpoint.

<Samples id='get_webhooks' />

<Message type='warning'>
  This endpoint requires the application to have the **Manage Webhooks** scope
  enabled.
</Message>

This API call will only list the webhooks for the authenticated user, not
for any other users in the enterprise.

[1]: endpoint://get_webhooks