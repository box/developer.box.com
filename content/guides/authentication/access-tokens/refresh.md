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
  -H "content-type: application/x-www-form-urlencoded" \
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

  A refresh token is valid for 60 days and can be used to obtain a new access
  token and refresh token only once. If the access token and refresh token are
  not refreshed within 60 days, the user will need to be re-authorized.

  Every time an application uses the refresh token to get a new access token the
  refresh token is invalidated and a new refresh token is returned with the
  new access token.

  This new refresh token is then again only valid for 1 use within 60 days.
</Message>
