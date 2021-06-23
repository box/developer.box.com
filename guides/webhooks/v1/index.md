---
rank: 7
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
total_steps: 1
sibling_id: webhooks
parent_id: webhooks
next_page_id: ''
previous_page_id: webhooks/v1/create_v1
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v1/index.md
---
# V1 Webhooks

Additionally to creating webhooks via the Box APIs it is possible to
create  webhooks via the developer console manually. This process is
often referred to as Webhooks V1.

## Restrictions

Webhooks created using the Developer Console will monitor changes to all
files and folders within a user's account. When creating one of these webhooks
it is not possible specify a specific object to bind the webhook to. To create
a webhook for a specific file or folder, you will need to leverage
[v2 webhooks][v2].

<Message type='warning'>

Webhooks created through this process will not show when listing
listing all webhooks for a user via API call.

</Message>

[devconsole]: https://app.box.com/developers/console
[list_webhooks]: g://webhooks/v2/list_v2
[v2]: g://webhooks/v2