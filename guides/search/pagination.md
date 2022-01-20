---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/pagination
rank: 4
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/metadata-filters
previous_page_id: search/filtering
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/4-pagination.md
fullyTranslated: true
---
# ページ割り

検索APIでは、`offset`クエリパラメータと`limit`クエリパラメータを使用したオフセットベースのページ割りがサポートされます。マーカーベースのページ割りはサポートされません。

## APIによるページ割り

検索結果の最初のページを取得するには、APIを`offset`パラメータを指定せずに呼び出すか、`offset`を`0`に設定して呼び出す必要があります。`limit`フィールドは省略可能です。

```curl
curl https://api.box.com/2.0/search?query=sales&offset=0&limit=100 \
  -H "authorization: Bearer ACCESS_TOKEN"
```

エントリの次のページを取得するには、以前の`offset`値と以前の結果で返された制限の合計 (`previous_offset + previous_limit`) と等しい`offset`パラメータを指定して、APIを呼び出す必要があります。

```curl
curl https://api.box.com/2.0/search?query=sales&offset=100&limit=100 \
  -H "authorization: Bearer ACCESS_TOKEN"
```

<Message type="notice">

`offset`は、レスポンス配列内のエントリのサイズではなく、以前の`limit`分だけ加算されますので注意してください。これは制限を下回る可能性があるためです。一般的には、レスポンスオブジェクトの`limit`の値を使用して`offset`値を加算することをお勧めします。

</Message>

次の`offset`値がレスポンスオブジェクト内の`total_count`値を超えている場合、項目の最終ページはリクエスト済みです。この時点では、これ以上取得する項目がありません。

<CTA to="g://api-calls/pagination/offset-based">

オフセットベースのページ割りの詳細を確認する

</CTA>

## SDKによるページ割り

Boxの各SDKには、APIによるページ割りのサポートが組み込まれています。以下のコードサンプルでは、検索APIでのページ割りの使用方法を示します。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="Java">

```java
long offsetValue = 0;
long limitValue = 50;

BoxSearch boxSearch = new BoxSearch(api);
BoxSearchParameters searchParams = new BoxSearchParameters();
searchParams.setQuery("sales");

PartialCollection<BoxItem.Info> page1 = boxSearch.searchRange(offsetValue, limitValue, searchParams);

offsetValue += 50;
PartialCollection<BoxItem.Info> page2 = boxSearch.searchRange(offsetValue, limitValue, searchParams);
```

</Tab>

<Tab title=".NET">

```csharp
BoxCollection<BoxItem> page1 = await client.SearchManager
    .QueryAsync("sales", limit: 50);
BoxCollection<BoxItem> page2 = await client.SearchManager
    .QueryAsync("sales", limit: 50, offset: 50);
```

</Tab>

<Tab title="Python">

```py
page1 = client.search().query(query='sales', limit=50)
page2 = client.search().query(query='sales', limit=50, offset=50)
```

</Tab>

<Tab title="Node">

```js
const page1 = await client.search.query('sales', {
  limit: 50
})
const page2 = await client.search.query('sales'. {
  limit: 50,
  offset: 50
})
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->
