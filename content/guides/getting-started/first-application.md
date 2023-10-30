---
rank: 2
related_guides:
- authentication
- authorization
- api-calls 
---

# Create your first application

Once you have created the developer account and you have your
Developer Enterprise set up, you can start creating applications.

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
visible until you publish your app. We recommend to choose a name that
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

[console]: https://cloud.app.box.com/developers/console
[auth]: g://authentication/select
[oauth2]: g://authentication/oauth2
[app-center]: g://applications/app-center/
[add-users]: https://support.box.com/hc/en-us/articles/360043694594-Add-Users
