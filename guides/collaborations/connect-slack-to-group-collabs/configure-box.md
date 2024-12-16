---
type: quick-start
hide_in_page_nav: true
category_id: collaborations
subcategory_id: collaborations/connect-slack-to-group-collabs
is_index: false
id: collaborations/connect-slack-to-group-collabs/configure-box
rank: 2
total_steps: 6
sibling_id: collaborations/connect-slack-to-group-collabs
parent_id: collaborations/connect-slack-to-group-collabs
next_page_id: collaborations/connect-slack-to-group-collabs/scaffold-application-code
previous_page_id: collaborations/connect-slack-to-group-collabs/configure-slack
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/connect-slack-to-group-collabs/2-configure-box.md
---
# Configure Box

We will need to set up a Box application to manage Box groups and add
collaborators to files and folders in Box.

## Set up a Box app

<Grid columns='2'>

<Choose option='box.app_type' value='create_new' color='blue'>

# Create a new Box app

Create and configure a new Box JWT application to use for this integration.

</Choose>

<Choose option='box.app_type' value='use_own' color='blue'>

# Use an existing approved app

Use one of your existing admin-approved Box JWT applications from the Box
developer console.

</Choose>

</Grid>

<Choice option='box.app_type' value='create_new' color='none'>

# Create a new Box app

To create a new Box application that can be used to call the Box APIs, use
the following steps.

1. Go to the [Developer Console][devconsole]
2. Select **Create New App**
3. Select **Custom App** as the type of application to create, and click **Next**
4. Select **OAuth 2.0 with JWT** as the authentication method, and click **Next**
5. Give your Box app a unique name and click **Create App**
6. Go to the app's configuration by clicking **View Your App**.
7. Scroll down to **Application Access** and ensure that **Enterprise** is selected.
8. Scroll to the **Application Scopes** section of the same screen and ensure that at least the following scopes are enabled: **Read and write all files and folders stored in Box**, **Manage users**, and **Manage groups**.
9. Under **Advanced Features** ensure that **Perform Actions as Users** is enabled to perform actions on behalf of Box users.
10. At the top of the page click the button to **Save Changes**

<Message type='warning'>

# App approval

Once the application is created it will still need to be approved by an
enterprise admin before you will be able to make calls to the Box APIs.

Follow [this guide](g://authorization/custom-app-approval) to have the
application approved in your enterprise.

</Message>

</Choice>

<Choice option='box.app_type' value='use_own' color='none'>

# Use an Existing JWT Box application

If you have an existing JWT based Box application in your
[developer console][devconsole] that you would like to use, ensure that the
following options are set in the **Configuration** section of your
application.

* Authentication Method: Should be set to OAuth 2.0 with JWT (Server Authentication).
* Application Scopes: Set at least the following scopes.
    * Read and write all files and folders stored in Box
    * Manage users
    * Manage groups
* Advanced Features: Both options should be enabled to perform actions as users and generate user access tokens.

  <Message type='warning'>

# App approval

Once the application is updated it will need to be re-approved by an
enterprise admin before you will be able to make calls to any of the Box
APIs that need any of the new permissions.

Follow [this guide](g://authorization/custom-app-approval) to have the
application approved in your enterprise.

</Message>

</Choice>

## Download app configuration

To begin working with the Box SDKs used in this tutorial, you will need the
application configuration file from the **Configuration** page of your
application. This will include all information needed to verify your
application to start making API requests with the Box SDKs.

Within the **Add and Manage Public Keys** section of the **Configuration**
page, click to **Generate a Public/Private Keypair**. This will send you
through 2FA verification before downloading the configuration file for your
application.

Store that file as `boxConfig.json` in a location accessible by your
application.

## Summary

* You created a new, or are using an existing, Box app which is approved by an enterprise admin.
* You downloaded your application configuration file and stored it in a location accessible by your application.

<Observe option='box.app_type' value='use_own,create_new'>

<Next>

I downloaded my application configuration file

</Next>

</Observe>

[devconsole]: https://cloud.app.box.com/developers/console