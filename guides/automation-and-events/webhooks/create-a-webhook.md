---
rank: 2
related_endpoints:
  - post_webhooks
related_guides:
  - automation-and-events/webhooks/list-of-event-types
  - automation-and-events/webhooks/parse-a-webhook
  - automation-and-events/webhooks/delete-a-webhook
required_guides: []
alias_paths: []
id: automation-and-events/webhooks/create-a-webhook
cId: automation-and-events
scId: automation-and-events/webhooks
isIndex: false
---

# Create a webhook

To attach a webhook to an item, call the [Create webhook][1] endpoint with the
type and ID of the item, a URL to send webhook notifications to, and a list of
triggers that will cause the webhook to activate.

<Samples id='post_webhooks' >

</Samples>

The current types supported are `file` and `folder`.

The notification URL must be a valid HTTPS URL that you specify when you create
a webhook. Every time one of the triggers is activated, this URL will be called.

The triggers are a list of strings that specify the events that will cause the
webhook to be triggered. For example, if you want the webhook to be triggered
when a user uploads a file you'd pass in the `FILE.UPLOADED` trigger name.

A list of available triggers is available in the [in this guide][2].

[1]: ../../../reference/automation-and-events/#post-webhooks
[2]: ../../../reference/automation-and-events/#post_webhooks-triggers
