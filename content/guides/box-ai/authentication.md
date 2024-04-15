---
rank: 2
related_guides:
    - authentication/tokens/developer-tokens/
---

# Authentication

<Message type="notice">
Box AI API is a beta feature which means the
available capabilities may change.
Box AI API is to all Enterprise Plus customers.
</Message>

To use the Box AI API, you need a custom application you will use to send requests.

## Create an application

To create a custom application, follow this [guide][createapps].

## Add scopes

To work with Box AI API, you need the
`AI.readwrite` [scope][scope].

To add a scope:

1. Open your application in Developer Console.
1. Go to **Configuration** > **Application Scopes** > **Content Actions**
1. Select the **Manage AI** scope. Box Platform will
   automatically include the scope when making the call.
## Scopes

To work with Box AI API, you need the
`AI.readwrite` [scope][scope]. You can
configure it in the Developer Console.

To do so:

1. Open your application in Developer Console.
1. Go to **Configuration** > **Application Scopes** > **Manage AI**
1. Select the `AI.readwrite` scope. Box Platform will
   automatically include the scope when making the call.

## Generate developer token

A developer token is needed to authenticate your app when sending requests. 

To generate a token:


1. Open your application in the Developer Console.
2. Go to **Configuration** > **Developer Token**.
3. Click **Generate Developer Token**.

After you generate the token, you can add it in cURL or use it in Postman to make calls.

For additional details, see [developer token][token].

<Message type="notice">
A developer token is only valid for one hour.
</Message>


[token]: g://authentication/tokens/developer-tokens/
[scope]: g://api-calls/permissions-and-errors/scopes/
[oauthscopes]: g://api-calls/permissions-and-errors/scopes/#scopes-oauth-2-authorization
[createapps]: g://applications/app-types/custom-apps/