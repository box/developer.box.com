---
related_endpoints:
 - get_search
required_guides: []
---

# Finding recent shared links

By default, the search API only returns items that are either owned by the user
or items that the user has been explicitly collaborated on. These search results
do not include any items that a user might have accessed recently through a
shared link.

To enable shared links in the API, the `include_recent_shared_links` query
parameter can be set to `true`.

<!-- markdownlint-disable line-length -->
<Tabs>
 <Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&include_recent_shared_links=true" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

 </Tab>
 <Tab title='Python'>

```python
client.search().query("sales", metadata_filters=metadata_search_filters, include_recent_shared_links=True)
```

 </Tab>
 <Tab title='Node'>

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
<!-- markdownlint-enable line-length -->

<Message warning>

Please be aware that this parameter is relatively new and therefore support for
it in our Java and Windows SDKs is still a work in progress.

</Message >

<Message danger>

Please be very aware that when this parameter has been set to true, the format
of the response of this API changes to return a list of
[Search Results with Shared Links](r://search-results-with-shared-links)

</Message >
