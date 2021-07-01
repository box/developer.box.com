---
rank: 3
related_endpoints:
  - put_webhooks_id
  - get_webhooks
related_guides:
  - webhooks/v2/create_v2
  - webhooks/v2/list_v2
required_guides:
  - webhooks/v2/list_v2
related_resources: 
  - webhook
alias_paths:
  - /webhooks/manage/update
---

# Update Webhooks

To update a webhook, you will need to use the [update webhook][2] endpoint,
which requires the webhook ID. To find the ID of the webhook, use the
[list all webhooks][1] endpoint.

<Samples id='put_webhooks_id'></Samples>

[1]: guide://webhooks/v2/list_v2
[2]: e://put-webhooks-id
