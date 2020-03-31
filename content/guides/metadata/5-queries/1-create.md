---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Create a query

A metadata query is a `POST` request to the ​`/metadata_queries/execute_read`-
endpoint, in which the body contains all the parts of the metadata query. Most
important here are the `from` attribute that specifies the template to search
for, the `ancestor_folder_id` to specify the folder to search in, and the
`query` to determine any template fields to search by.

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json'
     -d '{
       "from": "enterprise_123456.contractTemplate",
       "query": "amount >= :value",
       "query_params": {
         "value": 100
       },
       "ancestor_folder_id": "5555",
       "use_index": "amountAsc",
       "order_by": [
         {
           "field_key": "amount",
           "direction": "asc"
         }
       ],
       "limit": 100
     }'
```

For more details about all the available parameters, check out any of our other
[metadata query guides](g://metadata/queries), or the associated [endpoint
reference](e://post_metadata_queries_execute_read).

<CTA to='g://metadata/queries/syntax'>
  Learn more about the query syntax
</CTA>

## Response

Any files or folders that match the query are returned in the API response.
The body of the response is a JSON object with a list of `entries` for each file
or folder, and a `next_marker` value that you can use to find the next page of
results. Each of the entries will have an `item` representing the file or
folder, as well as a `metadata` instance containing the metadata attached to the
file or folder. 

```json
{
  "entries":[
    {
      "item":{
        "type":"file",
        "id":"1617554169109",
        "file_version":{
          "type":"file_version",
          "id":"1451884469385",
          "sha1":"69888bb1bff455d1b2f8afea75ed1ff0b4879bf6"
        },
        "sequence_id":"0",
        "etag":"0",
        "sha1":"69888bb1bff455d1b2f8afea75ed1ff0b4879bf6",
        "name":"My Contract.docx",
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
            },
            {
              "type":"folder",
              "id":"15017998644",
              "sequence_id":"0",
              "etag":"0",
              "name":"Contracts"
            },
            {
              "type":"folder",
              "id":"15286891196",
              "sequence_id":"1",
              "etag":"1",
              "name":"North America"
            },
            {
              "type":"folder",
              "id":"16125613433",
              "sequence_id":"0",
              "etag":"0",
              "name":"2017"
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
          "login":"admin@company.com"
        },
        "modified_by":{
          "type":"user",
          "id":"193973366",
          "name":"Box Admin",
          "login":"admin@company.com"
        },
        "owned_by":{
          "type":"user",
          "id":"193973366",
          "name":"Box Admin",
          "login":"admin@company.com"
        },
        "shared_link":null,
        "parent":{
          "type":"folder",
          "id":"16125613433",
          "sequence_id":"0",
          "etag":"0",
          "name":"2017"
        },
        "item_status":"active"
      },
      "metadata":{
        "enterprise_123456":{
          "someTemplate":{
            "$parent":"file_161753469109",
            "$version":0,
            "customerName":"Phoenix Corp",
            "$type":"someTemplate-3d5fcaca-f496-4bb6-9046-d25c37bc5594",
            "$typeVersion":0,
            "$id":"ba52e2cc-371d-4659-8d53-50f1ac642e35",
            "amount":100,
            "claimDate":"2016-04-10T00:00:00Z",
            "region":"West",
            "$typeScope":"enterprise_123456"
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

<CTA to='g://metadata/queries/pagination'>
  Learn more about paginating query results
</CTA>