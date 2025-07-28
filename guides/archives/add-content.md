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
category_id: archives
subcategory_id: null
is_index: false
id: archives/add-content
type: guide
total_steps: 3
sibling_id: archives
parent_id: archives
next_page_id: archives/restore-content
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/archives/add-content.md
---
# Add content to Box Archive

To add content to an archive, you need to create it first. If you
have not done this yet, use the [Create Archive][Create Archive] endpoint.

## Add file or folder to archive

Use the [`PUT /files/:id`][Update file] API endpoint to add a file to an archive, or the [`PUT /folders/:id`][Update folder] endpoint to add a folder.
The `id` parameter is the ID of the file/folder you want to add to the archive.
To specify the destination, use the `parent.id` [parameter][Update parent id of folder] in the request body.
This can be either an ID of an archive or the ID of a folder that is inside an archive.

[Create Archive]: https://developer.box.com/reference/v2025.0/post-archives/
[Update file]: e://put-files-id
[Update parent id of file]: https://developer.box.com/reference/put-files-id/#param-parent-id
[Update folder]: e://put-folders-id
[Update parent id of folder]: https://developer.box.com/reference/put-folders-id/#param-parent-id