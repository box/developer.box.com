---
rank: 6
related_endpoints:
  - delete_users_id
related_guides:
  - users/deprovision
  - users/deprovision/transfer-folders
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
---

# Delete User

The process for deleting both app and managed users is the same. To delete a
user account, supply the user ID for the account that should be
removed.

<Samples id='delete_users_id' />

There are also two optional parameters that may be set when deleting a user
account:

* force: Whether the user should be deleted even if the account still has content in it.
* notify: Whether the user will receive a notification that the account was deleted.

<Message type='notice'>
  The delete user request will fail if the user account still has content in
  it. To resolve this, either
  [transfer all files or folders](g://users/deprovision/transfer-folders)
  to another account or use the optional `force` parameter.
</Message>
