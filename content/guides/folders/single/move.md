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
---

# Move Folder

To move a folder, update the ID of its parent folder.

<Samples id='put_folders_id' variant='move' />

<Message warning>
  This call will return synchronously. This holds true even for folder moves when
  the folder contains a large number of items in all of its descendants. For very
  large folders, this means the call could take minutes or hours to complete and
  some parts of the tree are locked during moves.

  When moving a folder, part of the file tree will be locked, mainly
  the source folder and all of its descendants, as well as the destination
  folder.

  For the duration of the move, no other move, copy, delete, or restore
  operation can performed on any of the locked folders.
</Message>
