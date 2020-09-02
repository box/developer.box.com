---
rank: 1
related_endpoints:
  - get_files_id
related_guides:
  - representations/request-a-representation
  - representations/supported-file-types
required_guides: []
alias_paths: []
category_id: representations
subcategory_id: null
is_index: false
id: representations/list-all-representations
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/request-a-representation
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/representations/list-all-representations.md
---
# ファイルのすべてのレプリゼンテーションのリストの取得

ファイルに使用できるレプリゼンテーションを確認するには、[`representations`][file_representations]フィールドのリクエスト中に[`GET /files/:id`][get_files_id]エンドポイントを呼び出します。

```curl
curl https://api.box.com/2.0/files/123?fields=representations \
    -H "authorization: Bearer ACCESS_TOKEN"
```

この応答には、次の形式でレプリゼンテーションのリストが含まれます。

<!-- markdownlint-disable line-length -->

```json
...
{
  "info": {
    "url": "https://api.box.com/2.0/internal_files/123/versions/345/representations/jpg_thumb_32x32"
  },
  "properties": {
      "dimensions": "32x32",
      "paged": "false",
      "thumb": "true"
  },
  "representation": "jpg"
}
...
```

<!-- markdownlint-enable line-length -->

## 応答のフィールド

どのレプリゼンテーションにも一連のプロパティとレプリゼンテーションのタイプが含まれます。

* `dimensions`フィールド(省略可)は、ファイルのサイズをピクセル単位の幅と高さで表します。

* `paged`フィールド(省略可)は、このレプリゼンテーションがページ割りされたドキュメントかどうかを指定します。画像やPDFによっては、ページ割りされたドキュメントになることがよくあります。

* `thumb`フィールド(省略可)は、このレプリゼンテーションがファイルのサムネイルとして適しているかどうかを指定します。

[get_files_id]: endpoint://get-files-id

[file_representations]: resource://file#param-representations
