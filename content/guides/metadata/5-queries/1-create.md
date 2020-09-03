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
       "fields": [
         "name",
         "metadata.enterprise_123456.contractTemplate.customerName",
         "metadata.enterprise_123456.contractTemplate.amount" 
       ],
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
results. Each of the entries will represent the file or
folder that matched the query, and only any fields explicitly requested in the
`field` parameter are returned.

```json
{
  "entries":[
    {
      "type": "file",
      "id": "1617554169109",
      "name": "My Contract.docx",
      "metadata":{
        "enterprise_123456":{
          "contractTemplate":{
            "$parent": "file_161753469109",
            "$scope": "enterprise_123456",
            "$template": "contractTemplate",
            "$version":0,
            "customerName":"Phoenix Corp",
            "amount":100
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