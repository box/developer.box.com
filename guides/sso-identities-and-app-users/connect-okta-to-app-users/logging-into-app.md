---
type: quick-start
hide_in_page_nav: true
category_id: sso-identities-and-app-users
subcategory_id: sso-identities-and-app-users/connect-okta-to-app-users
is_index: false
id: sso-identities-and-app-users/connect-okta-to-app-users/logging-into-app
rank: 4
total_steps: 6
sibling_id: sso-identities-and-app-users/connect-okta-to-app-users
parent_id: sso-identities-and-app-users/connect-okta-to-app-users
next_page_id: >-
  sso-identities-and-app-users/connect-okta-to-app-users/find-or-create-box-users
previous_page_id: sso-identities-and-app-users/connect-okta-to-app-users/configure-box
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/sso-identities-and-app-users/connect-okta-to-app-users/4-logging-into-app.md
---
# Oktaによるアプリへのログイン

Okta、Box、基本のアプリケーションを設定したら、次は、アプリケーションコードフローにおける最初のステップ、Oktaログインに目を向けます。

Oktaログインでは、ログインのためにユーザーをOktaにリダイレクトする際に使用される言語のOpenID Connect (OIDC)フレームワークを使用して、Oktaのユーザー情報をアプリケーションに返します。こうしたOktaのユーザー情報は、次の手順でBoxユーザーの検証と作成に使用されます。

このセクションでは、以下の操作について説明します。

* アプリケーション構成のスケルトンを設定します。
* ユーザートラフィックを処理するために選択したフレームワークのルートを定義します。
* Oktaのユーザー情報を、Boxユーザーを検証する次の手順に渡します。

## スケルトンの設定

<Choice option="programming.platform" value="node" color="none">

ローカルアプリケーションディレクトリで、手順1で作成した`server.js`ファイルを読み込みます。

まず、以下のパッケージ定義と構成情報をファイルにコピーします。

```js
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');
const bodyParser = require('body-parser');
const boxSDK = require('box-node-sdk');
const config = require('./config.js');
const express = require('express')();
const http = require('http');
const path = require('path');
const fs = require('fs');

express.use(session({
  secret: 'this should be secure',
  resave: true,
  saveUninitialized: false
}));

const oidc = new ExpressOIDC({
  issuer: `https://${config.oktaOrgUrl}/oauth2/default`,
  client_id: config.oktaClientId,
  client_secret: config.oktaClientSecret,
  appBaseUrl: config.oktaBaseUrl,
  loginRedirectUri: `${config.oktaBaseUrl}${config.oktaRedirect}`,
  scope: 'openid profile'
});

express.use(oidc.router);
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({
  extended: true
}));
```

これにより、Express構成とOkta OIDCコネクタの情報が設定されます。ExpressはOIDCコネクタを使用するよう設定され、このクイックスタートガイドの手順2で保存したOktaの情報はOkta統合のコネクタの構成に使用されます。

次に、ルーティングの詳細を追加します。

```js
// Redirect to Okta login
express.get('/', (req, res) => {
  // TODO: HANDLE ROUTE
});
```

これにより、アプリケーションのエントリルートが定義されます。ユーザーがアプリケーションのルート(`/`)にアクセスを試みると、このルート内のコードが実行されます。

最後に、Expressサーバーの初期化を追加してトラフィックをリッスンします。

```js
// Create server
const port = process.env.PORT || 3000;
http.createServer(express).listen(port, () => {
  console.log(`Server started: Listening on port ${port}`);
});
```

</Choice>

<Choice option="programming.platform" value="java" color="none">

ローカルアプリケーションディレクトリで、手順1で作成した`/src/main/java/com/box/sample/Application.java`ファイルを読み込みます。別のアプリケーション名を使用している場合は、同等のディレクトリを読み込みます。

以下の基本的なアプリケーション構造をファイルにコピーします。

```java
package com.box.okta.sample;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.net.URL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.box.sdk.BoxAPIRequest;
import com.box.sdk.BoxConfig;
import com.box.sdk.BoxDeveloperEditionAPIConnection;
import com.box.sdk.BoxJSONResponse;
import com.box.sdk.BoxUser;
import com.box.sdk.CreateUserParams;
import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

@RestController
@EnableAutoConfiguration
public class Application {
  static BoxDeveloperEditionAPIConnection api;

  // TODO: SET ROUTE

  // TODO: INITIALIZE SERVER
}
```

これにより、必要なimport、`Application`クラス、標準的な共有Box APIの接続属性が設定されます。これらは次の手順で定義します。

`// TODO: SET ROUTE`を以下の内容に置き換えます。

```java
@RequestMapping("/")
String home(@AuthenticationPrincipal OidcUser user) throws IOException {
  // TODO: HANDLE ROUTE
}
```

