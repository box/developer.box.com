---
rank: 2
related_endpoints:
  - get_collections_id_items
related_guides:
  - api-calls/pagination/offset-based
required_guides: []
related_resources:
  - file
  - folder
  - web_link
alias_paths: []
category_id: collections
subcategory_id: null
is_index: false
id: collections/list-items
type: guide
total_steps: 4
sibling_id: collections
parent_id: collections
next_page_id: collections/add
previous_page_id: collections/list
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collections/list-items.md
fullyTranslated: true
---
# コレクション内の項目のリストの取得

フォルダ内のすべてのファイル、フォルダ、およびウェブリンクのリストを取得するには、[`GET
/collections/:id/items`](e://get_collections_id_items) APIを呼び出します。

<Samples id="get_collections_id_items">

</Samples>

<Message warning>

APIを介して使用できるコレクションは「Favorites」コレクションのみです。このコレクションのIDは[ユーザーごとに異なります](g://collections/list)。

</Message>
