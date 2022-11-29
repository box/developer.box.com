---
rank: 3
related_endpoints:
  - put_webhooks_id
  - get_webhooks
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/list-v2
required_guides:
  - webhooks/v2/list-v2
related_resources:
  - webhook
alias_paths:
  - /webhooks/manage/update
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/update-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/delete-v2
previous_page_id: webhooks/v2/create-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/update-v2.md
fullyTranslated: true
---
# Webhookの更新

Webhookは、[開発者コンソール][console]またはAPIを使用して更新できます。

## 開発者コンソール

[開発者コンソール][console]でWebhookを更新するには、以下の手順に従います。

1. [開発者コンソール][console]の \[**Webhook**] タブに移動し、すべてのWebhookを表示します。
2. WebhookのIDをクリックして、更新するWebhookを選択します。
3. \[**Webhookを編集**] ボタンをクリックします。
4. 更新するデータを入力します。
5. \[**更新**] ボタンをクリックして変更を保存します。

<Message type="notice">

Webhookのリストには、\[**ID**]、\[**アドレス**]、\[**コンテンツ**]、\[**作成者**]、\[**作成日**] フィールドがあります。

</Message>

## API

Webhookを更新するには、[Webhookを更新][2]エンドポイントを使用します。それにはWebhook IDが必要です。WebhookのIDを調べるには、[すべてのWebhookのリストを取得][1]エンドポイントを使用します。

<Samples id="put_webhooks_id">

</Samples>

[1]: g://webhooks/v2/list-v2

[2]: e://put-webhooks-id

[console]: https://app.box.com/developers/console
