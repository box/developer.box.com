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
id: trash/permanently-delete-folder
type: guide
is_index: false
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash/restore-web-link
previous_page_id: trash/restore-folder
---

# Permanently Delete Folder

Once a folder has been moved to the trash, it will stay in the trash for 30
days by default before being purged. Administrators of Business or
Enterprise accounts can alter the purge window. If you wish to permanently
delete the folder from the trash before the purge window expires, make a
`DELETE` request to `/folders/:folder_id/trash` using the trashed folder's `ID`
.

<Samples id='delete_folders_id_trash' >

</Samples>
