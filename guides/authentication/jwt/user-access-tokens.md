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
cId: authentication
scId: authentication/jwt
id: authentication/jwt/user-access-tokens
isIndex: false
---

# User Access Token

It is possible to for a JWT application to act on behalf of another user
by creating an access token for a specific user instead of the Service Account
for the application.

<Message>

In this situation the user ID is the Box identifier for a user. User IDs can
found for any user via the `GET /users` endpoint, which is only available to
admins, or by calling the `GET /users/me` endpoint with an authenticated user session.

</Message>

## Preconditions

Creating a user access token has a few requirements. Firstly, the application
needs to be configured to  be allowed to create user access tokens in the [developer
console][devconsole].

<ImageFrame border center>

![Advanced Features](./enable-user-access-tokens.png)

</ImageFrame>

Additionally, the authenticated user needs to be a user with admin permissions,
meaning either an admin, co-admin, or service account. See our guide on [User
Types](g://authentication/user-types) for more details.

## User Access Tokens with SDKs

To create a Box SDK client that authenticates as a specific user instead of the
JWT app's Service Account, follow the same steps as described in the [JWT with
SDK guide](g://authentication/jwt/with-sdk) but instead of creating an
"Enterprise" client we instead create a user client.

<Tabs>

<Tab title='.Net'>

```dotnet
var userId = "12345";
var sdk = new BoxJWTAuth(config);
var token = sdk.UserToken(appUserID);
BoxClient client = boxJWT.UserClient(userToken, userId);
```

</Tab>

<Tab title='Java'>

<!-- markdownlint-disable line-length -->

```java
String userId = "12345";
BoxDeveloperEditionAPIConnection api = new BoxDeveloperEditionAPIConnection.getAppUserConnection(userId, config)
```

<!-- markdownlint-enable line-length -->

</Tab>

<Tab title='Python'>

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

<Tab title='Node'>

```js
var sdk = BoxSDK.getPreconfiguredInstance(config);
var client = sdk.getAppAuthClient('user', '12345');
```

</Tab>

</Tabs>

<CTA to='g://authentication/jwt/with-sdk'>
Learn more about using the Box SDKs for JWT

</CTA>

## User Access Tokens without SDKs

To create a User Access Token that authenticates as a specific user instead of
the JWT app's Service Account follow the same steps as described in the [JWT
without SDK guide](g://authentication/jwt/without-sdk) but instead of creating
a claim for the enterprise, create one for a specific user ID.

<Tabs>

<Tab title='.Net'>

```dotnet
var userId = "12345";

var claims = new List<Claim>{
  new Claim("sub", userid),
  new Claim("box_sub_type", "user"),
  new Claim("jti", jti),
};
```

</Tab>

<Tab title='Java'>

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

<Tab title='Python'>

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
<Tab title='Node'>

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
<Tab title='Ruby'>

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
<Tab title='PHP'>

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

<CTA to='g://authentication/jwt/with-sdk'>
Learn more about manually using JWT authentication

</CTA>

[devconsole]: https://app.box.com/developers/console
