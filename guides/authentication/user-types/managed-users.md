---
rank: 3
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
total_steps: 3
sibling_id: authentication/user-types
parent_id: authentication/user-types
next_page_id: authentication/user-types
previous_page_id: authentication/user-types/app-users
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/user-types/managed-users.md
fullyTranslated: true
---
# 管理対象ユーザーと外部ユーザー

## 管理対象ユーザー

管理対象ユーザーとは、管理者と共同管理者が管理コンソールから直接編集、削除、セキュリティ設定の適用、レポートの実行を行うことができる、Box Enterpriseのアカウントです。これらのユーザーは、標準のBoxライセンスを購入しており、ほとんどの場合に同じメールドメインを共有します (常にではありません)。

<Message>

# 管理者ユーザーとしてログイン

アプリケーションの中には、正しく動作するために管理者だけが持つ権限を必要とし、管理者にログインを要求するものがあります。

この一例として、エンタープライズイベントを監視し、不審なイベントに対して措置を講じるセキュリティアプリケーションがあります。イベントエンドポイントを使用できるのは、レポートへのアクセス権限を持つ管理者または共同管理者のみです。

</Message>

### 制限

* サーバー間アプリケーションでは、管理対象ユーザーのコンテンツにアクセスするために、[開発者コンソール][dc]で「アプリ + Enterprise」アプリケーションアクセスを構成しておく必要があります。 

* サーバー間アプリケーションは、「ユーザーとして操作を実行」または「ユーザーアクセストークンを生成」するよう構成されている場合を除き、管理対象ユーザーの代わりに操作を実行することはできません。

## 外部ユーザー

外部で管理されているユーザー (外部ユーザー) とは、別の会社に属している管理対象ユーザーです。外部ユーザーはコラボレーションでよく遭遇します。外部ユーザーによく遭遇するのは、外部ユーザーが、アプリケーションの会社のユーザーが所有するコンテンツでコラボレーションしている場合やOAuth 2.0アプリケーションを承認する場合です。外部ユーザーは自分のBoxアカウントを所有していますが、管理コンソールで管理することができません。

### 制限

* 外部ユーザーはアプリケーションの会社に属していないため、会社のすべてのユーザーのリストを取得しても返されません。
* アプリケーションは外部ユーザーを作成、編集、管理できません。

[dc]: https://app.box.com/developers/console
