---
rank: 1
related_endpoints:
  - post_users
related_guides:
  - users/create-app-user
  - users/deprovision
  - users/deprovision/transfer-folders
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: null
is_index: false
id: users/create-managed-user
type: guide
total_steps: 3
sibling_id: users
parent_id: users
next_page_id: users/create-app-user
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/users/create-managed-user.md
fullyTranslated: true
---
# 管理対象ユーザーの作成

新しい管理対象ユーザーを生成するには、最低でも管理対象ユーザーの名前とメールアドレスが必要になります。

<Message type="notice">

管理対象ユーザーの作成時に指定するメールアドレスは一意である必要があります。既存のBoxユーザーにすでに関連付けられているメールアドレスは使用できません。

</Message>

<Samples id="post_users">

</Samples>

App Userの作成時に設定できるすべての使用可能なオプションパラメータを確認するには、[ユーザーを作成](endpoint://post-users)エンドポイントを参照してください。

<Message type="notice">

Before you can make any changes to the newly created account, you need to click the link you receive in the confirmation email.

</Message>

ユーザー作成リクエストから、ユーザーオブジェクトが返されます。このユーザーオブジェクトには管理対象ユーザーのIDが含まれています。これは、今後ユーザーを変更するAPIリクエストを実行するために使用できます。

新しい管理対象ユーザーが作成されると、使用されているメールアドレス宛てに、アカウントのパスワードの作成を求めるメールがBoxから届きます。このアクションが実行されるまで、アカウントは`pending`状態になります。

<Message type="notice">

セキュリティ上の理由から、新しい管理対象ユーザーの作成時にパスワードを指定することはできません。

</Message>
