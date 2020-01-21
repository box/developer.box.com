---
rank: 2
related_endpoints:
  - post_task_assignments
related_guides:
required_guides: []
alias_paths: []
---

# Assign a task to a user

To assign a task to a user in Box, you will need to provide our API with a task
`id` and a user to assign it to.

<Samples id='post_task_assignments' />

<Message notice>
    When assigning a task to a user, you can either do so by user `id` or by
    using their login email, which Box refers to as `login` within the API.
</Message>
