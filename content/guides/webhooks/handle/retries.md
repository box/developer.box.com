---
rank: 3
related_guides:
  - webhooks/manage/create
  - webhooks/handle/payload
required_guides: []
alias_paths: []
---

# Webhook retries

Delivery of a webhook payload has failed when Box does not receive a
response with a HTTP status code in the `200` to `299` range within 30 seconds
of sending the payload.

When delivery of a webhook fails Box will resend it up to 10 times. The
initial retry will take place 5 minutes after the failure and from there an
exponential back-off strategy will be used to avoid overloading the destination
server.

By using exponential back- off, Box will wait an increasingly longer time for
every retry.

<Message type='notice'>
  Box will retry webhook deliveries up to 10 times. This number could be subject
  to change.
</Message>
