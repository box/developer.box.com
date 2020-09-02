---
rank: 5
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - applications/select
required_guides: []
related_resources:
  - user
alias_paths:
  - /docs/user-types
  - /docs/app-users
  - /docs/service-account
category_id: authentication
subcategory_id: authentication/user-types
is_index: true
id: authentication/user-types
type: guide
total_steps: 2
sibling_id: authentication
parent_id: authentication
next_page_id: ''
previous_page_id: authentication/user-types/app-users
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/user-types/index.md
---
# ユーザータイプ

アプリケーションが直面する可能性のあるユーザーのタイプにはいくつかあります。その主な違いは、ユーザーの管理者レベルの権限と、ユーザーが実際のBoxユーザーとプラットフォームアプリケーションのみに表示される仮想ユーザーのどちらを表しているかという点にあります。

管理者権限を持つユーザーには通常のユーザーとは異なる権限があるため、ユーザーのタイプは、アプリケーションからアクセスできるデータの種類に影響します。

## 概要

<!-- markdownlint-disable line-length -->

以下に、Box APIで使用可能なユーザーのタイプの概要を示します。

|            | 管理者権限                        | 管理者以外の権限                 |
| ---------- | ---------------------------- | ------------------------ |
| 従来のユーザー    | [管理者ユーザー][admin-user]        | [管理対象ユーザー][managed-user] |
| プラットフォームのみ | [サービスアカウント][service-account] | [App User][app-user]     |

<!-- markdownlint-enable line-length -->

<Message>

# 自分のアプリケーションで使用するユーザーのタイプ

アプリケーションがどのタイプのユーザーとして認証されるかは、作成したアプリケーションの種類と、アクセストークンの作成で使用した認証の種類に大きく依存します。

</Message>

[admin-user]: guide://authentication/user-types/managed-users/#admin--co-admin-roles

[service-account]: guide://authentication/user-types/app-users/#service-accounts

[managed-user]: guide://authentication/user-types/managed-users

[app-user]: guide://authentication/user-types/app-users
