---
rank: 1
related_endpoints: []
related_resources:
  - access_token
related_guides:
  - authentication/select
required_guides:
  - authentication/access-tokens
alias_paths: []
category_id: authentication
subcategory_id: authentication/access-tokens
is_index: false
id: authentication/access-tokens/resource
type: guide
total_steps: 8
sibling_id: authentication/access-tokens
parent_id: authentication/access-tokens
next_page_id: authentication/access-tokens/api-calls
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/access-tokens/resource.md
---
# アクセストークンオブジェクト

アクセストークンがOAuth 2.0方式またはJWT方式でリクエストされると、アクセストークンのリソースがAPIを介して返されます。

```curl
curl -X POST https://api.box.com/oauth2/token \
  -H "content-type: application/x-www-form-urlencoded" \
  -d '...'
```

```json
{
  "access_token": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  "expires_in": 3600,
  "token_type": "bearer",
  "refresh_token": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token"
}
```

このオブジェクト内には、実際のトークン文字列(`access_token`)のほか、現在のトークンの有効期限が切れたとき(`expires_in`)に新しいアクセストークンのリクエストに使用できる更新トークン(`refresh_token`)があります。
