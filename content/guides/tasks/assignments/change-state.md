---
rank: 7
related_endpoints:
  - put_task_assignments_id
related_guides: []
required_guides: []
alias_paths: []
---

# Change the state of a task assignment

To update a task assignment in Box you will need to call the
[`PUT /tasks/:task_id/assignments`](e://put_task_assignments_id) API and
include a `resolution_state`, such as `completed`, `incomplete`,
`approved`, or `rejected`.

<Samples id='put_task_assignments_id' />

<Message notice>
    When a task assignment is created, it will be set to an `incomplete`
    resolution state. For tasks with the `review` action type, the 
    `resolution_state` can be `incomplete`, `approved`, or `rejected`. For tasks
    with the `general` action type, the `resolution_state` can be `incomplete`
    or `complete`.

    If you try to use an incompatible combination of action and resolution state,
    the Box API will return a 400 error.
</Message> 
