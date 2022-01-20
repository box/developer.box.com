---
rank: 1
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - getting-started/user-types
required_guides: []
related_resources:
  - user
alias_paths:
  - /guides/authentication/user-types/managed-users
category_id: getting-started
subcategory_id: getting-started/user-types
is_index: false
id: getting-started/user-types/managed-users
type: guide
total_steps: 3
sibling_id: getting-started/user-types
parent_id: getting-started/user-types
next_page_id: getting-started/user-types/service-account
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/user-types/managed-users.md
fullyTranslated: true
---
# 管理対象ユーザーと外部ユーザー

## 管理対象ユーザー

各Box Enterpriseには、一意のEnterprise IDが割り当てられます。管理対象ユーザーとは、1つのEnterprise IDに属しているすべてのユーザーのことです。管理者と共同管理者は、これらのユーザーに対して、管理コンソールから直接編集、削除、セキュリティ設定の適用、レポートの実行を行うことができます。管理対象ユーザーは、標準のBoxライセンスを購入しており、ほとんどの場合に同じメールドメインを共有します (常にではありません)。

<Message>

# 管理者ユーザーとしてログイン

アプリケーションの中には、正しく動作するために管理者だけが持つ権限を必要とし、管理者にログインを要求するものがあります。

この一例として、Enterprise Eventを監視し、不審なイベントに対して措置を講じるセキュリティアプリケーションがあります。イベントエンドポイントを使用できるのは、レポートへのアクセス権限を持つ管理者または共同管理者のみです。

</Message>

## 外部ユーザー

外部で管理されているユーザー (外部ユーザー) とは、別のEnterprise IDに属している管理対象ユーザーです。外部ユーザーによく遭遇するのは、外部ユーザーが、アプリケーションの企業の管理対象ユーザーが所有するコンテンツでコラボレーションしている場合や、OAuth 2.0アプリケーションを承認する場合です。外部ユーザーは各自Boxアカウントを所有していますが、管理コンソールで管理することができません。

[dc]: https://app.box.com/developers/console
