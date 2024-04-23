---
rank: 6
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
- /guides/authentication/access-tokens/resource
---

# Access Tokens

Instead of a user name and password, Access Tokens are the credentials used to
represent the authenticated user to the Box servers.

## Token Object

### OAuth 2.0 authentication

When an Access Token is requested using OAuth 2.0, an Access Token and Refresh
Token pair are returned.

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

Within this object we can see the token string (`access_token`), as well
as the Refresh Token (`refresh_token`) that can be used to request a new Access
Token when the current one expires (`expires_in`).

### Server authentication

When an Access Token is requested using JWT or Client Credentials Grant, only an
Access Token is returned:

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

Within this object we can see the token string (`access_token`).
Because a Refresh Token is not returned, you must request a new token when the
Access Token expires (`expires_in`) using the [token endpoint][token].

[token]: e://post-oauth2-token