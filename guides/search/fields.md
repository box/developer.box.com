---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/fields
rank: 9
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search
previous_page_id: search/shared-links
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/9-fields.md
fullyTranslated: true
---
# 追加フィールドのリクエスト

デフォルトでは、検索APIによって**標準**形式の[ファイル](r://file)、[フォルダ](r://folder)、または[ウェブリンク](r://web_link)が返されます。これらの各リソースでは、`fields`クエリパラメータを使用してリクエストできる追加のフィールドがサポートされています。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&fields=name,tags" \
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

final List<String> fields = new ArrayList<String>();
fields.add("name");
fields.add("tags");
searchParams.setFields(fields)

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);

```

</Tab>

<Tab title=".NET">

```csharp
IEnumerable<string> fields = new List<string>() { "name", "tags"};
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", fields: fields);

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", metadata_filters=metadata_search_filters, fields=["name", "tags"])

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        fields: "name,tags"
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>

<Message info>

これらのフィールドの詳細については、[ファイル (詳細)](r://file--full)、[フォルダ (詳細)](r://folder--full)、および[ウェブリンク (詳細)](r://web_link) のリソースを確認してください。

</Message>

<Message warning>

`fields`パラメータを使用して、項目の追加情報をクエリで照会すると、これらのフィールドといくつかの**基本**フィールド (`id`、`type`、`name`など) のみが返されます。レスポンスに最初から含まれていたフィールドは、明示的にリクエストする必要があります。

</Message>
