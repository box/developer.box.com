---
rank: 8
related_endpoints:
  - post_folder_locks_folder_id
related_guides:
  - folders/single/get-lock
  - folders/single/delete-lock
required_guides: []
related_resources:
  - folder-lock
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/create-lock
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/get-lock
previous_page_id: folders/single/change-owner
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/create-lock.md
---
# Create Folder Lock

To create a lock on a folder in Box you will need to provide our API with the
`id` of the folder for which the lock should be applied. Optionally you may
supply the specific `locked_operations` to be applied with the folder lock.

<Samples id='post_folder_locks' >

</Samples>

<Message type='notice'>

# Setting Locked Operations

If the `locked_operations` object is included with a folder lock request,
both `move` and `delete` need to be set. Supplying only one lock operation in
the object will produce an error.

</Message>

## Lock Operations

There are two possible lock operations that may be applied to a folder, `move`
and `delete`.

The `move` lock will prevent the folder from being moved to a new location or
owner while the lock is still applied.

The `delete` lock will prevent the folder from being deleted while the lock is
still applied.