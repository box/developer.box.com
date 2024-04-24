---
related_endpoints:
 - get_search
required_guides: []
---

# Requesting extra fields

By default, the search API returns the **standard** format of a
[File](r://file), [Folder](r://folder), or [Web Link](r://web_link). Each of
these resources supports additional fields that can be requested through the
`fields` query parameter.

<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&fields=name,tags" \
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

final List<String> fields = new ArrayList<String>();
fields.add("name");
fields.add("tags");
searchParams.setFields(fields)

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);
```

 </Tab>
 <Tab title='.NET'>

```csharp
IEnumerable<string> fields = new List<string>() { "name", "tags"};
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", fields: fields);
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", metadata_filters=metadata_search_filters, fields=["name", "tags"])
```

 </Tab>
 <Tab title='Node'>

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

For more details on these fields, please check out the
[full File](r://file--full), [full Folder](r://folder--full),
and [full Web Link](r://web_link) resources.

</Message>

<Message warning>

When the `fields` parameter is used to query additional information about the
items, only those fields and a few **base** fields (`id`, `type`, `name`, etc)
are returned. Any fields that were originally in the response would now have to
be requested explicitly.

</Message>
