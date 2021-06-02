---
rank: 3
related_endpoints:
  - post-oauth2-token
related_guides:
  - authentication/access-tokens
  - authentication/access-tokens/refresh
  - authentication/oauth2
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/postman
is_index: false
id: tooling/postman/access-token
type: guide
total_steps: 5
sibling_id: tooling/postman
parent_id: tooling/postman
next_page_id: tooling/postman/refresh
previous_page_id: tooling/postman/make-api-call
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/postman/access-token.md
---
# Retrieve an Access Token

Every API call requires an **Access Token** to identify the authenticated user.
For security reasons, Access Tokens expire after 1 hour.

## OAuth 2.0

If your application leverages [OAuth 2.0][oauth] for authentication, you can use
the steps below to obtain an Access Token using [Postman][postman].

<ImageFrame border center shadow>

![OAuth2.0 token request](images/oauth-postman.png)

</ImageFrame>

- The `grant_type` will always be `authorization_code`.
- The `client_id` and `client_secret` values can be obtained from the
  **Configuration** tab for your application in the [Developer Console][dc].

To obtain the value for `code`, build and visit your
[authorization URL][authurl] in your browser. Complete the OAuth 2.0 flow and
the code will be at the end of the URL upon redirecting to your configured
redirect URL. As a reminder, this authorization code is only valid for 30
seconds, so you must put this into your Postman call and click **Send** before
expiration.

<ImageFrame border center shadow>

![OAuth2.0 token request](images/ooauth2-token.gif)

</ImageFrame>

[oauth]: g://authentication/oauth2
[dc]: https://app.box.com/developers/console
[authurl]: g://authentication/oauth2/without-sdk
[postman]: g://tooling/postman/install