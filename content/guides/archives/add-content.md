---
rank: 1
related_endpoints:
  - post-archives
  - put-files-id
  - put-folders-id
related_resources:
  - archive
related_guides:
  - archives/restore-content
required_guides: []
alias_paths: []
---

# Add content to Box Archive

To be able to add content to an archive, you need to create an archive first. If you
have not done this yet, use the [Create Archive][Create Archive] endpoint.

## Add file to archive

To add a file to an archive, you can use the [`PUT /files/:id`][Update file] API endpoint.
The `id` parameter is the ID of the file you want to add to the archive.
To specify the destination, use the `parent.id` [parameter][Update parent id of file] in the request body.
This can be either an ID of an archive or the ID of a folder that is inside an archive.

## Add folder to archive

To add a folder to an archive, you can use the [`PUT /folders/:id`][Update folder] API endpoint.
The `id` parameter is the ID of the folder you want to add to the archive.
To specify the destination, use the `parent.id` [parameter][Update parent id of folder] in the request body.
This can be either an ID of an archive or the ID of a folder that is inside an archive.

[Create Archive]: e://post-archives
[Update file]: e://put-files-id
[Update parent id of file]: https://developer.box.com/reference/put-files-id/#param-parent-id
[Update folder]: e://put-folders-id
[Update parent id of folder]: https://developer.box.com/reference/put-folders-id/#param-parent-id
