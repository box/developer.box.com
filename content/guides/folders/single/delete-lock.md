---
rank: 10
related_endpoints:
  - delete_folder_locks_id
related_guides:
  - folders/single/create-lock
  - folders/single/get-lock
alias_paths: []
related_resources:
  - folder-lock
---

# Delete Folder Lock

To remove a lock applied to a folder in Box, call the
`DELETE /folder_locks/:id` API with the id of the folder lock.

<Samples id='delete_folder_locks_id' />

<Message type='notice'>
  # Locating the folder Lock ID

  To delete a folder lock you must supply the folder lock ID to the API. A
  folder lock ID is supplied in the response when
  [creating a folder lock](g://folders/single/get-lock/), or
  when [listing locks](g://folders/single/get-lock/) on a given folder.
</Message>