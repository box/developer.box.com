---
rank: 5
related_endpoints:
  - put_webhooks_id
related_guides:
  - webhooks/manage/for-file
  - webhooks/manage/list-all
required_guides:
  - webhooks/manage/for-file
related_resources:
  - webhook
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/manage
is_index: false
id: webhooks/manage/update
type: guide
total_steps: 7
sibling_id: webhooks/manage
parent_id: webhooks/manage
next_page_id: webhooks/manage/delete
previous_page_id: webhooks/manage/for-folder
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/manage/update.md
---
# Webhookの更新

Webhookを更新するには、変更するWebhookのID、新しい`target`ファイルまたはフォルダ、およびWebhookの送信先の新しい`address`(省略可)をAPIに渡す必要があります。

<Samples id="put_webhooks_id">

</Samples>

<Message type="notice">

# Webhook ID

WebhookのIDを調べるには、[すべてのWebhookのリストを取得][1]エンドポイントを使用します。

</Message>

[1]: guide://webhooks/manage/list-all
