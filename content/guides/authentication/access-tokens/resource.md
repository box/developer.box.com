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
---

# Access Token Object

When an Access Token is requested through the OAuth 2.0 or JWT methods, an
Access Token resource is returned via the API.

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

Within this object we can see the actual token string (`access_token`), as well
as the refresh token (`refresh_token`) that can be used to request a new Access
Token when the current one expires (`expires_in`).
