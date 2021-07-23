---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/trash
rank: 7
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/shared-links
previous_page_id: search/enterprise
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/7-trash.md
fullyTranslated: true
---
# ごみ箱の検索

検索結果では、デフォルトで、ユーザーのごみ箱内のコンテンツは無視されます。ユーザーのごみ箱を検索するには、`trash_content`クエリパラメータを`trashed_only`に設定します。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&trash_content=trashed_only" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

</Tab>

<Tab title="Java">

```java
long offsetValue = 0;
long limitValue = 10;

BoxSearch boxSearch = new BoxSearch(api);
BoxSearchParameters searchParams = new BoxSearchParameters();
searchParams.setQuery("sales");
searchParams.setTrashContent("trashed_only");

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);
```

</Tab>

<Tab title=".NET">

```csharp
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", mdFilters: filters, trashContent: "trashed_only");
```

</Tab>

<Tab title="Python">

```py
client.search().query("sales", metadata_filters=metadata_search_filters, trash_content="trashed_only")
```

</Tab>

<Tab title="Node">

```js
client.search.query(
  'sales',
  {
    trash_content: "trashed_only"
  })
  .then(results => {
    // ...
  });
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

<Message info>

現在、APIでサポートされているのは、ごみ箱にないコンテンツの検索 (`non_trashed_only`、デフォルト) かユーザーのごみ箱にあるコンテンツの検索 (`trashed_only`) のみです。現時点では、その両方の場所にある項目を同時に検索することはできません。

</Message >
