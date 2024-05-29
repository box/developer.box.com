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
next_page_id: webhooks/v1/delete-v1
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v1/index.md
fullyTranslated: true
---
# V1 Webhook

[開発者コンソール][console]を使用して作成されたWebhookは、ユーザーのアカウント内のすべてのファイルとフォルダに対する変更を監視します。このようなWebhookを作成する際は、Webhookのバインド先として特定のオブジェクトを指定することはできません。特定のファイルまたはフォルダ用にWebhookを作成するには、[V2 Webhook][v2]を使用する必要があります。

<Message type="warning">

このプロセスで作成されたWebhookは、APIコールでユーザーのすべてのWebhookのリストを取得しても表示されません。すべてのV1 Webhookは、[開発者コンソール][console]の \[**Webhook**] タブに表示されます。

</Message>

[devconsole]: https://app.box.com/developers/console

[list_webhooks]: g://webhooks/v2/list-v2

[v2]: g://webhooks/v2

[console]: https://app.box.com/developers/console
