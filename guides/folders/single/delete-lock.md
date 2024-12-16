---
rank: 10
related_endpoints:
  - delete_folder_locks_id
related_guides:
  - folders/single/create-lock
  - folders/single/get-locks
alias_paths: []
related_resources:
  - folder_locks
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/delete-lock
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: ''
previous_page_id: folders/single/get-locks
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/delete-lock.md
---
# Delete Folder Lock

To remove a lock applied to a folder in Box, call the
`DELETE /folder_locks/:id` API with the id of the folder lock.

<Message type='notice'>

# Folder Locks

When using any folder lock API endpoints, you must be authenticated as the
owner/co-owner of the folder you are trying to access.

</Message>

<Samples id='delete_folder_locks_id' >

</Samples>

<Message type='notice'>

# Locating the folder Lock ID

To delete a folder lock you must supply the folder lock ID to the API. A
folder lock ID is supplied in the response when
[creating a folder lock](g://folders/single/create-lock), or
when [listing locks](g://folders/single/get-locks) on a given folder.

</Message>