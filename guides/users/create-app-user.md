---
rank: 2
related_endpoints:
  - post_users
related_guides:
  - users/create-managed-user
  - users/deprovision/user
  - users/deprovision/transfer-folders
related_pages: []
required_guides: []
related_resources:
  - user
alias_paths: []
category_id: users
subcategory_id: null
is_index: false
id: users/create-app-user
type: guide
total_steps: 3
sibling_id: users
parent_id: users
next_page_id: users/delete-user
previous_page_id: users/create-managed-user
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/users/create-app-user.md
---
# App Userの作成

App Userは、[JWT認証](guide://applications/custom-apps/jwt-setup/)を使用しているアプリによってのみ作成されるプログラム上のユーザーアカウントです。ユーザーがログインするためのBoxアカウントを持っていなくても、ユーザー、グループ、またはプロセスをアプリケーションの背後で表せるようにすることを目的としています。

App Userは、BoxアプリケーションがAPIを介してのみアクセスでき、`box.com`に直接ログインするための資格情報を持っていません。

## 一般的なApp Userのパターン

一般的なApp Userは以下のようなパターンを目的に作成されます。

* `box.com`アカウントを持たない単一のアプリケーションユーザーまたはユーザーグループを表すため。
* App Userに会社内のすべてのイベントを監視させるなどの、アプリケーションプロセスを表すため。
* コンテンツが`box.com`ウェブアプリによって変更される可能性を排除し、ユーザーアカウントのファイルおよびフォルダ構造を完全に制御する機能をアプリケーションに提供するため。

## 新しいApp Userの作成

新しいApp Userを生成するには、最低でもApp Userの名前が必要になります。

<Samples id="post_users_app">

</Samples>

App Userの作成時に設定できるすべての使用可能なオプションパラメータを確認するには、[ユーザーエンドポイントの作成](endpoint://post-users)を参照してください。

App Userが作成されると、ユーザーオブジェクトが返されます。ユーザーオブジェクト内には、App UserのIDがあります。これは、ユーザーを変更するAPIリクエストを実行するために今後使用される可能性があります。
