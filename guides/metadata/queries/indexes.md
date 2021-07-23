---
related_endpoints:
  - post_metadata_queries_execute_read
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/indexes
rank: 6
type: guide
total_steps: 7
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: metadata/queries/comparison
previous_page_id: metadata/queries
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/6-indexes.md
fullyTranslated: true
---
# インデックス

規模を考慮したことにより、メタデータテンプレートが10,000を超えるファイルまたはフォルダに適用されている場合、メタデータクエリによって`HTTP 403`エラーが返される可能性があります。検索インデックスを作成すると、特定の検索クエリでこのエラーを解決することができます。

<Message notice>

Boxは、将来この制限を廃止するのではなく、引き上げる予定です。

</Message>

## インデックスのリクエスト

<Message info>

現時点では、検索インデックスを作成するには、[Boxメタデータクエリチーム](mailto:metadata-query-feedback@box.com)にお問い合わせいただく必要があります。

</Message>

インデックスを作成するには、リクエストの`from​`、`​query​`、および`​order_by​`パラメータに適した値を含め、実行対象のクエリについてBoxに知らせる必要があります。

その後、インデックスが作成されると、このインデックスの名前が渡されます。インデックスの名前を指定したい場合は、インデックスをリクエストする際にその名前を指定してください。

検索対象となるファイルまたはフォルダが10,000を超える場合は、メタデータクエリの処理中にインデックスが自動的に適用されます。インデックスの作成以外に何もしなくても、インデックスは適用されます。

<Message warning>

`LIKE`、`ILIKE`、`NOT LIKE`、および`NOT ILIKE`演算子は、インデックスのクエリでは使用できません。

</Message>

### インデックスリクエストの例

以下は、インデックスのリクエストの例です。`​from`、`query`および`order_by​`パラメータに関するすべての情報を含める必要があります。

<!-- markdownlint-disable line-length -->

|            |                                                                               |
| ---------- | ----------------------------------------------------------------------------- |
| クエリの説明     | 特定のアカウント番号に関連付けられ、ステータスが保留中になっている、「顧客による送信」というタイプのファイルを返します。レスポンスは送信日で並べられます。 |
| `from`     | `enterprise_123456.customerInfo`                                              |
| `query`    | `accountNumber = :argAccountNum AND status = :argStatus`                      |
| `order_by` | `[{ "field_key": "submissionDate","direction": "desc" }]`                     |

<!-- markdownlint-enable line-length -->

## 作成されたインデックスのリストの取得

特定のメタデータテンプレートおよびスコープに対して作成されたインデックスのリストを取得するには、[メタデータクエリインデックスのリストを取得][mdq-get-indices]エンドポイントを使用します。

エンドポイントにリクエストを送信する際は、テンプレートのスコープ (globalまたはenterprise) のほか、テンプレートキーを指定します。

<Samples id="get_metadata_query_indices">

</Samples>

[support]: https://community.box.com/t5/custom/page/page-id/BoxSearchLithiumTKB

[mdq-get-indices]: endpoint://get_metadata_query_indices
