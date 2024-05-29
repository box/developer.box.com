---
rank: 0
related_endpoints: []
related_guides:
  - authentication/select
  - authentication/oauth2/oauth2-setup
required_guides:
  - authentication/select
  - applications/app-types/custom-apps
related_resources: []
alias_paths:
  - /docs/setting-up-an-oauth-app
  - /docs/oauth-20
category_id: authentication
subcategory_id: authentication/oauth2
is_index: false
id: authentication/oauth2/oauth2-setup
type: guide
total_steps: 4
sibling_id: authentication/oauth2
parent_id: authentication/oauth2
next_page_id: authentication/oauth2/with-sdk
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/oauth2/oauth2-setup.md
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

![認証の選択画面](../images/custom-app-selection.png)

</ImageFrame>

### アプリケーションの認証の選択

\[**ユーザー認証 (OAuth 2.0)**] を選択し、\[**アプリの作成**] で確定します。

<Message warning>

選択すると、新しいアプリケーションを作成しない限り、別の認証方法に変更できません。

</Message>

<ImageFrame border center width="300">

![認証の選択画面](../images/custom-app-authentication-oauth.png)

</ImageFrame>

## 基本的な構成

アプリケーションを使用するには、事前にいくつかの追加構成が必要になります。

### リダイレクトURI

OAuth 2.0フローの間、ユーザーは、認証のためにブラウザにリダイレクトされた後、アプリケーションが自分の代わりにアクションを実行することを承認します。

Boxでは、ユーザーをリダイレクトする前に、[承認URL][url-redirect]に渡された`redirect_uri`パラメータが、アプリケーションに構成されたリダイレクトURIのいずれかと一致することを確認します。完全に一致しているかどうかがチェックされるため、URIはまったく同じである必要があります。localhostおよびループバックアドレスのリダイレクトURIは、どのポートへのリダイレクトも許可されますが、スキーム、ドメイン、パス、およびクエリパラメータは、構成されているURIのいずれかと一致する必要があります。

これらのURIは、開発者コンソールの \[構成] ページにある \[OAuth 2.0リダイレクトURI] セクションで設定できます。有効なHTTPS URIまたは安全性の低いHTTP URI (localhostまたはループバックアドレスの場合) である必要があります。重複するURIの保存は許可されていません。

<Message warning>

日本時間2021年11月30日以降、OAuth 2.0を使用する新規のアプリケーションでは、開発者コンソールの \[構成] タブで設定されたURIとリダイレクト時に使用されるURIが厳密に一致する必要があります。また、そのため新規のアプリケーションと既存のアプリケーションの両方で、複数のリダイレクトURIを追加できるようになります。

アプリケーション用にリダイレクトURIを複数設定した場合、承認URLには、開発者コンソールで設定したURIのいずれかと一致する`redirect_uri`パラメータを含める必要があります。このパラメータが指定されていない場合、ユーザーがアプリケーションにアクセス権限を付与すると、`redirect_uri_missing`エラーが表示され、アプリにリダイレクトされません。

既存のアプリケーションでは、サービスの中断を回避するために、日本時間2022年5月14日までにこのURLを変更する必要があります。

</Message>

<ImageFrame border width="600" center>

![アプリ名のフォーム](../images/app-redirect-uri-3.png)

</ImageFrame>

### アプリケーションスコープ

スコープを使用して、アプリケーションがデータにアクセスするために必要な権限を定義します。各オプションの詳細については、[スコープのガイド][scopes]を参照してください。

![アプリ名のフォーム](../images/app-scopes.png)

### CORSドメイン

アプリケーションがJavaScriptでフロントエンドのブラウザコードからAPIコールを実行する場合は、[クロスオリジンリソース共有][cors] (CORS) のために、これらの呼び出しの実行元となるドメインを許可リストに追加する必要があります。すべてのリクエストがサーバー側のコードから発行される場合は、このセクションをスキップできます。

許可リストにすべてのURIを追加するには、[開発者コンソール][devconsole]の \[**構成**] タブの下部にある \[**CORSドメイン**] セクションに移動します。

![アプリ名のフォーム](../images/app-cors.png)

[devconsole]: https://app.box.com/developers/console

[devaccount]: https://account.box.com/signup/n/developer

[devtoken]: g://authentication/tokens/developer-tokens

[scopes]: g://api-calls/permissions-and-errors/scopes

[cors]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

[oauth2]: g://authentication/oauth2

[url-redirect]: e://get-authorize/#param-redirect_uri
