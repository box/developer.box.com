---
related_endpoints:
 - get_search
required_guides: []
---

# Searching trash

By default, any content in the user's trash is ignored in the search results.
To search the user's trash, the `trash_content` query parameter can be set to
`trashed_only`.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&trash_content=trashed_only" \
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
searchParams.setTrashContent("trashed_only");

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);
```

 </Tab>
 <Tab title='.NET'>

```csharp
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", mdFilters: filters, trashContent: "trashed_only");
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", metadata_filters=metadata_search_filters, trash_content="trashed_only")
```

 </Tab>
 <Tab title='Node'>

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

<Message info>

Currently the API only supports searching for content not in the trash
(`non_trashed_only`, default) or in the user's trash (`trashed_only`). It is
currently not possible to search for items in both locations at once.

</Message >
