---
related_endpoints:
  - post_task_assignments
related_guides: 
  - tasks/assignments/unassign
  - tasks/assignments/change-state
---

# Assign a task to a user

To assign a task to a user you will need to provide the 
[`POST /task_assignments`](e://post_task_assignments) API with the `id` of the
task and the `id` or `login` of the user.

<Samples id='post_task_assignments' />

<Message notice>
  When assigning a task to a user, you can either do so by user `id` or by
  using their login email, which Box refers to as `login` within the API.
</Message>

<Message warning>
  # Permissions

  Both the user assigning the task and the user the task is being assigned to
  needs to be a collaborator on the file.
</Message>
