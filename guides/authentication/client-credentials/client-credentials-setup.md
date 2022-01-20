---
rank: 2
related_endpoints:
  - get_authorize
related_guides:
  - applications/select
  - authentication/select
  - authentication/oauth2/oauth2-setup
required_guides:
  - authentication/select
  - authentication/oauth2/oauth2-setup
related_resources: []
alias_paths:
  - /docs/construct-jwt-claim-manually
  - /guides/authentication/client-credentials
category_id: authentication
subcategory_id: authentication/client-credentials
is_index: false
id: authentication/client-credentials/client-credentials-setup
type: guide
total_steps: 1
sibling_id: authentication/client-credentials
parent_id: authentication/client-credentials
next_page_id: authentication/client-credentials
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/client-credentials/client-credentials-setup.md
fullyTranslated: true
---
# クライアント資格情報許可を使用した設定

## 前提条件

サーバー側認証を使用してカスタムアプリを設定するには、Box Enterpriseアカウントから[開発者コンソール][devconsole]にアクセスできることを確認する必要があります。または、[Developerアカウント][devaccount]にサインアップすることもできます。

## アプリの作成手順

### 1. 開発者コンソールに移動する

Boxにログインし、[開発者コンソール][devconsole]に移動して、\[**アプリの新規作成**] を選択します。

### 2. アプリケーションの種類を選択する

アプリケーションの種類のリストから \[**カスタムアプリ**] を選択します。次の手順を促すモーダルが表示されます。

<ImageFrame border center>

![認証の選択画面](../images/select-app-type.png)

</ImageFrame>

### 3. 認証の種類とアプリケーション名を選択する

クライアントIDとクライアントシークレットを使用してアプリケーションIDを確認する場合は、\[**サーバー認証 (クライアント資格情報許可)**] を選択します。その後、アプリケーションの名前を入力し、\[**アプリの作成**] をクリックします。

<Message warning>

選択すると、新しいアプリケーションを作成しない限り、別の認証方法に変更できません。

</Message>

## アプリの承認

アプリケーションを使用するには、Box管理者がBox管理コンソールでそのアプリケーションを承認しておく必要があります。

[開発者コンソール][devconsole]で、目的のアプリケーションの \[**承認**] タブに移動します。

<ImageFrame border width="400" center>

![キーの追加と管理](../images/app-authorization.png)

</ImageFrame>

\[**確認して送信**] をクリックして、承認を得るためにBox Enterprise管理者にメールを送信します。このプロセスの詳細については、[承認ガイド][app-auth]を参照してください。

<CTA to="g://authorization/custom-app-approval">

カスタムアプリケーションの承認方法を確認する

</CTA>

## 基本的な構成

### アプリケーションアクセス

アプリケーションのアクセスレベルにより、アプリからアクセスできるユーザーおよびコンテンツが決まります。デフォルトでは、アプリケーションで問題なく操作できるのは、その[サービスアカウント][sa]とすべての[App User][user-types]のコンテンツのみです。企業の既存の管理対象ユーザーにもアクセスするには、[開発者コンソール][devconsole]の \[**構成**] タブから \[**アプリアクセスレベル**] に移動し、\[**アプリ + Enterpriseアクセス**] に設定します。 

<ImageFrame border>

![アプリのアクセスレベル](../images/app-access-level.png)

</ImageFrame>

### アプリケーションスコープ

アプリケーションのスコープにより、アプリケーションが呼び出すことができるエンドポイントとリソースが決まります。各オプションの詳細については、[スコープのガイド][scopes]を参照してください。

<ImageFrame border width="600" center>

![アプリスコープ](../images/app-scopes.png)

</ImageFrame>

### CORSドメイン

アプリケーションがJavaScriptでフロントエンドのブラウザコードからAPI呼び出しを実行する場合は、[クロスオリジンリソース共有][cors] (CORS) のために、これらの呼び出しの実行元となるドメインを許可リストに追加する必要があります。すべてのリクエストがサーバー側のコードから発行される場合は、このセクションをスキップできます。

許可リストに完全なURIを追加するには、[開発者コンソール][devconsole]の \[**構成**] タブの下部にある \[**CORSドメイン**] セクションに移動します。

<ImageFrame border>

![アプリのCORS設定](../images/app-cors.png)

</ImageFrame>

[devconsole]: https://app.box.com/developers/console

[devaccount]: https://account.box.com/signup/n/developer

[scopes]: g://api-calls/permissions-and-errors/scopes

[cors]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

[user-types]: g://getting-started/user-types

[sa]: g://getting-started/user-types/service-account

[app-auth]: g://authorization
