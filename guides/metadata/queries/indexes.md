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
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/5-queries/6-indexes.md
---
# インデックス

規模を考慮したことにより、メタデータテンプレートが10,000を超えるファイルまたはフォルダに適用されている場合、メタデータクエリによって`HTTP 403`エラーが返される可能性があります。検索インデックスを作成すると、特定の検索クエリでこのエラーを解決することができます。

メタデータインスタンスの数が10,000個を超えると、`​use_index​`パラメータに適切な**インデックス**が含まれていないメタデータクエリリクエストではエラーが発生します。このエラーは呼び出し元に対して、`​use_index​`パラメータの引数として適切なインデックスを指定するよう通知します。

<Message notice>

Boxは、将来この制限を廃止するのではなく、引き上げる予定です。

</Message>

## インデックスのリクエスト

現時点では、検索インデックスを作成するには、Boxにお問い合わせいただく必要があります。カスタマーサクセスマネージャまたはBox[サポートチーム][support]にご連絡ください。

インデックスを作成するには、リクエストの`from​`、`​query​`、および`​order_by​`パラメータに適した値を含め、実行されるクエリについてBoxに知らせる必要があります。

その後、インデックスが作成されると、その名前が提供されます。これは、クエリリクエストの`​use_index​`パラメータで使用する必要があります。

インデックスの名前を指定したい場合は、インデックスをリクエストする際にその名前をお知らせください。

<Message warning>

`LIKE`、`ILIKE`、`NOT LIKE`、および`NOT ILIKE`演算子は、インデックスのクエリでは使用できません。

</Message>

### インデックスリクエストの例

以下は、インデックスのリクエストの例です。`​from`、`query`および`order_by​`パラメータに関するすべての情報を含める必要があります。

<!-- markdownlint-disable line-length -->

|            |                                                                            |
| ---------- | -------------------------------------------------------------------------- |
| クエリの説明     | 特定のアカウント番号に関連付けられ、ステータスが保留中になっている、「顧客による送信」というタイプのファイルを返します。応答は送信日で並べられます。 |
| `from`     | `enterprise_123456.customerInfo`                                           |
| `query`    | `accountNumber = :argAccountNum AND status = :argStatus`                   |
| `order_by` | `[{ "field_key": "submissionDate","direction": "desc" }]`                  |

<!-- markdownlint-enable line-length -->

## インデックスを使用したクエリの実行

インデックスを使用してクエリを実行するには、クエリの実行時に提供されるインデックスの名前を、[`use_index`][use_index]パラメータの値として使用します。

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json'
     -d '{
       "from": "enterprise_123456.customerInfo",
       "fields": ["name"],
       "query": "accountNumber = :argAccountNum AND status = :argStatus",
       "query_params": {
         "argAccountNum": 12345,
         "argStatus": "active"
       },
       "ancestor_folder_id": "5555",
       "use_index": "yourIndexName",
       "order_by": [
         {
           "field_key": "submissionDate",
           "direction": "desc"
         }
       ]
     }'
```

<Message warning>

クエリで使用するパラメータは、インデックスの作成に指定されたものとまったく同じにする必要があります。

</Message>

[support]: https://community.box.com/t5/custom/page/page-id/BoxSearchLithiumTKB

[use_index]: e://post-metadata-queries-execute-read/#param-use_index
