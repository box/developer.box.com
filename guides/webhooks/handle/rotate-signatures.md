---
rank: 6
related_guides:
  - webhooks/manage/for-file
  - webhooks/handle/payload
  - webhooks/handle/setup-signatures
  - webhooks/handle/verify-signatures
required_guides:
  - webhooks/manage/for-file
  - webhooks/handle/setup-signatures
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/handle
is_index: false
id: webhooks/handle/rotate-signatures
type: guide
total_steps: 5
sibling_id: webhooks/handle
parent_id: webhooks/handle
next_page_id: ''
previous_page_id: webhooks/handle/verify-signatures
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/handle/rotate-signatures.md
---
# Webhook署名のローテーション

アプリケーションのWebhook署名キーを一度に1つ更新することにより、競合することなくキーをローテーションできます。

設定時、Boxは常にすべてのWebhookペイロードで2つの署名を送信します。少なくとも1つの署名が有効であれば、アプリケーションはペイロードを信頼できます。

一度に1つの署名キーを更新すると、アプリケーションは常に少なくとも1つの有効な署名を持つペイロードを受信することになります。

## 循環の手順

これらの手順は、これまでにプライマリキーとセカンダリキーを作成済みで、どちらかのキーを置き換える準備ができていることを前提としています。

これらの手順に従うことにより、競合することなく、2つの新しいキーを使ってアプリケーションを構成できます。

1. プライマリキーをアプリケーションの[開発者コンソール][console]で変更します。アプリケーション設定画面の\[Webhook]セクションに移動し、プライマリキーの\[リセット]ボタンをクリックします。
2. 新しいプライマリキーでアプリケーションを更新します。アプリケーションは引き続き古いプライマリキーで通知を受信する可能性がありますが、セカンダリキーがまだ有効であるため、Webhookは今後も正しく処理されます。
3. 古いプライマリキーを持つWebhookが動作していないことを確認できたら、同じプロセスを使用してセカンダリキーを更新できます。

[console]: https://app.box.com/developers/console
