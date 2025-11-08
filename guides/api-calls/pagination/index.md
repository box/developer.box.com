---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: api-calls/pagination
is_index: true
id: api-calls/pagination
type: guide
total_steps: 2
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/pagination/marker-based
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/pagination/index.md
fullyTranslated: true
---
# ページネーション

Box APIがサポートするコレクションのページネーション方法は2つあります。最も一般的な方法はオフセットベースのページネーションで、項目のリストがあらかじめ決められた固定長の場合によく使用されます。

場合によっては、オフセットベースのページネーションの代替方法または完全な置き換えとして、APIエンドポイントがマーカーベースのページネーションをサポートすることもあります。マーカーベースのページネーションがよく使用されるのは、項目の全セットの長さが頻繁に変更される場合や全体の長さが事前にわからない可能性がある場合です。
