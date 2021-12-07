---
rank: 8
related_endpoints:
  - post_folder_locks
related_guides:
  - folders/single/get-locks
  - folders/single/delete-lock
required_guides: []
related_resources:
  - folder_lock
alias_paths: []
---

# Create Folder Lock

To create a lock on a folder in Box you will need to provide our API with the
`id` of the folder for which the lock should be applied. Optionally you may
supply the specific `locked_operations` to be applied with the folder lock.

<Message type='notice'>
  # Folder Locks

  When using any folder lock API endpoints, you must be authenticated as the
  owner/co-owner of the folder you are trying to access.
</Message>

<Samples id='post_folder_locks' />

<Message type='warning'>
  # Setting Locked Operations

  If the `locked_operations` object is included with a folder lock request,
  both `move` and `delete` need to be set to `true`. Supplying only one lock
  operation in the object, or setting the values of both to something other
  than `true` will produce an error. These options are in place to allow
  for additional operations in the future.
</Message>

## Lock Operations

There are two possible lock operations that may be applied to a folder, `move`
and `delete`.

The `move` lock will prevent the folder from being moved to a new location or
owner while the lock is still applied.

The `delete` lock will prevent the folder from being deleted while the lock is
still applied.