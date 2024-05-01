---
rank: 2
related_guides:
  - authentication/tokens/developer-tokens/
  - box-ai/ask-questions
  - box-ai/generate-text
---

# Getting started with Box AI

<Message type="notice">
Box AI API is a beta feature, which means the
available capabilities may change.
Box AI API is available to all **Enterprise Plus** customers.
</Message>

To implement Box AI API in your solutions, you need
to make sure you have access to the functionality.
You will also need a custom application with
enabled Box AI scope, and a developer token to
authenticate your calls.

<Message type="notice">
To use Box AI API, make sure it is enabled by an
admin in the Admin Console. If you want to use
the Box AI APIs in your sandbox, request access
from the Box AI team using [this form][form].
</Message>

## Create an application

First you need to create a custom application
you will use to make calls. To create
an application, follow the guide
on [creating custom apps][createapps].

## Enable Box AI API access

To interact with Box AI API, 
you need the `AI.readwrite`[scope][scope]
added for your application. 
Before you add the scope,
make sure that the Box Admin has granted you
the access to Box AI API. If you can't see the
**Manage AI** option in your app configuration
settings, contact your admin.

To add a scope:

1. Open your application in Developer Console.
1. Go to **Configuration** > **Application Scopes** > **Content Actions**
1. Select the **Manage AI** scope. Box Platform will
   automatically include the scope when making the call.

![box ai scopes](./images/box-ai-app-scopes.png)

If you are added as an collaborator 
for a given app, but do not have
Box AI API access, you will see the **Manage AI** scope
checked and grayed out.
This means, the app owner has the AI scope enabled
but it is not available to you for any changes.

## Generate a developer token

You need a developer token
to authenticate your app when sending requests. 

To generate a token:

1. Go to **Developer Console** > **My Apps**.
2. Click the **Options menu** button (…) on the right.
3. Select **Generate Developer Token**. The token
will be automatically generated and saved to clipboard.

![generate token](./images/developer-token.png)

You can also open your app, go to
**Configuration** > **Developer Token**
and generate the token. 

<Message type="notice">
A developer token is only valid for one hour.
</Message>

For additional details, see [developer token][token].
After you generate the token, you can use it in cURL
or other clients, such as [Postman][postman], to make
calls.

[token]: g://authentication/tokens/developer-tokens
[scope]: g://api-calls/permissions-and-errors/scopes
[oauthscopes]: g://api-calls/permissions-and-errors/scopes#scopes-oauth-2-authorization
[createapps]: g://applications/app-types/custom-apps
[postman]: g://tooling/postman
[form]: https://docs.google.com/forms/d/e/1FAIpQLScULnADtK7DtqXFrFFLJMoDAaFMFTOvPySHDtpKwNMe