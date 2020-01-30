---
rank: 2
related_endpoints:
  - post_task_assignments
category_id: tasks
subcategory_id: tasks/assignments
is_index: false
id: tasks/assignments/assign
type: guide
total_steps: 6
sibling_id: tasks/assignments
parent_id: tasks/assignments
next_page_id: tasks/assignments/unassign
previous_page_id: tasks/assignments
---

# Assign a task to a user

To assign a task to a user in Box, you will need to provide our API with a task
`id` and a user to assign it to.

<Samples id='post_task_assignments' >

</Samples>

<Message notice>

When assigning a task to a user, you can either do so by user `id` or by
using their login email, which Box refers to as `login` within the API.

</Message>
