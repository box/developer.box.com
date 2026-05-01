---
related_endpoints:
 - get_search
required_guides: []
---

# Enterprise-wide search

By default, a search is only performed against the content that the
authenticated user has access to. In some cases, administrators might want to
search against all content owned by all users. For this use-case the `scope`
query parameter can be set to a value of `enterprise_content`.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&scope=enterprise_content" \
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
searchParams.setScope("enterprise_content");

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);
```

 </Tab>
 <Tab title='.NET'>

```csharp
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", mdFilters: filters, scope: "enterprise_content");
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", metadata_filters=metadata_search_filters, scope="enterprise_content")
```

 </Tab>
 <Tab title='Node'>

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

<Message warning>

The `enterprise_content` scope (also called Global Content Manager, or 'GCM') can be requested by an admin through our
[support channels](p://support). Once this scope has been enabled for an app, it
will allow an admin user to query for content across the entire enterprise and not
only the content that they have access to. 
For more information about enabling this scope, see [Global Content Manager](p://https://developer.box.com/guides/api-calls/permissions-and-errors/scopes#global-content-manager-gcm).

</Message >
