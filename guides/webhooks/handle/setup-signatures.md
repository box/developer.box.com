---
rank: 4
related_guides:
  - webhooks/manage/for-file
  - webhooks/handle/payload
  - webhooks/handle/rotate-signatures
  - webhooks/handle/verify-signatures
required_guides: []
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/handle
is_index: false
id: webhooks/handle/setup-signatures
type: guide
total_steps: 5
sibling_id: webhooks/handle
parent_id: webhooks/handle
next_page_id: webhooks/handle/verify-signatures
previous_page_id: webhooks/handle/retries
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/handle/setup-signatures.md
---
<!-- alex disable aattacks -->

# Webhook署名の設定

署名を使用するようWebhookを構成することで、Boxから送信されていないデータを受信する可能性がある悪意のある攻撃からアプリケーションを保護することができます。

## Webhook署名

署名を使用するようにWebhookを設定すると、Boxは通知の本文の暗号化ダイジェストを生成し、これをWebhookペイロードのヘッダーに添付します。

アプリケーションがペイロードを受信したら、同じダイジェストを計算し、それを受信したダイジェストと比較することにより、署名を[検証][sigver]することをお勧めします。ダイジェストが同一でない場合、ペイロードは信頼できません。

## 中間者攻撃

Webhook署名は、Boxから送信されたWebhookペイロードが送信中に改ざんされていないことを確認するために役立ちます。署名により、中間者攻撃または再生攻撃が成功する可能性を大幅に低減できます。

<Message type="notice">

署名キーを頻繁に変更することで、保護レベルをさらに高めることができます。古いキーと新しいキーをスムーズに切り替えられるよう、Boxでは[署名のローテーション][sigrot]用に同時に2つの署名キーを設定できます。

</Message>

## 署名の有効化

アプリケーションの通知に署名を添付するためには、初めにアプリケーション用の署名キーを生成する必要があります。[署名のローテーション][sigrot]をサポートするために、各アプリケーションに2つの署名キーを設定できます。

アプリケーションのキーを設定するには、[開発者コンソール][console]に移動して、設定するアプリケーションを選択します。

アプリケーションの\[Webhook]セクションで、\[プライマリキーを生成]および\[セカンダリキーを生成]というラベルの付いたボタンを見つけてキーを生成します。

いずれかのキーを設定したら、そのキー値をコピーして、[Webhookペイロードの検証][sigver]に使用できるようにします。これで、すべてのWebhookに[`BOX-SIGNATURE-PRIMARY`と`BOX-SIGNATURE-SECONDARY`ヘッダー][`BOX-SIGNATURE-PRIMARY` and a `BOX-SIGNATURE-SECONDARY` header][ペイロード][payload]が含まれるようになります。

[payload]: guide://webhooks/handle/payload

[sigrot]: guide://webhooks/handle/rotate-signatures

[sigver]: guide://webhooks/handle/verify-signatures

[console]: https://app.box.com/developers/console
