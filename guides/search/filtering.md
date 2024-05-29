---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/filtering
rank: 3
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/pagination
previous_page_id: search/query-operators
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/3-filtering.md
fullyTranslated: true
---
# 検索結果に対するフィルタ

[`GET /search`](e://get_search) APIでは、APIによって返された結果にフィルタをかけるためのさまざまな方法がサポートされています。

## コンテンツタイプによるフィルタ

デフォルトでは、名前、説明、ファイルコンテンツ、タグ、またはコメントが指定されたクエリと一致する項目が返されます。`content_types`パラメータを設定すると、定義したコンテンツタイプのクエリに一致する項目のみに検索を絞り込むことができます。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&content_types=name,tags" \
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

final List<String> contentTypes = new ArrayList<String>();
contentTypes.add("name");
contentTypes.add("tags");
searchParams.setContentTypes(contentTypes)

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);

```

</Tab>

<Tab title=".NET">

```csharp
var contentTypes = new List<string>();
contentTypes.Add("name");
contentTypes.Add("tags");

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", contentTypes: contentTypes);

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", content_types=["name", "tags"])

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        content_types:  [
            "name",
            "tags"
        ]
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>

| コンテンツタイプ       |                                   |
| -------------- | --------------------------------- |
| `name`         | `name`フィールドで定義されている、項目の名前。        |
| `description`  | `description`フィールドで定義されている、項目の説明。 |
| `file_content` | ファイルの実際のコンテンツ。                    |
| `comments`     | ファイルまたはフォルダに対するコメントのコンテンツ。        |
| `tags`         | `tags`フィールドで定義されている、項目に適用されるタグ。   |

## 日付によるフィルタ

デフォルトでは、指定した日付に作成されたファイルと指定した日付に更新されたファイルが返されます。ファイルまたはフォルダが最後に更新された日付でも、ファイルまたはフォルダが作成された日付でも結果にフィルタをかけることができます。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&created_at_range=2014-05-15T13:35:01Z,2015-05-15T13:35:01&updated_at_range=2014-05-15T13:35:01," \
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

String createdFromDateString = "2014-05-15T13:35:01Z";
String createdToDateString = "2015-05-15T13:35:01Z";
Date createdFromDate = sdf.parse(createdFromDateString);
Date createdToDate = sdf.parse(createdToDateString);
DateRange createdRange = new DateRange(createdFromDate, createdToDate);
searchParams.setCreatedRange(createdRange)

String updatedFromDateString = "2014-05-15T13:35:01Z";
Date updatedFromDate = sdf.parse(updatedFromDateString);
DateRange updatedRange = new DateRange(updatedFromDate, null);
searchParams.setUpdatedRange(updatedRange)

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);

```

</Tab>

<Tab title=".NET">

```csharp
var createdAtRangeFromDate = new DateTime(1988, 11, 18, 9, 30, 0, DateTimeKind.Utc);
var createdAtRangeToDate = new DateTime(2018, 11, 18, 9, 30, 0, DateTimeKind.Utc);
var updatedAtRangeFromDate = new DateTime(1988, 11, 18, 9, 30, 0, DateTimeKind.Utc);

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", contentTypes: contentTypes, createdAtRangeFromDate: createdAtRangeFromDate, createdAtRangeToDate: createdAtRangeToDate, updatedAtRangeFromDate: updatedAtRangeFromDate);

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", created_at_range=["2014-05-15T13:35:01Z", "2015-05-15T13:35:01Z"], updated_at_range=["2014-05-15T13:35:01Z", null])

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        created_at_range: "2014-05-15T13:35:01Z,2015-05-15T13:35:01Z",
        updated_at_range: "2014-05-15T13:35:01Z,"
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>

| クエリパラメータ           |                                                                |
| ------------------ | -------------------------------------------------------------- |
| `created_at_range` | 結果を返す`created_at`の日付の範囲を定義します。上限または下限を空にすると、範囲を期限なしにすることができます。 |
| `updated_at_range` | 結果を返す`updated_at`の日付の範囲を定義します。上限または下限を空にすると、範囲を期限なしにすることができます。 |

## ファイル拡張子によるフィルタ

