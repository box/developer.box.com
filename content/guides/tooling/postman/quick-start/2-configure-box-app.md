---
type: quick-start
hide_in_page_nav: true
related_guides:
  - applications/custom-apps
---

<!-- alex disable postman-postwoman -->

# Configure a Box App

<Message> 
  # This is part 2 of a multi-part guide

  We highly recommend starting at the beginning of this quick start guide.
</Message>

The next step is to create and configure a Box app for usage with the Postman
app.

A Box app is a set of configurations for accessing Box through in a programmatic
way. For this quick start we provide two different ways to configure your
Postman app.

## Select an app to configure

<Grid columns='2'>
  <Choose option='postman.app_type' value='use_own' color='blue'>
    # Configure your own Box app

    With this method your Postman app will be
    able to make API calls to Box **indefinitely**
    as long as you use the app at least once
    every 60 days.

    This method requires more initial setup, yet less
    ongoing maintenance to keep using.

  </Choose>

  <Choose option='postman.app_type' value='use_box' color='red'>
    # Use our preconfigured Box app

    With this method your Postman app will be
    able to make API calls to Box for **1 hour**
    before you need to go through this guide again.

    This method requires less initial setup but requires
    more work to keep working.

  </Choose>
</Grid>

<Choice option='postman.app_type' value='use_own' color='blue'>
  # Create a Box app

  You've selected to configure your own Box app. For this step we will create a
  new Box app in the Box developer console.
  
  If you do not have a Box account yet you can sign up for a [free
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
  1. At the top of the page click the button to **Save Changes**
</Choice>

<Choice option='postman.app_type' value='use_own' color='blue' last>
  # Copy your API credentials

  Continuing from the previous steps, scroll to the **OAuth 2.0 Credentials**
  section of your Box app and copy the **Client ID** and **Client Secret** into
  the input fields below.

  <Store 
    id='postman_credentials.client_id' 
    placeholder='zECq2EkYBjZ...'
    pattern='\w{32}'>
    Client ID
  </Store>
  
  <Store 
    id='postman_credentials.client_secret' 
    placeholder='913td9hr6jo...'
    pattern='\w{32}'>
    Client Secret
  </Store>

  We will use these credentials to authenticate your application in the next step.
</Choice>

## Summary

* You either selected to use your own **Box App**
  * Signed up for a developer account (Optional)
  * Accessed the Developer Console
  * Created a **Custom App** that uses **OAuth 2.0** authentication
  * Set up the **redirect URL** for the application
  * Copied the **Client ID** and **Client Secret** onto this page
* Or selected to use our **preconfigured Box App**

<Observe option='postman.app_type' value='use_box,use_own'>
  <Next>I have configured a Box app</Next>
</Observe>

[devconsole]: https://account.box.com/developers/services
[signup]: https://account.box.com/signup/n/developer
