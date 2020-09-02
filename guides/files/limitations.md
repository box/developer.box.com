---
rank: 100
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: files
subcategory_id: null
is_index: false
id: files/limitations
type: guide
total_steps: 2
sibling_id: files
parent_id: files
next_page_id: ''
previous_page_id: files
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/files/limitations.md
---
# 制限

ファイルの操作には、いくつかの制限があります。

## 名前に関する制約事項

ファイルの名前にはいくつかの制約事項があります。印刷不可能なASCII文字、スラッシュ、およびバックスラッシュ(`/`、`\`)を含む名前のほか、`.`や`..`のような予約済みの名前は、許可されていない文字を削除して自動的にサニタイズされます。
