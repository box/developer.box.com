---
related_endpoints:
  - post_tasks
related_guides:
  - tasks/for-file
  - tasks/get
  - tasks/update
category_id: tasks
subcategory_id: null
is_index: false
id: tasks/create
rank: 1
type: guide
total_steps: 5
sibling_id: tasks
parent_id: tasks
next_page_id: tasks/get
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/guides/tasks/1-create.md
---
<!-- alex disable reject -->

# Create a task

To create a task, you will need to provide the [`POST /tasks`][post_tasks] API
with the `action` for the task, as well as an `item` to represent the file to
add the task to.

<Samples id="post_tasks" >

</Samples>

## Task actions

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

## Completion rules

A task on a file can be assigned to more than one collaborator on the file, and
a task has a `completion_rule` that can be used to define if all users who've
been assigned the task (`all_assignees`) or only one assignee (`any_assignee`)
need to complete the task.

[post_tasks]: e://post_tasks
