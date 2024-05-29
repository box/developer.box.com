---
rank: 225
category_id: box-sign
subcategory_id: null
is_index: true
id: box-sign
type: guide
total_steps: 7
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: box-sign/embedded-sign-client
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/index.md
fullyTranslated: true
---
# Box Sign

署名リクエストの作成、リスト取得、再送信、キャンセルを実行するBox SignのAPIエンドポイントを使用することで、Box Signウェブアプリの全機能をプログラムによって利用できます。

## 有効化

Box Sign APIを使用したリクエストは、Business、Business Plus、Enterprise、Enterprise Suites、Enterprise Plusのアカウントでサポートされています。アカウントの種類を確認するには、\[**アカウント設定**] に移動し、\[**アカウント**] タブの \[**アカウントの詳細**] セクションまで下にスクロールします。管理者向けのアクセス制限の詳細については、[サポート記事][restrict]を参照してください。

## 必須のスコープ

Box Signのエンドポイントを使用する前に、アプリケーションで以下の[スコープ][scopes]を有効にする必要があります。

* [Boxに格納されているすべてのファイルとフォルダの読み取り][read]
* [Boxに格納されているすべてのファイルとフォルダの書き込み][write]
* [署名リクエストを管理する][sign]

<Message type="warning">

選択した認証方法や企業の設定によっては、新たに選択したスコープを使用する前に、アプリケーションで管理者の承認または再承認が必要になる場合があります。

</Message>

## イベント

詳細については、[イベントガイド][eg]を参照してください。

## Webhook

詳細については、[Webhookガイド][wh]を参照してください。

## レート制限

詳細については、[レート制限ガイド][ratelimit]を参照してください。

## テスト

機能が同等であるため、APIを利用する前に、[Boxウェブアプリを使用してBox Signの機能][webapp]をよく理解しておくと役に立つかもしれません。すべてのAPIエンドポイントと同様に、実稼働環境のコンテンツに影響を及ぼすリスクを取り除くため、[Developerサンドボックス環境][sandbox]でテストすることをお勧めします。

[scopes]: g://api-calls/permissions-and-errors/scopes

[read]: g://api-calls/permissions-and-errors/scopes/#read-all-files-and-folders

[write]: g://api-calls/permissions-and-errors/scopes/#read-and-write-all-files-and-folders

[sign]: g://api-calls/permissions-and-errors/scopes/#manage-signature-requests

<!-- i18n-enable localize-links -->

[restrict]: https://support.box.com/hc/ja/articles/4404076971155-Box-Signの有効化

<!-- i18n-disable localize-links -->

[ratelimit]: g://api-calls/permissions-and-errors/rate-limits/#per-api-rate-limits

<!-- i18n-enable localize-links -->

[webapp]: https://support.box.com/hc/ja/articles/4404105810195-署名用ドキュメントの送信

[sandbox]: https://support.box.com/hc/ja/articles/360043697274

<!-- i18n-disable localize-links -->

[eg]: g://events/event-triggers/sign-events

[wh]: g://webhooks/triggers
