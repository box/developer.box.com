---
rank: 6
related_endpoints:
  - delete_users_id
related_guides:
  - users/deprovision/user
  - users/deprovision/transfer-folders
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: null
is_index: false
id: users/delete-user
type: guide
total_steps: 3
sibling_id: users
parent_id: users
next_page_id: users
previous_page_id: users/create-app-user
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/users/delete-user.md
---
# ユーザーの削除

App Userと管理対象ユーザーの削除プロセスは同じです。ユーザーアカウントを削除するには、削除するアカウントのユーザーIDを指定します。

<Samples id="delete_users_id">

</Samples>

ユーザーアカウントを削除するときに設定できるオプションパラメータも2つあります。

* force: アカウントにまだコンテンツがある場合でも、ユーザーを削除するかどうか。
* notify: アカウントが削除されたという通知をユーザーに送信するかどうか。

<Message type="notice">

ユーザーアカウントにまだコンテンツがある場合、ユーザー削除リクエストは失敗します。これを解決するには、別のアカウントに[すべてのファイルまたはフォルダを転送する](g://users/deprovision/transfer-folders)か、オプションの`force`パラメータを使用します。

</Message>
