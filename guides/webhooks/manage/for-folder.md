---
rank: 4
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/manage/triggers
  - webhooks/handle/payload
  - webhooks/manage/delete
related_resources:
  - webhook
required_guides: []
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/manage
is_index: false
id: webhooks/manage/for-folder
type: guide
total_steps: 7
sibling_id: webhooks/manage
parent_id: webhooks/manage
next_page_id: webhooks/manage/update
previous_page_id: webhooks/manage/for-file
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/manage/for-folder.md
---
# フォルダへのWebhookの作成

フォルダにWebhookを追加するには、`folder`の種類、フォルダのID、Webhook通知の送信先URL、およびWebhookをアクティブにするトリガーのリストを指定して[Webhookを作成][1]エンドポイントを呼び出します。

<Samples id="post_webhooks" variant="for_folder">

</Samples>

<Message type="warning">

このAPIを使用するには、アプリケーションの\[webhookを管理]スコープが有効になっている必要があります。

WebhookのアドレスはHTTPS URLである必要があります。

</Message>

## Webhookアドレス

`address`パラメータで指定する通知URLは、Webhookの作成時に指定した有効なHTTPS URLである必要があります。このURLは、いずれかのトリガーがアクティブになるたびに呼び出されます。

通知URLは標準HTTPSポート`443`を使用する必要があり、Webhookペイロードの受信から30秒以内に`200`～`299`の範囲のHTTPステータスを返す必要があります。

## Webhookトリガー

トリガーのリストでは、Webhookをトリガーするイベントを表す文字列を指定します。たとえば、ユーザーがファイルをアップロードしたときにWebhookをトリガーするには、トリガー名として`FILE.UPLOADED`を渡します。

使用可能なトリガーのリストは、[このガイド][2]にあります。

[1]: endpoint://post_webhooks

[2]: guide://webhooks/manage/triggers
