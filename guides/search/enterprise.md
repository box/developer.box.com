---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/enterprise
rank: 6
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/trash
previous_page_id: search/metadata-filters
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/6-enterprise.md
fullyTranslated: true
---
# 会社全体での検索

デフォルトでは、認証済みユーザーがアクセスできるコンテンツに対してのみ、検索が実行されます。場合によっては、管理者は、全ユーザーが所有する全コンテンツを検索することもできます。そのようなユースケースでは、`scope`クエリパラメータの値を`enterprise_content`に設定できます。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&scope=enterprise_content" \
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
searchParams.setScope("enterprise_content");

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);
```

</Tab>

<Tab title=".NET">

```csharp
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", mdFilters: filters, scope: "enterprise_content");
```

</Tab>

<Tab title="Python">

```py
client.search().query("sales", metadata_filters=metadata_search_filters, scope="enterprise_content")
```

</Tab>

<Tab title="Node">

```js
client.search.query(
  'sales',
  {
    scope: "enterprise_content"
  })
  .then(results => {
    // ...
  });
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

<Message warning>

`enterprise_content`スコープは、管理者が[サポートチャネル](p://support)を通じてリクエストできます。このスコープがユーザーに対して有効になっていると、そのユーザーは、アクセスできるコンテンツだけでなく、会社全体のコンテンツに対してクエリを実行できます。

</Message >
