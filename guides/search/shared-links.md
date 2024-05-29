---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/shared-links
rank: 8
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/fields
previous_page_id: search/trash
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/8-shared-links.md
fullyTranslated: true
---
# 最近の共有リンクの検索

デフォルトで検索APIによって返されるのは、ユーザーが所有する項目か、ユーザーが明示的にコラボレータに設定されている項目のみです。これらの検索結果には、ユーザーが共有リンクを介して最近アクセスした可能性がある項目は含まれません。

このAPIで共有リンクを有効にするには、`include_recent_shared_links`クエリパラメータを`true`に設定します。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&include_recent_shared_links=true" \
    -H "Authorization: Bearer <ACCESS_TOKEN>"

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", metadata_filters=metadata_search_filters, include_recent_shared_links=True)

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        include_recent_shared_links: true
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>

<Message warning>

このパラメータは比較的新しいため、BoxのJava SDKとWindows SDKでのこのパラメータのサポートはまだ対応中であることに注意してください。

</Message >

<Message danger>

このパラメータがtrueに設定されている場合は、このAPIのレスポンス形式が[検索結果 (複数の共有リンクを含む)](r://search-results-with-shared-links) のリストを返すよう変更されることに十分注意してください。

</Message >
