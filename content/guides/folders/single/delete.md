---
rank: 6
related_endpoints:
  - delete_folders_id
related_guides:
  - folders/create
required_guides:
  - folders/create
alias_paths: []
related_resources:
  - folder
---

# Delete Folder

To remove a folder in Box you will need to provide our API with the ID of the
folder.

<Samples id='delete_folders_id' />

## Deleting non-empty folders

When deleting a folder, you can pass in the `recursive` parameter to
force a folder to be deleted even if it is not empty. This will delete all
items within this folder, including any of their descendants.

## Recursive deletion

This API returns an error if the folder is not empty. You
can use the `recursive` query parameter to force this
operation to recursively delete the folder and all of its
contents.

## Folder locking

The enterprise settings determine whether the folder will
be permanently deleted from Box or moved to the trash.

During this operation, part of the file tree will be locked, mainly
the source folder and all of its descendants.

For the duration of the operation, no other move, copy, delete, or restore
operation can performed on any of the locked folders.

## Timeout

Timeout for this operation is 60 seconds. The operation will include
after a `HTTP 503` has been returned.
