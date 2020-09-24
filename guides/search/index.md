---
rank: 110
related_endpoints:
  - get_search
related_guides:
  - metadata/queries
required_guides: []
alias_paths:
  - /docs/search-for-content
  - /search/full-text-search
category_id: search
subcategory_id: null
is_index: true
id: search
type: guide
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: search/indexing
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/index.md
---
# Search

The Box API provides a way to find content in Box using
full-text search queries. Support for the Box search API is available
in all our supported SDKs and the CLI.

<Samples id='get_search' >

</Samples>

<Message notice>

Explore the [reference documentation](e://get_search) to learn more
about all the different features available to the search API.

</Message>

## Logical operators

The search API supports a few different
[search operators](g://search/logical-operators), including
`AND`, `OR`, `NOT` and `""`. These operators can be used to refine the search
results to only return items that match a more complicated combination of
search terms.

<CTA to='g://search/logical-operators'>

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

## Comparison to Metadata Queries

At the surface the search API seems very similar
to the [Metadata Query API][mdq], but there are several important differences
in how they operate. At a high level the Metadata Queries are
optimized for exactness and throughput, while regular search is optimized
for relevance to a human user.

<CTA to='g://metadata/queries/comparison'>

Learn more about the key differences

</CTA>

[mdq]: g://metadata/queries