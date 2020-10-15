---
rank: 9
related_endpoints:
  - get_folder_locks_folder_id
related_guides:
  - folders/single/create-lock
  - folders/single/delete-lock
required_guides: []
related_resources:
  - folder-locks
alias_paths: []
---

# Get Folder Lock

To get a list of the current locks on a folder in Box, call the
`GET /folder_locks/?folder_id=:id` API with the id of the folder.

<Samples id='get_folder_locks_folder_id' />

## File ID

The `id` of any folder can be determined by visiting a folder in the web
application and copying the `id` from the URL. For example, for the URL
`https://*.app.box.com/folder/123` the `folder_id` is `123`.