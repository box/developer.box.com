---
rank: 4
related_endpoints:
  - put_folders_id
related_guides:
  - folders/single/create
  - folders/single/update
  - folders/single/delete
required_guides: []
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/move
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/copy
previous_page_id: folders/single/rename
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/move.md
---
# Move Folder

To move a folder, update the ID of its parent folder.

<Samples id='put_folders_id' variant='move' >

</Samples>

## Operation details

This call will return synchronously. This holds true even
for folder moves when the folder contains a large number
of items in all of its descendants. For very large
folders, this means the call could take
minutes or hours to complete and
some parts of the tree are locked during moves.

When moving a folder, part of the file tree will
be locked, mainly the source folder and all of its descendants,
as well as the destination folder.

For the duration of the move you cannot perform
other move, copy, delete, or restore operation
on any of the locked folders.

## Moving a subfolder to a private folder

When you attempt to move a collaborated subfolder
to a private one, you will get the [`cannot_make_collaborated_subfolder_private`](g://api-calls/permissions-and-errors/common-errors/#400-bad-request) error.
In such a case, specify the ID of the user that folder
belongs to setting the `owned_by.id` parameter in the request:

<Samples id='put_folders_id' variant='move_private' >

</Samples>