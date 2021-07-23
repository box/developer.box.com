---
rank: 2
related_endpoints: []
related_guides: []
required_guides:
  - webhooks
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/v1
is_index: true
id: webhooks/v1
type: guide
total_steps: 2
sibling_id: webhooks
parent_id: webhooks
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v1/index.md
fullyTranslated: true
---
# V1 Webhook

開発者コンソールを使用して作成されたWebhookは、ユーザーのアカウント内のすべてのファイルとフォルダに対する変更を監視します。このようなWebhookを作成する際は、Webhookをバインドする特定のオブジェクトを指定することはできません。特定のファイルまたはフォルダ用にWebhookを作成するには、[V2 Webhook][v2]を使用する必要があります。

<Message type="warning">

このプロセスで作成されたWebhookは、API呼び出しでユーザーのすべてのWebhookのリストを取得しても表示されません。

</Message>

[devconsole]: https://app.box.com/developers/console

[list_webhooks]: g://webhooks/v2/list_v2

[v2]: g://webhooks/v2
