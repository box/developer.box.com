---
rank: 3
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
total_steps: 8
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/ensure-consistency
previous_page_id: api-calls/status-codes
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/request-extra-fields.md
---
# 追加フィールドのリクエスト

リソースに対して返されるフィールドの数は、リソースのリクエストに使用されるAPIエンドポイントに応じて異なります。

<!-- markdownlint-disable line-length -->

| バリアント |                                                                                                                                                                 |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 標準    | [`GET /files/:id`](endpoint://get_files_id)エンドポイントを介してファイルをリクエストする場合など、リソースを固有のエンドポイントに対してリクエストしたときに返される標準のフィールドセット                                             |
| 詳細    | `field`クエリパラメータを使用して、リソースの固有のエンドポイントを介して返すことができる詳細なフィールドセット                                                                                                     |
| 簡易    | [`GET /folders/:id/items`](endpoint://get_folders_id_items)エンドポイントを介してフォルダ内にあるすべての項目をリクエストしたときにファイルが返される場合など、リソースが別のリソースのネストされた部分としてリソースが返されたときに返されるフィールドのサブセット |

<!-- markdownlint-enable line-length -->

APIリファレンスドキュメントでは、このようにラベルの付いたバリエーションを詳しく説明しています。特に、ファイル、フォルダ、ウェブリンク、およびユーザー項目には詳細と簡易というバリエーションがあります。

## フィールドクエリパラメータの使用

標準の応答にデフォルトでは含まれない、リソースの特定のフィールドをリクエストするには、`field`クエリパラメータをリクエストに追加します。このパラメータの値は、フィールド名のカンマ区切りリストです。

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

特定のフィールドがリクエストされると、リクエストされたフィールドとフィールドの「基本」のフィールド以外のフィールドが返されない点に注意してください。ファイルの場合、この基本セットは`etag`、`id`、および`type`値で構成されます。

</Message>

## リソース

以下のリソースバリアントは、BoxのAPIで使用できます。

### 標準

API応答で返されるデフォルトのフィールドセットは、一般に、標準リソースバリアントと呼ばれます。通常、リソースに対して使用できるメインのAPIを介してそのリソースがリクエストされたときに返されます。たとえば、[`GET /files/:id`](endpoint://get_files_id)エンドポイントをリクエストすると、APIはファイルの標準バリエーションを返します。

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

### 簡易

別の応答のネストされた部分としてリソースが返される場合は、サイズが縮小され、重要なフィールドの一部のみが返されることがよくあります。このバリアントは、一般に簡易リソースバリアントと呼ばれます。

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

### 詳細

API応答で返すことができるフィールドセット全体は、一般に、詳細リソースバリアントと呼ばれます。通常、リソースに対して使用できるメインのAPIを介し、`fields`クエリパラメータを追加してそのリソースをリクエストしたときに返されます。

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
