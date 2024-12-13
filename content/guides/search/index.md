---
rank: 210
related_endpoints:
 - get_search
related_guides:
 - metadata/queries
required_guides: []
alias_paths:
  - /docs/search-for-content
  - /search/full-text-search
---

# Search

The Box API provides a way to find content in Box using
full-text search queries. Support for the Box search API is available
in all our supported SDKs and the CLI.

<Samples id='get_search' />

<Message notice>
  Explore the [reference documentation](e://get_search) to learn more
  about all the different features available to the search API.
</Message>

## Query operators

The search API supports a few different
[search operators](g://search/query-operators), including
`AND`, `OR`, `NOT` and `""`. These operators can be used to refine the search
results to only return items that match a more complicated combination of
search terms.

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=box%20AND%20sales" \
    -H "Authorization: Bearer <ACCESS_TOKEN>"
```

<CTA to='g://search/query-operators'>
  Learn more about using logical operators
</CTA>

## Search Indexing

Box keeps a search index for any files or folder stored in Box.
Every time a file or folder is changed, those words are added to
the index. When a search is performed, the API looks in the search
index for files and folders that match the query. When content is added,
updated, or deleted in Box, the search index is updated accordingly.

<CTA to='g://search/indexing'>
  Learn more about the Box search index
</CTA>

<Message info>

In some cases an index might not be updated even after 10 minutes.
In those cases we recommend reaching out to [Box Support][support]
to get the issue resolved.

</Message>

<Message warning>
  If your enterprise has full text search turned off
  (e.g. [Keysafe][keysafe] customers), characters within a document
  cannot be searched. If you need to find out if full
  text search is turned off, reach out to your account team.
</Message>

## Comparison to Metadata Queries

At the surface the search API seems very similar
to the [Metadata Query API][mdq], but there are several important differences
in how they operate. At a high level the Metadata Queries are
optimized for exactness and throughput, while regular search is optimized
for relevance to a human user.

|                   | [Metadata Query API][mdq_api]                                                                                                                                                                                                                                                                                       | [Search API][search]                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is indexed?  | This API only return files/folders based on the values in the metadata templates that are searched                                                                                                                                                                                                                  | This API returns files, folders and web links based on values in the item names, descriptions, contents (up to the first 10,000 bytes) as well as the associated metadata template instances                                                                                                                                                            |
| Indexing time     | This API will return accurate results as soon as metadata has been added, removed, updated or deleted for a file or folder                                                                                                                                                                                          | This API is subject to a search indexing delay, which is typically 10 minutes yet may be longer in some cases. This means that items may not be returned for more than 10 minutes after metadata has been updated                                                                                                                                       |
| Matching          | This API uses exact matching based on SQL conventions. Results are returned based on a specified sort order                                                                                                                                                                                                         | This API uses fuzzy matching and may return results that vary based on string tokenization, removal of special characters, and other search concepts. Result order is based on either relevance or the updated date of the item                                                                                                                         |
| Conditional logic | This API supports multi-part boolean expressions with comparison operators                                                                                                                                                                                                                                          | This API has limited support for querying by metadata. It only supports querying 1 metadata template at a time and only allows simple query operations.                                                                                                                                                                                                 |
| Response type     | This API returns both the matched file/folder and the associated metadata matched by the query                                                                                                                                                                                                                      | This API only returns the matched item. A subsequent API call is needed to return each item's metadata                                                                                                                                                                                                                                                  |
| Throughput        | This API is currently subject to per-user rate limits and to a 10 requests per second per enterprise limit                                                                                                                                                                                                          | This API supports 6 searches per second per user, up to 60 searches per minute and 12 searches per second per enterprise                                                                                                                                                                                                                                |
| Scale             | This API has no limit on the number of items with the specified metadata template that can be returned. It is recommended to only send queries which match no more than 2,000 results. | This API has no limit on number of items with the specified metadata template that can be returned, yet the response time increases significantly as the number of items matching the search grows. This API does have a limit of up to 10 million results for a query. It is recommended to only send queries which match no more than 50,000 results. |
| Scope             | This API is always limited to the content to which the user has access                                                                                                                                                                                                                                              | This API may be either limited to the content to which the user has access (`​user_content​`) or to all content in the enterprise (`​enterprise_content​`).                                                                                                                                                                                             |

<CTA to='g://metadata/queries/comparison'>
  Learn more about the metadata query API
</CTA>

[mdq]: g://metadata/queries
[mdq_api]: e://post_metadata_queries_execute_read
[search]: e://get_search
[support]: page://support
[keysafe]: https://www.box.com/security/keysafe