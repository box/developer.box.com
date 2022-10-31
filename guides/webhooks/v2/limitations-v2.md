---
rank: 6
related_endpoints: []
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/update-v2
required_guides: []
alias_paths:
  - /webhooks/limitations
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/limitations-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: ''
previous_page_id: webhooks/v2/signatures-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/limitations-v2.md
fullyTranslated: true
---
# 制限

## Webhookは1項目につき1つ

There's a limit of one webhook for each item (file or folder), each application and each authenticated user.

Once a webhook is attached to an item, no second webhook can be attached, even if the second webhook would respond to a different trigger event.

Example: a webhook is set up by `John Doe` to watch `FILE.UPLOADED` events in a folder with the name `Junk`, for an application named `CleanupApp`. At that point, no second webhook can be added to the `Junk` folder by the `CleanupApp` by `John Doe`, even if it is to trigger for an `FILE.DOWNLOADED` event.

別のイベントをリッスンするには、既存のWebhookを[更新][update]するか、新しいアプリケーションを作成します。

## 1000 webhooks limit

There is a limit of 1000 webhooks for each application and each user.

1人のユーザーにさらにWebhookを作成するには、別のアプリケーションを作成するか、フォルダツリーでより上位に適用するよう[既存のWebhookを更新][update]します。

## 通知URLに関する制約事項

The notification URL or `address` for a webhook must be a valid HTTPS URL that resolves to a valid IP address. It needs to have a certificate signed by a reputable certificate authority. Box does not support self-signed SSL certificates.

サーバーのIPアドレスは、インターネットからパブリックにアクセスできる必要があり、`(*.)box.com`アドレスにすることはできません。URLで使用されるポートは、標準HTTPSポート (`443`) でなければなりません。通知は他のポートには配信されません。

## Webhookはルートフォルダに追加不可

V2 webhooks cannot be created on the root folder, which is the folder with ID `0`. Instead, you will need to use a [v1 webhook][v1].

<Message type="notice">

項目の権限が原因でアクションを実行できない場合、試行されたアクションについての通知は送信されません。

</Message>

## Webhookの削除理由

Webhookは以下の理由で削除される可能性があります。

1. Deleting a Box application automatically deletes all webhooks associated with it.
2. Deleting all active Access Tokens associated with a webhook automatically deletes the webhook. This includes Developer Tokens and password.
3. A webhook is automatically deleted if the last successful delivery was 30 days ago and the period between the last successful delivery and the last trigger date is more than 14 days.

In all of these cases Box sends a webhook payload with the `WEBHOOK.DELETED` event name to the notification URL. The body of the payload includes the following additional information.

```json
"additional_info": {
  "reason": "auto_cleanup"
}
```

[v1]: g://webhooks/v1

[update]: g://webhooks/v2/update-v2
