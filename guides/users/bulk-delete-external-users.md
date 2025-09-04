---
rank: 7
related_endpoints:
  - post_external_users_submit_delete_job
related_guides:
  - users/delete-user
  - users/deprovision
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: null
is_index: false
id: users/bulk-delete-external-users
type: guide
total_steps: 4
sibling_id: users
parent_id: users
next_page_id: users
previous_page_id: users/delete-user
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/users/bulk-delete-external-users.md
---
# Bulk delete external users

You can remove up to 100 external users from your enterprise using API.
This API endpoint removes access to all types of content you invited the
listed external users to collaborate on.

To remove the external users, call the
[`POST /external_users/post_external_users_submit_delete_job`].

<Samples id="post_external_users_submit_delete_job" >

</Samples>

This job runs in the background, and sends a completion report listing deletion status for each user when it's finished.

<Message type='notice'>

When you delete external users, their pending collaboration invites are not deleted.

</Message>