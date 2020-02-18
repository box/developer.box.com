---
related_endpoints:
  - delete_task_assignments_id
related_guides: 
  - tasks/assignments/assign
  - tasks/assignments/change-state
---

# Unassign a task

To unassign a task, you will need to provide the 
[`DELETE /task_assignments`](e://delete_task_assignments_id) API with the `id`
of the task assignment.

<Samples id='delete_task_assignments_id' />

<Message warning>
  # Permissions

  The user deleting the assignment needs to be a collaborator on the file.
</Message>
