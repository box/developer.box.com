---
rank: 5
related_endpoints:
  - post_folders_id_copy
related_guides:
  - folders/single/create
  - folders/single/delete
required_guides: []
related_resources:
  - folder
alias_paths: []
---

# Copy Folder

Creates a copy of a folder within a destination folder.

The original folder will not be changed.

To copy a folder in Box you will need to provide our API with the `id` of the
`parent` folder that you would like to copy the folder into.

<Samples id='post_folders_id_copy' />

Optionally, you can provide a different name for the new folder.

<Samples id='post_folders_id_copy' variant='with_name' />

<Message type='notice'>
  # Name restrictions
  
  There are some restrictions to the folder name. Names containing non-printable
  ASCII characters, forward and backward slashes (`/`, `\`), as well as names
  with trailing spaces are prohibited.

  Additionally, the names `.` and `..` are reserved names and therefore
  also prohibited.
</Message>

## Asynchronous copying

If the folder being copied contains up to 500 items the copy will happen
synchronously with the API call. The call will not return until the copy
operation has completed.

If the folder contains more than 500 items the copy operation will be run
asynchronously and the API call will return directly yet before the copy
operation has completed. We currently have no API to check when a copy operation
has finished.

## Folder locking

During this operation, part of the file tree will be locked, mainly the source
folder and all of its descendants, as well as the destination folder.

For the duration of the operation, no other move, copy, delete, or restore
operation can performed on any of the locked folders. Most importantly, this
means that the same folder can not be copied to two different parts of the
folder tree at the same time.

## Metadata

If the destination folder has a metadata cascade policy attached to any of the
parent folders a metadata cascade operation will be kicked off asynchronously.

We currently have no API to check when this operation has finished.
