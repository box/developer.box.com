---
rank: 2
related_guides:
    - authentication/tokens/developer-tokens/
---

# Prerequisites for Box AI

<Message type="notice">
Box AI API is a beta feature which means the
available capabilities may change.
Box AI API is available to all Enterprise Plus customers.
</Message>

To use Box AI API, make sure it is enabled by an
admin in the Admin Console. If you want to use
the AI APIs in your sandbox, request access
from the AI team using [this form][form].

## Create an application

To start using Box AI API, you need to create a
custom application first. You can then use the
developer token available with the app to
authenticate and send requests.
To create an application, follow the guide
on [creating custom apps][createapps].

## Add scopes

To work with Box AI API, you need the
`AI.readwrite` [scope][scope] added for
your application.

To add a scope:

1. Open your application in Developer Console.
1. Go to **Configuration** > **Application Scopes** > **Content Actions**
1. Select the **Manage AI** scope. Box Platform will
   automatically include the scope when making the call.

## Generate developer token

You need a developer token
to authenticate your app when sending requests. 

To generate a token:

1. Open your application in the Developer Console.
2. Go to **Configuration** > **Developer Token**.
3. Click **Generate Developer Token**.

After you generate the token, you can add it in cURL
or use it in [Postman][postman] to make calls.

For additional details, see [developer token][token].

<Message type="notice">
A developer token is only valid for one hour.
</Message>

[token]: g://authentication/tokens/developer-tokens/
[scope]: g://api-calls/permissions-and-errors/scopes/
[oauthscopes]: g://api-calls/permissions-and-errors/scopes/#scopes-oauth-2-authorization
[createapps]: g://applications/app-types/custom-apps/
[postman]: g://tooling/postman/
[form]: https://docs.google.com/forms/d/e/1FAIpQLScULnADtK7DtqXFrFFLJMoDAaFMFTOvPySHDtpKwNMe