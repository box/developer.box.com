---
related_endpoints:
 - get_search
required_guides: []
---

# Filter search results

The [`GET /search`](e://get_search) API supports a variety of
different ways to filter the results returned by the API.

## Filter by content type

By default, a search returns items for which either the name, description, file
content, tags, or comments match the query provided. By setting the
`content_types` parameter the search can be narrowed down to only the items that
match the query for the content type defined.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&content_types=name,tags" \
    -H "Authorization: Bearer <ACCESS_TOKEN>"
```

 </Tab>
 <Tab title='Java'>

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
 <Tab title='.NET'>

```csharp
var contentTypes = new List<string>();
contentTypes.Add("name");
contentTypes.Add("tags");

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", contentTypes: contentTypes);
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", content_types=["name", "tags"])
```

 </Tab>
 <Tab title='Node'>

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

| Content type   |                                                                      |
| -------------- | -------------------------------------------------------------------- |
| `name`         | The name of the item, as defined by its `name` field.                |
| `description`  | The description of the item, as defined by its `description` field.  |
| `file_content` | The actual content of the file.                                      |
| `comments`     | The content of any of the comments on a file or folder.              |
| `tags`          | Any tags that are applied to an item, as defined by its `tags` field. |

## Filter by date

By default, search returns files created at any time, and updated at any time.
It is possible to filter results by both the date the file or folder was
last updated or when it was created.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&created_at_range=2014-05-15T13:35:01Z,2015-05-15T13:35:01&updated_at_range=2014-05-15T13:35:01," \
    -H "Authorization: Bearer <ACCESS_TOKEN>"
```

 </Tab>
 <Tab title='Java'>

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
 <Tab title='.NET'>

```csharp
var createdAtRangeFromDate = new DateTime(1988, 11, 18, 9, 30, 0, DateTimeKind.Utc);
var createdAtRangeToDate = new DateTime(2018, 11, 18, 9, 30, 0, DateTimeKind.Utc);
var updatedAtRangeFromDate = new DateTime(1988, 11, 18, 9, 30, 0, DateTimeKind.Utc);

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", contentTypes: contentTypes, createdAtRangeFromDate: createdAtRangeFromDate, createdAtRangeToDate: createdAtRangeToDate, updatedAtRangeFromDate: updatedAtRangeFromDate);
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", created_at_range=["2014-05-15T13:35:01Z", "2015-05-15T13:35:01Z"], updated_at_range=["2014-05-15T13:35:01Z", null])
```

 </Tab>
 <Tab title='Node'>

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

| Query parameter    |                                                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `created_at_range` | Defines a range of `created_at` dates for which to return results. The upper or lower bound can be left empty to create an open-ended range. |
| `updated_at_range` | Defines a range of `updated_at` dates for which to return results. The upper or lower bound can be left empty to create an open-ended range. |

## Filter by file extension

By default, a search returns items with any kind of file extension. It is
possible to filter search results to only files with one or more specific file
extensions using the `file_extensions` query parameter.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&file_extensions=pdf,txt" \
    -H "Authorization: Bearer <ACCESS_TOKEN>"
```

 </Tab>
 <Tab title='Java'>

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
 <Tab title='.NET'>

```csharp
var fileExtensions = new List<string>();
fileExtensions.Add("pdf");
fileExtensions.Add("txt");

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", fileExtensions: fileExtensions);
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", file_extensions=["pdf", "txt"])
```

 </Tab>
 <Tab title='Node'>

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

## Filter by file size

By default, a search returns items of any file size. It is
possible to filter search results to only files within a specific file
size using the `size_range` query parameter.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&size_range=10000,20000" \
    -H "Authorization: Bearer <ACCESS_TOKEN>"
```

 </Tab>
 <Tab title='Java'>

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
 <Tab title='.NET'>

```csharp
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", sizeRangeLowerBoundBytes: 10000, sizeRangeUpperBoundBytes: 20000);
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", size_range=[10000,20000])
```

 </Tab>
 <Tab title='Node'>

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

## Filter by file type

By default, a search returns both files, folders, and web links. To narrow down
the results to only one of these, a `type` query parameter can be set to either
`file`, `folder` or `web_link`.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&type=file" \
    -H "Authorization: Bearer <ACCESS_TOKEN>"
```

 </Tab>
 <Tab title='Java'>

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
 <Tab title='.NET'>

```csharp
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", type: "file");
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", type="file")
```

 </Tab>
 <Tab title='Node'>

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

## Filter by metadata

It is possible to filter search results by their associated metadata, or even
perform entire searches based on only the metadata, all using the `mdfilters`
query parameter.

<CTA to="g://search/quick-start">
  Learn more about metadata filters
</CTA>

## Filter by owner

By default, a search returns all the items the authenticated user has access to,
regardless of who owns the items. To narrow down to only items owned by specific
users, use the `owner_user_ids` query parameter.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&owner_user_ids=34446362,462281242" \
    -H "Authorization: Bearer <ACCESS_TOKEN>"
```

 </Tab>
 <Tab title='Java'>

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
 <Tab title='.NET'>

```csharp
var userIds = new List<string>();
userIds.Add("34446362");
userIds.Add("462281242");

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", ownerUserIds: userIds);
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", owner_user_ids=["34446362", "462281242"])
```

 </Tab>
 <Tab title='Node'>

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

## Filter by parent folder

By default, a search returns all the items in any folder the user has access
to. To narrow down the results to only items in specific folders, use the
`ancestor_folder_ids` query parameter.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&ancestor_folder_ids=45235463,73445321" \
    -H "Authorization: Bearer <ACCESS_TOKEN>"
```

 </Tab>
 <Tab title='Java'>

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
 <Tab title='.NET'>

```csharp
var folderIds = new List<string>();
folderIds.Add("45235463");
folderIds.Add("73445321");

BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", ancestorFolderIds: folderIds);
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", ancestor_folder_ids=["45235463", "73445321"])
```

 </Tab>
 <Tab title='Node'>

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
