---
type: quick-start
hide_in_page_nav: true
---

# Configure Box

Once we have created a login experience with Okta we need to have a Box
application available that will permit us to use the Box APIs to search for and
create users that are associated with the Okta user account.

## Set up a Box app

<Grid columns='2'>
  <Choose option='box.app_type' value='create_new' color='blue'>
    # Create a new Box app

    Create and configure a new Box JWT application to start with a clean user list.
  </Choose>

  <Choose option='box.app_type' value='use_own' color='blue'>
    # Use an existing approved app

    Use one of your existing admin approved Box JWT applications from the Box developer
    console.
  </Choose>
</Grid>

<Choice option='box.app_type' value='create_new' color='none'>
  # Create a new Box app

  To create a new Box application that may be used to call the Box APIs, use
  the following steps.

  1. Go to the [Developer Console][devconsole]
  1. Select **Create New App**
  1. Select **Custom App** as the type of application to create, and click
     **Next**
  1. Select **OAuth 2.0 with JWT** as the authentication method, and click
     **Next**
  1. Give your Box app a unique name and click **Create App**
  1. Go to the app's configuration by clicking **View Your App**.
  1. Scroll to the **Application Scopes** section of the same screen
     and ensure that at least the following scopes are enabled:
     * Read and write all files and folders stored in Box
     * Manage Users
  1. At the top of the page click the button to **Save Changes**

  Once the application is created it will still need to be approved by an
  enterprise admin before you will be able to make calls to the Box APIs.

  Follow [this guide](g://applications/custom-apps/app-approval/) to have the
  application approved in your enterprise.
</Choice>

<Choice option='box.app_type' value='use_own' color='none'>
  # Use an Existing JWT Box application

  If you have an existing JWT based Box application in your
  [developer console][devconsole] that you
  would like to use, skip to the next step.
</Choice>

## Download Required Data

To begin working with the Box SDKs used in this tutorial, you will need the
application configuration file from the **Configuration** page of your
application. This will include all information needed to verify your
application to start making API requests with the Box SDKs.

Within the **Add and Manage Public Keys** section of the **Configuration**
page, click to **Generate a Public/Private Keypair**. This will send you
through 2FA verification before downloading the configuration file for your
application.

Store that file as `config.json` in a location accessible by your application.

## Summary

* You created a new, or are using an existing, Box app which is approved by an
 enterprise admin.
* You downloaded your application configuration file and stored it in a location
 accessible by your application.

<Observe option='box.app_type' value='use_own,create_new'>
  <Next>I downloaded my application configuration file</Next>
</Observe>

[devconsole]: https://cloud.app.box.com/developers/console