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
---

# Use a Token

Every authenticated API call requires an Access Token to be passed in the
`Authorization` header as a `Bearer Token` or it will return a `401 Unauthorized`
HTTP status.

```curl
curl https://api.box.com/2.0/users/me \
  -H "authorization: Bearer EGmDmRVfhfHsqesn5yVYHAqUkD0dyDfk"
```

<Message>
  Use the [`GET /users/me`](endpoint://get-users-id) endpoint to inspect what
  user an Access Token is authenticated for.
</Message>