このルートマッピングではアプリケーションのエントリルートを定義します。ユーザーがログアウトした状態でアプリケーションのルート(`/`)にアクセスを試みると、OIDCコネクタによってユーザーは自動的にOktaログインにプッシュされるため、リダイレクトを設定する必要がありません。ユーザーがログイン状態の場合は、このルート内のコードが実行されます。

`// TODO: INITIALIZE SERVER`を以下の内容に置き換えて、Spring Bootサーバーを初期化してトラフィックをリッスンします。

```java
public static void main(String[] args) {
  SpringApplication.run(Application.class, args);
}
```

</Choice>

<Choice option="programming.platform" value="python" color="none">

ローカルアプリケーションディレクトリで、手順1で作成した`server.py`ファイルを読み込みます。

1.

以下の基本的なアプリケーション構造をファイルにコピーします。

```python
from flask import Flask, redirect, g, url_for
from flask_oidc import OpenIDConnect
from okta import UsersClient
from boxsdk import Client
from boxsdk import JWTAuth
import requests
import config
import json

app = Flask(__name__)
app.config.update({
  'SECRET_KEY': config.okta_client_secret,
  'OIDC_CLIENT_SECRETS': './client_secrets.json',
  'OIDC_DEBUG': True,
  'OIDC_ID_TOKEN_COOKIE_SECURE': False,
  'OIDC_SCOPES': ["openid", "profile"],
  'OIDC_CALLBACK_ROUTE': config.okta_callback_route
})

oidc = OpenIDConnect(app)
okta_client = UsersClient(config.okta_org_url, config.okta_auth_token)
```

これにより、Flask構成、Oktaクライアント、Okta OIDCコネクタの情報が設定されます。FlaskはOIDCコネクタを使用するよう設定され、このクイックスタートガイドの手順2で保存したOktaの情報はOkta統合のコネクタの構成に使用されます。

次に、ルート処理が行われる前に実行する`before_request`定義を追加します。ここでは、この定義を使用してOktaのユーザー情報(存在する場合)をキャプチャします。

```python
# Fetch Okta user record if logged in
@app.before_request
def before_request():
  # TODO: HANDLE BEFORE REQUEST
```

最後に、アプリケーションのエントリルートと`box_auth`ルートを定義します。

```python
# Main application route
@app.route('/')
def start():
  # TODO: HANDLE MAIN ROUTE

# Box user verification
@app.route("/box_auth")
@oidc.require_login
def box_auth():
  # TODO: HANDLE BOX AUTH ROUTE

return 'Complete'
```

ユーザーがアプリケーションのルート(`/`)にアクセスを試みると、このルート内のコードが実行されます。Oktaユーザーを検証する際は、`box_auth`ルート内のコードが実行されます。

</Choice>

<Choice option="programming.platform" value="cs" color="none">

ローカルアプリケーションで、`Views` > `Shared` > `Layout.cshtml`を読み込みます。これは、ASP.NETアプリケーションが読み込まれるとレンダリングされるビジュアルコンポーネントになります。ページの先頭に以下のコードを挿入します。

```dotnet
@using System.Security.Claims;

@if (User.Identity.IsAuthenticated)
{
    <p class="navbar-text">Hello, @User.Identity.Name</p>
}
else
{
    <a asp-controller="Account" asp-action="SignIn">Sign In</a>
}
```

Oktaにログインしているユーザーがアクセスすると、Helloというメッセージが表示されます。ログインしていない場合は、サインインリンクが表示されます。

`<a asp-controller="Account" asp-action="SignIn">Sign In</a>`という行に含まれる`asp-controller="Account"`は、作成予定のAccountコントローラでリクエストを処理することを意味します。また、`asp-action="SignIn"`は、このコントローラの`SignIn`メソッドが実行されることを意味します。このファイルを保存して閉じます。

`Controllers`ディレクトリ内に、`AccountController.cs`という新しいファイルを作成します。これは、サインインリンクがクリックされたときに実行されるコントローラになります。

以下の基本的なアプリケーション構造をファイルにコピーします。

```dotnet
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Okta.AspNetCore;
using Box.V2;
using Box.V2.Config;
using Box.V2.JWTAuth;
using Box.V2.Models;

public class AccountController : Controller
{
    public IActionResult SignIn()
    {
        if (!HttpContext.User.Identity.IsAuthenticated)
        {
            return Challenge(OktaDefaults.MvcAuthenticationScheme);
        }

        return RedirectToAction("Profile", "Account");
    }

    [Authorize]
    [Route("~/profile")]
    public IActionResult Profile()
    {
        // TODO: HANDLE ROUTE
    }
}
```

