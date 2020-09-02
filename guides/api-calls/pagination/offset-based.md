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
category_id: api-calls
subcategory_id: api-calls/pagination
is_index: false
id: api-calls/pagination/offset-based
type: guide
total_steps: 2
sibling_id: api-calls/pagination
parent_id: api-calls/pagination
next_page_id: api-calls/pagination/marker-based
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/pagination/offset-based.md
---
# オフセットベースのページ割り

オフセットベースのページングを使用するAPIは、`offset`および`limit`クエリパラメータを使用してコレクション内の項目のページ割りを行います。

オフセットベースのページ割りは、項目のリストがあらかじめ決められた固定長の場合によく使用されます。

## ページング

コレクション内のエントリの最初のページを取得するには、APIを`offset`パラメータを指定せずに呼び出すか、`offset`を`0`に設定して呼び出す必要があります。`limit`フィールドは省略可能です。

```curl
curl https://api.box.com/2.0/folders/0/items?offset=0&limit=100 \
  -H "authorization: Bearer ACCESS_TOKEN"
```

エントリの次のページを取得するには、以前の`offset`値と以前の結果で返された制限の合計(`previous_offset + previous_limit`)と等しい`offset`パラメータを指定して、APIを呼び出す必要があります。

```curl
curl https://api.box.com/2.0/folders/0/items?offset=100&limit=100 \
  -H "authorization: Bearer ACCESS_TOKEN"
```

<Message type="notice">

`offset`は、応答配列内のエントリのサイズではなく、以前の`limit`分だけ加算されますので注意してください。これは制限を下回る可能性があるためです。一般的には、応答オブジェクトの`limit`の値を使用して`offset`値を加算することをお勧めします。

</Message>

次の`offset`値が応答オブジェクト内の`total_count`値を超えている場合、項目の最終ページはリクエスト済みです。この時点では、これ以上取得する項目がありません。

## オフセットと制限

以下のクエリパラメータは、コレクションのページ割りに使用されます。

<!-- markdownlint-disable line-length -->

| クエリパラメータ | 型       | デフォルト      |                                      |
| -------- | ------- | ---------- | ------------------------------------ |
| `offset` | Integer | `0`        | コレクション内の最初に返される項目の(ゼロベースの)オフセット      |
| `limit`  | Integer | APIによって異なる | 返される最大エントリ数。値が最大値を超える場合は、最大値が使用されます。 |

<!-- markdownlint-enable line-length -->

<Message type="notice">

オフセットベースのページ割りの最大`offset`は`300000`です。さらに大きいオフセットが必要な場合はマーカーベースのページ割りをお勧めします。

</Message>

## コレクション

コレクションのページ割りを行うと、APIによって、結果のセットを配列として含むオブジェクトのほか、結果の現在のページに関する情報が返されます。

<!-- markdownlint-disable line-length -->

| フィールド         | 型       |                                                                                 |
| ------------- | ------- | ------------------------------------------------------------------------------- |
| `entries`     | Array   | このページの項目を含むページ。結果がない場合は空の配列になります。                                               |
| `offset`      | Integer | 結果の現在のページに使用されるオフセット                                                            |
| `limit`       | Integer | 結果の現在のページに使用される制限。この制限は、このAPIエンドポイントに許可されている最大値を超えない限り、`limit`クエリパラメータと同じになります。 |
| `total_count` | Integer | コレクション全体の最後の項目のオフセットに1を加算した値。コレクション内の項目の合計数は、`total_count`よりも少ない場合があります。        |

<!-- markdownlint-enable line-length -->

## エンドポイントの例

以下は、オフセットベースのページ割りをサポートするエンドポイントの例です。

* [フォルダ内の項目を取得](endpoint://get_folders_id_items)
* [ファイルのコメントのリストを取得](endpoint://get-files-id-comments)
* [ごみ箱にあるすべての項目のリストを取得](endpoint://get-folders-trash-items)
