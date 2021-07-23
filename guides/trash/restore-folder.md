---
rank: 5
related_endpoints:
  - post_folders_id
  - delete_folders_id
related_guides:
  - trash/permanently-delete-folder
required_guides: []
related_resources:
  - folders
category_id: trash
subcategory_id: null
is_index: false
id: trash/restore-folder
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash/permanently-delete-folder
previous_page_id: trash/permanently-delete-file
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/trash/restore-folder.md
fullyTranslated: true
---
# フォルダの復元

ごみ箱に移動されたが削除されていないフォルダを復元するには、`/folders/:folder_id`エンドポイントに`POST`リクエストを送信します。これにより、フォルダがまだ使用可能であれば元の親フォルダに戻されます。または、オプションとして`parent`フォルダを指定することもできます。

<Samples id="post_folders_id">

</Samples>

<Message warning>

フォルダ復元の進行中は、ファイルツリーの一部がロックされます。ロックされるのは、リクエストの元のフォルダとその子孫フォルダ、および宛先フォルダです。

フォルダの復元中、ロックされているフォルダに対して、それ以外の移動、コピー、削除、復元の操作を実行することはできません。

</Message>
