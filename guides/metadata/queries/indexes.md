---
related_endpoints:
  - post_metadata_queries_execute_read
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/indexes
rank: 6
type: guide
total_steps: 7
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: metadata/queries/comparison
previous_page_id: metadata/queries
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/6-indexes.md
---
# Indices

Due to scale considerations a metadata query might return a `HTTP 403` error
when the metadata template has been applied to more than 10,000 files or
folders. A search index can be created to resolve this error for a specific
search query.

<Message notice>

We expect this limit to be raised but not to be eliminated in the future.

</Message>

## Limitations

To maintain consistency & availability of the Metadata service for all
customers, we have a few Query scale limitations.

* **Indexes per Template**: Up to 5 indexes/template can be created
* **Field in each index**: Each template can have up to 5 fields indexed for
  filtering

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

## Get list of created indices

To obtain a list of indices created for a given metadata template
and scope, use the [list metadata query indices][mdq-get-indices] endpoint.

When making a request to the endpoint, supply the scope of the template (either
global or enterprise), as well as the template key.

<Samples id='get_metadata_query_indices'>

</Samples>

[mdq-get-indices]: endpoint://get_metadata_query_indices