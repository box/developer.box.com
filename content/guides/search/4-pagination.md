---
related_endpoints:
 - get_search
required_guides: []
---

# Pagination

The search API supports offset-based pagination using the `offset` and `limit`
query parameters. Marker-based pagination is not supported.

## API Pagination

To fetch the first page of search results, the API needs to be called
either without the `offset` parameter, or with the `offset` set to `0`. The
`limit` field is optional.

```curl
curl https://api.box.com/2.0/search?query=sales&offset=0&limit=100 \
  -H "authorization: Bearer ACCESS_TOKEN"
```

To fetch the next page of entries the API needs to be called with
an `offset` parameter that's equals the sum of the previous `offset` value and
limit returned in the previous result, `previous_offset + previous_limit`.

```curl
curl https://api.box.com/2.0/search?query=sales&offset=100&limit=100 \
  -H "authorization: Bearer ACCESS_TOKEN"
```

<Message type='notice'>
  Note that the `offset` should be increased by the previous `limit` and not by
  the size of the entries in the response array, as this may be less than the
  limit. Generally we advise using the value of the `limit` in the response
  object to increase the `offset` value.
</Message>

The final page of items has been requested when the next `offset` value exceeds
the `total_count` value in the response object. At this point there are no more
items to fetch.

<CTA to="g://api-calls/pagination/offset-based">
  Learn more about offset-based pagination
</CTA>

## SDK Pagination

Each of our SDKs has built-in support for API pagination. The following code
samples show how to use pagination in the search API.

<Tabs>
 <Tab title='Java'>

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
 <Tab title='.NET'>

```csharp
BoxCollection<BoxItem> page1 = await client.SearchManager
    .QueryAsync("sales", limit: 50);
BoxCollection<BoxItem> page2 = await client.SearchManager
    .QueryAsync("sales", limit: 50, offset: 50);
```

 </Tab>
 <Tab title='Python'>

```python
page1 = client.search().query(query='sales', limit=50)
page2 = client.search().query(query='sales', limit=50, offset=50)
```

 </Tab>
 <Tab title='Node'>

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
