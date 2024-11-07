---
rank: 4
related_endpoints:
  - get_files_id
  - get_folders_id
  - get_folders_id_items
  - get_users_id
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/request-extra-fields
type: guide
total_steps: 9
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/ensure-consistency
previous_page_id: api-calls/sorting
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/request-extra-fields.md
---
# Request extra fields

The number of fields returned for a resource depends on the API endpoint used
to request the resource.

## Use the `fields` query parameter

To request a specific field for a resource that is not returned by default in
the standard response, append the `fields` query parameter to your request. The
value of this parameter is a comma separated list of field names.

```curl
curl https://api.box.com/2.0/files/12345?fields=is_package,lock \
    -H "authorization: Bearer ACCESS_TOKEN"
```

```json
{
  "etag": "1",
  "id": "12345",
  "is_package": false,
  "lock": null,
  "type": "file"
}
```

<Message type='notice'>

It is important to note that when a specific field is requested no other
fields are returned except for those requested and the **base** set of fields.
For a file, this base set is comprised of the `etag`, `id`, and `type` values.

</Message>

## Resource variants

The following resource variants are available in the Box API.

### Standard

The default set of fields returned in an API response.
The standard variant is returned when requesting a resource
through the main APIs available for that resource. For example, when requesting
the [`GET /files/:id`](endpoint://get_files_id) endpoint the API will return
the standard variation of a file.

```curl
curl https://api.box.com/2.0/files/12345 \
    -H "authorization: Bearer ACCESS_TOKEN"
```

```json
{
    "content_created_at": "2019-06-20T06:04:41-07:00",
    "content_modified_at": "2019-06-20T06:04:41-07:00",
    "created_at": "2019-06-20T07:28:42-07:00",
    "created_by": {
        "id": "191919191",
        "login": "joe@example.com",
        "name": "Joe Box",
        "type": "user"
    },
    "description": "",
    "etag": "1",
    "file_version": {
        "id": "56663434454334",
        "sha1": "585afa5209bbd586c79499b7336601341ad06cce",
        "type": "file_version"
    },
    "id": "12345",
    ...
    "size": 65000647,
    "trashed_at": null,
    "type": "file"
}
```

### Mini

Where a resource is returned as a nested part of another response it is often
reduced in size, only returning some of the more essential fields. This variant
is commonly known as the mini resource variant.

For example, when requesting the
[`GET /folders/:id/items`](endpoint://get_folders_id_items) endpoint the API
will return a mini variation of files and folders nested within the `item_collection`.

```curl
curl https://api.box.com/2.0/files/12345 \
    -H "authorization: Bearer ACCESS_TOKEN"
```

```json
{
  "id": "0",
  "type": "folder",
  "item_collection": {
    "entries": [
      {
        "etag": "1",
        "file_version": {
          "id": "56663434454334",
          "sha1": "585afa5209bbd586c79499b7336601341ad06cce",
          "type": "file_version"
        },
        "id": "12345",
        "name": "Video.mp4",
        "sequence_id": "1",
        "sha1": "585afa5209bbd586c79499b7336601341ad06cce",
        "type": "file"
      }
      ...
    ]
    ...
  }
  ...
}
```

<Message type='notice'>

To request more information for a nested resource we recommend calling the
API for that resource to request it by ID, and optionally pass along the
`field` query parameter.

For example, to get the owner of a file returned when listing the items in a
folder, request that file by ID with the query parameter `field=owned_by`.

</Message>

### Full

The total set of fields that can be returned in an API response. The full variant is returned when requesting a resource
through the main APIs available for that resource and by appending the `fields`
query parameter.

For example, when requesting the [`GET /files/:id`](endpoint://get_files_id)
endpoint with the `fields=is_package,lock` parameter the API will return the fields specified plus the basic fields for the file.

```curl
curl https://api.box.com/2.0/files/12345?fields=is_package,lock \
    -H "authorization: Bearer ACCESS_TOKEN"
```

```json
{
  "etag": "1",
  "id": "12345",
  "is_package": false,
  "lock": null,
  "type": "file"
}
```