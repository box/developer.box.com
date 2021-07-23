---
rank: 2
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/triggers
  - webhooks/v2
  - webhooks/v2/delete_v2
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /webhooks/manage/for-file
  - /webhooks/manage/for-folder
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/create_v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/update_v2
previous_page_id: webhooks/v2/list_v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/create_v2.md
fullyTranslated: true
---
# Webhookの作成

V2 Webhookは、特定のファイルまたはフォルダを監視できます。

<Message type="warning">

このAPIを使用するには、アプリケーションの「Webhookを管理」スコープが有効になっている必要があります。

</Message>

ファイルにWebhookを追加するには、`file`の種類、ファイルのID、Webhook通知の送信先URL、および[トリガー][2]のリストを指定して[Webhookを作成][1]エンドポイントを呼び出します。

<Samples id="post_webhooks">

</Samples>

フォルダにWebhookを追加するには、`folder`の種類、フォルダのID、Webhook通知の送信先URL、および[トリガー][2]のリストを指定して[Webhookを作成][1]エンドポイントを呼び出します。

<Samples id="post_webhooks" variant="for_folder">

</Samples>

<Message type="notice">

Webhookはカスケードで適用されるため、親フォルダに設定すると、サブフォルダでも選択されたトリガーが監視されます。

</Message>

## Webhookアドレス

`address`パラメータで指定する通知URLは、Webhookの作成時に指定した有効なURLである必要があります。このURLは、いずれかのトリガーがアクティブになるたびに呼び出されます。

通知URLは標準ポート`443`を使用する必要があり、Webhookペイロードの受信から30秒以内に`200`～`299`の範囲のHTTPステータスを返す必要があります。

## Webhookトリガー

トリガーのリストでは、Webhookによって発生するイベントを表す文字列を指定します。たとえば、ユーザーがファイルをアップロードしたときにWebhookをトリガーするには`FILE.UPLOADED`を使用します。

使用可能なトリガーのリストは、[このガイド][2]にあります。

[1]: e://post_webhooks

[2]: g://webhooks/triggers
