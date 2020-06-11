---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Comparison to regular search

At the surface the [Metadata Query API][mdq_api] seems very similar to the
[Search for content API][search] API, but there are several important
differences in how they operate. At a high level the Metadata Query API is
optimized for exactness and throughput, while regular search is optimized for
relevance to a human user.

## Deep comparison

<!-- markdownlint-disable line-length -->

|                   | [Metadata Query API][mdq_api]                                                                                                                                                                                                                                                                                       | [Search API][search]                                                                                                                                                                                                                                                                                                                                    |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| What is indexed?  | This API only return files/folders based on the values in the metadata templates that are searched                                                                                                                                                                                                                  | This API return files, folders and web links the based on values in the item names, descriptions, contents (up to the first 10,000 bytes) as well as the associated metadata template instances                                                                                                                                                         |
| Indexing time     | This API will return accurate results as soon as metadata has been added, removed, updated or deleted for a file or folder                                                                                                                                                                                          | This API us subject to a search indexing delay, which is typically 10 minutes yet may be longer in some cases. This means that items may not be returns for more than 10 minutes after metadata has been updated                                                                                                                                        |
| Matching          | This API uses exact matching based on SQL conventions. Results are returned based on a specified sort order                                                                                                                                                                                                         | This API uses fuzzy matching and may return results that vary based on string tokenization, removal of special characters, and other search concepts. Result order is based on either relevance or the updated date of the item                                                                                                                         |
| Conditional logic | This API supports multi-part boolean expressions with comparison operators                                                                                                                                                                                                                                          | This API has limited support for conditions. It only supports conditions on a single metadata field and does not support boolean operators on metadata                                                                                                                                                                                                  |
| Response type     | This API returns both the matched file/folder and the associated metadata matched by the query                                                                                                                                                                                                                      | This API only returns the matched item. A subsequent API call is needed to return each item's metadata                                                                                                                                                                                                                                                  |
| Throughput        | This API is currently subject to per-user rate limits and to a 10 requests per second per enterprise limit                                                                                                                                                                                                          | This API supports 6 searches per second per user, up to 60 searches per minute and 12 searches per second per enterprise                                                                                                                                                                                                                                |
| Scale             | This API has no limit on the number of items with the specified metadata template that can be returned, but queries with more than 10,000 template instances require a suitable [index](g://metadata/queries/indexes) to be created. It is recommended to only send queries which match no more than 2,000 results. | This API has no limit on number of items with the specified metadata template that can be returned, yet the response time increases significantly as the number of items matching the search grows. This API does have a limit of up to 10 million results for a query. It is recommended to only send queries which match no more than 50,000 results. |
| Scope             | This API is always limited to the content to which the user has access                                                                                                                                                                                                                                              | This API may be either limited to the content to which the user has access (`​user_content​`) or to all content in the enterprise (`​enterprise_content​`).                                                                                                                                                                                             |

<!-- markdownlint-enable line-length -->

<Message warning>
  Search API calls that match more than 10,000 results may result in slight
  changes in relevance. This may result in duplicate results and results that
  are not returned. Search should not be considered an ​exact matching​ solution
  on large data sets.
</Message>

## Scenarios

The following are some example scenarios that may help you decide what API to use.

### Searching an entire enterprise for a term

You want to find all content in an enterprise with content or metadata that
matches the keyword `Guarantee`.

In this case the [Search API][search] is recommended. This API matches terms
in both content and metadata, and can be scoped to find all content in the
entire enterprise.

### Searching for multiple metadata values

You want to find all documents with the metadata template `​Contract​` having a
value greater than $100,000, a renewal date in 2019, and which are ​not​ associated
with account number `​1234`.

In this case the [Metadata Query API][mdq_api] is recommended. With a metadata
query you can write boolean expressions that evaluate multiple fields in
a metadata template, such as a number, a date, and a string.

### Mixing metadata and content search

You want to find all documents with the metadata template `​Contract​` having a
value greater than $100,000, renewal date in 2019, which are ​not​ associated with
account number `​1234`, ​and which contain the term “Sale” in the title or document
body.

This scenarios is currently **not supported**. At the moment neither of the APIs
supports mixing both fuzzy search (searching for "Sale") and the boolean
expression matching metadata fields.

[mdq_api]: e://post_metadata_queries_execute_read
[search]: e://get_search
