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
  https://github.com/box/developer.box.com/blob/master/content/guides/trash/permanently-delete-file.md
---

# Permanently Delete File

Once a file has been moved to the trash, it will stay in the trash for 30
days by default before being purged. Administrators of Business or
Enterprise accounts can alter the purge window. If you wish to permanently
delete the file from the trash before the purge window expires, make a `DELETE`
request to `/files/:file_id/trash` using the trashed file's `ID`.

<Samples id='delete_files_id_trash' >

</Samples>
