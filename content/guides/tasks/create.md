---
rank: 2
related_endpoints:
  - post_tasks
related_guides:
required_guides: []
alias_paths: []
---

# Create a task

To create a task, you will need to provide the Box API with the `action`, which
is always `review` and the item object, which will include the item `type`
which is `file` and the `id` of the file.

<Samples id="post_tasks" />

<Message>
    When a task is created with completion rule `all_assignees` (default), the
    task will only be considered completed when all assignees have completed
    the task. When a task is created with completion rule `any_assignee`, the
    task will be considered completed when one assignee has completed the task.

    Value is one of "`all_assignees`", "`any_assignee`"
</Message>
