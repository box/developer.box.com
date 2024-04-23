---
rank: 3
related_endpoints:
  - post-oauth2-token
related_guides:
  - authentication/tokens
  - authentication/tokens/refresh
  - authentication/oauth2
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/postman
is_index: false
id: tooling/postman/access-token
type: guide
total_steps: 4
sibling_id: tooling/postman
parent_id: tooling/postman
next_page_id: tooling/postman/refresh
previous_page_id: tooling/postman/make-api-call
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/postman/access-token.md
---
# Retrieve an Access Token

Every API call requires an **Access Token** to identify the authenticated user.
For security purposes, Access Tokens expire after 60 minutes. If you are using
[OAuth 2.0][oauth], use the provided [Refresh Token][rt] to obtain a new Access
Token. If you are using server authentication, [JWT][jwt] or
[Client Credentials Grant][ccg], make an API call to the [token endpoint][token]
to request a new Access Token.

## OAuth 2.0

If your application leverages [OAuth 2.0][oauth] for authentication, you can
follow the steps below to obtain a token pair via [Postman][postman].

<ImageFrame border center shadow>

![OAuth2.0 token request](images/oauth-postman.png)

</ImageFrame>

- The `grant_type` will always be `authorization_code`.
- The `client_id` and `client_secret` values can be obtained from the **Configuration** tab for your application in the [Developer Console][dc].

To obtain the value for `code`, build and visit your
[authorization URL][authurl] in your browser. Complete the OAuth 2.0 flow and,
upon redirecting to your configured redirect URL, the authorization code will be
at the end of the URL. As a reminder, this authorization code is only valid for
30 seconds. This means you must enter it to the designated field in Postman and
click **Send** before it expires. Therefore, we recommend entering the other
values so the API call is ready to send as soon as you get the code.

<ImageFrame border center shadow>

![OAuth2.0 token request](images/oauth2-access-token.gif)

</ImageFrame>

[oauth]: g://authentication/oauth2
[dc]: https://app.box.com/developers/console
[authurl]: g://authentication/oauth2/without-sdk
[postman]: g://tooling/postman/install
[jwt]: g://authentication/jwt
[ccg]: g://authentication/client-credentials
[token]: e://post-oauth2-token
[rt]: g://authentication/tokens/refresh/