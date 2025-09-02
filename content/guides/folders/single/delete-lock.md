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
---

# Delete Folder Lock

To remove a lock applied to a folder in Box, call the
`DELETE /folder_locks/:id` API with the id of the folder lock.

<Message type='notice'>
  # Folder Locks

  When using any folder lock API endpoints, you must be authenticated as the
  owner/co-owner of the folder you are trying to access.
</Message>

<Samples id='delete_folder_locks_id' />

<Message type='notice'>
  # Locating the folder Lock ID

  To delete a folder lock you must supply the folder lock ID to the API. A
  folder lock ID is supplied in the response when
  [creating a folder lock](g://folders/single/create-lock), or
  when [listing locks](g://folders/single/get-locks) on a given folder.
</Message>