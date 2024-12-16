---
type: quick-start
hide_in_page_nav: true
category_id: cli
subcategory_id: cli/quick-start
is_index: false
id: cli/quick-start/create-oauth-app
rank: 1
total_steps: 6
sibling_id: cli/quick-start
parent_id: cli/quick-start
next_page_id: cli/quick-start/install-and-configure
previous_page_id: cli/quick-start
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/quick-start/1-create-oauth-app.md
---
# Configure a Box App

To use the **Box CLI** you will need to create a **Box App**. A Box App is
an application that can be used for making API calls. When
using the Box CLI you can choose to either set up your own Box App or use
our preconfigured one. The key benefit of setting up your own Box App
is that you won't need to go through login every hour, but it does require a few
extra steps to set up.

## Select a Box App to use

<Grid columns='2'>

<Choose option='cli.app_type' value='create_new' color='blue'>

# Create new Box App

We can set up a Box App for you right here from the documentation. With a
few clicks you will be ready to go!

</Choose>

<Choose option='cli.app_type' value='use_existing' color='red'>

# Use existing Box App

If you've already created a Box App before that you want to use, then we
can use the credentials for that application.

</Choose>

</Grid>

<Choice option='cli.app_type' value='create_new,clicked' color='blue'>

# Create a Box App

To use your own **Box App** you will need to create a
new Box App in the **Box Developer Console**. Click the button below and we
will set it up for you. At the end you will have a **Client ID** and
**Client Secret**.

<Trigger option="cli.app_type" value="clicked">

<AppButton id='cli' name='Box CLI' scopes='root_readonly,root_readwrite,manage_managed_users,manage_app_users,manage_groups,manage_webhook,manage_enterprise_properties,manage_data_retention,item_execute_integration' can_act_as_user authentication_type='auth_code_grant' redirect_url='http://localhost:3000/callback' cors_origins=''>

Create an app

</AppButton>

</Trigger>

<Observe option="cli.app_type" value="clicked">

We will use these credentials to authenticate the Box CLI in the next
step.

</Observe>

</Choice>

<Choice option='cli.app_type' value='use_existing' color='red'>

# Use existing Box App

If you have already created a Box App before you can use that as well. We
require a few settings to be set for this to work.

1. Go to the [Developer Console][devconsole]
2. Select your application
3. Go to the application’s **Configuration** section
4. Make sure your application uses **Standard OAuth 2.0** as the authentication method
5. Scroll down to the **OAuth 2.0 redirect URI** configuration and set the **Redirect URI** to the value `http://localhost:3000/callback`.
6. Scroll down to the **Application Scopes** section to select your desired [permissions][scopes]. **Your application must have at least one or more** **of the following scopes:** read all files and folders stored in Box, read and write all files and folders in Box.
7. At the top of the page click the button to **Save Changes**

Next, copy the values for the Client ID and Client Secret into these 2 fields.

<Store id='cli_credentials.client_id' placeholder='zECq2EkYBjZ...' pattern='\w{32}'>

Client ID

</Store>

<Store id='cli_credentials.client_secret' placeholder='913td9hr6jo...' pattern='\w{32}'>

Client Secret

</Store>

We will use these credentials to authenticate the Box CLI in the next
step.

</Choice>

<Choice option='cli.app_type' value='create_new,use_existing,clicked' color='none'>

<Message danger>

# Security notice

Your API credentials are now stored in the browser cache. We highly
recommend clearing out this storage by clicking the **Reset** button later in
this guide.

</Message>

</Choice>

<Choice option='cli.app_type' value='create_new,use_existing,clicked' color='none'>

## Summary

* You either selected to create a new **Box App**
    * Signed up for a developer account (Optional)
    * Had us create a **Custom App** for you that uses **OAuth 2.0** authentication
    * Had us set up the **redirect URL** for the application
* Or you selected to use an **existing Box App**

</Choice>

<Observe option='cli.app_type' value='create_new,use_existing,clicked'>

<Next>

I have configured a Box app

</Next>

</Observe>

[devconsole]: https://cloud.app.box.com/developers/console
[signup]: https://account.box.com/signup/n/developer
[scopes]: g://api-calls/permissions-and-errors/scopes