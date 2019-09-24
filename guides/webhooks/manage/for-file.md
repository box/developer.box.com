---
rank: 3
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/manage/triggers
  - webhooks/handle/payload
  - webhooks/manage/delete
required_guides: []
alias_paths: []
id: webhooks/manage/for-file
cId: webhooks
scId: webhooks/manage
isIndex: false
---

# Create a webhook for a file

To attach a webhook to an file, call the [Create webhook][1] endpoint with the
type of `file`, the ID of the file, a URL to send webhook notifications to, and
a list of triggers that will cause the webhook to activate.

<Samples id='post_webhooks' >

</Samples>

<Message type='warning'>

This API requires the application to have the "Manage
webhooks" scope enabled.

The address for the webhook needs to be a HTTPS URL.

</Message>

## Webhook address

The notification URL specified in the `address` parameter must be a
valid HTTPS URL that you specify when you create a webhook. Every
time one of the triggers is activated, this URL will be called.

The notification URL must use the standard HTTPS port, `443` and should be the
should return an HTTP status in the range of `200` to `299` within 30 seconds
of receiving the webhook payload.

## Webhook triggers

The triggers are a list of strings that specify the events that will cause the
webhook to be triggered. For example, if you want the webhook to be triggered
when a user uploads a file you'd pass in the `FILE.UPLOADED` trigger name.

A list of available triggers is available in the [in this guide][2].

[1]: endpoint://post_webhooks
[2]: guide://webhooks/manage/triggers
