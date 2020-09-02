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
  https://github.com/box/developer.box.com/blob/default/content/guides/tasks/assignments/6-change-state.md
---
<!-- alex disable reject -->

# タスク割り当て状態の変更

タスク割り当ての状態を更新するには、[`PUT /tasks/:task_id/assignments`](e://put_task_assignments_id) APIを呼び出し、`completed`、`incomplete`、`approved`、`rejected`などの`resolution_state`を含めます。

<Samples id="put_task_assignments_id">

</Samples>

## 解決状態

Boxは現在、`action`値によって定義される、`review`と`complete`という2種類のタスクをサポートしています。

タスクのタイプによって、タスクがなりうる解決状態と、ウェブアプリおよびモバイルアプリでユーザーに表示されるインターフェイスが決まります。

| タスクのアクション  | 考えられる解決状態                            |
| ---------- | ------------------------------------ |
| `review`   | `incomplete`, `approved`, `rejected` |
| `complete` | `incomplete`, `complete`             |

`review`タスクは`incomplete`状態で開始され、`incomplete`、`approved`、または`rejected`としてマークすることができます。ユーザーインターフェイスには、テキストボックスのほか、タスクを承認または拒否する1組のボタンが表示されます。

`complete`タスクは`incomplete`状態で開始され、`incomplete`または`completed`としてマークすることができます。このタスクが完了済みとしてマークされると、タスクの状態をそれ以上変更することはできなくなります。ユーザーインターフェイスには、テキストボックスのほか、タスクを完了済みとしてマークするためのボタンが表示されます。
