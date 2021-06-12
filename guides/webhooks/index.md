---
rank: 280
related_endpoints:
  - get_webhooks
  - get_webhooks_id
  - post_webhooks
  - put_webhooks_id
  - delete_webhooks_id
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /docs/work-with-webhooks
  - /docs/file-workflow-with-webhooks
  - /docs/webhooks
  - /docs/getting-started-with-webhooks-v2
category_id: webhooks
subcategory_id: null
is_index: true
id: webhooks
type: guide
total_steps: 1
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: webhooks/limitations
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/index.md
---
# Webhooks

Webhooks enable you to attach event triggers to Box files and folders.

Event triggers monitor when events happen on items and then notify your
application when they occur by sending a HTTP requests to a URL of your choice.

Because every aspect of webhooks can be controlled through the API your
application can create webhooks on files and folders as they're needed and
remove them when they are no longer needed.