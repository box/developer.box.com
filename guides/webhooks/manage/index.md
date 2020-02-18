---
rank: 1
related_endpoints:
  - post_webhooks
  - delete_webhooks_id
related_resources:
  - webhook
related_guides: []
required_guides: []
alias_paths:
  - /docs/file-workflow-with-webhooks
category_id: webhooks
subcategory_id: webhooks/manage
is_index: true
id: webhooks/manage
type: guide
total_steps: 7
sibling_id: webhooks
parent_id: webhooks
next_page_id: webhooks/manage/list-all
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/webhooks/manage/index.md
---

# Manage Webhooks

The Box API allows for programmatic creation and deletion of webhooks.

<Message type='warning'>

# Scopes & Permissions

Please ensure you have the "Manage webhooks" application scope enabled in the
configuration tab of the [developer console][console] for your application or
you will receive a `403` error when trying to make API calls.

</Message>

[console]: https://app.box.com/developers/console
