---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Paginate and sort

By default only 20 query results are returned per page and the order of these
results is not guaranteed and may change. Pagination and sorting allow for
getting more results and defining the order of the results.

## Pagination

By default the API only returns the first page of 20 results. To request more
results per page the `limit` query parameter can be send with the request.

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json'
     -d '{
       "from": "enterprise_123456.contractTemplate",
       "fields": ["name"],
       "ancestor_folder_id": "5555",
       "limit": 100
     }'
```

The maximum value for `limit` is 100. To return more pages of results each page
returns a `next_marker` value.

```json
{
  "entries":[...],
  "next_marker":"AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
}
```

This `next_marker` can be used to form a new request for the next page of
results.

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json'
     -d '{
       "from": "enterprise_123456.contractTemplate",
       "fields": ["name"], 
       "ancestor_folder_id": "5555",
       "limit": 100,
       "marker": "AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
     }'
```

<Message notice>
  When a response does not include a next marker it indicates that no more
  matching results exist.
</Message>

<Message warning>
  To use the `next_marker` it is important to use the exact same query for the
  next page of results. The API will return an error if any of the parameters
  like the `query`, `query_params`, or others are changed.
</Message>

## Sort

Results can be ordered by any of the supported metadata field types. These only
supported types currently are `float`, `date`, and `string`
[fields][metadata-fields]. Ordering by `enum` or `multiSelect` value is
currently not supported.

To order result, provide one or more field keys to sort by, as well as a
direction.

```json
"order_by": [
  {
    "field_key": "amount”,
    "direction": "desc"
  },
  {
    "field_key": "created_at"
    "direction": "desc"
  }
]
```

<Message warning>
  The ordering direction must be the same for all ​​specified keys. In other
  words, for each `field_key` the `direction` must be the same.
</Message>

[metadata-fields]: g://metadata/fields
