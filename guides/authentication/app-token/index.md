---
rank: 5
related_endpoints: []
related_guides:
  - applications/app-types/select
  - ../pages/platform/user-types
  - authentication/select
required_guides:
  - authentication/app-token/app-token-setup
  - authentication/select
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/app-token
is_index: true
id: authentication/app-token
type: guide
total_steps: 5
sibling_id: authentication
parent_id: authentication
next_page_id: ''
previous_page_id: authentication/app-token/endpoints
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/app-token/index.md
fullyTranslated: true
---
# アプリトークン認証

アプリトークンを使用するサーバー側認証は、Box APIに対する代替の認証方法で、アプリケーションの[サービスアカウント][sa]に制限されている、有効期間の長い固定のアクセストークンを使用します。アプリトークン認証は、[Box View][box-view]を利用するアプリケーションによる使用を目的としています。

## アプリトークンの制限

サーバー側アプリトークンは、アプリケーションに、それ自体のアカウントのデータに対する読み取りと書き込みのアクセス権限だけがある認証方法です。この認証方法を使用すると、アプリケーションはそのアプリケーションに属しているサービスアカウントとして自動的に認証されるため、ユーザーを承認する必要がありません。

## アプリトークンを使用する場合

アプリトークンを使用するサーバー側認証は、以下に当てはまるアプリに最適な認証方法です。

* [Box View][box-view]を介してBoxのプレビューサービスを利用する
* ユーザーモデルがない環境、またはBoxアカウントを持たないユーザーがいる環境で使用する
* 独自のIDシステムを使用する
* ユーザーにBoxを使用していることを認識させたくない
* ユーザーのアカウントではなく、アプリケーションのサービスアカウントにデータを保存する

[sa]: page://platform/user-types/#service-account

[box-view]: g://embed/box-view
