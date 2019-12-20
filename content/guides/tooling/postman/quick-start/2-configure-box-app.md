---
type: quick-start
---

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
  <Choose option='own' color='blue'>
    # Configure your own Box app

    With this method your Postman app will be
    able to make API calls to Box **indefinitely**
    as long as you use the app at least once
    every 60 days.

    This method requires more initial setup, yet less
    ongoing maintenance to keep using.
  </Choose>

  <Choose option='box' color='red'>
    # Use our preconfigured Box app

    With this method your Postman app will be
    able to make API calls to Box for **1 hour**
    before you need to go through this guide again.

    This method requires less initial setup but requires
    more work to keep working.
  </Choose>
</Grid>

<Choice option='own' color='blue'>
  # Create a Box app

  You've selected to configure your own Box app. For this step we will create a
  new Box app in the Box developer console.
  
  If you do not have a Box account yet you can sign up for a [free
  developer][signup] account for testing purposes.

  1. Go to the [Developer Console][devconsole]
  1. Select **Create new app**
  1. Select **Custom app** as the type of application to create, and click **Next**
  1. Select **Standard OAuth 2.0** as the authentication method, and click
     **Next**
  1. Give your Box app a unique name and click **Create app**
  1. Go to the app's configuration by clicking **View your app**.
  1. Scroll down to the **OAuth 2.0 redirect URI** configuration and set the
     **Redirect URI** to the value `https://developer.box.com`.
  1. At the top of the page click the button to **Save changes**
</Choice>

<Choice option='own' color='blue'>
  # Copy your API credentials

  With the Box App created and configured the last step remaining is to copy
  your app's client ID and secret and provide it to us here.

  Continuing from the previous steps, scroll to the **OAuth 2.0 credentials**
  section and copy the **Client ID** and **Client Secret** into the inputs
  below.

  <Store 
    id='custom_app_client_id' 
    placeholder='zECq2EkYBjZ...'
    pattern='\w{32}'>
    Client ID
  </Store>
  
  <Store 
    id='custom_app_client_secret' 
    placeholder='913td9hr6jo...'
    pattern='\w{32}'>
    Client Secret
  </Store>
</Choice>

<Observe option='box,own'>
  <Next>I have configured a Box app</Next>
</Observe>

[devconsole]: https://account.box.com/developers/services
[signup]: https://account.box.com/signup/n/developer
