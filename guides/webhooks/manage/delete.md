---
rank: 6
related_endpoints:
  - delete_webhooks_id
related_guides:
  - webhooks/manage/for-file
  - webhooks/manage/list-all
required_guides:
  - webhooks/manage/for-file
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/manage
is_index: false
id: webhooks/manage/delete
type: guide
total_steps: 7
sibling_id: webhooks/manage
parent_id: webhooks/manage
next_page_id: webhooks/manage/manually
previous_page_id: webhooks/manage/update
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/manage/delete.md
---
# Webhookの削除

Box上のファイルやフォルダからWebhookを削除するには、削除するWebhookのIDをAPIに渡す必要があります。

<Samples id="delete_webhooks_id">

</Samples>

<Message type="notice">

# Webhook ID

WebhookのIDを調べるには、[すべてのWebhookのリストを取得][1]エンドポイントを使用します。

</Message>

## その他の削除の理由

APIを使用していなくても、Webhookが削除される場合があります。

Webhookは以下の理由で削除される可能性があります。

1. Boxアプリケーションを削除すると、アプリケーションに関連付けられているすべてのWebhookが削除されます。
2. Webhookに関連付けられているすべてのアクセストークンを削除した場合。
3. システムで決められている時間内にWebhookを配信できなかった場合、BoxによってそのWebhookが自動的に削除されます。

これらのすべてのケースで、Boxは`WEBHOOK.DELETED`イベント名を含むWebhookペイロードを通知URLに送信します。この場合、ペイロードの本体には以下の追加情報が含まれます。

```json
"additional_info": {
  "reason": "auto_cleanup"
}
```

[1]: guide://webhooks/manage/list-all
