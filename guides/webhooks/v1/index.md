---
rank: 2
related_endpoints: []
related_guides: []
required_guides:
  - webhooks
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/v1
is_index: true
id: webhooks/v1
type: guide
total_steps: 2
sibling_id: webhooks
parent_id: webhooks
next_page_id: webhooks/v1/delete-v1
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v1/index.md
---
# V1 Webhooks

Webhooks created using the [Developer Console][console] monitor changes to all
files and folders within a user's account. When creating one of these webhooks
it is not possible specify a specific object to bind the webhook to. To create
a webhook for a specific file or folder, you will need to leverage
[v2 webhooks][v2].

<Message type='warning'>

Webhooks created through this process will not show when listing all
webhooks for a user via API call. All V1 webhooks are visible in the
**Webhooks** tab in the [Developer Console][console].

</Message>

[devconsole]: https://app.box.com/developers/console
[list_webhooks]: g://webhooks/v2/list-v2
[v2]: g://webhooks/v2
[console]: https://app.box.com/developers/console