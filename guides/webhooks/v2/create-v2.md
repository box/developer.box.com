---
rank: 2
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/triggers
  - webhooks/v2
  - webhooks/v2/delete-v2
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /webhooks/manage/for-file
  - /webhooks/manage/for-folder
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/create-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/update-v2
previous_page_id: webhooks/v2/list-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/create-v2.md
fullyTranslated: true
---
# Webhookの作成

V2 webhooks can monitor specific files or folders. They can be created in the [Developer Console][console] and with API.

## Developer console

<Message type="warning">

V2 webhooks can be created only when the scope **Manage Webhooks** is selected and the application is authorized. See more about [application scopes][1] and [authorization][2].

</Message>

To create a webhook follow the steps below.

1. Navigate to your application in the [Developer Console][console].
2. \[**Webhook**] タブを選択します。
3. Click the **Create webhook** button.
4. Select **V2** from the drop-down list.
5. Fill in the form.
6. Click **Create webhook** button to save your changes.

### Required fields

<!-- markdownlint-disable line-length -->

| Field name  | 説明                                                           | 必須 |
| ----------- | ------------------------------------------------------------ | -- |
| URL Address | URL address to be notified by the webhook.                   | はい |
| コンテンツタイプ    | Type of content (file/folder) the webhook is configured for. | はい |
| Triggers    | Different triggers that activate the webhook.                | はい |

<!-- markdownlint-enable line-length -->

## API

<Message type="warning">

This API requires the application to have the **Manage Webhooks** scope enabled.

</Message>

ファイルにWebhookを追加するには、`file`の種類、ファイルのID、Webhook通知の送信先URL、および[トリガー][4]のリストを指定して[Webhookを作成][3]エンドポイントを呼び出します。

<Samples id="post_webhooks">

</Samples>

To attach a webhook to a folder, call the [create webhook][3] endpoint with the type of `folder`, the ID of the folder, a URL to send webhook notifications to, and a list of [triggers][4].

<Samples id="post_webhooks" variant="for_folder">

</Samples>

<Message type="notice">

Webhooks do cascade, so if a webhook is set on a parent folder, it will also monitor sub-folders for the selected triggers.

</Message>

## 所有権

It is best practice and strongly recommended to create webhooks with a [Service Account][sa], or user that will not be deleted, to avoid potential issues with webhook delivery due to loss of access to content.

Similar to files and folders, webhooks are owned by a user. If a user who owns a webhook is deleted, they will lose access to all files and folders that they previously had access to. Their webhooks will begin to fail validation, but the webhook service will continue to send events and require retries.

## Webhookアドレス

`address`パラメータで指定する通知URLは、Webhookの作成時に指定した有効なURLである必要があります。このURLは、いずれかのトリガーがアクティブになるたびに呼び出されます。

The notification URL must use standard port `443` and should return an HTTP status in the range of `200` to `299` within 30 seconds of receiving the webhook payload.

## Webhookトリガー

The triggers are a list of strings that specify the events which cause the webhook to fire. For example, if you want the webhook to be triggered when a user uploads a file, use `FILE.UPLOADED`.

You can find a list of available triggers [in this guide][4].

[1]: g://applications

[2]: g://authorization

[3]: e://post_webhooks

[4]: g://webhooks/triggers

[sa]: g://getting-started/user-types/service-account

[console]: https://app.box.com/developers/console
