---
rank: 1
related_endpoints:
  - get_folders_id_items
  - get_files_id_versions
  - get_files_id_comments
  - get_folders_trash_items
  - get_search
  - get_users
  - get_groups_id_memberships
  - get_users_id_memberships
  - get_groups
  - get_groups_id_collaborations
  - get_collaborations
  - get_collections_id_items
related_guides:
  - api-calls/sorting
  - api-calls/pagination/marker-based
required_guides: []
alias_paths: []
---

# Offset-based Pagination

APIs that use offset-based paging use the `offset` and `limit` query parameters
to paginate through items in a collection.

Offset-based pagination is often used where the list of items is of a fixed and
predetermined length.

## Paging

To fetch the first page of entries in a collection the API needs to be called
either without the `offset` parameter, or with the `offset` set to `0`. The
`limit` field is optional.

```curl
curl https://api.box.com/2.0/folders/0/items?offset=0&limit=100 \
  -H "authorization: Bearer ACCESS_TOKEN"
```

To fetch the next page of entries the API needs to be called with
an `offset` parameter that equals the sum of the previous `offset` value and
limit returned in the previous result, `previous_offset + previous_limit`.

```curl
curl https://api.box.com/2.0/folders/0/items?offset=100&limit=100 \
  -H "authorization: Bearer ACCESS_TOKEN"
```

<Message type='notice'>
  Note that the `offset` should be increased by the previous `limit` and not by
  the size of the entries in the response array, as this may be less than the
  limit. Generally we advise using the value of the `limit` in the response
  object to increase the `offset` value.
</Message>

The final page of items has been requested when the next `offset` value exceeds
the `total_count` value in the response object. At this point there are no more
items to fetch.

## Offset & Limit

The following query parameters are used to paginate a collection.

| Query parameter | Type    | Default        |                                                                                                                 |
| --------------- | ------- | -------------- | --------------------------------------------------------------------------------------------------------------- |
| `offset`        | Integer | `0`            | The (zero-based) offset of the first item returned in the collection. In a zero-based offset `0` is a correct value. |
| `limit`         | Integer | Depends on API | The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used. |

<Message type='notice'>
  The maximum `offset` for offset-based pagination is `9999`. Marker-based
  pagination is recommended when a higher offset is needed.
</Message>

## Collections

When paginating collections, the API returns an object that contains the set of
results as an array, as well as some information about the current page of results.

| Field         | Type    |                                                                                                                                                                   |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entries`     | Array   | The page of items for this page. This will be an empty array if there are no results.                                                                             |
| `offset`      | Integer | The offset used for this page of results                                                                                                                          |
| `limit`       | Integer | The limit used for this page of results. This will be the same as the `limit` query parameter unless it exceeded the maximum value allowed for this API endpoint. |
| `total_count` | Integer | One greater than the offset of the last item in the entire collection. The total number of items in the collection may be less than `total_count`.                |

## Example endpoints

Some endpoints that support offset-based pagination are:

- [List items for a folder](endpoint://get_folders_id_items)
- [List a file's comments](endpoint://get-files-id-comments)
- [List all items in the trash](endpoint://get-folders-trash-items)
