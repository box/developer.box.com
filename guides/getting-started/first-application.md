---
rank: 2
related_guides:
  - api-calls
category_id: getting-started
subcategory_id: null
is_index: false
id: getting-started/first-application
type: guide
total_steps: 2
sibling_id: getting-started
parent_id: getting-started
next_page_id: getting-started/publish-app
previous_page_id: getting-started
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/first-application.md
---
# Create your first application

Once you have your Developer Enterprise set up, you can start creating applications.

Click the [Dev Console][console] button once you're logged in to
your Developer Enterprise.
If this is your first application, you will be prompted to get started.

## Choose application type

The first step is to select the application type you want to create.
In this guide we use the **Custom App** option, as most of our partners
use this type for their integrations.

## Choose the authentication method

After you choose the **Custom App**, you need to [select an authentication
method][auth] that your app will use. In this guide we use the
[**User Authentication (OAuth 2.0)**][oauth2] option, as most of our partners
use this type for their integrations.

## Name the app

Choose an app name. It can be changed later on and it is not publicly
visible until you publish your app. We recommend choosing a name that
is recognizable, as the admins and customers will see the name of
the app when it's published.

Click the **Create App** button to finish creating your app.
Next, configure the application settings.

## General settings

Begin with the most basic settings. Open the **General Settings** tab
and check or fill in below fields:

- **App Name** - the name you set up during the app creation, you can
change it here if needed;
- **Contact Email** - this is set to the developer of the application
by default. Keep in mind that once you publish your app, this email
is publicly visible to Box users who view your app in the
[App Center][app-center]. We recommend to change it to a support email
address, so that users can reach out to support in case of any issues
with the integration;
- **Collaborators** - add other developers that can work on this integration,
so that they can access the developer interface in case they need to adjust
any settings.

<Message type='notice'>

The developers you add here need to be Box users already. If they don't
have Box account, you can [create them][add-users] in your Developer Enterprise.

</Message>

## Advanced settings

Go to the **Configuration** tab. Here you can specify the app details,
generate a developer token, check your OAuth 2.0 credentials, add and
edit OAuth 2.0 redirect URI, choose the application scopes, set app advanced
features, and add CORS domains.

In the next tabs you can create webhooks, web app integrations,
submit app for enablement for access to the Enterprise, submit your app
to the [Box App Center][app-center], and generate a report to view this application’s
activity.

## Test your app

You can now make some API calls to test your app and get to know the
response format in Box.

Use the [developer token][dev-token] authenticated to your current developer account.

<Message type='warning'>

This token is valid for an hour from being generated.

</Message>

Start with the [Postman collection][postman-collection] to check
specific calls and see what responses they return.
To see example API calls, browse our [API reference documentation][api-ref].
You can also use [Box CLI tool][box-cli] if you prefer to use the terminal.

[console]: https://cloud.app.box.com/developers/console
[auth]: g://authentication/select
[oauth2]: g://authentication/oauth2
[app-center]: g://applications/app-center
[add-users]: https://support.box.com/hc/en-us/articles/360043694594-Add-Users
[app-center]: https://cloud.app.box.com/app-center
[dev-token]: g://authentication/tokens/developer-tokens/#create-developer-token
[postman-collection]: g://tooling/postman
[api-ref]: https://developer.box.com/reference/
[box-cli]: https://github.com/box/boxcli