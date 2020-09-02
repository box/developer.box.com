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

# タスク

ユーザーはタスクを使用することで、ファイルのコラボレータに対して、ファイルのレビューや作業の一部の完了をリクエストできます。タスクは、開発者がファイル中心のワークフローを作成するために使用できます。タスクの詳細については、Boxのサポートサイトの記事「[**コメントとタスクの追加**][community]」を参照してください。

<ImageFrame border shadow width="300" center>

![BoxのUIでのタスク](./tasks-documentation.png)

</ImageFrame>

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

[community]: https://community.box.com/t5/Sharing-Content-with-Box/Adding-Comments-and-Tasks/ta-p/19815
