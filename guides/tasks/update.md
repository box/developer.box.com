---
rank: 4
related_endpoints:
  - put_tasks_id
related_guides: null
required_guides: []
alias_paths: []
category_id: tasks
subcategory_id: null
is_index: false
id: tasks/update
type: guide
total_steps: 5
sibling_id: tasks
parent_id: tasks
next_page_id: tasks/delete
previous_page_id: tasks/get
---

# Make changes to an existing task

To update a task in Box you will need to call the
[`PUT /tasks/:task_id`](e://put_tasks_id) API. Updates to an existing task can
include `completion_rule`, `message`, `due_at`, and more

<Samples id='put_tasks_id' >

</Samples>

<Message>

When a task is created or updated with completion rule `all_assignees`
(default), the task will only be considered completed when all assignees
have completed the task. When a task is created or updated with completion
rule `any_assignee`, the task will be considered completed when one assignee
has completed the task.

Value is one of "`all_assignees`", "`any_assignee`"

</Message>
