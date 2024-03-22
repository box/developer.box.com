---
rank: 4
related_endpoints: []
related_guides:
  - authentication/jwt
  - authentication/select
required_guides:
  - authentication/oauth2/with-sdk
  - authentication/oauth2/without-sdk
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/jwt
is_index: false
id: authentication/jwt/user-access-tokens
type: guide
total_steps: 5
sibling_id: authentication/jwt
parent_id: authentication/jwt
next_page_id: ""
previous_page_id: authentication/jwt/as-user
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/jwt/user-access-tokens.md
fullyTranslated: true
---

# ユーザーアクセストークン

JWT アプリケーションは、[サービスアカウント][sa]ではなく特定のユーザーに対してアクセストークンを作成できます。

## 前提条件

アプリケーションは、ユーザーアクセストークンの作成を許可するように構成する必要があります。この設定は、[開発者コンソール][devconsole]の \[**構成**] タブにあります。

<ImageFrame border center>

![高度な機能](./enable-user-access-tokens.png)

</ImageFrame>

さらに、認証済みユーザーは、管理者権限を持つユーザー、つまり、管理者、共同管理者、サービスアカウントのいずれかである必要があります。詳細については、[ユーザータイプ](page://platform/user-types)のガイドを参照してください。

## SDK を使用したユーザーアクセストークン

特定のユーザーとして認証する Box SDK クライアントを作成するには、[SDK を使用した JWT のガイド](g://authentication/jwt/with-sdk)で説明されている手順に従います。ただし、「Enterprise」クライアントではなく、ユーザークライアントを作成します。

<Tabs>

<Tab title=".Net">

```csharp
var userId = "12345";
var sdk = new BoxJWTAuth(config);
var token = sdk.UserToken(appUserID);
BoxClient client = sdk.UserClient(userToken, userId);

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
var client = sdk.getAppAuthClient("user", "12345");
```

</Tab>

</Tabs>

<CTA to="g://authentication/jwt/with-sdk">

Box SDK と JWT の使用の詳細を確認する

</CTA>

## SDK を使用しないユーザーアクセストークン

特定のユーザーとして認証するユーザーアクセストークンを作成するには、[SDK を使用しない JWT のガイド](g://authentication/jwt/without-sdk)で説明されている手順に従います。ただし、企業用のクレームを作成するのではなく、特定のユーザー ID 用のクレームを作成します。

<Tabs>

<Tab title=".Net">

```csharp
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
let user_id = "12345";

let claims = {
	iss: config.boxAppSettings.clientID,
	sub: user_id,
	box_sub_type: "user",
	aud: authenticationUrl,
	jti: crypto.randomBytes(64).toString("hex"),
	exp: Math.floor(Date.now() / 1000) + 45,
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

手動による JWT 認証の使用の詳細を確認する

</CTA>

[devconsole]: https://app.box.com/developers/console
[sa]: page://platform/user-types/#service-account
