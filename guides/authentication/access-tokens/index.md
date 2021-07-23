---
rank: 4
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/access-tokens
is_index: true
id: authentication/access-tokens
type: guide
total_steps: 8
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/access-tokens/refresh
previous_page_id: authentication/access-tokens/sdks
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/access-tokens/index.md
fullyTranslated: true
---
# アクセストークン

アクセストークンは、すべてのBox API呼び出しの中核となります。Boxサーバーに対して認証済みユーザーを表し、アプリケーションからアクセスできるファイルやフォルダを決定します。

<CTA to="guide://authentication/select">

アプリを承認する各種方法について確認する

</CTA>

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

[jwt-with-sdk]: g://authentication/jwt/with-sdk

[oauth2-with-sdk]: g://authentication/oauth2/with-sdk

[devcon]: https://app.box.com/developers/console

[clientcred]: g://authentication/jwt/without-sdk/#client-credentials-grant
