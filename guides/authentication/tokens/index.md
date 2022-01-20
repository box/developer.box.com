---
rank: 0
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/authentication/access-tokens
category_id: authentication
subcategory_id: authentication/tokens
is_index: true
id: authentication/tokens
type: guide
total_steps: 8
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/tokens/api-calls
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/tokens/index.md
fullyTranslated: true
---
# トークン

さまざまなBox API呼び出しの中核となるのはアクセストークンです。Boxウェブアプリを使用する場合と同様に、問題なく操作できるのは、アクセストークンに関連付けられたユーザーが所有するコンテンツまたはコラボレータとなっているコンテンツのみです。これは、トークンの[ダウンスコープ][ds]によってさらに制限できます。

<Message warning>

アプリケーションスコープ、アプリケーションアクセス、有効化された詳細設定、ユーザー権限、およびエンドポイント固有の制限は、すべてが合わさることで、どのAPI呼び出しが成功するかが決まります。たとえば、フォルダに対するコラボレータアクセス権限がユーザーにある場合でも、読み取りスコープがアプリケーションに許可されていなければ、そのフォルダに関する情報を取得する呼び出しは失敗します。

</Message>

## トークンの種類

| 型              | 有効期間        |
| -------------- | ----------- |
| [アクセストークン][at] | 60分         |
| [更新トークン][rt]   | 60日または1回の使用 |
| [開発者トークン][dt]  | 60分         |

## アプリケーションの種類とアクセストークン

それぞれのアプリケーションの種類でどのようにアクセストークンが作成されるのかを以下に示します。

<!-- markdownlint-disable line-length -->

| Boxアプリケーションの種類       | アクセストークンの取得方法                          |
| -------------------- | -------------------------------------- |
| カスタムアプリとOAuth 2.0    | [明示的なユーザーによる付与][oauth2-with-sdk]       |
| カスタムアプリとJWT          | [JWTアサーションの交換][jwt-with-sdk]           |
| カスタムアプリとクライアント資格情報許可 | [クライアントIDとクライアントシークレットの使用][clientcred] |
| アクセス制限付きアプリとアプリトークン  | [開発者コンソール][devcon]でのトークンの構成            |
| カスタムスキル              | イベントペイロードのアクセストークン                     |

<!-- markdownlint-enable line-length -->

[jwt-with-sdk]: g://authentication/oauth2/without-sdk

[oauth2-with-sdk]: g://authentication/oauth2/without-sdk

[devcon]: https://app.box.com/developers/console

[clientcred]: g://authentication/client-credentials

[ds]: g://authentication/tokens/downscope

[at]: g://authentication/tokens/access-tokens

[rt]: g://authentication/tokens/refresh

[dt]: g://authentication/tokens/developer-tokens
