---
rank: 3
related_endpoints: []
related_guides:
  - authentication/tokens/developer-tokens
  - authentication/select
required_guides:
  - tooling/sdks
related_resources:
  - access_token
alias_paths:
  - /guides/authentication/access-tokens/sdks
category_id: authentication
subcategory_id: authentication/tokens
is_index: false
id: authentication/tokens/sdks
type: guide
total_steps: 8
sibling_id: authentication/tokens
parent_id: authentication/tokens
next_page_id: authentication/tokens/developer-tokens
previous_page_id: authentication/tokens/api-calls
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/tokens/sdks.md
fullyTranslated: true
---
# SDKでの使用

SDKではJWTおよびOAuth 2.0認証を直接サポートしていますが、場合によっては、アプリケーションがSDKに直接アクセストークンを提供しなければならないこともあります。

<Samples id="x_auth" variant="init_with_access_and_refresh_token">

</Samples>

## 開発者トークン

開発者トークンも同様に、追加のSDK構成を必要することなく、直接SDKで使用できます。

<Samples id="x_auth" variant="init_with_dev_token">

</Samples>

## アプリトークン

アプリトークン認証を使用すると、アプリトークンを直接SDKに渡すことができます。

<Samples id="x_auth" variant="init_with_app_token">

</Samples>