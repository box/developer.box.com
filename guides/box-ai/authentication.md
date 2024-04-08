---
rank: 2
related_guides:
  - authentication/tokens/developer-tokens/
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/authentication
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ask-questions
previous_page_id: box-ai
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/authentication.md
---
# Authentication

<Message type="warning">

This document is rendered for test purposes
and contains content that
will change.

</Message>

## Developer token

To use the Box AI API, you must authenticate.
To do so, use the [developer token][token].

<Message type="notice">

A developer token is only valid for one hour.

</Message>

## Scopes

To work with Box AI API, you need the
`AI.readwrite` [scope][scope]. You can
configure it in the following ways:

* Enabling the scope for your app in the Developer Console.
To do so, go to  **Configuration** > **Application Scopes**
and select the scope. Box Platform will
automatically include the scope when making the call.
* Use [OAuth2 authorization][oauthscopes] and
specifically request the `AI.readwrite` scope.

[token]: g://authentication/tokens/developer-tokens/
[scope]: g://api-calls/permissions-and-errors/scopes/
[oauthscopes]: g://api-calls/permissions-and-errors/scopes/#scopes-oauth-2-authorization