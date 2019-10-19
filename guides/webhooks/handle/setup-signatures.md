---
rank: 4
related_guides:
  - webhooks/manage/create
  - webhooks/handle/payload
  - webhooks/handle/rotate-signatures
  - webhooks/handle/verify-signatures
required_guides: []
alias_paths: []
cId: webhooks
scId: webhooks/handle
id: webhooks/handle/setup-signatures
isIndex: false
---

# Setup Webhook Signatures

You can configure webhooks to use signatures to protect your application from
malicious attacks where you might receive data that did not originate at Box.

## Webhook signatures

When you configure a webhook to use a signature, Box generates
a cryptographic digest of the notification's body and attaches it the header of
the webhook payload.

When your application receives the payload it is advised to [verify][sigver] the
signatures by calculating the same digest and comparing it to the one received.
If the digests are not identical then the payload should not be trusted.

## Man-in-the-middle attacks

Webhook signatures help ensure that a webhook payload was sent by Box and has
not been tampered with in transit. Signatures greatly reduce the likelihood of a
successful man-in-the-middle or replay attack.

<Message type='notice'>

An extra level of protection can be achieved by frequently changing the
signature keys. To enable a smooth switch between the old and new keys we
supports two simultaneous signature keys to be configured for
[signature rotation][sigrot].

</Message>

## Enable signatures

In order to attach signatures to an application's notifications you must first
generate signature keys for your application. Each application can have two
signature keys configured in order to support [signature rotation][sigrot].

To configure your application's keys, head over to the [developer
console][console] and select the application you want to configure.

In the "Webhooks" section of your application, find the buttons labeled
"Generate primary key" and "Generate secondary key" to generate the keys.

Once either of these keys has been configured, copy the key values as you will
need these to [verify the webhook payloads][sigver]. Every webhook will now
include a [`BOX-SIGNATURE-PRIMARY` and a `BOX-SIGNATURE-SECONDARY` header]
[payload].

[payload]: guide://webhooks/handle/payload
[sigrot]: guide://webhooks/handle/rotate-signatures
[sigver]: guide://webhooks/handle/verify-signatures
[console]: https://app.box.com/developers/console
