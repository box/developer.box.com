---
rank: 2
related_endpoints:
  - put-files-id
  - put-folders-id
related_resources:
  - archive
related_guides:
  - archives/add-content
required_guides: []
alias_paths: []
---

# Restore content from Box Archive

This guide describes how to restore content that you archived by mistake.

## Restore file or folder from archive

Use the [`PUT /files/:id`][Update file] API endpoint to restore a file from an archive, or the [`PUT /folders/:id`][Update folder] endpoint to restore a folder from an archive.
The `id` parameter is the ID of the file/folder you want to restore from an archive.
To specify the destination, use the `parent.id` [parameter][Update parent id of folder] in the request body.
This is the ID of a folder (can be owned by any user) where you want to restore the file/folder.

To restore a file/folder to user's root folder, use `0` as the `parent.id` value. Additionally, pass the ID of the user in the
`parent.user_id` [parameter][Update parent user id of file] in the request body.

[Update file]: e://put-files-id
[Update parent id of file]: https://developer.box.com/reference/put-files-id/#param-parent-id
[Update parent user id of file]: https://developer.box.com/reference/put-files-id/#param-parent-user_id
[Update folder]: e://put-folders-id
[Update parent id of folder]: https://developer.box.com/reference/put-folders-id/#param-parent-id
[Update parent user id of folder]: https://developer.box.com/reference/put-folders-id/#param-parent-user_id
