---
rank: 3
related_endpoints:
  - put_files_id
  - put_folders_id
  - put_web_links_id
  - get_collections
related_guides: []
required_guides: []
related_resources:
  - file
  - folder
  - web_link
alias_paths: []
category_id: collections
subcategory_id: null
is_index: false
id: collections/add
type: guide
total_steps: 4
sibling_id: collections
parent_id: collections
next_page_id: collections/remove
previous_page_id: collections/list-items
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collections/add.md
fullyTranslated: true
---
# コレクションへの項目の追加

コレクションに項目を追加するには、その特定のタイプの項目に対して`PUT`エンドポイントを呼び出し、コレクションIDのリストを渡します。

<Message warning>

APIを介して使用できるコレクションは「Favorites」コレクションのみです。このコレクションのIDは[ユーザーごとに異なります](g://collections/list)。

</Message>

## コレクションへのファイルの追加

コレクションにファイルを追加するには、`PUT /files/:id` APIを呼び出し、コレクションIDのリストを渡します。

<Samples id="put_files_id" variant="add_to_collection">

</Samples>

## コレクションへのフォルダの追加

コレクションにフォルダを追加するには、`PUT /folders/:id` APIを呼び出し、コレクションIDのリストを渡します。

<Samples id="put_folders_id" variant="add_to_collection">

</Samples>

## コレクションへのウェブリンクの追加

コレクションにウェブリンクを追加するには、`PUT /web_links/:id` APIを呼び出し、コレクションIDのリストを渡します。

<Samples id="put_web_links_id" variant="add_to_collection">

</Samples>
