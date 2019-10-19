---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
cId: webhooks
scId: webhooks/handle
id: webhooks/handle
isIndex: true
---

# Handle Webhooks

Once a webhook has been set up it will call your application at the webhook's
configured `address` every time an event is triggered. It's up to your
application to parse the payload and verify the signatures before performing any
actions on the files or folders.
