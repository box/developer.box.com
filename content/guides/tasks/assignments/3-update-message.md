---
related_endpoints:
  - put_task_assignments_id
related_guides: 
  - tasks/assignments/assign
  - tasks/assignments/unassign
  - tasks/assignments/change-state
---

# Change an assignment's message

To update a task assignment's message call the
[`PUT /tasks/:task_id/assignments`](e://put_task_assignments_id) API, and
include the new `message` for the task assignment.

<Samples id='put_task_assignments_id' variant='message' />
