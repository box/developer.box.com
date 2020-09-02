---
rank: 1
related_endpoints:
  - post_files_id
  - delete_files_id
related_guides:
  - trash/permanently-delete-file
required_guides: []
related_resources:
  - files
category_id: trash
subcategory_id: null
is_index: false
id: trash/restore-file
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash/permanently-delete-file
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/trash/restore-file.md
---
# ファイルの復元

ごみ箱に移動されたが削除されていないファイルを復元するには、`/files/:file_id`エンドポイントに`POST`リクエストを送信します。これにより、ファイルがまだ使用可能であれば元のフォルダに戻されます。または、オプションとして`parent`フォルダを指定することもできます。

<Samples id="post_files_id">

</Samples>
