---
rank: 5
related_endpoints:
  - put_webhooks_id
related_guides:
  - webhooks/manage/create
  - webhooks/manage/list-all
required_guides:
  - webhooks/manage/create
related_resources: 
  - webhook
alias_paths: []
---

# Update a webhook

To update a webhook you will need to provide the
API with the ID of the webhook to change, and the new `target` file or folder,
as well as an optional new `address` to send webhooks to.

<Samples id='put_webhooks_id'></Samples>

<Message type='notice'>
  # Webhook ID

  To find the ID of the webhook, use the [List all webhooks][1] endpoint.
</Message>

[1]: guide://webhooks/manage/list-all
