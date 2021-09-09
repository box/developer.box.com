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
---

# Get Folder Lock

To get a list of the current locks on a folder in Box, call the
`GET /folder_locks/` API with the id of the folder supplied as a `folder_id`
query string parameter.

<Message type='notice'>
  # Folder Locks

  When using any folder lock API endpoints, you must be authenticated as the
  owner/co-owner of the folder you are trying to access.
</Message>

<Samples id='get_folder_locks' />

## Folder ID

The `id` of any folder can be determined by visiting a folder in the web
application and copying the `id` from the URL. For example, for the URL
`https://*.app.box.com/folder/123` the `folder_id` is `123`.