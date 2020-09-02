---
related_endpoints:
  - delete_task_assignments_id
related_guides:
  - tasks/assignments/assign
  - tasks/assignments/change-state
category_id: tasks
subcategory_id: tasks/assignments
is_index: false
id: tasks/assignments/unassign
rank: 2
type: guide
total_steps: 6
sibling_id: tasks/assignments
parent_id: tasks/assignments
next_page_id: tasks/assignments/update-message
previous_page_id: tasks/assignments/assign
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tasks/assignments/2-unassign.md
---
# タスク割り当ての解除

タスクの割り当てを解除するには、タスク割り当ての`id`を指定して[`DELETE /task_assignments`](e://delete_task_assignments_id) APIを呼び出します。

<Samples id="delete_task_assignments_id">

</Samples>

<Message warning>

# 権限

割り当てを削除するユーザーは、ファイルのコラボレータである必要があります。

</Message>
