---
rank: 7
related_endpoints:
  - post_external_users_submit_delete_job
related_guides:
  - users/delete-user
  - users/deprovision
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: null
is_index: false
id: users/bulk-delete-external-users
type: guide
total_steps: 4
sibling_id: users
parent_id: users
next_page_id: users
previous_page_id: users/delete-user
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/users/bulk-delete-external-users.md
fullyTranslated: true
---
# 外部ユーザーの一括削除

APIを使用して、企業から最大100件の外部ユーザーを削除できます。このAPIエンドポイントにより、リストの外部ユーザーをコラボレーションに招待したすべての種類のコンテンツへのアクセスが削除されます。

外部ユーザーを削除するには、[`POST /external_users/post_external_users_submit_delete_job`][`POST /external_users/post_external_users_submit_delete_job`]を呼び出します。

<Samples id="post_external_users_submit_delete_job">

</Samples>

このジョブはバックグラウンドで実行され、終了時に、各ユーザーの削除ステータスが記載されている完了レポートを送信します。

<Message type="notice">

外部ユーザーを削除しても、保留中のコラボレーションの招待は削除されません。

</Message>
