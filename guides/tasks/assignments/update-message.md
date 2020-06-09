---
related_endpoints:
  - put_task_assignments_id
related_guides:
  - tasks/assignments/assign
  - tasks/assignments/unassign
  - tasks/assignments/change-state
category_id: tasks
subcategory_id: tasks/assignments
is_index: false
id: tasks/assignments/update-message
rank: 3
type: guide
total_steps: 6
sibling_id: tasks/assignments
parent_id: tasks/assignments
next_page_id: tasks/assignments/get
previous_page_id: tasks/assignments/unassign
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tasks/assignments/3-update-message.md
---
# Change an assignment's message

To update a task assignment's message call the
[`PUT /tasks/:task_id/assignments`](e://put_task_assignments_id) API, and
include the new `message` for the task assignment.

<Samples id='put_task_assignments_id' variant='message' >

</Samples>