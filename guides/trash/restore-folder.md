---
rank: 5
related_endpoints:
  - post_folders_id
related_guides:
  - trash/permanently-delete-folder
required_guides: []
related_resources:
  - folders
cId: trash
scId: null
id: trash/restore-folder
isIndex: false
---

# Restore Folder

To restore a folder that has been moved to the trash, but has not yet been
purged, make a `POST` request to the `/folders/:folder_id` endpoint. This will
place the folder in the original parent folder if it is still available, or you
optionally can specify a `parent` folder.

<Samples id='post_folders_id' >

</Samples>

<Message warning>

During a folder restoration operation, part of the file tree will be locked,
such as the source folder for the request and all of its descendants, as
well as the destination folder.

During the restoration of the folder, no other move, copy, delete, or
restore operation can be performed on the locked folders.

</Message>
