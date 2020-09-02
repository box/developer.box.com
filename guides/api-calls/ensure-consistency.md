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
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/ensure-consistency.md
---
# 一貫性の確保

いくつかのBox APIでは、アプリケーションとBox間の一貫性を制御するためのヘッダーがサポートされています。

## `etag`、`if-match`、および`if-none-match`

APIを介してリクエスト可能なファイルシステムの項目(ファイルまたはフォルダ)の多くは、項目の`etag`値を返します。

たとえば、ファイルリソースはJSON応答で`etag`を返します。

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

この`etag`を`if-match`または`if-none-match`ヘッダーの値として使用できるのは、`etag`値が受信されてからリソースが変更されていないことを確認するためか、または変更されていない項目を不必要にダウンロードしないようにするためです。

たとえば、同じファイルを取得するのはそのファイルが変更された場合のみにするには、`if-none-match`ヘッダーで`etag`値を渡します。

```curl
curl https://api.box.com/2.0/files/12345 \
  -H "authorization: Bearer ACCESS_TOKEN" \
  -H "if-none-match: 1"
```

ファイルが変更されていない場合、このAPI呼び出しでは空の応答が返されます。

## 一貫性のある変更の確保

`if-match`ヘッダーを使用すると、アプリケーションは、最後に調べた項目がその後別のアプリケーションまたはユーザーによって変更が加えられても、項目が変更されないようにすることができます。これにより、2つのアプリケーションまたは2人のユーザーが項目を同時に変更しても変更が失われることはありません。

このヘッダーは、以下のエンドポイントでサポートされます。

<!-- markdownlint-disable line-length -->

| `if-match`対応のエンドポイント                                          |                     |
| ------------------------------------------------------------- | ------------------- |
| [`POST /files/:id/content`](endpoint://post_files_id_content) | 新しいファイルバージョンをアップロード |
| [`PUT /files/:id`](endpoint://put_files_id)                   | ファイルの情報を更新          |
| [`DELETE /files/:id`](endpoint://delete_files_id)             | ファイルを削除             |
| [`PUT /folders/:id`](endpoint://put_folders_id)               | フォルダの情報を更新          |
| [`DELETE /folders/:id`](endpoint://delete_folders_id)         | フォルダの削除             |
| [`PUT /web_links/:id`](endpoint://put_web_links_id)           | ウェブリンクの情報を更新        |
| [`DELETE /web_links/:id`](endpoint://delete_web_links_id)     | ウェブリンクを削除           |

<!-- markdownlint-enable line-length -->

これらのAPI呼び出しの応答は、項目が存在するかどうか、および`etag`値が最新バージョンと一致するかどうかによって異なります。

| 項目があるか? | Etagが一致するか? | HTTPステータス |
| ------- | ----------- | --------- |
| はい      | はい          | 200       |
| はい      | いいえ         | 412       |
| いいえ     | はい          | 412       |
| いいえ     | いいえ         | 404       |

<Message type="warning">

# 項目の移動

`if-match`ヘッダーを使用してファイル、フォルダ、またはウェブリンクの移動を防ぐことはできません。Boxでは、必ず最新の項目が新しい場所に移動されます。

</Message>

## リクエストによる不要なダウンロードの防止

`if-none-match`ヘッダーを使用すると、アプリケーションは、最後に調べてから変更されていない項目の情報がダウンロードされないようにすることができます。これにより、不要な情報がダウンロードされなくなるため、アプリケーションの速度が向上し、帯域幅が節約されます。

<!-- markdownlint-disable line-length -->

| `if-none-match`対応のエンドポイント                           |              |
| --------------------------------------------------- | ------------ |
| [`GET /files/:id`](endpoint://get_files_id)         | ファイルの情報を取得   |
| [`GET /folders/:id`](endpoint://get_folder_id)      | フォルダの情報を取得   |
| [`GET /web_links/:id`](endpoint://get_web_links_id) | ウェブリンクの情報を取得 |
| [`GET /shared_items`](endpoint://get_shared_items)  | 共有項目の情報を取得   |

<!-- markdownlint-enable line-length -->

これらのAPI呼び出しの応答は、項目が存在するかどうか、および`etag`値が最新バージョンと一致するかどうかによって異なります。

| 項目があるか? | Etagが一致するか? | HTTPステータス |
| ------- | ----------- | --------- |
| はい      | はい          | 304       |
| はい      | いいえ         | 200       |
| いいえ     | はい          | 404       |
| いいえ     | いいえ         | 404       |
