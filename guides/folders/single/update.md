---
rank: 2
related_endpoints:
  - put_folders_id
related_guides:
  - folders/single/update
required_guides:
  - folders/single/create
related_resources:
  - folder
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/update
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/rename
previous_page_id: folders/single/create
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/update.md
---
# Update Folder

To update a folder in Box you will need to call the following API.

<Samples id='put_folders_id' >

</Samples>

## Name restrictions

There are some restrictions to the folder name. Names containing non-printable
ASCII characters, forward and backward slashes (`/`, `\`), as well as names
with trailing spaces are prohibited.

Additionally, the names `.` and `..` are reserved names and therefore
also prohibited.

## Timeout

Timeout for this operation is 600 seconds. The operation will complete
after a `HTTP 503` has been returned.