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
---

# Permanently Delete Folder

Once a folder has been moved to the trash, it will remain in the trash for 30
days by default before being purged. Administrators of Business or
Enterprise accounts can alter the purge window. If you wish to permanently
delete the folder from the trash before the purge window expires, make a
`DELETE` request to `/folders/:folder_id/trash` using the trashed folder's `ID`
.

<Samples id='delete_folders_id_trash' />
