---
rank: 50
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - folder
  - folders
alias_paths:
  - /docs/work-with-folders
category_id: folders
subcategory_id: null
id: folders
type: guide
is_index: true
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
---

# Folders

Creates a copy of a folder within a destination folder.

The original folder will not be changed.

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
