---
related_endpoints:
  - delete_task_assignments_id
related_guides:
  - tasks/assignments/assign
  - tasks/assignments/change-state
category_id: tasks
subcategory_id: tasks/assignments
is_index: false
id: tasks/assignments/unassign
rank: 2
type: guide
total_steps: 6
sibling_id: tasks/assignments
parent_id: tasks/assignments
next_page_id: tasks/assignments/update-message
previous_page_id: tasks/assignments/assign
---

# Unassign a task

To unassign a task, you will need to provide the
[`DELETE /task_assignments`](e://delete_task_assignments_id) API with the `id`
of the task assignment.

<Samples id='delete_task_assignments_id' >

</Samples>

<Message warning>

# Permissions

The user deleting the assignment needs to be a collaborator on the file.

</Message>
