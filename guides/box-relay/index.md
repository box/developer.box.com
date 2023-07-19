---
rank: 223
category_id: box-relay
subcategory_id: null
is_index: true
id: box-relay
type: guide
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: box-relay/start-workflow
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-relay/index.md
fullyTranslated: true
---
# Box Relay

[Box Relay][boxrelay]はワークフロー自動化アプリケーションです。これを使用すると、Boxのパワーユーザーは、コンテンツが中心のビジネスプロセスを自動化してスピードアップすることができます。現在、開発者が使用できるAPI [エンドポイント][workflow]は2つありますが、ほかにも今後リリースが予定されているものがあります。2つとも[手動開始フロー][manualstart]に直接動作するよう作成されました。

<Message type="notice">

これらのエンドポイントの使用方法の詳細については、Boxの[ブログ][blog]記事を参照してください。

</Message>

## 必須のスコープ

Box Relayのエンドポイントを使用する前に、アプリケーションで以下の[スコープ][scopes]を有効にする必要があります。

* [Boxに格納されているすべてのファイルとフォルダの読み取り][read]
* [Boxに格納されているすべてのファイルとフォルダの書き込み][write]
* [Box Relayを管理する][relay]

<Message type="warning">

選択した認証方法や企業の設定によっては、新たに選択したスコープを使用する前に、アプリケーションで管理者の承認または再承認が必要になる場合があります。

</Message>

## レート制限

詳細については、[レート制限ガイド][ratelimit]を参照してください。

## テスト

機能は同等であるため、APIを利用する前に、[BoxウェブアプリでBox Relay機能][webapp]に慣れておくと役に立つ可能性があります。さまざまなAPIエンドポイントと同様、実稼働環境のコンテンツに影響を及ぼすリスクを排除するために[Developerサンドボックス環境][sandbox]でテストすることをお勧めします。

[scopes]: g://api-calls/permissions-and-errors/scopes

[read]: g://api-calls/permissions-and-errors/scopes/#read-all-files-and-folders

[write]: g://api-calls/permissions-and-errors/scopes/#read-and-write-all-files-and-folders

[ratelimit]: g://api-calls/permissions-and-errors/rate-limits/#per-api-rate-limits

<!-- i18n-enable localize-links -->

[webapp]: https://support.box.com/hc/ja/articles/360044628853-手動で開始するワークフローの作成と実行

[sandbox]: https://support.box.com/hc/ja/articles/360043697274

<!-- i18n-disable localize-links -->

[relay]: g://api-calls/permissions-and-errors/scopes/#manage-box-relay

<!-- i18n-enable localize-links -->

[boxrelay]: https://support.box.com/hc/ja/articles/360044196213-Box-Relayの概要

[workflow]: https://ja.developer.box.com/reference/resources/workflow/

[manualstart]: https://support.box.com/hc/ja/articles/360044628853-手動で開始するワークフローの作成と実行

[blog]: https://medium.com/@Box_Developers/手動開始ワークフローapiとbox-relay-64f9136f1682

<!-- i18n-disable localize-links -->
