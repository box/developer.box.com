---
rank: 2
related_endpoints:
  - get_folders_id_items
  - get_files_id_collaborations
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
category_id: api-calls
subcategory_id: api-calls/pagination
is_index: false
id: api-calls/pagination/marker-based
type: guide
total_steps: 2
sibling_id: api-calls/pagination
parent_id: api-calls/pagination
next_page_id: ''
previous_page_id: api-calls/pagination
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/api-calls/pagination/marker-based.md
---
# マーカーベースのページ割り

マーカーベースのページングを使用するAPIは、`marker`および`limit`クエリパラメータを使用してコレクション内の項目のページ割りを行います。

マーカーベースのページ割りがよく使用されるのは、項目の全セットの長さが頻繁に変更される場合や全体の長さが事前にわからない可能性がある場合です。

## ページング

コレクション内のエントリの最初のページを取得するには、APIを`marker`パラメータを指定せずに呼び出すか、`marker`を`0`に設定して呼び出す必要があります。`limit`パラメータは省略可能です。

```curl
curl https://api.box.com/2.0/folders/0/items?limit=100&usemarker=true \
    -H "authorization: Bearer ACCESS_TOKEN"
```

<Message type="notice">

オフセットベースのページ割りとマーカーベースのページ割りの両方をサポートするAPIでは、マーカーベースのページ割りが使用されるように`usemarker`クエリパラメータを`true`に設定する必要があります。

</Message>

エントリの次のページを取得するには、API応答で受け取った`next_marker`値の値に等しい`marker`パラメータを指定して、APIを呼び出す必要があります。

<!-- markdownlint-disable line-length -->

```curl
curl https://api.box.com/2.0/folders/0/items?marker=34332423&limit=100&usemarker=true \
    -H "authorization: Bearer ACCESS_TOKEN"
```

<!-- markdownlint-enable line-length -->

次の`next_marker`値が応答オブジェクト内で`null`になっている場合、項目の最終ページはリクエスト済みです。この時点では、これ以上取得する項目がありません。

<Message type="notice">

マーカーベースのページングを使用する場合、コレクション内のエントリの合計数を確認するには、エントリをすべて取得するしかありません。マーカーの内部実装は今後変更される可能性があるため、アプリケーションでは`next_marker`値を長期にわたって保持しないでください。

</Message>

## マーカーと制限

以下のクエリパラメータは、コレクションのページ割りに使用されます。

<!-- markdownlint-disable line-length -->

| クエリパラメータ    | 型       | デフォルト      |                                                                                                     |
| ----------- | ------- | ---------- | --------------------------------------------------------------------------------------------------- |
| `marker`    | Integer | `0`        | コレクション内で最初に結果を返す位置。これは前のリクエストで返された値です。                                                              |
| `limit`     | Integer | APIによって異なる | 返される最大エントリ数。値が最大値を超える場合は、最大値が使用されます。                                                                |
| `usemarker` | Boolean |            | ページ割りのタイプを選択するために、両タイプのページ割りをサポートするAPIエンドポイントで使用可能なクエリパラメータ(省略可)。`true`に設定すると、マーカーベースのページ割りが適用されます。 |

<!-- markdownlint-enable line-length -->

## コレクション

コレクションのページ割りを行うと、APIによって、結果のセットを配列として含むオブジェクトのほか、結果の現在のページに関する情報が返されます。

<!-- markdownlint-disable line-length -->

| フィールド         | 型       |                                                                                 |
| ------------- | ------- | ------------------------------------------------------------------------------- |
| `entries`     | Array   | このページの項目を含むページ。結果がない場合は空の配列になります。                                               |
| `next_marker` | Integer | 結果の次のページを取得するために`marker`値として使用できる値。この値が`null`または空の文字列の場合は、これ以上取得する結果がありません。     |
| `limit`       | Integer | 結果の現在のページに使用される制限。この制限は、このAPIエンドポイントに許可されている最大値を超えない限り、`limit`クエリパラメータと同じになります。 |

<!-- markdownlint-enable line-length -->

## エンドポイントの例

以下は、マーカーベースのページ割りをサポートするエンドポイントの例です。

* [フォルダ内の項目を取得](endpoint://get_folders_id_items)
* [ファイルのコラボレーションのリストを取得](endpoint://get-files-id-collaborations)
* [ユーザーのすべてのWebhookのリストを取得](endpoint://get-webhooks)
* [社内のすべてのユーザーのリストを取得](endpoint://get-users)
* [ごみ箱にあるすべての項目のリストを取得](endpoit://get-folders-trash-items)
