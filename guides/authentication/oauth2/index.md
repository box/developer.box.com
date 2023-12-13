---
rank: 2
related_endpoints: []
related_guides:
  - applications/app-types/select
  - ../pages/platform/user-types
required_guides:
  - authentication/select
related_resources: []
alias_paths:
  - /docs/authenticate-with-oauth-2
category_id: authentication
subcategory_id: authentication/oauth2
is_index: true
id: authentication/oauth2
type: guide
total_steps: 4
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/oauth2/as-user
previous_page_id: authentication/oauth2/with-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/oauth2/index.md
fullyTranslated: true
---
# OAuth 2.0認証

クライアント側OAuth 2.0は、Box APIに対してユーザーを認証する最も簡単な方法の1つです。これは、ユーザーがアプリケーションから他のアプリケーションにある自分のデータにアクセスできるようにすることを目的とした[オープンスタンダード](https://oauth.net/2/)です。

Twitter、Facebook、またはGoogleを使用してウェブサイトにログインしたことがあれば、OAuth 2.0を使用したことがあると考えられます。

<ImageFrame border>

![OAuth 2.0フロー](./oauth2-flow.png)

</ImageFrame>

Boxでのクライアント側認証にも同様のフローがあります。このフローでは、ユーザーは、アプリケーションからBoxウェブアプリにリダイレクトされて、ログインするように求められ、アプリケーションに対してユーザーのデータへのアクセス権限を付与します。

## OAuth 2.0を使用する場合

クライアント側認証は、以下に当てはまるアプリに最適な認証方法です。

* 既存のBoxアカウントを持っているユーザーを使用する
* ユーザーにBoxを使用していることを知らせる必要がある
* ユーザーのBoxアカウントにデータを保存し、アプリケーションのBoxアカウントには保存しない
