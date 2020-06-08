---
rank: 195
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - task
  - task_assignment
category_id: tasks
subcategory_id: null
is_index: true
id: tasks
type: guide
total_steps: 5
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: tasks/delete
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tasks/index.md
---
<!-- alex disable reject -->

# Tasks

Tasks allow users to request collaborators on a file to review a file or
complete a piece of work. Tasks can be used by developers to create file-centric
workflows. Learn more about tasks from the [**Adding Comments and
Tasks**][community] article on our support site.

<ImageFrame border shadow width='300' center>

![Box Tasks in UI](./tasks-documentation.png)

</ImageFrame>

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

[community]: https://community.box.com/t5/Sharing-Content-with-Box/Adding-Comments-and-Tasks/ta-p/19815