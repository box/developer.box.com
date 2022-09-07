---
related_endpoints:
  - put_tasks_id
related_guides:
  - tasks/create
  - tasks/get
  - tasks/delete
related_resources:
  - file
  - task
category_id: tasks
subcategory_id: null
is_index: false
id: tasks/update
rank: 4
type: guide
total_steps: 5
sibling_id: tasks
parent_id: tasks
next_page_id: tasks/delete
previous_page_id: tasks/for-file
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tasks/4-update.md
---
# Make changes to an existing task

To update a task in Box you will need to call the
[`PUT /tasks/:task_id`](e://put_tasks_id) API with the ID of the task. This API
can be used to change the `action` type of the task, add a `message`, or change
the due date.

<Samples id='put_tasks_id' >

</Samples>

## Task actions

Box currently supports two types of tasks defined by the `action` value:
`review` tasks and `complete` tasks.

The type of task determines the possible resolution states a task can be in and
the interface shown to a user in the web and mobile apps.

| Task action | Possible resolution states           |
| ----------- | ------------------------------------ |
| `review`    | `incomplete`, `approved`, `rejected` |
| `complete`  | `incomplete`, `complete`             |

A `review` task starts out in an `incomplete` state and can be marked as
`incomplete`, `approved`, or `rejected`. In the user interface a user is
provided with a text box and an pair of buttons to approve or reject the task.

A `complete` task starts out in an `incomplete` state and can be marked
`incomplete` or `completed`. Once a this task is marked completed, no
further changes can be made to the task's state. In the user interface a user is
provided with a text box and an button to mark the task as completed.

## Completion rules

A task on a file can be assigned to more than one collaborator on the file, and
a task has a `completion_rule` that can be used to define if all users who've
been assigned the task (`all_assignees`) or only one assignee (`any_assignee`)
need to complete the task.