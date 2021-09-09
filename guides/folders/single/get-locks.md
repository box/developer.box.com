---
rank: 9
related_endpoints:
  - get_folder_locks
related_guides:
  - folders/single/create-lock
  - folders/single/delete-lock
required_guides: []
related_resources:
  - folder_locks
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/get-locks
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/delete-lock
previous_page_id: folders/single/create-lock
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/get-locks.md
---
# Get Folder Lock

To get a list of the current locks on a folder in Box, call the
`GET /folder_locks/` API with the id of the folder supplied as a `folder_id`
query string parameter.

<Message type='notice'>

# Folder Locks

When using any folder lock API endpoints, you must be the owner/co-owner of
the folder you are trying to access.

</Message>

<Samples id='get_folder_locks' >

</Samples>

## Folder ID

The `id` of any folder can be determined by visiting a folder in the web
application and copying the `id` from the URL. For example, for the URL
`https://*.app.box.com/folder/123` the `folder_id` is `123`.