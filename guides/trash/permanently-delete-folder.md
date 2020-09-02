---
rank: 6
related_endpoints:
  - delete_folders_id
  - delete_folders_id_trash
related_guides:
  - trash/restore-folder
required_guides: []
related_resources:
  - folders
category_id: trash
subcategory_id: null
is_index: false
id: trash/permanently-delete-folder
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash/restore-web-link
previous_page_id: trash/restore-folder
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/trash/permanently-delete-folder.md
---
# フォルダを完全に削除

ごみ箱に移動されたフォルダは、デフォルトで30日間ごみ箱に保持された後で削除されます。BusinessアカウントまたはEnterpriseアカウントの管理者は、削除までの期間を変更できます。削除までの期間が経過する前にごみ箱からフォルダを完全に削除する場合は、ごみ箱に移動されたフォルダの`ID`を使用して`DELETE`リクエストを`/folders/:folder_id/trash`に送信します。

<Samples id="delete_folders_id_trash">

</Samples>
