---
rank: 6
related_endpoints:
  - post_oauth2_revoke
related_resources: []
related_guides: []
required_guides:
  - authentication/tokens
alias_paths:
  - /guides/authentication/access-tokens/revoke
category_id: authentication
subcategory_id: authentication/tokens
is_index: false
id: authentication/tokens/revoke
type: guide
total_steps: 8
sibling_id: authentication/tokens
parent_id: authentication/tokens
next_page_id: authentication/tokens/downscope
previous_page_id: authentication/tokens/refresh
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/tokens/revoke.md
fullyTranslated: true
---
# トークンの取り消し

アクセストークンまたは更新トークンを[`POST
/oauth2/revoke`](endpoint://post-oauth2-revoke)エンドポイントに送信することにより、アクセストークンをいつでも取り消すことができます。

<Samples id="post_oauth2_revoke">

</Samples>

<Message>

# SDKでの使用方法

すべてのBox SDKでは、クライアントに関連付けられた現在のアクセストークンを手動で取り消すことがサポートされています。特定のトークンを取り消すには、最初にそのトークンで新しいSDKを初期化してから、関連する取り消しメソッドを呼び出します。

</Message>