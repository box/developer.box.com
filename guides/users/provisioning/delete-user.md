---
rank: 4
related_endpoints:
  - delete-users-id
related_guides:
  - users/provisioning/deprovision-user
  - users/provisioning/transfer-folders
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
cId: users
scId: users/provisioning
id: users/provisioning/delete-user
isIndex: false
---

# Delete User

The process for deleting both app and managed users is the same. To delete a
user account, supply the user ID for the account that should be
removed.

<Samples id='delete_users_id' >

</Samples>

There are also two optional parameters that may be set when deleting a user
account:

* force: Whether the user should be deleted even if the account still has
content in it.
* notify: Whether the user will receive a notification that the account was
deleted.

<Message type='notice'>

The delete user request will fail if the user account still has content in
it. To resolve this, either
[transfer all files or folders](guides://users/provisioning/transfer-folders)
to another account or use the optional `force` parameter.

</Message>
