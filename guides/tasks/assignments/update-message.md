---
rank: 4
related_endpoints:
  - put_task_assignments_id
category_id: tasks
subcategory_id: tasks/assignments
is_index: false
id: tasks/assignments/update-message
type: guide
total_steps: 6
sibling_id: tasks/assignments
parent_id: tasks/assignments
next_page_id: tasks/assignments/get
previous_page_id: tasks/assignments/unassign
---

# Change a task assignment message

To update a task assignment in Box you will need to call the
[`PUT /tasks/:task_id/assignments`](e://put_task_assignments_id) API, and
include the new `message` for the task assignment.

<Samples id='put_task_assignments_id' variation='message' >

</Samples>
