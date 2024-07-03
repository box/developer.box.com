---
rank: 3
related_endpoints:
  - put_webhooks_id
  - get_webhooks
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/list-v2
required_guides:
  - webhooks/v2/list-v2
related_resources:
  - webhook
alias_paths:
  - /webhooks/manage/update
---

# Update Webhooks

You can update a webhook using the [Developer Console][console] or API.

## Developer Console

To update a webhook in the [Developer Console][console], follow the steps below.

1. Go to the **Webhooks** tab in the [Developer Console][console] to display all webhooks.
2. Select the webhook you want to update by clicking on its ID.
3. Click the **Edit webhook** button.
4. Fill in the data you want to update.
5. Click the **Update** button to save your changes.

<Message type='notice'>
  The list of webhooks contains the following fields:
  **ID**, **Address**, **Content**, **Created by**,
  and **Created date**.
</Message>

## API

To update a webhook, use the [update webhook][2] endpoint,
which requires the webhook ID. To find the ID of the webhook, use the
[list all webhooks][1] endpoint.

<Samples id='put_webhooks_id'></Samples>

[1]: g://webhooks/v2/list-v2
[2]: e://put-webhooks-id
[console]: https://app.box.com/developers/console
