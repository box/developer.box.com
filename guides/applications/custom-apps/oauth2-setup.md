---
rank: 1
related_endpoints: []
related_guides:
  - authentication/select
  - applications/custom-apps/oauth2-setup
required_guides:
  - authentication/select
  - applications/custom-apps
related_resources: []
alias_paths:
  - /docs/setting-up-an-oauth-app
  - /docs/oauth-20
category_id: applications
subcategory_id: applications/custom-apps
is_index: false
id: applications/custom-apps/oauth2-setup
type: guide
total_steps: 4
sibling_id: applications/custom-apps
parent_id: applications/custom-apps
next_page_id: applications/custom-apps/jwt-setup
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/custom-apps/oauth2-setup.md
fullyTranslated: true
---
# OAuth 2.0を使用した設定

カスタムアプリは、クライアント側の[OAuth 2.0][oauth2]認証を使用するよう設定できます。

<CTA to="g://authentication/oauth2">

OAuth 2.0認証のしくみを確認する

</CTA>

## 前提条件

OAuth 2.0認証を使用してカスタムアプリを設定するには、Box Enterpriseアカウントから[開発者コンソール][devconsole]にアクセスできることを確認する必要があります。または、[Developerアカウント][devaccount]にサインアップすることもできます。

## アプリの作成手順

### 1. 開発者コンソールに移動する

Boxにログインし、[開発者コンソール][devconsole]に移動して、\[**アプリの新規作成**] を選択します。

### 2. アプリケーションの種類を選択する

アプリケーションの種類のリストから \[**カスタムアプリ**] を選択します。次の手順を促すモーダルが表示されます。

<ImageFrame border>

![アプリケーションの選択画面](../images/select-app-type.png)

</ImageFrame>

### 3. 認証の種類とアプリ名を選択する

\[**ユーザー認証 (OAuth 2.0)**] を選択し、アプリケーションに一意の名前を指定します。\[**アプリの作成**] をクリックします。

<ImageFrame border width="400" center>

![認証の選択画面](../images/custom-app-selection.png)

</ImageFrame>

## 基本的な構成

アプリケーションを使用するには、事前にいくつかの追加構成が必要になります。

### リダイレクトURI

OAuth 2.0フローの間、ユーザーは、認証のためにブラウザにリダイレクトされた後、アプリケーションが自分の代わりにアクションを実行することを承認します。

成功したら、ユーザーはアプリケーションの構成済みリダイレクトURIに再度リダイレクトされます。このURIは、セキュアなHTTPS URLでも、`localhost`で動作しているサーバーの安全性の低いHTTP URLでもかまいません。

<ImageFrame border width="600" center>

![アプリ名のフォーム](../images/app-redirect-uri.png)

</ImageFrame>

### アプリケーションスコープ

スコープを使用して、アプリケーションがデータにアクセスするために必要な権限を定義します。各オプションの詳細については、[スコープのガイド][scopes]を参照してください。

<ImageFrame border width="600" center>

![アプリ名のフォーム](../images/app-scopes.png)

</ImageFrame>

### CORSドメイン

アプリケーションがJavaScriptでフロントエンドのブラウザコードからAPI呼び出しを実行する場合は、[クロスオリジンリソース共有][cors] (CORS) のために、これらの呼び出しの実行元となるドメインを許可リストに追加する必要があります。すべてのリクエストがサーバー側のコードから発行される場合は、このセクションをスキップできます。

許可リストに完全なURIを追加するには、[開発者コンソール][devconsole]の \[**構成**] タブの下部にある \[**CORSドメイン**] セクションに移動します。

<ImageFrame border>

![アプリ名のフォーム](../images/app-cors.png)

</ImageFrame>

[devconsole]: https://app.box.com/developers/console

[devaccount]: https://account.box.com/signup/n/developer

[devtoken]: g://authentication/access-tokens/developer-tokens

[scopes]: g://api-calls/permissions-and-errors/scopes

[cors]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

[oauth2]: g://authentication/oauth2
