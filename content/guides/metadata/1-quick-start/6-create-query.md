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
      "item":{
        "type":"file",
        "id":"11111",
        "file_version":{
          "type":"file_version",
          "id":"222222",
          "sha1":"69888bb1bff455d1b2f8afea75ed1ff0b4879bf6"
        },
        "sequence_id":"0",
        "etag":"0",
        "sha1":"69888bb1bff455d1b2f8afea75ed1ff0b4879bf6",
        "name":"Contract.docx",
        "description":"",
        "size":25600,
        "path_collection":{
          "total_count":4,
          "entries":[
            {
              "type":"folder",
              "id":"0",
              "sequence_id":null,
              "etag":null,
              "name":"All Files"
            }
          ]
        },
        "created_at":"2017-04-20T12:55:27-07:00",
        "modified_at":"2017-04-20T12:55:27-07:00",
        "trashed_at":null,
        "purged_at":null,
        "content_created_at":"2017-01-06T17:59:01-08:00",
        "content_modified_at":"2017-01-06T17:59:01-08:00",
        "created_by":{
          "type":"user",
          "id":"193973366",
          "name":"Box Admin",
          "login":"admin@example.com"
        },
        "modified_by":{
          "type":"user",
          "id":"193973366",
          "name":"Box Admin",
          "login":"admin@example.com"
        },
        "owned_by":{
          "type":"user",
          "id":"193973366",
          "name":"Box Admin",
          "login":"admin@example.com"
        },
        "shared_link":null,
        "parent":{
          "type":"folder",
          "id":"0",
          "sequence_id":"0",
          "etag":"0",
          "name":"All Files"
        },
        "item_status":"active"
      },
      "metadata":{
        "enterprise_123456":{
          "someTemplate":{
            "name": "Box",
            "industry": "Technology",
            "tav": 1000000,
            "$id": "01234500-12f1-1234-aa12-b1d234cb567e",
            "$parent": "folder_12345,",
            "$scope": "enterprise_34567",
            "$template": "customerInfo",
            "$type": "customerInfo-6bcba49f-ca6d-4d2a-a758-57fe6edf44d0",
            "$typeVersion": 2,
            "$version": 1,
            "$canEdit": true
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
