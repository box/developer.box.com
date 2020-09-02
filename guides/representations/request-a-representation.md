---
rank: 2
related_endpoints:
  - get_files_id
related_guides:
  - representations/download-a-representation
  - representations/supported-file-types
required_guides:
  - representations/list-all-representations
alias_paths: []
category_id: representations
subcategory_id: null
is_index: false
id: representations/request-a-representation
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/download-a-representation
previous_page_id: representations/list-all-representations
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/representations/request-a-representation.md
---
# 目的のレプリゼンテーションのリクエスト

特定のレプリゼンテーションを選択するには、必要なレプリゼンテーション形式を定義する[`x-rep-hints`][x-rep-hints]ヘッダーを使用して[`GET /files/:id`][get_files_id]エンドポイントを呼び出します。

```curl
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "x-rep-hints: [pdf]" \
  -H "authorization: Bearer ACCESS_TOKEN"
```

## 複数のサイズ

形式によっては、特定のサイズを選択するために、`dimensions`を渡すことが必要になる場合があります。そのためには、ヘッダーに`dimensions`を追加します。

```curl
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "x-rep-hints: [jpg?dimensions=94x94]" \
  -H "authorization: Bearer ACCESS_TOKEN"
```

## 複数のレプリゼンテーション

`x-rep-hints`ヘッダーでさまざまなタイプを続けて指定することで、複数のレプリゼンテーションを取得できます。

```curl
curl https://api.box.com/2.0/files/123?fields=representations \
  -H "x-rep-hints: [pdf][jpg?dimensions=94x94]" \
  -H "authorization: Bearer ACCESS_TOKEN"
```

## API応答

このAPI呼び出しの結果、`{+asset_path}`値を含む`url_template`値を使用して1つ以上のレプリゼンテーションが返されます。

```json
{
  "etag": "1",
  "id": "123",
  "representations": {
    "entries": [
      {
        "content": {
          "url_template": "https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/pdf/content/{+asset_path}"
        },
        "info": {
          "url": "https://api.box.com/2.0/internal_files/123/versions/345/representations/pdf"
        },
        "properties": {},
        "representation": "pdf",
        "status": {
          "state": "success"
        }
      }
    ]
  },
  "type": "file"
}
```

<Message type="notice">

この応答の`url_template`は、**不明瞭な**URLです。このURL形式は、時間が経つと変わる可能性があるため、`{+asset_path}`変数の有無を除き、この形式についてさまざまな憶測を立てないようにしてください。

</Message>

[get_files_id]: endpoint://get-files-id

[x-rep-hints]: endpoint://get-files-id#param-x-rep-hints
