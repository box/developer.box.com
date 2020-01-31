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
task and the user's details. For the user an application can either use the user
`id` or the user's login email, which Box refers to as their `login`.

<Samples id='post_task_assignments' />

<Message notice>
  # Notifications

  When creating a task an email notification is sent to the user who the task is
  assigned to.
</Message>

<Message warning>
  # Permissions

  Both the user assigning the task and the user the task is being assigned to
  needs to be a collaborator on the file.
</Message>
