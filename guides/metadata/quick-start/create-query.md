---
category_id: metadata
subcategory_id: metadata/1-quick-start
is_index: false
id: metadata/quick-start/create-query
rank: 6
type: guide
total_steps: 7
sibling_id: metadata/quick-start
parent_id: metadata/quick-start
next_page_id: metadata/quick-start/next-steps
previous_page_id: metadata/quick-start/update-template
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/1-quick-start/6-create-query.md
fullyTranslated: true
---
# メタデータクエリの作成

最後の手順として、ファイル/フォルダに追加されているメタデータに基づいてそのファイルおよびフォルダを見つけるためのクエリを作成する方法を見てみましょう。

[メタデータクエリ][query]を使用すると、ファイルやフォルダに追加されているメタデータを検索して、そのファイルやフォルダを見つけることができます。この検索構文はSQLに似ており、強力な検索を実行するためにブール演算と比較演算子をサポートしています。

<CTA to="g://metadata/queries">

クエリの作成の詳細を確認する

</CTA>

この例では、`customerInfo`メタデータテンプレートのインスタンスが適用されているファイルまたはファイルを検索するクエリを作成します。このリストを、預金総額が200,000ドルを超える顧客に属しているファイルに絞り込みます。

<Tabs>

<Tab title="cURL">

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json'
     -d '{
       "from": "enterprise_123456.customerInfo",
       "fields": [
         "name",
         "enterprise_123456.customerInfo.name"
         "enterprise_123456.customerInfo.tav"
       ],
       "query": "tav >= :value",
       "query_params": {
         "value": 200000
       },
       "ancestor_folder_id": "0"
     }'
```

</Tab>

</Tabs>

このAPIにより、一致したファイルとフォルダのリストのほか、そのファイルのクエリに一致したメタデータが返されます。

```json
{
  "entries":[
    {
      "type":"file",
      "id":"11111",
      "etag":"0",
      "metadata":{
        "enterprise_123456":{
          "customerInfo":{
            "name": "Box",
            "tav": 1000000,
            "$parent": "folder_12345,",
            "$scope": "enterprise_123456",
            "$template": "customerInfo",
            "$version": 1
          }
        }
      }
    }
  ],
  "limit": 20,
  "next_marker":"AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
}
```

このAPIはデフォルトで、ページあたり`20`個の項目を返しますが、マーカーベースのページ割りを使用すると、さらに多くの項目をリクエストできます。

<CTA to="g://metadata/queries">

メタデータクエリの詳細を確認する

</CTA>

<Next>

メタデータを使用してファイルにクエリを実行しました

</Next>

[query]: g://metadata/queries
