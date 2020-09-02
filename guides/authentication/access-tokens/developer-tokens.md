---
rank: 4
related_endpoints: []
related_resources: []
related_guides:
  - authentication/select
required_guides:
  - applications/select
alias_paths:
  - /docs/authenticate-with-developer-token
category_id: authentication
subcategory_id: authentication/access-tokens
is_index: false
id: authentication/access-tokens/developer-tokens
type: guide
total_steps: 8
sibling_id: authentication/access-tokens
parent_id: authentication/access-tokens
next_page_id: authentication/access-tokens/refresh
previous_page_id: authentication/access-tokens/sdks
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/access-tokens/developer-tokens.md
---
# 開発者トークン

開発者トークンは、開発およびテスト中に開発者が利用できるアクセストークンです。これらのトークンは60分後に期限切れになる有効期間の短いトークンで、自動で更新することはできません。

開発者トークンは、**常に開発者のユーザーアカウントとして認証**され、その他のユーザーとして認証されることはありません。この点が、他の大半の認証方式と異なります。

## 開発者トークンの作成

アプリケーション用に開発者トークンを作成するには:

* Box[開発者コンソール][devconsole]に移動し、開発者トークンの作成対象となるアプリケーションを選択します。
* サイドバーで\[構成]を選択します。
* \[開発者トークン]セクションで、\[開発者トークンを生成]を選択します。

## 開発者トークンの使用

開発者トークンは、さまざまなアクセストークンと同様、API呼び出しの`Authorization`ヘッダーで使用できます。

```curl
curl https://api.box.com/2.0/users/me \
  -H "authorization: Bearer [DEVELOPER_TOKEN]"
```

<Message warning>

開発者トークンは、トークン作成時に開発者コンソールにログインしていたユーザー(開発者)に関連付けられていることに注意してください。

</Message>

SDKのほとんどは、基本のAPIクライアントを作成する際に、開発者トークンを使用して初期化することもできます。

<Samples id="x_auth" variant="init_with_dev_token">

</Samples>

<Message type="danger">

# 開発者トークンは実稼働環境で使用しないでください

開発者トークンは、開発およびテストのためだけに使用してください。トークンは自動的に有効期限が切れても、自動更新できないため、実稼働環境での効果は限定的です。

</Message>

[devconsole]: https://app.box.com/developers/console
