---
rank: 1
related_endpoints:
  - get_webhooks
related_guides:
  - webhooks/v2/create-v2
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /webhooks/manage/list-all
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/list-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/create-v2
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/list-v2.md
fullyTranslated: true
---
# ユーザーのWebhookのリストを取得

認証済みユーザーのすべてのWebhookを取得するには、[すべてのWebhookのリストを取得][1]エンドポイントを使用します。

<Samples id="get_webhooks">

</Samples>

<Message type="warning">

このエンドポイントを使用するには、アプリケーションの \[**Webhookを管理する**] スコープが有効になっている必要があります。

</Message>

このAPIコールは、認証済みユーザーのWebhookのみをリストし、会社内の他のユーザーのWebhookはリストしません。

[1]: endpoint://get_webhooks
