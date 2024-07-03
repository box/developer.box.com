---
rank: 3
related_endpoints:
  - get_folders_id_items
related_guides: []
required_guides: []
alias_paths: []
---

# Sorting Responses

Where an API returns a collection of items it often supports sorting of API
responses.

Use the `sort` and `direction` query parameters to sort the collection either in
ascending or descending order.

```curl
curl https://api.box.com/2.0/folders/0/items?sort=size&direction=DESC \
    -H "authorization: Bearer ACCESS_TOKEN"
```

<Message type='warning'>
  Not all API endpoints that return collections have support for sorting.
  Especially endpoints that use marker-based pagination often lack support for
  sorting the results.
</Message>

## Sorting criteria

The field to sort on is defined by the `sort` query parameter. Check the API
endpoint's documentation for the possible options for this value.

<Message type='notice'>
  In some APIs the `sort` field is the second criteria by which the items are
  sorted. For example for the [`GET /folders/:id/items`][get_folders_id_items]
  endpoint the results are always sorted by their type first before any other
  criteria.
</Message>

## Sorting direction

The sorting direction supports two values, either `ASC` for ascending order, or
`DESC` for the reverse.

[get_folders_id_items]: endpoint://get_folders_id_items
