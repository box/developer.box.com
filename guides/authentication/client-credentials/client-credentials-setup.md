---
rank: 2
related_endpoints:
  - get_authorize
related_guides:
  - applications/app-types/select
  - authentication/select
  - authentication/oauth2/oauth2-setup
required_guides:
  - authentication/select
  - authentication/oauth2/oauth2-setup
related_resources: []
alias_paths:
  - /docs/construct-jwt-claim-manually
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

### 開発者コンソールへの移動

Boxにログインし、[開発者コンソール][devconsole]に移動して、\[**アプリの新規作成**] を選択します。

### アプリケーションの種類の選択

アプリケーションの種類のリストから \[**カスタムアプリ**] を選択します。次の手順を促すモーダルが表示されます。

<ImageFrame border>

![アプリケーションの選択画面](../images/select-app-type.png)

</ImageFrame>

### アプリケーションの基本情報の指定

アプリを説明するために、アプリの名前と説明を指定します。アプリの目的を選択するには、ドロップダウンリストを使用します。選択したオプションに応じて、さらに詳細を指定することが必要になる場合があります。

| 目的                 | 詳細                                               |
| ------------------ | ------------------------------------------------ |
| \[自動化]、\[カスタムポータル] | アプリの作成者 (お客様またはパートナー) を指定します。                    |
| \[統合]              | 統合のカテゴリ、外部システム名のほか、アプリの作成者 (お客様またはパートナー) を指定します。 |
| \[その他]             | アプリの目的と、アプリの作成者 (お客様またはパートナー) を指定します。            |

<ImageFrame border center width="300">

> ![認証の選択画面](../images/custom-app-selection.png)

</ImageFrame>

### アプリケーションの認証の選択

クライアントIDとクライアントシークレットを使用してアプリケーションIDを確認する場合は \[**サーバー認証 (クライアント資格情報許可)**] を選択し、\[**アプリの作成**] で確定します。

<Message warning>

選択すると、新しいアプリケーションを作成しない限り、別の認証方法に変更できません。

</Message>

<ImageFrame border center width="300">

> ![認証の選択画面](../images/custom-app-authentication-client.png)

</ImageFrame>

## アプリ承認

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

アプリケーションがJavaScriptでフロントエンドのブラウザコードからAPIコールを実行する場合は、[クロスオリジンリソース共有][cors] (CORS) のために、これらの呼び出しの実行元となるドメインを許可リストに追加する必要があります。すべてのリクエストがサーバー側のコードから発行される場合は、このセクションをスキップできます。

許可リストに完全なURIを追加するには、[開発者コンソール][devconsole]の \[**構成**] タブの下部にある \[**CORSドメイン**] セクションに移動します。

<ImageFrame border>

![アプリのCORS設定](../images/app-cors.png)

</ImageFrame>

## SDKとクライアント資格情報許可の使用

各SDKのクライアント資格情報許可の詳細については、以下を参照してください。

* [.Net][.Net]

* [Java][Java]

* [Python][Python]

* [Node][Node]

* [IOS][IOS]

[.Net]: https://github.com/box/box-windows-sdk-v2/blob/main/docs/authentication.md#server-auth-with-ccg

[Java]: https://github.com/box/box-java-sdk/blob/main/doc/authentication.md#client-credentials-grant

[Python]: https://github.com/box/box-python-sdk/blob/main/docs/usage/authentication.md#client-credentials-grant

[Node]: https://github.com/box/box-node-sdk/blob/main/docs/authentication.md#client-credentials-grant-authentication

[IOS]: https://github.com/box/box-ios-sdk/blob/main/docs/usage/authentication.md#client-credentials-grant

[devconsole]: https://app.box.com/developers/console

[devaccount]: https://account.box.com/signup/n/developer

[scopes]: g://api-calls/permissions-and-errors/scopes

[cors]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

[user-types]: page://platform/user-types

[sa]: page://platform/user-types/#service-account

[app-auth]: g://authorization
