---
rank: 7
related_endpoints:
  - post_oauth2_revoke
related_resources: []
related_guides: []
required_guides:
  - authentication/tokens
alias_paths:
  - /guides/authentication/access-tokens/revoke
category_id: authentication
subcategory_id: authentication/tokens
is_index: false
id: authentication/tokens/revoke
type: guide
total_steps: 8
sibling_id: authentication/tokens
parent_id: authentication/tokens
next_page_id: authentication/tokens/downscope
previous_page_id: authentication/tokens/access-tokens
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/tokens/revoke.md
---
# Revoke a Token

An Access Token can be revoked at any time by either sending the Access Token or
Refresh Token the [`POST
/oauth2/revoke`](endpoint://post-oauth2-revoke) endpoint.

<Samples id='post_oauth2_revoke' >

</Samples>

<Message>

# Usage in SDKs

All of the Box SDKs support manually revoking the current Access Token
associated with the client. To revoke a specific token, first initialize a new
SDK with that token and then call the relevant revoke method.

</Message>