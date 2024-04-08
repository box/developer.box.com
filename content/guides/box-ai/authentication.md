---
rank: 2
related_guides:
    - authentication/tokens/developer-tokens/
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