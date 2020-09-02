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
id: authentication/user-types/managed-users
type: guide
total_steps: 2
sibling_id: authentication/user-types
parent_id: authentication/user-types
next_page_id: authentication/user-types
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/user-types/managed-users.md
---
# 管理対象ユーザー

管理対象ユーザーは、最も一般的なBoxユーザーです。このユーザーは、BoxウェブアプリやBoxモバイルアプリにログインできる会社の従業員です。管理対象ユーザーにはいくつかのバリエーションがあります。

## 管理者ロールと共同管理者ロール

管理者ロールまたは共同管理者ロールを持つ管理対象ユーザーは、管理者ユーザーとよく呼ばれます。

Box Enterpriseの管理者と共同管理者は、Boxインスタンスのメンテナンス担当であるため、通常のユーザーよりも多くのアクセス権限が付与されます。つまり、管理者ユーザーは、グループ、ユーザー、メタデータテンプレートなどのリソースをAPIを介して管理できますが、通常の管理対象ユーザーはそれができません。

<Message>

# 管理者ユーザーとしてログイン

アプリケーションによっては、管理者ユーザーだけが適切に管理する必要のある権限が必要とされるため、管理者ユーザーによるログインが必要になる場合があります。

この一例として、会社のイベントフィードを監視し、不審なイベントに対して措置を講じるセキュリティアプリケーションがあります。会社のフィードを監視し、他のユーザーのファイルに対して措置を講じるには、アプリケーションに管理者レベルのアクセス権限が必要です。

</Message>

## 外部ユーザー

外部で管理されているユーザー(つまり、外部ユーザー)は、アプリケーションとは別の会社に属している管理対象ユーザーです。

外部ユーザーによく遭遇するのは、外部ユーザーが、アプリケーションの会社のユーザーが所有するコンテンツでコラボレーションしている場合やOAuth 2.0を介してアプリケーションを承認する場合です。

外部ユーザーは、アプリケーションの会社に属していないため、会社のすべてのユーザーのリストを取得しても表示されません。同様に、アプリケーションは外部ユーザーを作成、編集、管理できません。

## 制限と注意事項

Box APIを介して管理対象ユーザーを使用する際はいくつかの制限があります。

* 開発者ダッシュボードでアプリケーションが「会社」レベルの「アプリケーションアクセス」を持つよう構成されている場合を除き、JWT認証の使用時に管理対象ユーザーのデータにアクセスすることはできません。
* アプリケーションが「ユーザーとして操作を実行」または「ユーザーアクセストークンを生成」するよう構成されている場合を除き、JWT認証の使用時に管理対象ユーザーの代わりに操作を実行することはできません。
