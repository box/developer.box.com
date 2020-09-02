---
rank: 90
related_endpoints:
  - get_files_id
  - get_files_id_thumbnail_id
related_guides: []
required_guides: []
alias_paths: []
category_id: representations
subcategory_id: null
is_index: true
id: representations
type: guide
total_steps: 8
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: representations/supported-file-types
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/representations/index.md
---
# レプリゼンテーション

レプリゼンテーションとは、Boxに保存されているファイルの代替アセットです。このようなアセットには、PDF、サムネイル、またはテキスト抽出を使用できます。

レプリゼンテーションは、Boxへのアップロード時またはアセットのリクエスト時に、サポートされているファイルタイプに対して自動的に生成されます。

このようなレプリゼンテーションは、`fields=representations`クエリパラメータと`x-rep-hints`ヘッダーを使用することで、`GET /files/:id`エンドポイントを介して公開されます。
