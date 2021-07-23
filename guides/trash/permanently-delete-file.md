---
rank: 2
related_endpoints:
  - delete_files_id
  - delete_files_id_trash
related_guides:
  - trash/restore-file
required_guides: []
related_resources:
  - files
category_id: trash
subcategory_id: null
is_index: false
id: trash/permanently-delete-file
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash/restore-folder
previous_page_id: trash/restore-file
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/trash/permanently-delete-file.md
fullyTranslated: true
---
# ファイルを完全に削除

ごみ箱に移動されたファイルは、デフォルトで30日間ごみ箱に保持された後で削除されます。BusinessアカウントまたはEnterpriseアカウントの管理者は、削除までの期間を変更できます。削除までの期間が経過する前にごみ箱からファイルを完全に削除する場合は、ごみ箱に移動されたファイルの`ID`を使用して`DELETE`リクエストを`/files/:file_id/trash`に送信します。

<Samples id="delete_files_id_trash">

</Samples>
