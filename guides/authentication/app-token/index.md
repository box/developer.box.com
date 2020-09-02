---
rank: 3
related_endpoints: []
related_guides:
  - applications/select
  - authentication/user-types
  - authentication/select
required_guides:
  - applications/custom-apps/app-token-setup
  - authentication/select
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/app-token
is_index: true
id: authentication/app-token
type: guide
total_steps: 4
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/app-token/rollover
previous_page_id: authentication/app-token/without-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/app-token/index.md
---
# アプリトークン認証

アプリトークンを使用するサーバー側認証は、Box APIに対して認証するための代替方法で、アプリケーションのサービスアカウントに制限されている、有効期間の長い固定のアクセストークンを使用します。

## アプリトークンの制限

サーバー側アプリトークンは、アプリケーションのアクセス権限がその所有アカウントに対するデータの読み取りおよび書き込みのみになる認証方式です。アプリトークン認証は、主にBox Viewアプリケーションでの使用を目的としています。

この認証方式を使用すると、アプリケーションはそのアプリケーションに属しているサービスアカウントとして自動的に認証されるため、ユーザーを承認する必要はありません。

## アプリトークンを使用する場合

アプリトークンを使用するサーバー側認証は、以下に当てはまるアプリに最適な認証方式です。

* ユーザーモデルがない環境、またはBoxアカウントを持たないユーザーがいる環境で使用する
* 独自のIDシステムを使用する
* ユーザーにBoxを使用していることを認識させたくない
* ユーザーのアカウントではなく、アプリケーションのサービスアカウントにデータを保存する
