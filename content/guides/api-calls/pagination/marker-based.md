---
rank: 2
related_endpoints:
  - get_folders_id_items
  - get_files_id_collaborations
  - get-folders-id-collaborations
  - get_webhooks
  - get_metadata_templates_enterprise
  - get_recent_items
  - get_legal_hold_policies
  - get_enterprises_id_device_pinners
  - get_users
  - get_folders_trash_items
  - get_users
related_guides:
  - api-calls/sorting
  - api-calls/pagination/offset-based
required_guides: []
alias_paths: []
---

# Marker-based Pagination

APIs that use marker-based paging use the `marker` and `limit` query parameters
to paginate through items in a collection.

Marker-based pagination is often used in cases where the length of the total set
of items is either changing frequently, or where the total length might not be
known upfront.

## Paging

To fetch the first page of entries in a collection the API needs to be called
either without the `marker` parameter, or with the `marker` set to `0`. The
`limit` parameter is optional.

```curl
curl https://api.box.com/2.0/folders/0/items?limit=100&usemarker=true \
    -H "authorization: Bearer ACCESS_TOKEN"
```

<Message type='notice'>
  APIs that support both offset-based pagination and marker-based pagination
  require the `usemarker` query parameter to be set to `true` to ensure
  marker-based pagination is used.
</Message>

To fetch the next page of entries the API needs to be called with
an `marker` parameter that equals value of the `next_marker` value that was
received in the API response.

```curl
curl https://api.box.com/2.0/folders/0/items?marker=34332423&limit=100&usemarker=true \
    -H "authorization: Bearer ACCESS_TOKEN"
```

The final page of items has been requested when the next `next_marker` value is
`null` in the response object. At this point there are no more items to fetch.

<Message  type='notice'>
  With marker-based paging there is no way to determine the total number of
  entries in a collection except by fetching them all. Applications should not
  retain the `next_marker` value long-term as the internal implementation of the
  markers may change over time.
</Message>

## Marker & Limit

The following query parameters are used to paginate a collection.

| Query parameter | Type    | Default        |                                                                                                                                                                                    |
| --------------- | ------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `marker`        | String |             | The first position in the collection to return results from. This should be a value that was returned in a previous request.                                                       |
| `limit`         | Integer | Depends on API | The maximum number of entries to return. If the value exceeds the maximum, then the maximum value will be used.                                                                    |
| `usemarker`     | Boolean |                | An optional query parameter that can be used with API endpoints that support both types of pagination to select pagination type. Set to `true` to enforce marker-based pagination. |

## Collections

When paginating collections, the API returns an object that contains the set of
results as an array, as well as some information about the current page of results.

| Field         | Type    |                                                                                                                                                                    |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `entries`     | Array   | The page of items for this page. This will be an empty array if there are no results.                                                                              |
| `next_marker` | String | The value that can be used as the `marker` value to fetch the next page of results. If this value is `null` or an empty string there are no more results to fetch. |
| `limit`       | Integer | The limit used for this page of results. This will be the same as the `limit` query parameter unless it exceeded the maximum value allowed for this API endpoint.  |

## Example endpoints

Some endpoints that support marker-based pagination are:

- [List items for a folder](e://get_folders_id_items)
- [List a file's collaborations](e://get-files-id-collaborations)
- [List all webhooks for a user](e://get-webhooks)
- [List all users in an enterprise](e://get-users)
- [List all items in the trash](e://get-folders-trash-items)
