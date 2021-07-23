---
rank: 4
related_endpoints:
  - delete_webhooks_id
related_guides:
  - webhooks/v2/create_v2
  - webhooks/v2/list_v2
required_guides:
  - webhooks/v2/create_v2
  - webhooks/v2/list_v2
alias_paths:
  - /webhooks/manage/delete
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/delete_v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/signatures_v2
previous_page_id: webhooks/v2/update_v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/delete_v2.md
fullyTranslated: true
---
# Webhookの削除

ファイルやフォルダからWebhookを削除するには、WebhookのIDを指定して[Webhookを削除][delete]エンドポイントを使用する必要があります。WebhookのIDは、[すべてのWebhookのリストを取得][list]エンドポイントを使用して取得できます。

<Samples id="delete_webhooks_id">

</Samples>

## その他の削除の理由

このエンドポイントを使用していなくても、Webhookが削除される場合があります。

Webhookは以下の理由で削除される可能性があります。

1. Boxアプリケーションを削除すると、そのアプリケーションに関連付けられているすべてのWebhookが自動的に削除されます。
2. Webhookに関連付けられているアクティブなアクセストークンをすべて削除すると、そのWebhookが自動的に削除されます。これには、開発者トークンとパスワードリセットが含まれます。
3. 最後に成功した配信から30日が経過し、最後に配信が成功した日から最後のトリガーの日付までの期間が14日を超えた場合、Webhookは自動的に削除されます。

これらのすべてのケースで、Boxは`WEBHOOK.DELETED`イベント名を含むWebhookペイロードを通知URLに送信します。ペイロードの本体には以下の追加情報が含まれます。

```json
"additional_info": {
  "reason": "auto_cleanup"
}
```

[delete]: e://delete-webhooks-id

[list]: e://get-webhooks
