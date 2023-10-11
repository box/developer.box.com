---
rank: 2
related_endpoints:
  - get_search
  - put_files_content
related_guides:
  - api-calls/permissions-and-errors/common-errors
related_resources:
  - client_error
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: api-calls/permissions-and-errors
is_index: false
id: api-calls/permissions-and-errors/rate-limits
type: guide
total_steps: 5
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: api-calls/permissions-and-errors/scopes
previous_page_id: api-calls/permissions-and-errors/common-errors
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/permissions-and-errors/rate-limits.md
fullyTranslated: true
---
# レート制限

APIコールのレート制限には一般的に3種類あります。Boxは独自の判断でこの制限を使用して、ネットワークリソースの保護やカスタマーエクスペリエンスの品質維持をうまく実現することができます。

## ユーザーベース

このレート制限を使用すると、1人のユーザーによって生成されるトラフィックが多すぎる場合に発生する可能性のある問題からBoxサービスが保護されます。ユーザーが1分間に実行できるAPIコールの数は、以下で説明するように制限されています。このレート制限は最も一般的で、すべてのBoxユーザーアカウントに適用されます。通常、ユーザーの1分あたりのAPIコールが1,000を超えると、この制限が開始されますが、特定のAPIエンドポイントには別のレート制限が適用されている可能性があります。

## サービスの品質

このレート制限は、Boxのインフラストラクチャのサービスの品質を保護することを目的としています。インフラストラクチャ内でリソースの競合が生じると、システムの性能低下や機能停止を防ぐために自動のレート制限が導入されます。たとえば、アプリケーションが偶然同じ物理データベースサーバーにアクセスした場合 (アクセス先が同じ物理リソースである関連リソースにアクセスするファイル移行ツールの使用など)、Boxでは、負荷が急増したときに一時的なレート制限が課せられ、システムの復旧に合わせて調整されることがあります。

## ライセンスベース

すべてのBox Businessプランでは、1か月あたり1社ごとに許可されるAPIコールの数がライセンスされています。このライセンスベースのレート制限は、ネットワークリソースの過剰供給や乱用を防ぐことを目的としています。顧客が使用するツールや顧客のために使用されるツールがその顧客のAPIライセンス割り当てを超過しているか、ネットワーク管理を回避しようとしていることがBoxのインフラストラクチャで検出されると、さらに対象を絞ったレート制限が課せられる場合があります。Boxの[価格ページ][pricing]では、特定のアカウントレベルでライセンスされているデフォルトのAPI割り当てを確認できますが、割り当てを増やすためにPlatform APIの価格プランを購入する顧客もいることに注意してください。

## APIごとのレート制限

現在、Box APIにはいくつかの異なるレート制限があります。

* 一般的なAPIコール
  * 1ユーザーあたりのAPIリクエストは1000件/分
* アップロード
  * 1ユーザーあたりのファイルアップロードリクエストは240件/分
* 検索
  * [検索エンドポイント][search]に対して、1ユーザーあたりの検索数は6件/秒
  * 基本のレート制限に加えてさらに2つの制限が適用
    * 1ユーザーあたりの検索数は60件/分
    * 会社あたりの検索数は12件/秒
* Box Sign
  * 署名リクエストの作成と再送信: 1ユーザーあたりのリクエスト数は100件/分
  * 署名リクエストの取得: 1ユーザーあたりのリクエスト数は1,000件/分

## レート制限エラー

アプリケーションがレート制限に達すると、APIは、HTTPステータスコードが`429 Too Many Requests`のAPIレスポンスを返します。

レスポンスには以下のヘッダーとJSON本文が含まれます。

```yaml
retry-after: 100

```

```json
{
  "type": "error",
  "status": 429,
  "code": "rate_limit_exceeded",
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "message": "Request rate limit exceeded, please try again later",
  "request_id": "abcdef123456"
}

```

詳細については、[クライアントエラーのリソース](resource://client_error)を参照してください。

<Message type="notice">

`retry-after`ヘッダーでは、次のAPIコールが再試行可能になるまで待機する秒数を指示します。一般的には、APIコールの再試行に指数バックオフ戦略を使用することをお勧めします。

</Message>

[search]: e://get_search

[pricing]: https://www.box.com/pricing
