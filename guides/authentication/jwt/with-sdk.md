---
rank: 1
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
alias_paths: []
category_id: authentication
subcategory_id: authentication/jwt
is_index: false
id: authentication/jwt/with-sdk
type: guide
total_steps: 4
sibling_id: authentication/jwt
parent_id: authentication/jwt
next_page_id: authentication/jwt
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/jwt/with-sdk.md
fullyTranslated: true
---
# SDKを使用したJWT

Box公式SDKには、JWT認証のサポートが組み込まれています。

このガイドでは、Box SDKを使用したJWTによるユーザー認証について説明します。JWT認証はBox APIを直接操作するよう設計されており、ユーザーがアプリケーションを承認するためにBoxを介してリダイレクトする必要はありません。

## 概要

JWT承認を完了するには、以下の手順を完了する必要があります。

1. 構成ファイルを読み取る
2. SDKクライアントを初期化する

このフローが終了すると、アプリケーションには、アプリケーションの代わりにAPI呼び出しを実行するために使用できるBox SDKクライアントが用意されます。

<Message notice>

JWTを使用したデフォルトの認証方式は、もともとアプリケーションのサービスアカウントに関連付けられています。このトークンを使用して実行されるAPI呼び出しはどれも、このアプリケーションから実行されているように見えますが、明示的なアクセス権がなければ他のユーザーのファイルやフォルダにはアクセスできません。

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
var reader = new StreamReader("path/to/config.json");
var json = reader.ReadToEnd();
var config = BoxConfig.CreateFromJsonString(json);
```

</Tab>

<Tab title="Java">

```java
Reader reader = new FileReader("path/to/config.json");
BoxConfig config = BoxConfig.readFrom(reader);
```

</Tab>

<Tab title="Python">

```python
from boxsdk import JWTAuth

config = JWTAuth.from_settings_file('path/to/config.json')
```

</Tab>

<Tab title="Node">

```js
var config = require('path/to/config.json');
```

</Tab>

</Tabs>

<Message>

# JSONの解析

プログラミング言語によっては、ファイルからJSONを読み取って解析する方法が複数ある場合があります。エラー処理など、さらに詳細な説明については、使用するプログラミング言語のガイドを参照してください。

</Message>

## 2. SDKクライアントを初期化する

次の手順では、作成した構成を使用してBox SDKを構成し、アプリケーションとして接続するためにクライアントを初期化します。

<Tabs>

<Tab title=".Net">

```dotnet
var sdk = new BoxJWTAuth(config);
var token = sdk.AdminToken();
BoxClient client = sdk.AdminClient(token);
```

</Tab>

<Tab title="Java">

```java
BoxDeveloperEditionAPIConnection api = BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(config);
```

</Tab>

<Tab title="Python">

```python
client = Client(config)
```

</Tab>

<Tab title="Node">

```js
var sdk = BoxSDK.getPreconfiguredInstance(config);
var client = sdk.getAppAuthClient('enterprise');
```

</Tab>

</Tabs>

<Message warning>

# サービスアカウント

この時点では、アプリケーションは、管理対象ユーザーまたはApp Userとしてではなく、アプリケーションユーザーとして認証されます。各種ユーザーの詳細については、[ユーザータイプ](g://authentication/user-types)に関するガイドをご覧ください。

</Message>

## まとめ

以下の手順に従うことで、アプリケーションはBox公式SDKのいずれかにより、JWTを使用したアプリケーションの承認を実行できるようになりました。

1. 構成ファイルを読み取る
2. SDKクライアントを初期化する

このクライアントの使用方法を確認するには、[API呼び出しの実行](g://api-calls)に関するガイドをご覧ください。
