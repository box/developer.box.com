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
total_steps: 4
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: api-calls/permissions-and-errors/scopes
previous_page_id: api-calls/permissions-and-errors/common-errors
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/permissions-and-errors/rate-limits.md
---
# レート制限

ほとんどのBox APIには、サードパーティのサービスやユーザーによる乱用を防ぐためのレート制限が設けられています。

## APIごとのレート制限

現在、Box APIにはいくつかの異なるレート制限があります。

* 一般的なAPI呼び出し
  * 1ユーザーあたりのAPIリクエストは1000件/分
* アップロード
  * 1ユーザーあたりのファイルアップロードリクエストは240件/分
* 検索
  * [検索エンドポイント][search]に対して、1ユーザーあたりの検索数は6件/秒
  * 基本のレート制限に加えてさらに2つの制限が適用されます
    * 1ユーザーあたりの検索数は60件/分
    * 会社あたりの検索数は12件/秒

## レート制限エラー

アプリケーションがレート制限に達すると、APIは、HTTPステータスコードが`429 Too Many Requests`のAPI応答を返します。

応答には以下のヘッダーとJSON本文が含まれます。

```yaml
retry-after: 100
```

```json
{
  "type": "error",
  "status": 429,
  "code": "rate_limit_exceeded",
  "help_url": "http://developers.box.com/docs/#errors",
  "message": "Request rate limit exceeded, please try again later",
  "request_id": "abcdef123456"
}
```

詳細については、[クライアントエラーのリソース](resource://client_error)を参照してください。

<Message type="notice">

`retry-after`ヘッダーは、API呼び出しの再試行のタイミングに関するガイダンスを提供します。一般的には、API呼び出しの再試行に指数バックオフ戦略を使用することをお勧めします。

</Message>

[search]: e://get_search
