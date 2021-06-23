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
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/update_v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/delete_v2
previous_page_id: webhooks/v2/create_v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/update_v2.md
---
# Update Webhooks

To update a webhook, you will need to use the [update webhook][2] endpoint,
which requires the webhook ID. To find the ID of the webhook, use the
[list all webhooks][1] endpoint.

<Samples id='put_webhooks_id'>

</Samples>

[1]: guide://webhooks/v2/list_v2
[2]: e://put-webhooks-id