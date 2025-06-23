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

This guide describes how to restore content that has been mistakenly archived.
See [Add content to Box Archive][Add content to archive] for information on how to add content to an archive.

## Restore file from archive

To restore a file from an archive, you can use the [`PUT /files/:id`][Update file] API endpoint.
The `id` is the ID of the file you want to restore from an archive.
To specify the destination, use the `parent.id` [parameter][Update parent id of file] in the request body.
This is the ID of an existing folder (can be owned by any user) where you want to restore the file.

## Restore folder from archive

To restore a folder from an archive, you can use the [`PUT /folders/:id`][Update folder] API endpoint.
The `id` is the ID of the folder you want to restore from an archive.
To specify the destination, use the `parent.id` [parameter][Update parent id of folder] in the request body.
This is the ID of an existing folder (can be owned by any user) where you want to restore the folder.

[Add content to archive]: g://archives/add-content
[Update file]: e://put-files-id
[Update parent id of file]: https://developer.box.com/reference/put-files-id/#param-parent-id
[Update folder]: e://put-folders-id
[Update parent id of folder]: https://developer.box.com/reference/put-folders-id/#param-parent-id
