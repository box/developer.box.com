---
related_endpoints:
  - post_task_assignments
related_guides:
  - tasks/assignments/unassign
  - tasks/assignments/change-state
category_id: tasks
subcategory_id: tasks/assignments
is_index: false
id: tasks/assignments/assign
rank: 1
type: guide
total_steps: 6
sibling_id: tasks/assignments
parent_id: tasks/assignments
next_page_id: tasks/assignments/unassign
previous_page_id: tasks/assignments
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tasks/assignments/1-assign.md
fullyTranslated: true
---
# ユーザーへのタスクの割り当て

ユーザーにタスクを割り当てるには、[`POST /task_assignments`](e://post_task_assignments) APIにタスクの`id`とユーザーの詳細を指定する必要があります。ユーザーについては、アプリケーションはユーザー`id`またはユーザーのログインメールを使用できます。これはBoxではユーザーの`login`と呼ばれます。

<Samples id="post_task_assignments">

</Samples>

<Message notice>

# 通知

タスクを作成すると、そのタスクが割り当てられるユーザーにメール通知が送信されます。

</Message>

<Message warning>

# 権限

タスクを割り当てるユーザーとタスクが割り当てられるユーザーの両方が、ファイルのコラボレータである必要があります。

</Message>
