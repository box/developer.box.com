---
rank: 6
related_guides:
  - webhooks/manage/for-file
  - webhooks/handle/payload
  - webhooks/handle/setup-signatures
  - webhooks/handle/verify-signatures
required_guides:
  - webhooks/manage/for-file
  - webhooks/handle/setup-signatures
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/handle
is_index: false
id: webhooks/handle/rotate-signatures
type: guide
total_steps: 5
sibling_id: webhooks/handle
parent_id: webhooks/handle
next_page_id: ''
previous_page_id: webhooks/handle/verify-signatures
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/handle/rotate-signatures.md
---

# Rotate Webhook Signatures

By updating one of your application's webhook signatures keys at a time you can
rotate the keys without running into any conflicts.

When set up, Box will always sends two signatures with every webhook payload.
Your application can trust a payload as long as at least one of its signatures
is valid.

When updating one signature key at a time your application will always receive a
payload with at least one valid signature.

## Rotation steps

These instructions assume that you have already created a primary and secondary
key before and are ready to replace either of them.

By following these steps you can configure your application with two new keys
without any conflicts.

1. Change the primary key in the [developer console][console] of your
   application. Head to the webhooks section of your application configuration
   screen and click the "Reset" button for the primary key.
2. Update your application with the new primary key. Your application might
   still receive notifications with the old primary key but your webhooks should
   still be processed correctly as the secondary key is still valid.
3. Once you are confident that no webhooks with the old primary key are
   in-flight, you can update the secondary key with the same process.

[console]: https://app.box.com/developers/console
