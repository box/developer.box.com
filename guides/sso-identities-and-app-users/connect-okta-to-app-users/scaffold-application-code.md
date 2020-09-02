---
type: quick-start
hide_in_page_nav: true
category_id: sso-identities-and-app-users
subcategory_id: sso-identities-and-app-users/connect-okta-to-app-users
is_index: false
id: >-
  sso-identities-and-app-users/connect-okta-to-app-users/scaffold-application-code
rank: 1
total_steps: 6
sibling_id: sso-identities-and-app-users/connect-okta-to-app-users
parent_id: sso-identities-and-app-users/connect-okta-to-app-users
next_page_id: sso-identities-and-app-users/connect-okta-to-app-users/configure-okta
previous_page_id: sso-identities-and-app-users/connect-okta-to-app-users
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/sso-identities-and-app-users/connect-okta-to-app-users/1-scaffold-application-code.md
---
# アプリケーションコードのスキャフォールディング

このガイドではまず、必要となるOktaとBoxのアプリケーションを作成するにあたり、コードと構成データを格納するローカルアプリケーションを作成します。

言語/フレームワークの設定に応じて、空のアプリケーションを作成し、必要な依存関係のほか、すべての構成ファイルとプログラムファイルをインストールします。

まずは、以下からお好みの言語/フレームワークを選択してください。

<Grid columns="2">

<Choose option="programming.platform" value="node" color="blue">

# Node

Express.jsフレームワークを使用します。

</Choose>

<Choose option="programming.platform" value="java" color="blue">

# Java

Spring Bootフレームワークを使用します。

</Choose>

</Grid>

<Grid columns="2">

<Choose option="programming.platform" value="python" color="blue">

# Python

Flaskフレームワークを使用します。

</Choose>

<Choose option="programming.platform" value="cs" color="blue">

# .NET

ASP.NET Coreフレームワークを使用します。

</Choose>

</Grid>

<Choice option="programming.platform" value="node" color="none">

* アプリケーション用にローカルディレクトリを作成します。
* そのローカルディレクトリの中に`package.json`ファイルを作成し、お好みのエディタで開いたら、以下の内容をコピーして貼り付け、ファイルを保存して閉じます。

```js
{
  "name": "okta-box",
  "version": "1.0.0",
  "description": "Box / Okta sample integration",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Box",
  "license": "ISC",
  "dependencies": {
    "@okta/oidc-middleware": "^4.0.0",
    "@okta/okta-sdk-nodejs": "^3.2.0",
    "box-node-sdk": "^1.31.0",
    "express-session": "^1.17.0"
  }
}
```

* ターミナル/コンソールから`npm init`を実行して依存関係をインストールします。
* ローカルディレクトリに2つのファイル(`server.js`および`config.js`)を作成します。
* `config.js`を開いて、以下のデフォルト構成を保存します。

```js
const oktaClientId = exports.oktaClientId = '';
const oktaClientSecret = exports.oktaClientSecret = '';
const oktaOrgUrl = exports.oktaOrgUrl = '';
const oktaBaseUrl = exports.oktaBaseUrl = 'http://localhost:3000';
const oktaRedirect = exports.oktaRedirect = '/authorization-code/callback';
```

</Choice>

<Choice option="programming.platform" value="java" color="none">

* Eclipseで新しいプロジェクトを作成します。求められたら、Gradleプロジェクトを選択します。
* プロジェクトの一意の名前を入力します。このガイドでは`okta.sample`という名前を使用しています。
* `build.gradle`ファイルを開いて以下の依存関係を追加します。保存したら、Gradleプロジェクトを更新します。

```java
dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-security'
  implementation 'org.springframework.boot:spring-boot-starter-web'
  implementation 'com.okta.spring:okta-spring-boot-starter:1.4.0'
  testImplementation('org.springframework.boot:spring-boot-starter-test') {
    exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
  }
  testImplementation 'org.springframework.security:spring-security-test'
  compile 'com.box:box-java-sdk:2.44.1'
}
```

* `/src/main/resources/application.properties`ファイルを開いて以下のデフォルトを保存します。

