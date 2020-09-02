---
rank: 4
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
id: collections/remove
type: guide
total_steps: 4
sibling_id: collections
parent_id: collections
next_page_id: collections
previous_page_id: collections/add
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/collections/remove.md
---
# コレクションからの項目の削除

コレクションから項目を削除するには、その特定のタイプの項目に対して`PUT`エンドポイントを呼び出し、削除するコレクションのIDが含まれていない、コレクションIDのリストを渡します。

<Message warning>

APIを介して使用できるコレクションは「Favorites」コレクションのみであるため、このコレクションから項目を削除するには、APIにコレクションの空の配列を渡してください。

</Message>

## コレクションからのファイルの削除

コレクションにファイルを追加するには、`PUT /files/:id` APIを呼び出し、コレクションIDの空の配列を渡します。

<Samples id="put_files_id" variant="remove_from_collection">

</Samples>

## コレクションからのフォルダの削除

コレクションにフォルダを追加するには、`PUT /folders/:id` APIを呼び出し、コレクションIDの空の配列を渡します。

<Samples id="put_folders_id" variant="remove_from_collection">

</Samples>

## コレクションからのウェブリンクの削除

コレクションにウェブリンクを追加するには、`PUT /web_links/:id` APIを呼び出し、コレクションIDの空の配列を渡します。

<Samples id="put_web_links_id" variant="remove_from_collection">

</Samples>
