---
rank: 3
related_endpoints: []
related_guides:
  - authentication/jwt
  - authentication/user-types
  - authentication/select
required_guides:
  - authentication/oauth2/with-sdk
  - authentication/user-types
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/jwt
is_index: false
id: authentication/jwt/as-user
type: guide
total_steps: 4
sibling_id: authentication/jwt
parent_id: authentication/jwt
next_page_id: authentication/jwt/user-access-tokens
previous_page_id: authentication/jwt
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/jwt/as-user.md
fullyTranslated: true
---
# as-userヘッダー

`as-user`ヘッダーを使用すると、JWTアプリケーションは別のユーザーの代理になることができます。

```curl
curl https://api.box.com/2.0/folders/0 \
  -H "as-user: [USER_ID]"
  -H "authorization: Bearer [ACCESS_TOKEN]"
```

<Message>

この場合、ユーザーIDはユーザーのBox識別子です。どのユーザーでも、ユーザーIDは、管理者だけが利用可能な`GET /users`エンドポイントを介して確認できます。また、認証済みのユーザーセッションで`GET /users/me`エンドポイントを呼び出して確認することもできます。

</Message>

## 前提条件

`as-user`ヘッダーを使用するには、いくつかの要件があります。最初に、アプリケーションは、[開発者コンソール][devconsole]でユーザーとして操作を行うよう構成する必要があります。

<ImageFrame border center>

![高度な機能](./enable-perform-actions-as-users.png)

</ImageFrame>

さらに、認証済みユーザーは、管理者権限を持つユーザー、つまり、管理者、共同管理者、またはサービスアカウントのいずれかである必要があります。詳細については、[ユーザータイプ](g://authentication/user-types)のガイドを参照してください。

## SDKを使用したas-user

すべての公式SDKでは、`as-user`ヘッダーを使用してユーザーの代わりに処理を実行することがサポートされています。

<Tabs>

<Tab title=".NET">

```dotnet
var user_client = new BoxClient(config, session, asUser: '[USER_ID]');
```

</Tab>

<Tab title="Java">

```java
client.asUser([USER_ID]");
// client.asSelf();
```

</Tab>

<Tab title="Python">

```python
user_to_impersonate = client.user(user_id='[USER_ID]')
user_client = client.as_user(user_to_impersonate)
```

</Tab>

<Tab title="Node">

```js
client.asUser('[USER_ID]');
// client.asSelf();
```

</Tab>

</Tabs>

<Message warning>

SDKには、他のユーザーに対して新しいクライアントを作成するものもあれば、既存のクライアントを変更して、そのクライアントが元のユーザーに対して認証される状態に戻せるようにするものもあることに注意してください。

</Message>

[devconsole]: https://app.box.com/developers/console
