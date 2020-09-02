---
related_endpoints:
  - post_metadata_queries_execute_read
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/pagination
rank: 3
type: guide
total_steps: 7
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: metadata/queries/errors
previous_page_id: metadata/queries/syntax
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/5-queries/3-pagination.md
---
# ページ割りと並べ替え

デフォルトでは、1ページあたり返されるクエリ結果は20件のみで、この結果の順序は保証されておらず変更される可能性があります。ページ割りと並べ替えにより、さらに多くの結果を取得し、結果の順序を定義することが可能になります。

## ページ割り

APIはデフォルトで、20件の結果を含む最初のページのみを返します。ページあたりの結果の数を増やすようリクエストするには、リクエストに`limit`クエリパラメータを指定して送信します。

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json'
     -d '{
       "from": "enterprise_123456.contractTemplate",
       "fields": ["name"],
       "ancestor_folder_id": "5555",
       "limit": 100
     }'
```

`limit`の最大値は100です。返される結果ページ数を増やすには、各ページで`next_marker`値を返します。

```json
{
  "entries":[...],
  "next_marker":"AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
}
```

この`next_marker`を使用すると、結果の次のページについて新しいリクエストを作成できます。

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json'
     -d '{
       "from": "enterprise_123456.contractTemplate",
       "fields": ["name"], 
       "ancestor_folder_id": "5555",
       "limit": 100,
       "marker": "AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
     }'
```

<Message notice>

応答に次のマーカーが含まれていない場合は、これ以上一致する結果がないことを意味します。

</Message>

<Message warning>

`next_marker`を使用するには、結果の次のページにまったく同じクエリを使用することが重要です。`query`、`query_params`などのパラメーターが変更されると、APIはエラーを返します。

</Message>

## 並べ替え

結果は、サポートされているどのメタデータフィールドタイプを使用して並べ替えることができます。現在サポートされているタイプは、`float`、`date`および`string`[フィールド][metadata-fields]のみです。`enum`または`multiSelect`値による並べ替えは現在サポートされていません。

結果を並べ替えるには、並べ替えの基準として使用する1つ以上のフィールドキーに加えて、方向を指定します。

```json
"order_by": [
  {
    "field_key": "amount”,
    "direction": "desc"
  },
  {
    "field_key": "created_at"
    "direction": "desc"
  }
]
```

<Message warning>

並べ替えの方向は、指定したすべてのキーで同じにする必要があります。つまり、各`field_key`の`direction`は同じにする必要があります。

</Message>

[metadata-fields]: g://metadata/fields
