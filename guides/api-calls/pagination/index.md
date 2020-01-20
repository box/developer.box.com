---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: api-calls/pagination
id: api-calls/pagination
type: guide
is_index: true
total_steps: 2
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/pagination/marker-based
previous_page_id: ''
---

# Pagination

The Box API supports two ways to paginate collections. The most common way to
paginate is through offset-based pagination which is often used where the list
of items is of a fixed, predetermined length.

In some cases an API endpoint supports marker-based pagination, either as an
alternative to offset-based pagination or as a full replacement. Marker-based
pagination is often used in cases where the length of the total set of items is
either changing frequently, or where the total length might not be known
upfront.
