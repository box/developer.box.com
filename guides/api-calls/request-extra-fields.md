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
fullyTranslated: true
---
# Request extra fields

The number of fields returned for a resource depends on the API endpoint used to request the resource.

## Use the `fields` query parameter

標準のレスポンスにデフォルトでは含まれない、リソースの特定のフィールドをリクエストするには、`fields`クエリパラメータをリクエストに追加します。このパラメータの値は、フィールド名のコンマ区切りリストです。

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

<Message type="notice">

It is important to note that when a specific field is requested no other fields are returned except for those requested and the **base** set of fields. For a file, this base set is comprised of the `etag`, `id`, and `type` values.

</Message>

## Resource variants

The following resource variants are available in the Box API.

### Standard

The default set of fields returned in an API response. The standard variant is returned when requesting a resource through the main APIs available for that resource. For example, when requesting the [`GET /files/:id`](endpoint://get_files_id) endpoint the API will return the standard variation of a file.

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

別のレスポンスのネストされた部分としてリソースが返される場合は、サイズが縮小され、重要なフィールドの一部のみが返されることがよくあります。このバリアントは、一般に簡易リソースバリアントと呼ばれます。

たとえば、[`GET /folders/:id/items`](endpoint://get_folders_id_items)エンドポイントをリクエストすると、APIは`item_collection`内でネストされたファイルとフォルダの簡易バリエーションを返します。

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

<Message type="notice">

ネストされたリソースの詳細をリクエストするには、そのリソースに対してAPIを呼び出して、IDでそのリソースをリクエストすることをお勧めします。その際、オプションで`field`クエリパラメータを渡すこともできます。

たとえば、フォルダ内の項目のリストを取得するときに返されるファイルの所有者を取得する場合は、クエリパラメータ`field=owned_by`を指定して、IDでそのファイルをリクエストします。

</Message>

### Full

The total set of fields that can be returned in an API response. The full variant is returned when requesting a resource through the main APIs available for that resource and by appending the `fields` query parameter.

たとえば、`fields=is_package,lock`パラメータを指定して[`GET /files/:id`](endpoint://get_files_id)エンドポイントをリクエストすると、APIは、指定されたフィールドに加えて、そのファイルの基本的なフィールドを返します。

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
