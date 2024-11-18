---
rank: 2
related_endpoints: []
related_guides:
  - api-calls/permissions-and-errors/common-errors
  - api-calls/permissions-and-errors/rate-limits
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/status-codes
type: guide
total_steps: 9
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/sorting
previous_page_id: api-calls/types-and-formats
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/status-codes.md
fullyTranslated: true
---
# Status codes

The following rules can be applied to interpret the HTTP status codes received when using the Box API.

| HTTPステータス |                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `200-299` | BoxはAPIリクエストを受信、認識、承認しました。リクエストは完了したか、完了に向けた処理中です。                                                              |
| `300-399` | BoxはAPIリクエストを受信、認識、承認しましたが、リクエストを完了するにはクライアントによるさらなる処理が必要です。多くの場合、これには他のURLへのリダイレクトが含まれます。                      |
| `400-499` | リクエストの処理中にクライアントエラーが発生しました。多くの場合、クライアントが適切なパラメータを指定しなかった、リソースにアクセスできなかった、またはそれ以外の場合にも不可能なアクションを実行しようとしたことが原因です。 |
| `500-599` | Boxはリクエストを受信、承認しましたが、処理中にBox内でエラーが発生しました。これらのエラーは、クライアントのリクエストの問題ではなく、Boxの問題を示します。                              |
