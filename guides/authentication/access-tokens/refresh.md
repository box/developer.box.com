---
rank: 5
related_endpoints:
  - post_oauth2_token
related_resources:
  - access_token
related_guides:
  - authentication
required_guides:
  - authentication/access-tokens
alias_paths: []
category_id: authentication
subcategory_id: authentication/access-tokens
is_index: false
id: authentication/access-tokens/refresh
type: guide
total_steps: 8
sibling_id: authentication/access-tokens
parent_id: authentication/access-tokens
next_page_id: authentication/access-tokens/revoke
previous_page_id: authentication/access-tokens/developer-tokens
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/access-tokens/refresh.md
fullyTranslated: true
---
# トークンの更新

アクセストークンを更新するには、アクセストークンに付属された更新トークンを使用します。更新は、アクセストークンの有効期限の前でも後でも行うことができます。

これを行うには、アプリケーションで以下のように`refresh_token`を[`POST
/oauth2/token`](endpoint://post-oauth2-token)エンドポイントに渡します。

```curl
curl -X POST https://api.box.com/oauth2/token \
  -H "content-type: application/x-www-form-urlencoded" \
  -d '{
    "client_id": "[CLIENT_ID]",
    "client_secret": "[CLIENT_SECRET]",
    "refresh_token": "[REFRESH_TOKEN]",
    "grant_type": "refresh_token"
  }'
```

<Message>

# SDKでの使用方法

すべてのBox SDKは、JWTおよびOAuth 2.0アプリケーションのためにアクセストークンの自動更新をサポートしています。

</Message>

<Message danger>

# 更新トークンの有効期限

更新トークンの有効期限は60日間で、このトークンを使用すると、新しいアクセストークンと更新トークンを1回だけ取得できます。アクセストークンと更新トークンが60日以内に更新されなかった場合は、ユーザーの再承認が必要になります。

アプリケーションが更新トークンを使用して新しいアクセストークンを取得するたびに、更新トークンは無効になり、新しい更新トークンが新しいアクセストークンとともに返されます。

その後、この新しい更新トークンは再度60日以内に1回だけ使用できます。

</Message>
