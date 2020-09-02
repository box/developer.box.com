---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/handle
is_index: true
id: webhooks/handle
type: guide
total_steps: 5
sibling_id: webhooks
parent_id: webhooks
next_page_id: webhooks/handle/retries
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/handle/index.md
---
# Webhookの処理

Webhookが設定されると、イベントがトリガーされるたびにWebhookの構成済みの`address`でアプリケーションが呼び出されます。ファイルまたはフォルダに対してアクションが実行される前に、アプリケーションによってペイロードが解析され、署名が検証されます。
