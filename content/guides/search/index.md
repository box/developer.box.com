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
---

# Search

The Box API provides a way to find content in Box using
full-text search queries. 

<Sample id='get_search' />

<CTA to='e://get_search'>
  Explore the search API reference documentation
</CTA>

## Logical operators

The search API supports a few different search operators, including
`AND`, `OR`, `NOT` and `""`.

<CTA to='g://search/logical-operators'>
  Learn more about using logical operators
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
