---
rank: 3
related_guides:
  - webhooks/manage/for-file
  - webhooks/handle/payload
required_guides: []
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/handle
is_index: false
id: webhooks/handle/retries
type: guide
total_steps: 5
sibling_id: webhooks/handle
parent_id: webhooks/handle
next_page_id: webhooks/handle/setup-signatures
previous_page_id: webhooks/handle
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/handle/retries.md
---
<!-- alex disable failed -->

# Webhookの再試行

Boxがペイロードを送信してから30秒以内に、`200`から`299`の範囲のHTTPステータスコードを含む応答が受信されない場合、Webhookペイロードの配信は失敗しています。

Webhookの配信が失敗した場合、Boxはこれを最大10回まで再送信します。1 回目の再試行は失敗の5分後に実行し、それ以降は、送信先サーバーに負荷がかからないよう、エクスポネンシャルバックオフ戦略を使用します。

エクスポネンシャルバックオフ戦略に基づき、Boxは再試行ごとに待機時間を増やします。

<Message type="notice">

BoxはWebhook配信を最大10回再試行します。この回数は今後変更される可能性があります。

</Message>
