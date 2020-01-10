---
rank: 2
related_endpoints: []
related_resources: []
related_guides:
  - authentication
required_guides:
  - applications/select
alias_paths:
  - /docs/how-to-get-an-api-key
category_id: authentication
subcategory_id: authentication/access-tokens
id: authentication/access-tokens/api-calls
type: guide
is_index: false
total_steps: 8
sibling_id: authentication/access-tokens
parent_id: authentication/access-tokens
next_page_id: authentication/access-tokens/sdks
previous_page_id: authentication/access-tokens/resource
---

# Use a Token

Every authenticated API call requires an Access Token to be passed in the
`Authorization` header as a `Bearer Token` or it will return a `401 Unautorized`
HTTP status.

```curl
curl https://api.box.com/2.0/users/me \
    -H "Authorization: Bearer EGmDmRVfhfHsqesn5yVYHAqUkD0dyDfk"
```

<Message>

Use the [`GET /users/me`](endpoint://get-users-id) endpoint to inspect what
user an Access Token is authenticated for.

</Message>
