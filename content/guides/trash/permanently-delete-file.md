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
---

# Permanently Delete File

Once a file has been moved to the trash, it will remain in the trash for 30
days by default before being purged. Administrators of Business or
Enterprise accounts can alter the purge window. If you wish to permanently
delete the file from the trash before the purge window expires, make a `DELETE`
request to `/files/:file_id/trash` using the trashed file's `ID`.

<Samples id='delete_files_id_trash' />
