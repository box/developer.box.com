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
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/custom-apps/oauth2-setup.md
---
# OAuth 2.0を使用した設定

カスタムアプリは、クライアント側の[OAuth 2.0][oauth2]認証を使用するよう設定できます。

<CTA to="g://authentication/oauth2">

OAuth 2.0認証のしくみを確認する

</CTA>

## 前提条件

OAuth 2.0認証を使用するカスタムアプリを設定するには、以下の要件を満たす必要があります。

* 会社の[開発者コンソール][devconsole]にアクセスできる必要があります。アクセスできない場合は、[Developerアカウント][devaccount]にサインアップしてください。

## アプリの作成

### 1. 開発者コンソールにログインする

[開発者コンソール][devconsole]に移動し、\[アプリの新規作成]を選択します。

### 2. カスタムアプリを作成する

アプリケーションの種類のリストから\[カスタムアプリ]オプションを選択し、\[次へ]を選択します。

<ImageFrame border>

![アプリケーションの選択画面](../images/app-types.png)

</ImageFrame>

### 3. OAuth 2.0認証を選択する

次の画面で\[標準OAuth 2.0 (ユーザー認証)]を選択し、\[次へ]を選択します。

<ImageFrame border width="400" center>

![認証の選択画面](../images/auth-types.png)

</ImageFrame>

### 4. 名前を入力する

最後に、アプリケーションの一意の名前を入力します。この名前は、Box上のすべてのアプリケーションで一意である必要があります。

<ImageFrame border width="600" center>

![アプリ名のフォーム](../images/app-name.png)

</ImageFrame>

<Message>

アプリケーションは構成され、使用できる状態になりました。[開発者トークン][devtoken]を使用すると、自分のアカウントに対してすぐにAPI呼び出しを実行できます。

</Message>

## 基本的な構成

アプリケーションを使用するには、事前にいくつかの基本的な追加構成が必要になる場合があります。

### リダイレクトURI

OAuth 2.0フローの間、ユーザーは、ログイン資格情報を指定し、自分のデータへのアプリケーションアクセスを承認するために、ブラウザでBoxウェブアプリにリダイレクトされる必要があります。

この後で、ユーザーはアプリケーションのリダイレクトURIに再度リダイレクトされます。このURIには、セキュアなHTTPS URLか、あまりセキュアではない、`localhost`で実行されているサーバーのHTTP URLを使用できます。

<ImageFrame border width="600" center>

![アプリ名のフォーム](../images/app-redirect-uri.png)

</ImageFrame>

### アプリケーションスコープ

これらのオプションでは、アプリケーションがデータにアクセスするのに必要な権限を定義します。各オプションの詳細については、[スコープのガイド][scopes]を参照してください。

<ImageFrame border width="600" center>

![アプリ名のフォーム](../images/app-scopes.png)

</ImageFrame>

### CORSドメイン

アプリケーションがJavaScriptでフロントエンドのブラウザコードからAPI呼び出しを実行する場合、それらの呼び出しの実行元となるドメインを、[クロスオリジンリソース共有][cors](CORS)のため許可する必要があります。

このようなリクエストを発行するには、アプリケーションで有効にする必要があるドメインのURIをすべて入力します。すべてのリクエストがサーバー側のコードから発行される場合、このセクションは空白のままになっている可能性があります。

<ImageFrame border>

![アプリ名のフォーム](../images/app-cors.png)

</ImageFrame>

[devconsole]: https://app.box.com/developers/console

[devaccount]: https://account.box.com/signup/n/developer

[devtoken]: g://authentication/access-tokens/developer-tokens

[scopes]: g://api-calls/permissions-and-errors/scopes

[cors]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

[oauth2]: g://authentication/oauth2
