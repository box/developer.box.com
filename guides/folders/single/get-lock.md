---
rank: 9
related_endpoints:
  - get_folder_lock
related_guides:
  - folders/single/create-lock
  - folders/single/delete-lock
required_guides: []
related_resources:
  - folder-locks
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/get-lock
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/delete-lock
previous_page_id: folders/single/create-lock
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/get-lock.md
---
# Get Folder Lock

To get a list of the current locks on a folder in Box, call the
`GET /folder_locks/` API with the id of the folder supplied as a `folder_id`
query string parameter.

<Samples id='get_folder_locks' >

</Samples>

## Folder ID

The `id` of any folder can be determined by visiting a folder in the web
application and copying the `id` from the URL. For example, for the URL
`https://*.app.box.com/folder/123` the `folder_id` is `123`.