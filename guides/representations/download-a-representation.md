---
rank: 3
related_endpoints:
  - get_files_id
related_guides:
  - representations/thumbnail-representation
  - representations/supported-file-types
required_guides:
  - representations/request-a-representation
alias_paths: []
category_id: representations
subcategory_id: null
is_index: false
id: representations/download-a-representation
type: guide
total_steps: 8
sibling_id: representations
parent_id: representations
next_page_id: representations/thumbnail-representation
previous_page_id: representations/request-a-representation
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/representations/download-a-representation.md
---
# ファイルレプリゼンテーションのダウンロード

レプリゼンテーションをダウンロードするには、[レプリゼンテーションを選択][select_representation]した際に受け取った`url_template`を使用します。`{+asset_path}`は、レプリゼンテーションの種類に応じて置き換えます。

## ページ割りされたレプリゼンテーション

PDFのようにページ割りされたレプリゼンテーションでは、`{+asset_path}`を目的のページ番号とファイル拡張子に置き換えます(例: `1.pdf`)。

<!-- markdownlint-disable line-length -->

```curl
curl https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/pdf/content/3.pdf \
  -H "authorization: Bearer ACCESS_TOKEN"
```

<!-- markdownlint-enable line-length -->

## ページ割りされていないレプリゼンテーション

ページ割りされていないレプリゼンテーションでは、`{+asset_path}`を空の文字列に置き換えます。

<!-- markdownlint-disable line-length -->

```curl
curl https://dl.boxcloud.com/api/2.0/internal_files/123/versions/345/representations/jpg_32x32/content/ \
  -H "authorization: Bearer ACCESS_TOKEN"
```

<!-- markdownlint-eable line-length -->

## 省略可能なクエリパラメータ

レプリゼンテーションを取得する場合、以下の省略可能なヘッダーを使用できます。

| パラメータ                          | オプション                   | デフォルト  |
| ------------------------------ | ----------------------- | ------ |
| `set_content_disposition_type` | `inline` / `attachment` | `null` |

指定された値でAPI応答の`content-disposition`ヘッダーを設定します。配置タイプを`attachment`に設定した場合、ほとんどのウェブブラウザでは応答をデバイスに保存するようユーザーに促します。一方、タイプを`inline`に設定した場合は、ブラウザでファイルが開かれます。

指定しなかった場合、応答に`content-disposition`ヘッダーは含まれません。

| パラメータ                              | オプション       | デフォルト  |
| ---------------------------------- | ----------- | ------ |
| `set_content_disposition_filename` | 拡張子のないファイル名 | `null` |

アプリケーションでは、ダウンロードしたレプリゼンテーションのファイル名を定義できます。

定義しなかった場合、ファイル名は、Box内の元のファイル名から派生し、拡張子はレプリゼンテーションのファイルタイプに置き換えられます。

[select_representation]: guide://representations/request-a-representation