ユーザーがサインインリンクをクリックすると、このコントローラの`SignIn`メソッドが実行されます。ユーザーがまだ認証されていない場合は`Challenge`に送信され、ユーザーはログインするためにOktaにリダイレクトされます。この機能はルーティングフレームワークによって処理されるため、追加で実行するコードは必要ありません。ユーザーが認証済みの場合は`Profile`ルーティングメソッドにリダイレクトされます。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## アプリケーションルートの設定

今度は、メインのルート(`/`)に入ったときに実行されるコードを定義する必要があります。

<Choice option="programming.platform" value="node" color="none">

メインのルート内の`// TODO: HANDLE ROUTE`を以下のコードに置き換えます。

```js
if (req.userContext && req.userContext.userinfo) {
  const tokenSet = req.userContext.tokens;
  const userInfo = req.userContext.userinfo;

  // If Okta ID is present, pass to Box user validation
  if (userInfo.sub) {
    box.validateUser(userInfo, res);
  } else {
    console.log('No Okta ID identified');
  }
} else {
  res.redirect('/login');
}
```

上記のコードでは、まず、OIDCコネクタから入手できるOktaのユーザー情報があるかどうかを確認しています。ユーザーがログインすると、このコネクタにより、Oktaのユーザーと構成の情報が`req.userContext`内のルートで使用できるようになります。

ユーザー情報が存在する場合、つまりユーザーがOktaにログインしている場合は、ユーザー情報をExpressのレスポンスオブジェクトと共に`box.validateUser`に渡して、関連付けられたBoxユーザーが存在するかどうかを確認します。これは次の手順で定義します。

ユーザー情報が存在しない場合、ユーザーは`/login`にリダイレクトされます。OIDCコネクタは自動的にこのルートを処理し、そのユーザーにOktaログインを強制します。

</Choice>

<Choice option="programming.platform" value="java" color="none">

メインのルート内の`// TODO: HANDLE ROUTE`を以下のコードに置き換えます。

```java
// Validate OIDC user against Box
return validateUser(user);
```

Java OIDCコネクタは、手間のかかる部分のほとんどを代わりに処理してくれます。ログアウトしたユーザーがこのルートにアクセスすると、自動的にOktaログインにプッシュされます。ログインすると、OIDCユーザーオブジェクトがこのルートに使用できるようになります。そのユーザーオブジェクトは、次の手順で定義する`validateUser`関数に渡します。

</Choice>

<Choice option="programming.platform" value="python" color="none">

メインのルート内の`// TODO: HANDLE BEFORE REQUEST`を以下のコードに置き換えます。

```python
if oidc.user_loggedin:
  g.user = okta_client.get_user(oidc.user_getfield('sub'))
else:
  g.user = None
```

これにより、OIDCユーザーが存在するかどうか、つまりユーザーがすでにOktaにログインしているかどうかが確認されます。存在する場合は、Oktaクライアントオブジェクトを使用してユーザーオブジェクトを設定し、存在しない場合はユーザーオブジェクトを`None`に設定します。

次に、メインのルート内の`// TODO: HANDLE ROUTE`を以下のコードに置き換えます。

```python
return redirect(url_for(".box_auth"))
```

このコードに入ると、ユーザーはOktaにログインしていない場合に、ログインするためにOIDCコネクタによってOktaにリダイレクトされます。ログイン後(またはユーザーがすでにログインしている場合)は、`box_auth`ルートコードに転送されます。

最後に、`box_auth`ルート内の`// TODO: HANDLE BOX AUTH ROUTE`を以下のコードに置き換えます。

```python
box = Box();
return box.validateUser(g)
```

これにより、Oktaユーザーオブジェクトが渡されることで、Boxクラスの新しいインスタンスが作成され、`validateUser`メソッドが呼び出されます。このクラスとメソッドは次の手順で定義します。

</Choice>

<Choice option="programming.platform" value="cs" color="none">

メインのルート内の`// TODO: HANDLE ROUTE`を以下のコードに置き換えます。

```dotnet
var subClaim = HttpContext.User.Claims.First(c => c.Type == "sub");
var sub = subClaim.Value;

var nameClaim = HttpContext.User.Claims.First(c => c.Type == "name");
var name = nameClaim.Value;

Task userSearch = validateUser(name, sub);

Task.WaitAll(userSearch);

return Content(name);
```

このブロックでは、Oktaユーザーアカウントのsub (一意のID)とnameをキャプチャし、次の手順で作成する`validateUser`メソッドにそのデータを送信して、一致するBoxユーザーを検出します。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## まとめ

* Oktaのスケルトンルートと構成を設定しました。
* Boxユーザーの確認に渡すメインのルートハンドラを設定しました。

<Observe option="box.app_type" value="use_own,create_new_">

<Next>

Oktaログインを設定しました

</Next>

</Observe>
