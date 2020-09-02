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
  https://github.com/box/developer.box.com/blob/default/content/guides/tasks/4-update.md
---
<!-- alex disable reject -->

# 既存のタスクの変更

Boxでタスクを更新するには、タスクのIDを指定して[`PUT /tasks/:task_id`](e://put_tasks_id) APIを呼び出す必要があります。このAPIを使用すると、タスクの`action`タイプの変更、`message`の追加、期日の変更を行うことができます。

<Samples id="put_tasks_id">

</Samples>

## タスクのアクション

Boxは現在、`action`値によって定義される、`review`と`complete`という2種類のタスクをサポートしています。

タスクのタイプによって、タスクがなりうる解決状態と、ウェブアプリおよびモバイルアプリでユーザーに表示されるインターフェイスが決まります。

| タスクのアクション  | 考えられる解決状態                            |
| ---------- | ------------------------------------ |
| `review`   | `incomplete`, `approved`, `rejected` |
| `complete` | `incomplete`, `complete`             |

`review`タスクは`incomplete`状態で開始され、`incomplete`、`approved`、または`rejected`としてマークすることができます。ユーザーインターフェイスには、テキストボックスのほか、タスクを承認または拒否する1組のボタンが表示されます。

`complete`タスクは`incomplete`状態で開始され、`incomplete`または`completed`としてマークすることができます。このタスクが完了済みとしてマークされると、タスクの状態をそれ以上変更することはできなくなります。ユーザーインターフェイスには、テキストボックスのほか、タスクを完了済みとしてマークするためのボタンが表示されます。

## 完了のルール

ファイルに関連するタスクは、そのファイルの複数のコラボレータに割り当てることができます。また、タスクの`completion_rule`を使用すると、タスクを完了する必要があるのはタスクが割り当てられているすべてのユーザー(`all_assignees`)か1人の担当者のみ(`any_assignee`)かを定義できます。
