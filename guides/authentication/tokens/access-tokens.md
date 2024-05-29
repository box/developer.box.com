---
rank: 6
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/authentication/access-tokens/resource
category_id: authentication
subcategory_id: authentication/tokens
is_index: false
id: authentication/tokens/access-tokens
type: guide
total_steps: 8
sibling_id: authentication/tokens
parent_id: authentication/tokens
next_page_id: authentication/tokens/revoke
previous_page_id: authentication/tokens/refresh
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/tokens/access-tokens.md
fullyTranslated: true
---
# アクセストークン

アクセストークンは、Boxサーバーに対して認証済みユーザーを表すために、ユーザー名とパスワードの代わりに使用される資格情報です。

## トークンオブジェクト

### OAuth 2.0認証

OAuth 2.0を使用してアクセストークンをリクエストすると、アクセストークンと更新トークンのペアが返されます。

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

このオブジェクト内には、トークン文字列 (`access_token`) のほか、現在のトークンの有効期限が切れたとき (`expires_in`) に新しいアクセストークンのリクエストに使用できる更新トークン (`refresh_token`) があります。

### サーバー認証

JWTまたはクライアント資格情報許可を使用してアクセストークンをリクエストすると、アクセストークンのみが返されます。

```curl
curl --location --request POST 'https://api.box.com/oauth2/token' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode '...'

```

```json
{
  "access_token": "DkXZmsjUKizvL2z0WiaLvMBeQ756XCGGf",
  "expires_in": 4123,
  "restricted_to": [],
  "issued_token_type": "bearer"
}

```

このオブジェクト内には、トークン文字列 (`access_token`) があります。更新トークンは返されないため、アクセストークンの有効期限が切れたとき (`expires_in`) には、[トークンエンドポイント][token]を使用して、新しいトークンをリクエストする必要があります。

[token]: e://post-oauth2-token
