---
rank: 4
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
  - /authentication/user-types
category_id: getting-started
subcategory_id: getting-started/user-types
is_index: true
id: getting-started/user-types
type: guide
total_steps: 3
sibling_id: getting-started
parent_id: getting-started
next_page_id: ''
previous_page_id: getting-started/user-types/app-users
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/user-types/index.md
fullyTranslated: true
---
# ユーザータイプ

## 概要

アプリケーションの計画と開発で重要なのは、関与するユーザーのタイプを把握することです。ユーザーのタイプは主に以下の4つです。

<!-- markdownlint-disable line-length -->

|            | 管理者権限                        | 管理者以外の権限                 |
| ---------- | ---------------------------- | ------------------------ |
| 従来のユーザー    | [管理者または共同管理者ユーザー][admin]     | [管理対象ユーザー][managed-user] |
| Platformのみ | [サービスアカウント][service-account] | [App User][app-user]     |

<!-- markdownlint-enable line-length -->

<Message>

# 自分のアプリケーションで使用するユーザーのタイプ

アプリケーションがどのタイプのユーザーとして認証されるかは、作成したアプリケーションの種類と、アクセストークンの作成で使用した認証の種類によって決まります。

</Message>

<!-- i18n-enable localize-links -->

[admin]: https://support.box.com/hc/ja/articles/360043694174-管理者と共同管理者の権限について

<!-- i18n-disable localize-links -->

[service-account]: g://getting-started/user-types/service-account

[managed-user]: g://getting-started/user-types/managed-users

[app-user]: g://getting-started/user-types/app-users