デフォルトでは、さまざまな種類のファイル拡張子の項目が返されます。`file_extensions`クエリパラメータを使用すると、指定した1つ以上のファイル拡張子のファイルのみが返されるよう、検索結果にフィルタをかけることができます。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&file_extensions=pdf,txt" \
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

final List<String> fileExtensions = new ArrayList<String>();
fileExtensions.add("pdf");
fileExtensions.add("txt");
searchParams.setFileExtensions(fileExtensions)

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);

```

</Tab>

<Tab title=".NET">

```csharp
var fileExtensions = new List<string>();
fileExtensions.Add("pdf");
fileExtensions.Add("txt");

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", fileExtensions: fileExtensions);

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", file_extensions=["pdf", "txt"])

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        file_extensions:  [
            "pdf",
            "txt"
        ]
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>

## ファイルサイズによるフィルタ

デフォルトでは、さまざまなファイルサイズの項目が返されます。`size_range`クエリパラメータを使用すると、指定したファイルサイズを超えないファイルのみが返されるよう、検索結果にフィルタをかけることができます。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&size_range=10000,20000" \
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

SizeRange sizeRange = new SizeRange(10000, 20000);
searchParams.setSizeRange(sizeRange);

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);

```

</Tab>

<Tab title=".NET">

```csharp
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", sizeRangeLowerBoundBytes: 10000, sizeRangeUpperBoundBytes: 20000);

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", size_range=[10000,20000])

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        size_range: '10000,20000'
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>

## ファイルタイプによるフィルタ

デフォルトでは、ファイル、フォルダ、およびウェブリンクがすべて返されます。結果をそのうちの1つだけに絞り込むには、`type`クエリパラメータを`file`、`folder`、`web_link`のいずれかに設定します。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&type=file" \
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
searchParams.setType("file");

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);

```

</Tab>

<Tab title=".NET">

```csharp
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", type: "file");

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", type="file")

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        type: "file"
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>

## メタデータによるフィルタ

関連付けられたメタデータを使用して検索結果にフィルタをかけることも、メタデータのみに基づいてすべての検索を実行することもできます。どちらの場合も`mdfilters`クエリパラメータを使用します。

<CTA to="g://search/quick-start">

メタデータフィルタの詳細を確認する

</CTA>

## 所有者によるフィルタ

デフォルトでは、項目の所有者に関係なく、認証済みユーザーがアクセスできるすべての項目が返されます。特定のユーザーが所有する項目のみに絞り込むには、`owner_user_ids`クエリパラメータを使用します。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&owner_user_ids=34446362,462281242" \
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

final List<String> userIds = new ArrayList<String>();
userIds.add("34446362");
userIds.add("462281242");
searchParams.setOwnerUserIds(userIds)

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);

```

</Tab>

<Tab title=".NET">

```csharp
var userIds = new List<string>();
userIds.Add("34446362");
userIds.Add("462281242");

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", ownerUserIds: userIds);

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", owner_user_ids=["34446362", "462281242"])

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        owner_user_ids: "34446362,462281242"
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>

## 親フォルダによるフィルタ

デフォルトでは、ユーザーがアクセスできる任意のフォルダ内のすべての項目が返されます。特定のフォルダ内の項目のみに結果を絞り込むには、`ancestor_folder_ids`クエリパラメータを使用します。

<Tabs>

<Tab title="cURL">

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&ancestor_folder_ids=45235463,73445321" \
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

final List<String> folderIds = new ArrayList<String>();
folderIds.add("45235463");
folderIds.add("73445321");
searchParams.setAncestorFolderIds(folderIds)

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);

```

</Tab>

<Tab title=".NET">

```csharp
var folderIds = new List<string>();
folderIds.Add("45235463");
folderIds.Add("73445321");

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", ancestorFolderIds: folderIds);

```

</Tab>

<Tab title="Python">

```python
client.search().query("sales", ancestor_folder_ids=["45235463", "73445321"])

```

</Tab>

<Tab title="Node">

```js
client.search.query(
    'sales',
    {
        ancestor_folder_ids: "45235463,73445321"
    })
    .then(results => {
        // ...
    });

```

</Tab>

</Tabs>
