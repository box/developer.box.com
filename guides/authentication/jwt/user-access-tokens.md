---
rank: 4
related_endpoints: []
related_guides:
  - authentication/jwt
  - authentication/user-types
  - authentication/select
required_guides:
  - authentication/oauth2/with-sdk
  - authentication/oauth2/without-sdk
  - authentication/user-types
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/jwt
is_index: false
id: authentication/jwt/user-access-tokens
type: guide
total_steps: 4
sibling_id: authentication/jwt
parent_id: authentication/jwt
next_page_id: ''
previous_page_id: authentication/jwt/as-user
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/jwt/user-access-tokens.md
---
# ユーザーアクセストークン

アプリケーションのサービスアカウントではなく特定のユーザーにアクセストークンを作成することで、JWTアプリケーションは別のユーザーの代理になることができます。

<Message>

この場合、ユーザーIDはユーザーのBox識別子です。どのユーザーでも、ユーザーIDは、管理者だけが利用可能な`GET /users`エンドポイントを介して確認できます。また、認証済みのユーザーセッションで`GET /users/me`エンドポイントを呼び出して確認することもできます。

</Message>

## 前提条件

ユーザーアクセストークンを作成するには、いくつかの要件があります。最初に、[開発者コンソール][devconsole]でユーザーアクセストークンを作成できるようアプリケーションを構成する必要があります。

<ImageFrame border center>

![高度な機能](./enable-user-access-tokens.png)

</ImageFrame>

さらに、認証済みユーザーは、管理者権限を持つユーザー、つまり、管理者、共同管理者、またはサービスアカウントのいずれかである必要があります。詳細については、[ユーザータイプ](g://authentication/user-types)のガイドを参照してください。

## SDKを使用したユーザーアクセストークン

JWTアプリのサービスアカウントではなく特定のユーザーとして認証するBox SDKクライアントを作成するには、[SDKを使用したJWTのガイド](g://authentication/jwt/with-sdk)で説明されているのと同じ手順に従います。ただし、「エンタープライズ」クライアントではなく、ユーザークライアントを作成します。

<Tabs>

<Tab title=".Net">

```dotnet
var userId = "12345";
var sdk = new BoxJWTAuth(config);
var token = sdk.UserToken(appUserID);
BoxClient client = boxJWT.UserClient(userToken, userId);
```

</Tab>

<Tab title="Java">

<!-- markdownlint-disable line-length -->

```java
String userId = "12345";
BoxDeveloperEditionAPIConnection api = new BoxDeveloperEditionAPIConnection.getAppUserConnection(userId, config)
```

<!-- markdownlint-enable line-length -->

</Tab>

<Tab title="Python">

```python
user = client.user(user_id='12345')

auth = JWTAuth(
    client_id='[CLIENT_ID]',
    client_secret='[CLIENT_SECRET]',
    user=app_user,
    jwt_key_id='[JWT_KEY_ID]',
    rsa_private_key_file_sys_path='[CERT.PEM]',
    rsa_private_key_passphrase='[PASSPHRASE]'
)
auth.authenticate_user()
user_client = Client(auth)
```

</Tab>

<Tab title="Node">

```js
var sdk = BoxSDK.getPreconfiguredInstance(config);
var client = sdk.getAppAuthClient('user', '12345');
```

</Tab>

</Tabs>

<CTA to="g://authentication/jwt/with-sdk">

JWTでのBox SDKの使用の詳細を確認する

</CTA>

## SDKを使用しないユーザーアクセストークン

JWTアプリのサービスアカウントではなく特定のユーザーとして認証するユーザーアクセストークンを作成するには、[SDKを使用しないJWTのガイド](g://authentication/jwt/without-sdk)で説明されているのと同じ手順に従います。ただし、クレームは、会社ではなく特定のユーザーIDに対して作成します。

<Tabs>

<Tab title=".Net">

```dotnet
var userId = "12345";

var claims = new List<Claim>{
  new Claim("sub", userid),
  new Claim("box_sub_type", "user"),
  new Claim("jti", jti),
};
```

</Tab>

<Tab title="Java">

```java
String userId = "12345";

JwtClaims claims = new JwtClaims();
claims.setIssuer(config.boxAppSettings.clientID);
claims.setAudience(authenticationUrl);
claims.setSubject(userId);
claims.setClaim("box_sub_type", "user");
claims.setGeneratedJwtId(64);
claims.setExpirationTimeMinutesInTheFuture(0.75f);
```

</Tab>

<Tab title="Python">

```python
user_id = '12345';

claims = {
  'iss': config['boxAppSettings']['clientID'],
  'sub': user_id,
  'box_sub_type': 'user',
  'aud': authentication_url,
  'jti': secrets.token_hex(64),
  'exp': round(time.time()) + 45
}
```

</Tab>

<Tab title="Node">

```js
let user_id = '12345';

let claims = {
  iss: config.boxAppSettings.clientID,
  sub: user_id,
  box_sub_type: "user",
  aud: authenticationUrl,
  jti: crypto.randomBytes(64).toString("hex"),
  exp: Math.floor(Date.now() / 1000) + 45
};
```

</Tab>

<Tab title="Ruby">

```ruby
user_id = '12345'

claims = {
  iss: config['boxAppSettings']['clientID'],
  sub: user_id,
  box_sub_type: 'user',
  aud: authentication_url,
  jti: SecureRandom.hex(64),
  exp: Time.now.to_i + 45
}
```

</Tab>

<Tab title="PHP">

```php
$userId = '12345';

$claims = [
  'iss' => $config->boxAppSettings->clientID,
  'sub' => $userId,
  'box_sub_type' => 'user',
  'aud' => $authenticationUrl,
  'jti' => base64_encode(random_bytes(64)),
  'exp' => time() + 45,
  'kid' => $config->boxAppSettings->appAuth->publicKeyID
];
```

</Tab>

</Tabs>

<CTA to="g://authentication/jwt/with-sdk">

手動によるJWT認証の使用の詳細を確認する

</CTA>

[devconsole]: https://app.box.com/developers/console
