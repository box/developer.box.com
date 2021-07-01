---
rank: 2
related_endpoints:
  - delete_webhooks_id
required_guides:
  - webhooks/v1/create_v1
category_id: webhooks
subcategory_id: webhooks/v1
is_index: false
id: webhooks/v1/delete_v1
type: guide
total_steps: 2
sibling_id: webhooks/v1
parent_id: webhooks/v1
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v1/delete_v1.md
---
# Delete Webhooks

V1 webhooks cannot be fully deleted. Instead, the webhook can be set back to
[Developer Mode][dm] by [support][support]. Developers can also remove the
application from their account by revisiting the [enablement URL][eurl] and
clicking **Remove**.

[dm]: g://webhooks/v1/create_v1/#developer-mode
[support]: https://support.box.com/hc/en-us/requests/new
[eurl]: g://webhooks/v1/create_v1/#enabling-a-webhook