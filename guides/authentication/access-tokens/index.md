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
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/access-tokens/index.md
---
# アクセストークン

アクセストークンは、すべてのBox API呼び出しの中核となります。Boxサーバーに対して認証済みユーザーを表し、アプリケーションからアクセスできるファイルやフォルダを決定します。

<CTA to="guide://authentication/select">

アプリを承認する各種方法について確認する

</CTA>

## アプリケーションの種類とアクセストークン

それぞれのアプリケーションの種類でどのようにアクセストークンが作成されるのかを以下に示します。

<!-- markdownlint-disable line-length -->

| Boxアプリケーションの種類    | アクセストークンの取得方法                    |
| ----------------- | -------------------------------- |
| カスタムアプリとOAuth 2.0 | [明示的なユーザーによる付与][oauth2-with-sdk] |
| カスタムアプリとJWT       | [JWTアサーションを交換する][jwt-with-sdk]   |
| カスタムアプリとアプリトークン   | [開発者コンソールでトークンを構成する][devtoken]   |
| 企業統合とOAuth 2.0    | [明示的なユーザーによる付与][oauth2-with-sdk] |
| 企業統合とJWT          | [JWTアサーションを交換する][jwt-with-sdk]   |
| パートナーの統合とアプリトークン  | 開発者コンソールでトークンを構成する               |
| カスタムスキル           | イベントペイロードのアクセストークン               |

<!-- markdownlint-enable line-length -->

[jwt-with-sdk]: g://authentication/jwt/with-sdk

[oauth2-with-sdk]: g://authentication/oauth2/with-sdk

[devtoken]: g://authentication/access-tokens/developer-tokens
