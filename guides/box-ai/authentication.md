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

Work in progress, content may change.

</Message>

## Developer token

To use the Box AI API, you must authenticate.
To do so, generate a [developer token][token].

<Message type="notice">

A developer token is only valid for one hour.

</Message>

## Scopes

To work with Box AI API, you need the
`AI.readwrite` [scope][scope]. You can
configure it in the Developer Console.

To do so:

1. Open your application in Developer Console.
1. Go to **Configuration** > **Application Scopes** > **Manage AI**
1. Select the `AI.readwrite` scope. Box Platform will
   automatically include the scope when making the call.

[token]: g://authentication/tokens/developer-tokens/
[scope]: g://api-calls/permissions-and-errors/scopes/
[oauthscopes]: g://api-calls/permissions-and-errors/scopes/#scopes-oauth-2-authorization