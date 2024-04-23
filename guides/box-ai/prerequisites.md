---
rank: 2
related_guides:
  - authentication/tokens/developer-tokens/
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/prerequisites
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/ask-questions
previous_page_id: box-ai
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/prerequisites.md
---
# Getting Started with Box AI

<Message type="notice">

Box AI API is a beta feature, which means the
available capabilities may change.
Box AI API is available to all **Enterprise Plus** customers.

</Message>

To implement Box AI in your solutions, you need
to make sure you have access to the functionality.
You will also need a custom application with
enabled Box AI scope, and a developer token to
authenticate your calls.

<Message type="notice">

To use Box AI API, make sure it is enabled by an
admin in the Admin Console. If you want to use
the AI APIs in your sandbox, request access
from the AI team using [this form][form].

</Message>

## Create an application

First you need to create a custom application
you will use to make calls. To create
an application, follow the guide
on [creating custom apps][createapps].

## Add AI scope

To work with Box AI API, you need the
`AI.readwrite` [scope][scope] added for
your application.

To add a scope:

1. Open your application in Developer Console.
1. Go to **Configuration** > **Application Scopes** > **Content Actions**
1. Select the **Manage AI** scope. Box Platform will
   automatically include the scope when making the call.

![box ai scopes](./images/box-ai-app-scopes.png)

<Message type="notice">

If you are collaborated into an app but do not have
AI access, you will see the Manage AI scope
checked and grayed out.

</Message>

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

After you generate the token, you can add
it in cURL or use it in Postman to make calls.

<Message type="notice">

A developer token is only valid for one hour.

</Message>

For additional details, see [developer token][token].

After you generate the token, you can add it in cURL
or use it in [Postman][postman] to make calls.

[token]: g://authentication/tokens/developer-tokens/
[scope]: g://api-calls/permissions-and-errors/scopes/
[oauthscopes]: g://api-calls/permissions-and-errors/scopes/#scopes-oauth-2-authorization
[createapps]: g://applications/app-types/custom-apps/
[postman]: g://tooling/postman/
[form]: https://docs.google.com/forms/d/e/1FAIpQLScULnADtK7DtqXFrFFLJMoDAaFMFTOvPySHDtpKwNMe