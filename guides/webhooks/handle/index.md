---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/handle
is_index: true
id: webhooks/handle
type: guide
total_steps: 5
sibling_id: webhooks
parent_id: webhooks
next_page_id: webhooks/handle/retries
previous_page_id: ''
---

# Handle Webhooks

Once a webhook has been set up it will call your application at the webhook's
configured `address` every time an event is triggered. It's up to your
application to parse the payload and verify the signatures before performing any
actions on the files or folders.
