---
rank: 2
related_endpoints:
  - post_tasks
category_id: tasks
subcategory_id: null
is_index: false
id: tasks/create
type: guide
total_steps: 5
sibling_id: tasks
parent_id: tasks
next_page_id: tasks/get
previous_page_id: ''
---

# Create a task

To create a task, you will need to provide the Box API with the `action`, which
is always `review` and the item object, which will include the item `type`
which is `file` and the `id` of the file.

<Samples id="post_tasks" >

</Samples>

<Message>

When a task is created with completion rule `all_assignees` (default), the
task will only be considered completed when all assignees have completed
the task. When a task is created with completion rule `any_assignee`, the
task will be considered completed when one assignee has completed the task.

Value is one of "`all_assignees`", "`any_assignee`"

</Message>
