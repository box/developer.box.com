---
---

# Create a metadata query

As a final step, let's look at how you can create a query to find specific files
and folders based on the metadata attached to those files/folders.

A [metadata query][query] provides a way to find files and
folders by searching for the metadata attached to them. The search syntax
is similar to SQL and it supports boolean operations and comparative operators
to perform powerful searches.

<CTA to='g://metadata/queries'>
  Learn more about creating queries
</CTA>

In our case, let's create a query to find any files or folders that have an
instance of the `customerInfo` metadata template attached to them. We will
filter this list down to any files that belong to a customer who's total account
value is more than $200,000.

<Tabs>
  <Tab title='cURL'>
    ```curl
    curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
         -H 'Authorization: Bearer <ACCESS_TOKEN>" '
         -H 'Content-Type: application/json'
         -d '{
           "from": "enterprise_123456.customerInfo",
           "fields": [
             "name",
             "enterprise_123456.customerInfo.name"
             "enterprise_123456.customerInfo.tav"
           ],
           "query": "tav >= :value",
           "query_params": {
             "value": 200000
           },
           "ancestor_folder_id": "0"
         }'
    ```
  </Tab>
</Tabs>

This API will return a list of matched files and folders, as well as the
metadata that matched the query for that file.

```json
{
  "entries":[
    {
      "type":"file",
      "id":"11111",
      "etag":"0",
      "metadata":{
        "enterprise_123456":{
          "customerInfo":{
            "name": "Box",
            "tav": 1000000,
            "$parent": "folder_12345,",
            "$scope": "enterprise_123456",
            "$template": "customerInfo",
            "$version": 1
          }
        }
      }
    }
  ],
  "limit": 20,
  "next_marker":"AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
}
```

By default this API returns `20` items per page, but more items can be requested
using marker-based pagination.

<CTA to='g://metadata/queries'>
  Learn more about metadata queries
</CTA>

<Next>I've queried a file using metadata</Next>

[query]: g://metadata/queries