```java
okta.oauth2.redirect-uri=/authorization-code/callback
okta.oauth2.issuer=
okta.oauth2.clientId=
okta.oauth2.clientSecret=

security.oauth2.sso.loginPath=/authorization-code/callback
```

</Choice>

<Choice option="programming.platform" value="python" color="none">

* アプリケーション用にローカルディレクトリを作成します。
* ターミナル/コマンドプロンプトで`pip`コマンド(`pip install flask flask_oidc okta boxsdk config`)を使用して、必要な依存関係をインストールします。
* ローカルディレクトリに3つのファイル(`client_secrets.json`、`config.py`、`server.py`)を作成します。
* `config.py`を開いて以下の内容を保存します。これは、必要となるOktaアプリの構成情報の一部です。残りの情報については、次の手順で設定します。

```python
okta_client_secret = 'YOUR OKTA CLIENT SECRET'
okta_org_url = 'YOUR OKTA ORG URL'
okta_auth_token = 'YOUR OKTA APP TOKEN'
okta_callback_route = '/oidc/callback'
```

* `client_secrets.json`を開いて以下の内容を保存します。これは、構成時にFlask OpenID Connect統合で使用される標準のオブジェクトです。残りの情報については、次の手順で設定します。

```js
{
  "web": {
    "client_id": "OKTA CLIENT ID",
    "client_secret": "OKTA CLIENT SECRET",
    "auth_uri": "OKTA AUTHORIZE URI",
    "token_uri": "OKTA TOKEN URI",
    "issuer": "OKTA APP DEFAULT",
    "userinfo_uri": "OKTA APP USER INFO URI",
    "redirect_uris": [
      "http://127.0.0.1:5000/oidc/callbac"
    ]
  }
}
```

</Choice>

<Choice option="programming.platform" value="cs" color="none">

* アプリケーション用にローカルディレクトリを作成します。
* コマンドプロンプト/ターミナルウィンドウを開いて、ローカルアプリケーションディレクトリに移動します。[.NET Core CLI][dotnet-cli]を使用して、`dotnet new mvc`と入力してEnterキーを押します。これにより、ASP.NET Core MVC (Model-View-Controller)ウェブアプリに主要なスキャフォールディングが作成されます。または、[Visual Studioから直接][vs-app-create]このアプリケーションを作成することもできます。
* コマンドプロンプト/ターミナルウィンドウで、ローカルアプリケーションディレクトリに`dotnet add package Okta.AspNetCore`と入力してOkta ASP.NET Coreの依存関係を追加し、`dotnet add package Box.V2.Core`と入力してBoxの依存関係を追加します。
* Visual Studioまたはお好みのエディタに新しいアプリケーションを読み込みます。
* プロジェクトのルート内で`Startup.cs`を開きます。
* ファイルの先頭に以下のパッケージ宣言を追加します。

```dotnet
using Microsoft.AspNetCore.Authentication.Cookies;
using Okta.AspNetCore;
```

* `ConfigureServices`メソッドの内容を以下の内容に置き換えます。具体的なOktaアプリケーションの値は次の手順で設定します。

<!-- markdownlint-disable line-length -->

```dotnet
services.AddControllersWithViews();
services.AddAuthentication(options =>
{
  options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
  options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
  options.DefaultChallengeScheme = OktaDefaults.MvcAuthenticationScheme;
})
.AddCookie()
.AddOktaMvc(new OktaMvcOptions
{
  // Replace these values with your Okta configuration
  OktaDomain = "",
  ClientId = "",
  ClientSecret = ""
});
```

<!-- markdownlint-enable line-length -->

次の行を`Configure`メソッドの**先頭**に追加します。

```dotnet
app.UseAuthentication();
```

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

開始するには、お好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## まとめ

* 新しいローカルアプリケーション、ファイル、基本的な構成の詳細を作成しました。
* プロジェクトの依存関係をすべてインストールしました。

<Observe option="programming.platform" value="node,java,python">

<Next>

ローカルアプリケーションの設定が完了しました

</Next>

</Observe>

[dotnet-cli]: https://docs.microsoft.com/en-us/dotnet/core/tools/

[vs-app-create]: https://docs.microsoft.com/en-us/visualstudio/ide/quickstart-aspnet-core
