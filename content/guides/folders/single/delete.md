---
rank: 6
related_endpoints:
  - delete_folders_id
related_guides:
  - folders/single/create
required_guides:
  - folders/single/create
alias_paths: []
related_resources:
  - folder
---

# Delete Folder

To remove a folder in Box you will need to provide our API with the ID of the
folder.

<Samples id='delete_folders_id' />

## Deleting non-empty folders

This API returns an error if the folder is not empty. When deleting a
folder, you can pass in the `recursive` parameter to force a
folder to be deleted even if it is not empty. This will delete all
items within this folder, including any of their descendants.

## Folder locking

The enterprise settings determine whether the folder will
be permanently deleted from Box or moved to the trash.

During this operation, part of the file tree will be locked, mainly
the source folder and all of its descendants.

For the duration of the operation, no other move, copy, delete, or restore
operation can performed on any of the locked folders.

## Timeout

Timeout for this operation is 600 seconds. The operation will include
after a `HTTP 503` has been returned.
