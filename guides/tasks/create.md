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
  https://github.com/box/developer.box.com/blob/default/content/guides/tasks/1-create.md
---
<!-- alex disable reject -->

# タスクの作成

タスクを作成するには、タスクの`action`と、タスクの追加先となるファイルを表す`item`を指定して[`POST /tasks`][post_tasks] APIを呼び出す必要があります。

<Samples id="post_tasks">

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

[post_tasks]: e://post_tasks
