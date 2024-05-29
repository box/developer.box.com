---
related_endpoints: []
required_guides: []
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/create
rank: 1
type: guide
total_steps: 6
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: metadata/queries/syntax
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/1-create.md
fullyTranslated: true
---
# クエリの作成

メタデータクエリとは、`/metadata_queries/execute_read`エンドポイントに対する`POST`リクエストで、その本文にはメタデータクエリのすべてのパーツが含まれています。ここで最も重要なのは、検索対象のテンプレートを指定する`from`属性、検索するフォルダを指定する`ancestor_folder_id`、検索に使用するすべてのテンプレートフィールドを決定する`query`です。

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
    -H 'Authorization: Bearer <ACCESS_TOKEN>' \
    -H 'Content-Type: application/json' \
    -d '{
      "from": "enterprise_123456.contractTemplate",
      "query": "amount >= :value",
      "query_params": {
        "value": 100
      },
      "fields": [
        "name",
        "metadata.enterprise_123456.contractTemplate.customerName",
        "metadata.enterprise_123456.contractTemplate.amount"
      ],
      "ancestor_folder_id": "5555",
      "order_by": [
        {
          "field_key": "amount",
          "direction": "asc"
        }
      ],
      "limit": 100
    }'

```

使用可能なすべてのパラメータの詳細については、Boxの他の[メタデータクエリガイド](g://metadata/queries)または関連する[エンドポイントリファレンス](e://post_metadata_queries_execute_read)を参照してください。

<CTA to="g://metadata/queries/syntax">

クエリ構文の詳細を確認する

</CTA>

## レスポンス

クエリに一致するファイルまたはフォルダがあれば、APIレスポンスで返されます。レスポンスの本文はJSONオブジェクトで、各ファイルまたはフォルダの`entries`のリストと、次の検索結果ページを見つけるための`next_marker`値が含まれています。各エントリは、クエリに一致したファイルまたはフォルダを表し、`field`パラメータで明示的にリクエストされたフィールドのみが返されます。

```json
{
  "entries": [
    {
      "type": "file",
      "id": "1617554169109",
      "name": "My Contract.docx",
      "metadata": {
        "enterprise_123456": {
          "contractTemplate": {
            "$parent": "file_161753469109",
            "$scope": "enterprise_123456",
            "$template": "contractTemplate",
            "$version": 0,
            "customerName": "Phoenix Corp",
            "amount": 100
          }
        }
      }
    }
  ],
  "limit": 20,
  "next_marker": "AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
}

```

このAPIはデフォルトで、ページあたり`20`個の項目を返しますが、マーカーベースのページ割りを使用すると、さらに多くの項目をリクエストできます。

<CTA to="g://metadata/queries/pagination">

ページ割りクエリの結果の詳細を確認する

</CTA>
