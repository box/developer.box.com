---
rank: 1
related_endpoints:
  - get_authorize
related_guides:
  - authentication/access-tokens/downscope
required_guides:
  - authentication/select
  - applications/custom-apps/app-token-setup
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/app-token
is_index: false
id: authentication/app-token/with-sdk
type: guide
total_steps: 4
sibling_id: authentication/app-token
parent_id: authentication/app-token
next_page_id: authentication/app-token/without-sdk
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/app-token/with-sdk.md
---
# SDKを使用したアプリトークン

Box公式SDKには、アプリトークン認証のサポートが組み込まれています。

アプリトークン認証は、Box APIを直接操作するよう設計されており、ユーザーがアプリケーションを承認するためにBoxを介してリダイレクトする必要はありません。ただし、この認証はアプリケーションのデータのみに制限されています。

<Message notice>

JWTを使用した認証方式は、もともとアプリケーションのサービスアカウントに関連付けられています。このトークンを使用して実行されるAPI呼び出しはどれも、このアプリケーションから実行されているように見えますが、明示的なアクセス権がなければ他のユーザーのファイルやフォルダにはアクセスできません。

</Message>

## 前提条件

開始する前に、以下の手順を完了しておく必要があります。

* 開発者コンソール内でBoxアプリケーションを作成する
* アプリケーションがアプリトークン認証を使用するよう構成されていることを確認する
* アプリケーションのプライマリアプリトークンとセカンダリアプリトークンを生成し、コード内のどこかにこれらのトークンを保存する

## SDKクライアントの初期化

アプリトークン認証のためにSDKクライアントを初期化するには、SDKがインストールされていることを確認してから、以下のようにSDKを構成します。

<Tabs>

<Tab title=".Net">

```dotnet
var config = new BoxConfig("[CLIENT_ID]", "", new Uri("http://localhost"));
var session = new OAuthSession("[APP_TOKEN]", "N/A", 3600, "bearer");
var client = new BoxClient(config, session);
```

</Tab>

<Tab title="Java">

```java
BoxTransactionalAPIConnection api = new BoxTransactionalAPIConnection("[APP_TOKEN]");
```

</Tab>

<Tab title="Python">

```python
from boxsdk import Client, OAuth2

auth = OAuth2(access_token='[APP_TOKEN]')
client = Client(auth)
```

</Tab>

<Tab title="Node">

```js
var BoxSDK = require('box-node-sdk');
var sdk = new BoxSDK({
  clientID: '[CLIENT_ID]',
  clientSecret: ''
});

var client = sdk.getBasicClient('[APP_TOKEN]');
```

</Tab>

</Tabs>

これを使用すると、アプリケーションは、アプリトークン認証に対して有効になっている[エンドポイント](g://authentication/app-token/endpoints)のいずれかにAPI呼び出しを実行できます。
