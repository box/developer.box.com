---
rank: 4
related_endpoints:
  - put_task_assignments_id
related_guides: []
required_guides: []
alias_paths: []
---

# Change a task assignment message

To update a task assignment in Box you will need to call the
[`PUT /tasks/:task_id/assignments`](e://put_task_assignments_id) API, and
include the new `message` for the task assignment.

<Samples id='put_task_assignments_id' variation='message' />
