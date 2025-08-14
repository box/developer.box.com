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
---

# Bulk delete external users

You can remove up to 100 external users from your enterprise using API. 
This API endpoint removes access to all types of content you invited the
listed external users to collaborate on.

To remove the external users, call the
[`POST /external_users/post_external_users_submit_delete_job`]. 

<Samples id="post_external_users_submit_delete_job" />

This job runs in the background, and sends a completion report listing deletion status for each user when it's finished.

<Message type='notice'>
When you delete external users, their pending collaboration invites are not deleted. 
</Message>
