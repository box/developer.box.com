---
rank: 2
related_endpoints:
  - get_authorize
related_guides:
  - applications/select
  - authentication/select
  - applications/custom-apps/oauth2-setup
required_guides:
  - authentication/select
  - applications/custom-apps/oauth2-setup
related_resources: []
alias_paths:
  - /docs/construct-jwt-claim-manually
category_id: authentication
subcategory_id: authentication/jwt
is_index: false
id: authentication/jwt/without-sdk
type: guide
total_steps: 4
sibling_id: authentication/jwt
parent_id: authentication/jwt
next_page_id: authentication/jwt/as-user
previous_page_id: authentication/jwt/with-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/jwt/without-sdk.md
---
# SDKを使用しないJWT

Box公式SDKのいずれも使用できるようになっていない場合や選択した言語のSDKがない場合は、SDKがなくてもBox APIを使用できます。

このガイドでは、Box SDKを使用しないJWTによるユーザー認証について説明します。JWT認証はBox APIを直接操作するよう設計されており、ユーザーがアプリケーションを承認するためにBoxを介してリダイレクトする必要はありません。

## 概要

JWT承認を完了するには、以下の手順を完了する必要があります。

1. 構成ファイルを読み取る
2. 秘密キーを復号化する
3. JWTアサーションを作成する
4. アクセストークンをリクエストする

このフローが終了すると、アプリケーションには、アプリケーションの代わりにAPI呼び出しを実行するために使用できるアクセストークンが用意されます。

<Message notice>

JWTを使用して取得したアクセストークンは、もともとアプリケーションのサービスアカウントに関連付けられています。このトークンを使用して実行されるAPI呼び出しはどれも、このアプリケーションから実行されているように見えますが、明示的なアクセス権がなければ他のユーザーのファイルやフォルダにはアクセスできません。

