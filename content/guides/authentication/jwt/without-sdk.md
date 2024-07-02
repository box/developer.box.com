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
alias_paths: []
---

# JWT without SDKs

This guide takes you through JWT authentication without using a Box SDK.
JWT does not require end-user interaction and is designed to authenticate
directly with the Box API.

To learn how to use this token visit our guide on [making API
calls](g://api-calls).

<Message notice>
  By default, the Access Token acquired with JWT is tied to the Service
  Account for the application. Any API call made with this token will come
  from the application. This account does not have access to any existing files
  or folders until the application's Service Account is added as a collaborator.

It is possible to [act as another user](g://authentication/oauth2/as-user)
using the `as-user` header or by requesting a
[User Access Token](g://authentication/jwt/user-access-tokens).

</Message>

## Using a key pair

Follow the steps below if you would like to verify your application's identity
using a public and private key pair.

### Prerequisites

- A Custom Application using JWT authentication within the [Developer Console][devconsole]
- A private key configuration file named `config.json`, which can be downloaded from the configuration tab of the [Developer Console][devconsole]
- Ensure your application is [authorized][auth] within the Box Admin Console

### 1. Read JSON configuration

Your `config.json` file contains the application's private key and other
details necessary to authenticate. The following is an example of this file.

<Tabs>
  <Tab title='config.json'>

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

  </Tab>
</Tabs>

To use this object in the application it needs to be read from file.

<Tabs>
  <Tab title='.Net'>

```csharp
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

  <Tab title='Java'>

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

  <Tab title='Python 3'>

```python
import json
import os

config = json.load(open('config.json'))
```

  </Tab>
  <Tab title='Node'>

```js
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("config.json"));
```

  </Tab>
  <Tab title='Ruby'>

```ruby
require 'json'

config = JSON.parse(
  File.read('config.json')
)
```

  </Tab>
  <Tab title='PHP'>

```php
$json = file_get_contents('config.json');
$config = json_decode($json);
```

  </Tab>
</Tabs>

<Message>
  # Parsing JSON

In some programming languages there is more than one way to read and parse
JSON from a file. Refer to guides on your preferred programming language for
more complete guides, including error handling.

</Message>

### 2. Decrypt private key

To create the JWT assertion the application needs the private key from the
configuration object. This private key is encrypted and requires a passcode to
unlock. Both the encrypted key and passcode are provided in the configuration
object.

<Tabs>
  <Tab title='.Net'>

```csharp
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

  <Tab title='Java'>

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

  <Tab title='Python 3'>

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
  <Tab title='Node'>

```js
let key = {
    key: config.boxAppSettings.appAuth.privateKey,
    passphrase: config.boxAppSettings.appAuth.passphrase,
};
```

  </Tab>
  <Tab title='Ruby'>

```ruby
require "openssl"

appAuth = config['boxAppSettings']['appAuth']
key = OpenSSL::PKey::RSA.new(
  appAuth['privateKey'],
  appAuth['passphrase']
)
```

  </Tab>
  <Tab title='PHP'>

```php
$private_key = $config->boxAppSettings->appAuth->privateKey;
$passphrase = $config->boxAppSettings->appAuth->passphrase;
$key = openssl_pkey_get_private($private_key, $passphrase);
```

  </Tab>
</Tabs>

<Message>
  # An alternative to loading private key from file

the application might not want to keep both the private key and password
stored on disk. An alternative option would be to pass in the password as an
environment variable, separating the private key from the token used to unlock
the key.

</Message>

### 3. Create JWT assertion

To authenticate to the Box API the application needs to create a signed JWT
assertion that can be exchanged for an Access Token.

A JWT assertion is an encrypted JSON object, consisting of a
`header`, `claims`, and `signature`. Let's start by creating the `claims`,
sometimes also referred to as the `payload`.

<Tabs>
  <Tab title='.Net'>

```csharp
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

  <Tab title='Java'>

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

  <Tab title='Python 3'>

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
  <Tab title='Node'>

```js
const crypto = require("crypto");

const authenticationUrl = "https://api.box.com/oauth2/token";

let claims = {
    iss: config.boxAppSettings.clientID,
    sub: config.enterpriseID,
    box_sub_type: "enterprise",
    aud: authenticationUrl,
    jti: crypto.randomBytes(64).toString("hex"),
    exp: Math.floor(Date.now() / 1000) + 45,
};
```

  </Tab>
  <Tab title='Ruby'>

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
  <Tab title='PHP'>

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

| Parameter                | Type    | Description                                                                                                                                                                  |
| ------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iss`, required          | String  | The Box Application's OAuth client ID                                                                                                                                        |
| `sub`, required          | String  | The Box Enterprise ID if this app is to act on behalf of the Service Account of that application, or the User ID if this app wants to act on behalf of another user.         |
| `box_sub_type`, required | String  | `enterprise` or `user` depending on the type of token being requested in the `sub` claim                                                                                     |
| `aud`, required          | String  | Always `https://api.box.com/oauth2/token`                                                                                                                                    |
| `jti`, required          | String  | A universally unique identifier specified by the application for this JWT. A unique string of at least 16 characters and at most 128 characters.                             |
| `exp`, required          | Integer | The Unix time when this JWT is to expire. Can be set to a maximum value of 60 seconds beyond the issue time. It is recommended to set this to less than the maximum allowed. |
| `iat`, optional          | Integer | Issued at time. The token cannot be used before this time.                                                                                                                   |
| `nbf`, optional          | Integer | Not before. Not Specifies when the token will start being valid.                                                                                                             |

Next, these claims need to be signed using the private key. Depending on the
language and library used, the `header` of the JWT is configured by defining the
encryption algorithm and the ID of the public key used to sign the claims.

<Tabs>
  <Tab title='.Net'>

```csharp
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

  <Tab title='Java'>

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

  <Tab title='Python 3'>

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
  <Tab title='Node'>

```js
const jwt = require("jsonwebtoken");

let keyId = config.boxAppSettings.appAuth.publicKeyID;

let headers = {
    algorithm: "RS512",
    keyid: keyId,
};

let assertion = jwt.sign(claims, key, headers);
```

  </Tab>
  <Tab title='Ruby'>

```ruby
require 'jwt'
keyId = appAuth['publicKeyID']
assertion = JWT.encode(claims, key, 'RS512', { kid: keyId })
```

  </Tab>
  <Tab title='PHP'>

```php
use \Firebase\JWT\JWT;
$assertion = JWT::encode($claims, $key, 'RS512');
```

  </Tab>
</Tabs>

For the header the following parameters are supported.

| Parameter             | Type   | Description                                                                                                                           |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `algorithm`, required | String | The encryption algorithm used to sign the JWT claim. This can be one of RS256, RS384, or RS512.                                       |
| `keyid`, required     | String | The ID of the public key used to sign the JWT. Not required, though essential when multiple key pairs are defined for an application. |

<Message>
  Using JWT libraries

Signing your own JWT can be a complicated and painful process. Luckily, the
hard work has already been done for you and libraries exist in pretty much
every language. Head over to [JWT.io](https://jwt.io/) for an overview.
</Message>

### 4. Request Access Token

The final step is to exchange the short lived JWT assertion for a more long
lived Access Token by calling the token endpoint with the
assertion as a parameter.

<Tabs>
  <Tab title='.Net'>

```csharp
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

  <Tab title='Java'>

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

  <Tab title='Python 3'>

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
  <Tab title='Node'>

```js
const axios = require("axios");
const querystring = require("querystring");

let accessToken = await axios
    .post(
        authenticationUrl,
        querystring.stringify({
            grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
            assertion: assertion,
            client_id: config.boxAppSettings.clientID,
            client_secret: config.boxAppSettings.clientSecret,
        })
    )
    .then((response) => response.data.access_token);
```

  </Tab>
  <Tab title='Ruby'>

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
  <Tab title='PHP'>

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

## Code Samples

The code in this guide is available on [GitHub][samples].

[samples]: https://github.com/box-community/samples-docs-authenticate-with-jwt-api
[devconsole]: https://app.box.com/developers/console
[configfile]: g://authentication/jwt/jwt-setup/#jwt-keypair
[ccg]: g://authentication/jwt/without-sdk/#client-credentials-grant
[auth]: g://authorization
