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
  - /docs/work-with-webhooks
  - /docs/file-workflow-with-webhooks
id: webhooks/manage
cId: webhooks
scId: webhooks/manage
isIndex: true
---

# Manage Webhooks

The Box API allows for programmatic creation and deletion of webhooks.

## Scopes & Permissions

Please ensure you have the "Manage webhooks" application scope enabled in the
configuration tab of the [developer console][console] for your application or
you will receive a `403` error when trying to make API calls.

[console]: https://app.box.com/developers/console