`as-user`ヘッダーを使用するか[ユーザーアクセストークン](g://authentication/jwt/user-access-tokens)をリクエストして、[別のユーザーとして処理を実行](g://authentication/oauth2/as-user)できます。

</Message>

## 前提条件

開始する前に、以下の手順を完了しておく必要があります。

* 開発者コンソール内でBoxアプリケーションを作成する
* アプリケーション用に秘密キーの構成ファイルを作成してダウンロードし、`config.json`として保存する
* 社内で使用するためにBoxアプリケーションが承認されていることを確認する

## 1. JSON構成を読み取る

Boxアプリケーションを作成すると、アプリケーションの秘密キーとその他の詳細を含む`config.json`ファイルも作成されます。以下に、その例を示します。

<Tabs>

<Tab title="config.json">

<!-- markdownlint-disable line-length -->

```json
{
  "boxAppSettings": {
    "clientID": "abc...123",
    "clientSecret": "def...234",
    "appAuth": {
      "publicKeyID": "abcd1234",
      "privateKey": "-----BEGIN ENCRYPTED PRIVATE KEY-----\n....\n-----END ENCRYPTED PRIVATE KEY-----\n",
      "passphrase": "ghi...345"
    }
  },
  "enterpriseID": "1234567"
}
```

<!-- markdownlint-enable line-length -->

</Tab>

</Tabs>

このオブジェクトをアプリケーションで使用するには、ファイルから読み取る必要があります。

<Tabs>

<Tab title=".Net">

```dotnet
using System;
using System.IO;
using Newtonsoft.Json;

class Config
{
    public class BoxAppSettings {
        public class AppAuth {
            public string privateKey { get; set; }
            public string passphrase { get; set; }
            public string publicKeyID { get; set; }
        }
        public string clientID { get; set; }
        public string clientSecret { get; set; }
        public AppAuth appAuth { get; set; }

    }
    public string enterpriseID { get; set; }
    public BoxAppSettings boxAppSettings { get; set; }
}

var reader = new StreamReader("config.json");
var json = reader.ReadToEnd();

var config = JsonConvert.DeserializeObject<Config>(json);
```

</Tab>

<Tab title="Java">

```java
import java.io.FileReader;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

class Config {
  class BoxAppSettings {
    class AppAuth {
      String privateKey;
      String passphrase;
      String publicKeyID;
    }

    String clientID;
    String clientSecret;
    AppAuth appAuth;
  }

  BoxAppSettings boxAppSettings;
  String enterpriseID;
}

FileReader reader = new FileReader("config.json");

Gson gson = new GsonBuilder().create();
Config config = (Config) gson.fromJson(reader, Config.class);
```

</Tab>

<Tab title="Python 3">

```python
import json
import os

config = json.load(open('config.json'))
```

</Tab>

<Tab title="Node">

```js
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("config.json"));
```

</Tab>

<Tab title="Ruby">

```ruby
require 'json'

config = JSON.parse(
  File.read('config.json')
)
```

</Tab>

<Tab title="PHP">

```php
$json = file_get_contents('config.json');
$config = json_decode($json);
```

</Tab>

</Tabs>

<Message>

# JSONの解析

プログラミング言語によっては、ファイルからJSONを読み取って解析する方法が複数ある場合があります。エラー処理など、さらに詳細な説明については、使用するプログラミング言語のガイドを参照してください。

</Message>

## 2. 秘密キーを復号化する

JWTアサーションを作成するために、アプリケーションでは構成オブジェクトにある秘密キーが必要になります。この秘密キーは暗号化されており、ロックを解除するにはパスコードが必要です。暗号化されたキーとパスコードは両方とも、構成オブジェクトで指定されています。

<Tabs>

<Tab title=".Net">

```dotnet
using System.Security.Cryptography;
using Org.BouncyCastle.OpenSsl;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;

// https://www.bouncycastle.org/csharp/index.html
class PasswordFinder : IPasswordFinder
{
  private string password;
  public PasswordFinder(string _password) { password = _password; }
  public char[] GetPassword() { return password.ToCharArray(); }
}

var appAuth = config.boxAppSettings.appAuth;
var stringReader = new StringReader(appAuth.privateKey);
var passwordFinder = new PasswordFinder(appAuth.passphrase);
var pemReader = new PemReader(stringReader, passwordFinder);
var keyParams = (RsaPrivateCrtKeyParameters) pemReader.ReadObject();

public RSA CreateRSAProvider(RSAParameters rp)
{
  var rsaCsp = RSA.Create();
  rsaCsp.ImportParameters(rp);
  return rsaCsp;
}

public RSAParameters ToRSAParameters(RsaPrivateCrtKeyParameters privKey)
{
  RSAParameters rp = new RSAParameters();
  rp.Modulus = privKey.Modulus.ToByteArrayUnsigned();
  rp.Exponent = privKey.PublicExponent.ToByteArrayUnsigned();
  rp.P = privKey.P.ToByteArrayUnsigned();
  rp.Q = privKey.Q.ToByteArrayUnsigned();
  rp.D = ConvertRSAParametersField(privKey.Exponent, rp.Modulus.Length);
  rp.DP = ConvertRSAParametersField(privKey.DP, rp.P.Length);
  rp.DQ = ConvertRSAParametersField(privKey.DQ, rp.Q.Length);
  rp.InverseQ = ConvertRSAParametersField(privKey.QInv, rp.Q.Length);
  return rp;
}

public byte[] ConvertRSAParametersField(BigInteger n, int size)
{
  byte[] bs = n.ToByteArrayUnsigned();
  if (bs.Length == size)
      return bs;
  if (bs.Length > size)
      throw new ArgumentException("Specified size too small", "size");
  byte[] padded = new byte[size];
  Array.Copy(bs, 0, padded, size - bs.Length, bs.Length);
  return padded;
}

var key = CreateRSAProvider(ToRSAParameters(keyParams));
```

</Tab>

<Tab title="Java">

```java
import java.io.StringReader;
import java.security.PrivateKey;
import java.security.Security;

import org.bouncycastle.asn1.pkcs.PrivateKeyInfo;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.openssl.PEMParser;
import org.bouncycastle.openssl.jcajce.JcaPEMKeyConverter;
import org.bouncycastle.openssl.jcajce.JceOpenSSLPKCS8DecryptorProviderBuilder;
import org.bouncycastle.operator.InputDecryptorProvider;
import org.bouncycastle.pkcs.PKCS8EncryptedPrivateKeyInfo;

// https://www.bouncycastle.org/java.html
Security.addProvider(new BouncyCastleProvider());

PEMParser pemParser = new PEMParser(
  new StringReader(config.boxAppSettings.appAuth.privateKey)
);
Object keyPair = pemParser.readObject();
pemParser.close();

char[] passphrase = config.boxAppSettings.appAuth.passphrase.toCharArray();
JceOpenSSLPKCS8DecryptorProviderBuilder decryptBuilder =
  new JceOpenSSLPKCS8DecryptorProviderBuilder().setProvider("BC");
InputDecryptorProvider decryptProvider
  = decryptBuilder.build(passphrase);
PrivateKeyInfo keyInfo
  = ((PKCS8EncryptedPrivateKeyInfo) keyPair).decryptPrivateKeyInfo(decryptProvider);

PrivateKey key = (new JcaPEMKeyConverter()).getPrivateKey(keyInfo);
```

</Tab>

<Tab title="Python 3">

```python
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.serialization import load_pem_private_key

appAuth = config["boxAppSettings"]["appAuth"]
privateKey = appAuth["privateKey"]
passphrase = appAuth["passphrase"]

# https://cryptography.io/en/latest/
key = load_pem_private_key(
  data=privateKey.encode('utf8'),
  password=passphrase.encode('utf8'),
  backend=default_backend(),
)
```

</Tab>

<Tab title="Node">

```js
let key = {
  key: config.boxAppSettings.appAuth.privateKey,
  passphrase: config.boxAppSettings.appAuth.passphrase
};
```

</Tab>

<Tab title="Ruby">

```ruby
require "openssl"

appAuth = config['boxAppSettings']['appAuth']
key = OpenSSL::PKey::RSA.new(
  appAuth['privateKey'],
  appAuth['passphrase']
)
```

</Tab>

<Tab title="PHP">

```php
$private_key = $config->boxAppSettings->appAuth->privateKey;
$passphrase = $config->boxAppSettings->appAuth->passphrase;
$key = openssl_pkey_get_private($private_key, $passphrase);
```

</Tab>

</Tabs>

<Message>

# ファイルから秘密キーを読み込むための代替方法

アプリケーションでは、秘密キーとパスワードの両方をディスクに保存しておきたくない場合があります。代替方法として、パスワードを環境変数として渡し、秘密キーを、秘密キーのロックを解除するためのトークンと分けておくこともできます。

</Message>

## 3. JWTアサーションを作成する

Box APIで認証するために、アプリケーションは、従来のOAuth 2.0アクセストークンと交換できる署名済みのJWTアサーションを作成する必要があります。

JWTアサーションは、基本的に、暗号化されたJSONオブジェクトで、`header`、`claims`、および`signature`で構成されます。最初に`claims`を作成します。これは、`payload`とも呼ばれる場合もあります。

<Tabs>

<Tab title=".Net">

```dotnet
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Collections.Generic;

byte[] randomNumber = new byte[64];
RandomNumberGenerator.Create().GetBytes(randomNumber);
var jti = Convert.ToBase64String(randomNumber);

DateTime expirationTime = DateTime.UtcNow.AddSeconds(45);

var claims = new List<Claim>{
  new Claim("sub", config.enterpriseID),
  new Claim("box_sub_type", "enterprise"),
  new Claim("jti", jti),
};
```

</Tab>

<Tab title="Java">

```java
import org.jose4j.jwt.JwtClaims;

String authenticationUrl = "https://api.box.com/oauth2/token";

JwtClaims claims = new JwtClaims();
claims.setIssuer(config.boxAppSettings.clientID);
claims.setAudience(authenticationUrl);
claims.setSubject(config.enterpriseID);
claims.setClaim("box_sub_type", "enterprise");
claims.setGeneratedJwtId(64);
claims.setExpirationTimeMinutesInTheFuture(0.75f);
```

</Tab>

<Tab title="Python 3">

```python
import time
import secrets

authentication_url = 'https://api.box.com/oauth2/token'

claims = {
  'iss': config['boxAppSettings']['clientID'],
  'sub': config['enterpriseID'],
  'box_sub_type': 'enterprise',
  'aud': authentication_url,
  'jti': secrets.token_hex(64),
  'exp': round(time.time()) + 45
}
```

</Tab>

<Tab title="Node">

```js
const crypto = require("crypto");

const authenticationUrl = "https://api.box.com/oauth2/token";

let claims = {
  iss: config.boxAppSettings.clientID,
  sub: config.enterpriseID,
  box_sub_type: "enterprise",
  aud: authenticationUrl,
  jti: crypto.randomBytes(64).toString("hex"),
  exp: Math.floor(Date.now() / 1000) + 45
};
```

</Tab>

<Tab title="Ruby">

```ruby
require 'securerandom'

authentication_url = 'https://api.box.com/oauth2/token'

claims = {
  iss: config['boxAppSettings']['clientID'],
  sub: config['enterpriseID'],
  box_sub_type: 'enterprise',
  aud: authentication_url,
  jti: SecureRandom.hex(64),
  exp: Time.now.to_i + 45
}
```

</Tab>

<Tab title="PHP">

```php
$authenticationUrl = 'https://api.box.com/oauth2/token';

$claims = [
  'iss' => $config->boxAppSettings->clientID,
  'sub' => $config->enterpriseID,
  'box_sub_type' => 'enterprise',
  'aud' => $authenticationUrl,
  'jti' => base64_encode(random_bytes(64)),
  'exp' => time() + 45,
  'kid' => $config->boxAppSettings->appAuth->publicKeyID
];
```

</Tab>

</Tabs>

<!-- markdownlint-disable line-length -->

| パラメータ              | 型       | 説明                                                                                        |
| ------------------ | ------- | ----------------------------------------------------------------------------------------- |
| `iss`(必須)          | String  | BoxアプリケーションのOAuthクライアントID                                                                 |
| `sub`(必須)          | String  | Box Enterprise ID (このアプリがそのアプリケーションのサービスアカウントの代わりになる場合)またはユーザーID (このアプリが別のユーザーの代わりになる場合)。 |
| `box_sub_type`(必須) | String  | `enterprise`または`user` (`sub`クレームでリクエストされているトークンの種類に応じて決定)                                 |
| `aud`(必須)          | String  | 常に`https://api.box.com/oauth2/token`                                                      |
| `jti`(必須)          | String  | このJWTに対してアプリケーションで指定されたUUID (Universally Unique Identifier)。16文字以上128文字以下の一意の文字列です。       |
| `exp`(必須)          | Integer | このJWTが期限切れとなるUnix時間。設定できる最大値は、発行時刻から60秒後です。許容される最大値よりも小さい値を設定することをお勧めします。                 |
| `iat`(省略可)         | Integer | 発行時刻。トークンは、この時刻より前に使用することはできません。                                                          |
| `nbf`(省略可)         | Integer | 開始時刻。トークンの有効期間の開始時刻を指定します。                                                                |

<!-- markdownlint-enable line-length -->

次に、秘密キーを使用してこれらのクレームに署名する必要があります。使用する言語とライブラリに応じて、クレームの署名に使用する暗号化アルゴリズムと公開キーのIDを定義することで、JWTの`header`が構成されます。

<Tabs>

<Tab title=".Net">

```dotnet
using Microsoft.IdentityModel.Tokens;

String authenticationUrl = "https://api.box.com/oauth2/token";

var payload = new JwtPayload(
  config.boxAppSettings.clientID,
  authenticationUrl,
  claims,
  null,
  expirationTime
);

var credentials = new SigningCredentials(
  new RsaSecurityKey(key),
  SecurityAlgorithms.RsaSha512
);
var header = new JwtHeader(signingCredentials: credentials);

var jst = new JwtSecurityToken(header, payload);
var tokenHandler = new JwtSecurityTokenHandler();
string assertion = tokenHandler.WriteToken(jst);
```

</Tab>

<Tab title="Java">

```java
import org.jose4j.jws.AlgorithmIdentifiers;
import org.jose4j.jws.JsonWebSignature;

JsonWebSignature jws = new JsonWebSignature();
jws.setPayload(claims.toJson());
jws.setKey(key);

jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA512);
jws.setHeader("typ", "JWT");
jws.setHeader("kid", config.boxAppSettings.appAuth.publicKeyID);
String assertion = jws.getCompactSerialization();
```

</Tab>

<Tab title="Python 3">

```python
import jwt

keyId = config['boxAppSettings']['appAuth']['publicKeyID']

assertion = jwt.encode(
  claims,
  key,
  algorithm='RS512',
  headers={
    'kid': keyId
  }
)
```

</Tab>

<Tab title="Node">

```js
const jwt = require('jsonwebtoken')

let keyId = config.boxAppSettings.appAuth.publicKeyID

let headers = {
  'algorithm': 'RS512',
  'keyid': keyId,
}

let assertion = jwt.sign(claims, key, headers)
```

</Tab>

<Tab title="Ruby">

```ruby
require 'jwt'
keyId = appAuth['publicKeyID']
assertion = JWT.encode(claims, key, 'RS512', { kid: keyId })
```

</Tab>

<Tab title="PHP">

```php
use \Firebase\JWT\JWT;
$assertion = JWT::encode($claims, $key, 'RS512');
```

</Tab>

</Tabs>

ヘッダーでは、以下のパラメータがサポートされます。

<!-- markdownlint-disable line-length -->

| パラメータ           | 型      | 説明                                                               |
| --------------- | ------ | ---------------------------------------------------------------- |
| `algorithm`(必須) | String | JWTクレームへの署名に使用する暗号化アルゴリズム。RS256、RS384、RS512のいずれかを指定できます。         |
| `keyid`(必須)     | String | JWTへの署名に使用する公開キーのID。必須ではありませんが、アプリケーションに対して複数のキーペアが定義される場合は必須です。 |

<!-- markdownlint-enable line-length -->

<Message>

JWTライブラリの使用

独自のJWTへの署名は、複雑で手間のかかる処理になる可能性があります。そのようなことがないよう、事前にこの処理を済ませたライブラリがほぼすべての言語で用意されています。概要については、[JWT.io](https://jwt.io/)をご覧ください。

</Message>

## 4. アクセストークンをリクエストする

最後の手順として、有効期間の短いJWTアサーションを、より有効期間の長いOAuth 2.0アクセストークンと交換します。これには、アサーションをパラメータに指定して認証エンドポイントを呼び出します。

<Tabs>

<Tab title=".Net">

```dotnet
using System.Net;
using System.Net.Http;

var content = new FormUrlEncodedContent(new[]
{
  new KeyValuePair<string, string>(
    "grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer"),
  new KeyValuePair<string, string>(
    "assertion", assertion),
  new KeyValuePair<string, string>(
    "client_id", config.boxAppSettings.clientID),
  new KeyValuePair<string, string>(
    "client_secret", config.boxAppSettings.clientSecret)
});

var client = new HttpClient();
var response = client.PostAsync(authenticationUrl, content).Result;

class Token
{
  public string access_token { get; set; }
}

var data = response.Content.ReadAsStringAsync().Result;
var token = JsonConvert.DeserializeObject<Token>(data);
var accessToken = token.access_token;
```

</Tab>

<Tab title="Java">

```java
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

List<NameValuePair> params = new ArrayList<NameValuePair>();

params.add(new BasicNameValuePair(
  "grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer"));
params.add(new BasicNameValuePair(
  "assertion", assertion));
params.add(new BasicNameValuePair(
  "client_id", config.boxAppSettings.clientID));
params.add(new BasicNameValuePair(
  "client_secret", config.boxAppSettings.clientSecret));

CloseableHttpClient httpClient =
  HttpClientBuilder.create().disableCookieManagement().build();
HttpPost request = new HttpPost(authenticationUrl);
request.setEntity(new UrlEncodedFormEntity(params));
CloseableHttpResponse httpResponse = httpClient.execute(request);
HttpEntity entity = httpResponse.getEntity();
String response = EntityUtils.toString(entity);
httpClient.close();

class Token {
  String access_token;
}

Token token = (Token) gson.fromJson(response, Token.class);
String accessToken = token.access_token;
```

</Tab>

<Tab title="Python 3">

```python
import json
import requests

params = {
    'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion': assertion,
    'client_id': config['boxAppSettings']['clientID'],
    'client_secret': config['boxAppSettings']['clientSecret']
}
response = requests.post(authentication_url, params)
access_token = response.json()['access_token']
```

</Tab>

<Tab title="Node">

```js
const axios = require('axios')
const querystring = require('querystring');

let accessToken = await axios.post(
  authenticationUrl,
  querystring.stringify({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: assertion,
    client_id: config.boxAppSettings.clientID,
    client_secret: config.boxAppSettings.clientSecret
  })
)
.then(response => response.data.access_token)
```

</Tab>

<Tab title="Ruby">

```ruby
require 'json'
require 'uri'
require 'net/https'

params = URI.encode_www_form({
  grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
  assertion: assertion,
  client_id: config['boxAppSettings']['clientID'],
  client_secret: config['boxAppSettings']['clientSecret']
})

uri = URI.parse(authentication_url)
http = Net::HTTP.start(uri.host, uri.port, use_ssl: true)
request = Net::HTTP::Post.new(uri.request_uri)
request.body = params
response = http.request(request)

access_token = JSON.parse(response.body)['access_token']
```

</Tab>

<Tab title="PHP">

```php
use GuzzleHttp\Client;

$params = [
  'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
  'assertion' => $assertion,
  'client_id' => $config->boxAppSettings->clientID,
  'client_secret' => $config->boxAppSettings->clientSecret
];

$client = new Client();
$response = $client->request('POST', $authenticationUrl, [
  'form_params' => $params
]);

$data = $response->getBody()->getContents();
$access_token = json_decode($data)->access_token;
```

</Tab>

</Tabs>

## まとめ

以下の手順に従うことで、アプリケーションはSDKを使用せず、JWTを使用したアプリケーションの承認を実行できるようになりました。

1. 構成ファイルを読み取る
2. 秘密キーを復号化する
3. JWTアサーションを作成する
4. アクセストークンをリクエストする

このトークンの使用方法を確認するには、[API呼び出しの実行](g://api-calls)に関するガイドをご覧ください。

## コードサンプル

このガイドに記載されているコードはすべて、[GitHub][samples]で入手できます。

[samples]: https://github.com/box-community/samples-docs-authenticate-with-jwt-api
