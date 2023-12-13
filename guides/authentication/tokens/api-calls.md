---
rank: 2
related_endpoints: []
related_resources: []
related_guides:
  - authentication
required_guides:
  - applications/app-types/select
alias_paths:
  - /docs/how-to-get-an-api-key
  - /authentication/access-tokens/api-calls
category_id: authentication
subcategory_id: authentication/tokens
is_index: false
id: authentication/tokens/api-calls
type: guide
total_steps: 8
sibling_id: authentication/tokens
parent_id: authentication/tokens
next_page_id: authentication/tokens/sdks
previous_page_id: authentication/tokens
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/tokens/api-calls.md
fullyTranslated: true
---
# トークンの使用

すべての認証済みAPIコールでは、`Bearer Token`としてアクセストークンを`Authorization`ヘッダーに含めて渡す必要があります。そうしないと、`401 Unauthorized` HTTPステータスが返されます。

```curl
curl https://api.box.com/2.0/users/me \
    -H "authorization: Bearer EGmDmRVfhfHsqesn5yVYHAqUkD0dyDfk"

```

<Message>

アクセストークンが認証されるユーザーを調べるには、[`GET /users/me`](endpoint://get-users-id)エンドポイントを使用してください。

</Message>
