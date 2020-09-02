---
rank: 1
related_endpoints:
  - post_webhooks
  - delete_webhooks_id
related_resources:
  - webhook
related_guides: []
required_guides: []
alias_paths:
  - /docs/file-workflow-with-webhooks
category_id: webhooks
subcategory_id: webhooks/manage
is_index: true
id: webhooks/manage
type: guide
total_steps: 7
sibling_id: webhooks
parent_id: webhooks
next_page_id: webhooks/manage/list-all
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/manage/index.md
---
# Webhookの管理

Box APIを使用すると、プログラムによってWebhookを作成および削除できます。

<Message type="warning">

# スコープと権限

アプリケーションの[開発者コンソール][console]の構成タブで、\[webhookを管理]アプリケーションスコープが有効になっていることを確認してください。これが有効になっていない場合、API呼び出しを実行しようとすると`403`エラーが返されます。

</Message>

[console]: https://app.box.com/developers/console
