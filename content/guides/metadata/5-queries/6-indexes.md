---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Indexes

Due to scale considerations a metadata query might return a `HTTP 403` error
when the metadata template has been applied to more than 10,000 files or
folders. A search index can be created to resolve this error for a specific
search query.

<Message notice>
  We expect this limit to be raised but not to be eliminated in the future.
</Message>

## Request an index

<Message info>

At this time you will need to contact the
[Box Metadata Query team](mailto:metadata-query-feedback@box.com)
to create an search index.

</Message>

To create an index, we will need to be informed of the intended query to be
run, including the exact values for the `from​`, `​query​`, and `​order_by​`
parameters of the request.

An index will then be created and you will be provided with the the name of this
index. If you prefer to specify a name for the index please provide that name
upon requesting the index.

Indexes are automatically applied during the metadata querying process when
more than 10,000 files or folders are being searched. No further action beyond
creating the index is needed to have the index applied. 

<Message warning>

The `LIKE`, `ILIKE`, `NOT LIKE`, and `NOT ILIKE` operators can not
be used in the query for an index.

</Message>

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

[support]: https://community.box.com/t5/custom/page/page-id/BoxSearchLithiumTKB
