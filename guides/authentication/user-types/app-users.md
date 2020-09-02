---
rank: 1
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - authentication/user-types
required_guides: []
related_resources:
  - user
category_id: authentication
subcategory_id: authentication/user-types
is_index: false
id: authentication/user-types/app-users
type: guide
total_steps: 2
sibling_id: authentication/user-types
parent_id: authentication/user-types
next_page_id: authentication/user-types
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/user-types/app-users.md
---
# App Userとサービスアカウント

App Userとは、ログイン資格情報を持たず、APIを介さないとBoxにアクセスできない、仮のユーザータイプです。このユーザーは、独自のユーザー認証を管理しながらもユーザーのデータを別のBoxユーザーアカウントに保存しようとするアプリケーションで使用できます。

基本的なApp Userを作成できるのは、JWT認証を使用するカスタムアプリの開発時のみです。ユーザーは、それを作成したアプリケーションと緊密に関連付けられます。

## サービスアカウント

サービスアカウントは特殊な種類のApp Userで、管理者ユーザーに似ていますが、ログイン資格情報を持たず、APIを介してしかBoxにアクセスできません。

サービスアカウントは、JWT認証方式を使用して開発者コンソールでカスタムアプリが作成されると自動的に作成されます。こうしたアプリケーションがデフォルトユーザーを認証すると、そのアプリケーションのサービスアカウントとして認証されます。

適切なスコープが構成されている場合、サービスアカウントは会社の権限を編集し、管理対象ユーザーとApp Userの両方を管理できます。

<Message type="warning">

# 管理者の承認

適切なスコープが有効になっている場合、サービスアカウントは、管理者ユーザーが実行できるタスクの多くを実行できます。そのため、JWTアプリケーションを社内で使用できるようにするには、事前に管理者による明示的な承認が必要です。

</Message>

## Box View/パートナーの統合

パートナーの統合(Box View向け)が開発者コンソールで作成されると、サービスアカウントも自動的にアプリケーションに関連付けられます。

このサービスアカウントには、カスタムアプリのサービスアカウントにはない制限がほかにもいくつかあります。

* パートナーの統合で使用されるコンテンツはすべて、このサービスアカウントがアップロードおよび所有する必要がある
* このサービスアカウントは、他のユーザーの情報やコンテンツにアクセスできない
* このサービスアカウントは、タイプを問わず新しいユーザーを作成することも管理することもできない
* このサービスアカウントは、コンテンツのプレビューに関連するAPIのサブセットにしかアクセスできない
