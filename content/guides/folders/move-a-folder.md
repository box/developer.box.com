---
rank: 5
tag: folders
related_endpoints:
  - put_folders_id_copy
related_guides:
  - basics/folders/create-a-folder
  - basics/folders/delete-a-folder
required_guides:
  - basics/folders/move-a-folder
alias_paths: []
---

# Move a folder

To move a folder, update the ID of its parent. To enable an email address that
can be used to upload files to the folder, update the `folder_upload_email`
field. An optional `If-Match` header can be included to ensure that client only
updates the folder if it knows about the latest version.

<Samples id='put_folders_id' />

This call will return synchronously. This holds true even for folder moves when
the folder contains (in all its descendants) a large number of items. For very
large folders, this means the call could take minutes or hours to return.

Some parts of the tree are locked during moves.
