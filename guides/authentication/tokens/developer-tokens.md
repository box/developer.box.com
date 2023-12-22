---
rank: 4
related_endpoints: []
related_resources: []
related_guides:
  - authentication/select
required_guides:
  - applications/app-types/select
alias_paths:
  - /docs/authenticate-with-developer-token
  - /authentication/access-tokens/developer-tokens
category_id: authentication
subcategory_id: authentication/tokens
is_index: false
id: authentication/tokens/developer-tokens
type: guide
total_steps: 8
sibling_id: authentication/tokens
parent_id: authentication/tokens
next_page_id: authentication/tokens/refresh
previous_page_id: authentication/tokens/sdks
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/tokens/developer-tokens.md
fullyTranslated: true
---
# 開発者トークン

開発者トークンは、開発およびテスト中に開発者が利用できるアクセストークンです。これらのトークンは60分後に期限切れになる有効期間の短いトークンであり、プログラムによって更新することはできません。

## 開発者トークンの作成

アプリケーション用に開発者トークンを作成するには:

* Box[開発者コンソール][devconsole]に移動し、開発者トークンの作成対象となるアプリケーションを選択します。
* \[**構成**] タブを選択します。
* \[開発者トークン] で、\[**開発者トークンを生成**] を選択します。

<Message>

\[[マイアプリ][apps]] ビューから直接、各アプリに用意されているメニューを使用して、開発者トークンを生成することもできます。

</Message>

<ImageFrame border center shadow>

![開発者トークンの生成](../images/developer-token.png)

</ImageFrame>

## 開発者トークンの使用

開発者トークンは、さまざまなアクセストークンと同様、APIコールの`Authorization`ヘッダーで使用できます。

```curl
curl https://api.box.com/2.0/users/me \
    -H "authorization: Bearer [DEVELOPER_TOKEN]"

```

<Message warning>

開発者トークンは、トークンの生成時に開発者コンソールにログインしているユーザーに関連付けられます。

</Message>

Box SDKは、基本のAPIクライアントを作成する際に、開発者トークンを使用して初期化することができます。

<Samples id="x_auth" variant="init_with_dev_token">

</Samples>

<Message type="danger">

# 開発者トークンは実稼働環境で使用しないでください

開発者トークンは、開発またはテストのためだけに使用してください。

</Message>

<Message warning>

開発者コンソールで特定のアプリの開発者トークンを明示的に取り消すと、そのアプリケーションによって作成されたすべてのWebhookが削除されます。

</Message>

[devconsole]: https://app.box.com/developers/console

## SDKと開発者トークンの使用

各SDKの開発者トークンの詳細については、以下を参照してください。

* [.Net][.Net]

* [Java][Java]

* [Python][Python]

* [Node][Node]

* [IOS][IOS]

[.Net]: https://github.com/box/box-windows-sdk-v2/blob/main/docs/authentication.md#developer-token

[Java]: https://github.com/box/box-java-sdk/blob/main/doc/authentication.md#developer-token

[Python]: https://github.com/box/box-python-sdk/blob/main/docs/usage/authentication.md#developer-token

[Node]: https://github.com/box/box-node-sdk/blob/main/docs/authentication.md#developer-token

[IOS]: https://github.com/box/box-ios-sdk/blob/main/docs/usage/authentication.md#developer-token

[apps]: g://applications
