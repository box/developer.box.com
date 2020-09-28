---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/query-operators
rank: 2
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/filtering
previous_page_id: search/indexing
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/2-query-operators.md
---
# Query operators

The [`GET /search`](e://get_search) API supports a variety of
different query operators to help refining the results returned
by the API.

All of these operations are passed into the `query` parameter when
creating the search.

## Exact matches with `""`

By wrapping a query in double quotes (`""`) only exact matches are
returned by the API. Exact searches do not return search matches
based on specific character sequences. Instead, they return
matches based on phrases, that is, word sequences.

For example, a search for `"Blue-Box"` may return search results
including the sequence `"blue.box"`, `"Blue Box"`, and `"Blue-Box"`;
any item containing the words `Blue` and `Box` consecutively, in
the order specified.

## Matching multiple terms with `AND`

When the `AND` operator is used, the search returns items that
contain both the search terms on the left and right of the operator.

For example, a search for `marketing AND BoxWorks` returns items
that have both `marketing` and `BoxWorks` within its text in any order.
It does not return a result that only has `BoxWorks` in its text.

## Matching either search term with `OR`

When the `OR` operator is used, the search returns items that
contain either the search terms on the left or right of the operator.

For example, a search for `marketing OR BoxWorks` returns a result that
has either `marketing` or `BoxWorks` within its text. Using this
operator is not necessary as we implicitly interpret multi-word
queries as `OR` unless another supported boolean term is used.

## Excluding search terms with `NOT`

When the `NOT` operator is used, the search returns items that
do not contain the term that follows the operator.

For example, a search for `marketing AND NOT BoxWorks` returns a result
that has only `marketing` within its text. Results containing
`BoxWorks` are omitted.

<Message warning>

Please note that we do not support lower case (that is,
`and`, `or`, and `not`) or mixed case (that is, `And`, `Or`, and `Not`)
operators.

</Message>

<CTA to='https://support.box.com/hc/en-us/articles/360043696314-Search-for-Files-Folders-and-Content'>

Check our community article with the latest details on Search in Box

</CTA>