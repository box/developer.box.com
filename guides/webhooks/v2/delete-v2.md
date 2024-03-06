---
rank: 4
related_endpoints:
  - delete_webhooks_id
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/list-v2
required_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/list-v2
alias_paths:
  - /webhooks/manage/delete
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/delete-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/signatures-v2
previous_page_id: webhooks/v2/update-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/delete-v2.md
fullyTranslated: true
---
# Webhookの削除

Webhookは、[開発者コンソール][console]またはAPIを使用して削除できます。

## 開発者コンソール

Webhookを削除するには、以下の手順に従います。

1. [開発者コンソール][console]で、\[**Webhook**] タブに移動します。
2. WebhookのIDをクリックして、削除するWebhookを選択します。
3. \[**削除**] ボタンをクリックします。
4. 警告メッセージの下に表示される \[**削除**] をクリックして、操作を確定します。

## API

ファイルやフォルダからWebhookを削除するには、WebhookのIDを指定して[Webhookを削除][delete]エンドポイントを使用する必要があります。この値は、[すべてのWebhookのリストを取得][list]エンドポイントを使用して取得できます。

<Samples id="delete_webhooks_id">

</Samples>

## Automatic webhook deletion

[この][delete]エンドポイントを使用していなくても、Webhookが削除される場合があります。

Webhookは以下の理由で削除される可能性があります。

* Boxアプリケーションを削除すると、そのアプリケーションに関連付けられているすべてのWebhookが自動的に削除されます。
* Webhookに関連付けられているアクティブなアクセストークンをすべて削除すると、そのWebhookが自動的に削除されます。これには、開発者トークンとパスワードが含まれます。
* The last successful notification was delivered 30 days ago to the set URL and the period between the last successful notification delivery and the last user trigger event date exceeds 14 days.

  Let's go through a scenario in which the user downloads a file. This action triggers the webhook to use the set URL to delete a shared link. The diagram illustrates this scenario, showing when the webhook will be deleted.

  ![Delete webhooks](../images/delete_webhooks.png)

  * **User event trigger**: when the user initiated the event, for example downloaded a file.
  * **Notification trigger**: when the notification was sent to the webhook, saying that the file was downloaded.
  * **Last notification delivery**: when the webhook sent a message to a specific URL, for example to delete a shared link.

これらのすべてのケースで、Boxは`WEBHOOK.DELETED`というイベント名を含むWebhookペイロードを通知URLに送信します。ペイロードの本文には以下の追加情報が含まれます。

```json
"additional_info": {
  "reason": "auto_cleanup"
}

```

[delete]: e://delete-webhooks-id

[list]: e://get-webhooks

[console]: https://app.box.com/developers/console
