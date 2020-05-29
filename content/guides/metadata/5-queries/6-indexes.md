---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Indexes

Due to scale considerations a metadata query might return a `HTTP 403` error
when the metadata template has been applied to more than 10,000 files or folders.
A search index can be created to resolve this error for a specific search query.

If the number of metadata instances exceeds 10,000 then a metadata query request
which does not include a suitable **index** in the `​use_index​` parameter will
result in an error. The error will inform the caller to specify a suitable index
as the argument to the `​use_index​` parameter. 

<Message notice>
  We expect this limit to be raised but not to be eliminated in the future.
</Message>

## Request an index

At this time you will need to contact Box to create an search index. Please
reach out to your customer success manager or the Box [support team][support].

To create an index, we will need to be informed of the intended query will be
run including the exact values for the `from​`, `​query​`, and `​order_by​`
parameters of the request. 

An index will then be created and you will be provided with the the name of this
index which then needs be used in the `​use_index​` parameter of a query
request. 

If you prefer to specify a name for the index please provide that name upon
requesting the index.

### Example index request

The following is an example request for an index. It is essential to include all
the information for the `​from`, `query`, and `order_by​` parameters.

<!-- markdownlint-disable line-length -->

|                   |                                                                                                                                                                                    |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Query description | Returns files of the type Customer Submission which are associated with a specific Account Number and for which the Status is Pending. Orders the response by the Submission Date. |
| `from`            | `enterprise_123456.customerInfo`                                                                                                                                                   |
| `query`           | `accountNumber = :argAccountNum AND status = :argStatus`                                                                                                                           |
| `order_by`        | `[{ "field_key": "submissionDate","direction": "desc" }]`                                                                                                                          |

<!-- markdownlint-enable line-length -->

## Query with an index

To query with an index, use the name of the index we provided when performing
your query as the value for the [`use_index`][use_index] parameter.

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
     -H 'Authorization: Bearer <ACCESS_TOKEN>" '
     -H 'Content-Type: application/json'
     -d '{
       "from": "enterprise_123456.customerInfo",
       "query": "accountNumber = :argAccountNum AND status = :argStatus",
       "query_params": {
         "argAccountNum": 12345,
         "argStatus": "active"
       },
       "ancestor_folder_id": "5555",
       "use_index": "yourIndexName",
       "order_by": [
         {
           "field_key": "submissionDate",
           "direction": "desc"
         }
       ]
     }'
```

<Message warning>
  The parameters used in a query must match exactly what was provided
  for the creation of the index.
</Message>

[support]: https://community.box.com/t5/custom/page/page-id/BoxSearchLithiumTKB
[use_index]: e://post-metadata-queries-execute-read/#param-use_index
