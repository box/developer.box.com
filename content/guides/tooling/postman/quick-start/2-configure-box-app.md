---
type: quick-start
hide_in_page_nav: true
related_guides:
  - applications/custom-apps
---

<!-- alex disable postman-postwoman -->

# Configure a Box App

To use the **Postman Collection** the Postman application needs to authenticate
to the Box API using an **Access Token**. The simplest way to get an Access
Token is by logging into Box using a **Box App**.

A **Box App** is an application that can be used for making API calls. When
using the **Postman Collection** you can choose to either set up your own Box
App or use our preconfigured one. The key benefit of setting up your own Box App
is that you won't need to go through login every hour, but it does require a few
extra steps to set up.

## Select a Box App to use

<Grid columns='2'>
  <Choose option='postman.app_type' value='use_own' color='blue'>
    # Use your own Box app

    By using this method Postman will be
    able to make API calls to Box **indefinitely**
    as long as you use the app at least once
    **every 60 days**.

    This method requires a bit more initial setup, yet
    requires less maintenance, as it will allow Postman
    to keep your **Access Token** fresh indefinitely.
  </Choose>

  <Choose option='postman.app_type' value='use_box' color='red'>
    # Use our preconfigured Box app

    By using this method Postman will be
    able to make API calls to Box for **1 hour**
    before you need to go through this guide again.

    This method requires less initial setup but is not able
    to automatically refresh the **Access Token**. You will
    need to come back to this guide every hour to refresh it.
  </Choose>
</Grid>

<Choice option='postman.app_type' value='use_own' color='blue'>
  # Create a Box app

  To use your own **Box App** you will need to create a
  new Box App in the **Box Developer Console**.
  
  If you do not have a Box account you can sign up for a [free
  developer][signup] account for testing purposes.

  1. Go to the [Developer Console][devconsole]
  1. Select **Create New App**
  1. Select **Custom App** as the type of application to create, and click **Next**
  1. Select **Standard OAuth 2.0** as the authentication method, and click
     **Next**
  1. Give your Box app a unique name and click **Create App**
  1. Go to the app's configuration by clicking **View Your App**.
  1. Scroll down to the **OAuth 2.0 redirect URI** configuration and set the
     **Redirect URI** to the value `https://developer.box.com/auth/callback`.
  1. Optionally, scroll to the **Application Scopes** section of the same screen
     and select any additional permissions you want to enable for this application.
  1. At the top of the page click the button to **Save Changes**
</Choice>

<Choice option='postman.app_type' value='use_own' color='blue'>
  # Copy API credentials

  Once you've created a Box app, scroll down to the **OAuth 2.0 Credentials**
  section of your **Box App** and copy the **Client ID** and **Client Secret** into
  the fields below.

  <Store id='postman_credentials.client_id' placeholder='zECq2EkYBjZ...' pattern='\w{32}'>
    Client ID
  </Store>
  
  <Store id='postman_credentials.client_secret' placeholder='913td9hr6jo...' pattern='\w{32}'>
    Client Secret
  </Store>

  We will use these credentials to authenticate your application in the next step.
</Choice>

<Choice option='postman.app_type' value='use_own' color='none'>

<Message danger>
  # Security notice

  Your API credentials are now stored in the browser cache. We highly
  recommend clearing out this storage by clicking the **Reset** button later in
  this guide.
</Message>

</Choice>

<Choice option='postman.app_type' value='use_box,use_own' color='none'>

## Summary

* You either selected to use your own **Box App** and
  * Signed up for a developer account (Optional)
  * Accessed the Developer Console
  * Created a **Custom App** that uses **OAuth 2.0** authentication
  * Set up the **redirect URL** for the application
  * Copied the **Client ID** and **Client Secret** onto this page
* Or selected to use our **preconfigured Box App**

</Choice>

<Observe option='postman.app_type' value='use_box,use_own'>
  <Next>I have configured a Box app</Next>
</Observe>

[devconsole]: https://account.box.com/developers/services
[signup]: https://account.box.com/signup/n/developer
