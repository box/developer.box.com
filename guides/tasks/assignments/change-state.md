---
related_endpoints:
  - put_task_assignments_id
related_guides:
  - tasks/assignments/assign
  - tasks/assignments/unassign
category_id: tasks
subcategory_id: tasks/assignments
is_index: false
id: tasks/assignments/change-state
rank: 6
type: guide
total_steps: 6
sibling_id: tasks/assignments
parent_id: tasks/assignments
next_page_id: ''
previous_page_id: tasks/assignments/list
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/guides/tasks/assignments/6-change-state.md
---

<!-- alex disable reject -->

# Change task assignment state

To update a task assignment's state call the
[`PUT /tasks/:task_id/assignments`](e://put_task_assignments_id) API and
include a `resolution_state`, such as `completed`, `incomplete`,
`approved`, or `rejected`.

<Samples id='put_task_assignments_id' >

</Samples>

## Resolution states

Box currently supports two types of tasks defined by the `action` value:
`review` tasks and `complete` tasks.

The type of task determines the possible resolution states a task can be in and
the interface shown to a user in the web and mobile apps.

| Task action | Possible resolution states           |
|-------------|--------------------------------------|
| `review`    | `incomplete`, `approved`, `rejected` |
| `complete`  | `incomplete`, `complete`             |

A `review` task starts out in an `incomplete` state and can be marked as
`incomplete`, `approved`, or `rejected`. In the user interface a user is
provided with a text box and an pair of buttons to approve or reject the task.

A `complete` task starts out in an `incomplete` state and can be marked
`incomplete` or `completed`. Once a this task is marked completed, no
further changes can be made to the task's state. In the user interface a user is
provided with a text box and an button to mark the task as completed.
