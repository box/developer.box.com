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
---

# Refresh a Token

An Access Token can be refreshed by using the Refresh Token that came with the
Access Token. This can be done before or after the Access Token expires.

To do this, the application passes the `refresh_token` to the [`POST
/oauth2/token`](endpoint://post-oauth2-token) endpoint as follows.

```curl
curl -X POST https://api.box.com/oauth2/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d '{
    "client_id": "[CLIENT_ID]",
    "client_secret": "[CLIENT_SECRET]",
    "refresh_token": "[REFRESH_TOKEN]",
    "grant_type": "refresh_token"
  }'
```

<Message>
  # Usage in SDKs

  All of the Box SDKs support automatic Access Token renewal for JWT and OAuth 2.0
  applications.
</Message>

<Message danger>
  # Refresh token expiration

  Refresh tokens are only valid for 60 days. After 60 days the user will need to
  be reauthorized.
</Message>
