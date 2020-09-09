---
rank: 4
related_endpoints:
  - post_files_id_content
  - put_files_id
  - delete_files_id
  - put_folders_id
  - delete_folders_id
  - put_web_links_id
  - delete_web_links_id
  - get_files_id
  - get_folders_id
  - get_web_links_id
  - get_shared_items
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/ensure-consistency
type: guide
total_steps: 8
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/allowing-domain-access
previous_page_id: api-calls/request-extra-fields
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/ensure-consistency.md
---
# Ensure Consistency

A few of the Box APIs support headers to control consistency between your
application and Box.

## `etag`, `if-match`, and `if-none-match`

Many of the file system items (files or folders) that can be requested via the
API return an `etag` value for the item.

For example, a file resource returns an `etag` in the JSON response.

```curl
curl https://api.box.com/2.0/files/12345 \
    -H "authorization: Bearer ACCESS_TOKEN"
```

```json
{
  "id": 12345,
  "etag": 1,
  "type": "file",
  "sequence_id": 3,
  "name": "Contract.pdf",
  ...
}
```

This `etag` can be used as the value of a `if-match` or `if-none-match`
header to either ensure a resource hasn't changed since the `etag` value was
received, or to prevent unnecessary downloads for items that haven't changed.

For example, to fetch the same file only if it has changed, pass in the `etag`
value in a `if-none-match` header.

```curl
curl https://api.box.com/2.0/files/12345 \
  -H "authorization: Bearer ACCESS_TOKEN" \
  -H "if-none-match: 1"
```

This API call would result in an empty response if the file had not changed.

## Ensure consistent changes

The `if-match` header allows your application to ensure that no changes are
made to items when another application or a user has made changes to the item
since your application last inspected it. This helps ensure that
changes aren't lost when two applications or users are changing items at the
same time.

The following endpoints support this header.

<!-- markdownlint-disable line-length -->

| `if-match` capable endpoints                                  |                                 |
| ------------------------------------------------------------- | ------------------------------- |
| [`POST /files/:id/content`](endpoint://post_files_id_content) | Upload a new file version       |
| [`PUT /files/:id`](endpoint://put_files_id)                   | Update a file's information     |
| [`DELETE /files/:id`](endpoint://delete_files_id)             | Delete a file                   |
| [`PUT /folders/:id`](endpoint://put_folders_id)               | Update a folder's information   |
| [`DELETE /folders/:id`](endpoint://delete_folders_id)         | Delete a folder                 |
| [`PUT /web_links/:id`](endpoint://put_web_links_id)           | Update a web link's information |
| [`DELETE /web_links/:id`](endpoint://delete_web_links_id)     | Delete a web link               |

<!-- markdownlint-enable line-length -->

The response of these APIs calls depends on the existence of the item,
and whether the `etag` value matches the most recent version.

| Item found? | Etag match? | HTTP Status |
| ----------- | ----------- | ----------- |
| Yes         | Yes         | 200         |
| Yes         | No          | 412         |
| No          | Yes         | 412         |
| No          | No          | 404         |

<Message type='warning'>

# Moving items

The `if-match` header can not be used to prevent moving of files, folders,
or web links. Instead, Box will always ensure that the latest item is moved to
the new location.

</Message>

## Prevent unnecessary request downloads

The `if-none-match` header allows your application to ensure that no information
is downloaded for items that have not changed since your application last
inspected it. This helps ensure no unnecessary information is downloaded,
speeding up your application and saving on bandwidth.

<!-- markdownlint-disable line-length -->

| `if-none-match` capable endpoints                   |                                 |
| --------------------------------------------------- | ------------------------------- |
| [`GET /files/:id`](endpoint://get_files_id)         | Get a file's information        |
| [`GET /folders/:id`](endpoint://get_folder_id)      | Get a folder's information      |
| [`GET /web_links/:id`](endpoint://get_web_links_id) | Get a web link's information    |
| [`GET /shared_items`](endpoint://get_shared_items)  | Get a shared item's information |

<!-- markdownlint-enable line-length -->

The response of these APIs calls depends on the existence of the item,
and whether the `etag` value matches the most recent version.

| Item found? | Etag match? | HTTP Status |
| ----------- | ----------- | ----------- |
| Yes         | Yes         | 304         |
| Yes         | No          | 200         |
| No          | Yes         | 404         |
| No          | No          | 404         |