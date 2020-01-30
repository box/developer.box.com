---
type: quick-start
hide_in_page_nav: true
related_guides:
  - authentication/oauth2
related_endpoints:
  - get-authorize
  - post-oauth2-token
---

# Log in to Box

<Choice option='postman.app_type' value='use_own' color='none'>
  In the previous step you chose to use your own **Box App** for authenticating
  Postman.

  In this step, we will use the **Client ID** and **Client Secret** you provided
  to log you in and create an **Access Token** for your user.

  ## The reason to log in

  Currently you have provided us with the following information.

  <Store disabled inline id='postman_credentials.client_id'>
    Client ID
  </Store>

  <Store disabled inline obscured id='postman_credentials.client_secret'>
    Client Secret
  </Store>

  These **credentials** allow any program or piece of code to authenticate
  itself to the **Box API**. It represents the **Box App** you created but it
  doesn't tell the API who you, the **User**, are.

  To authenticate yourself you will need to send your browser to the Box login
  screen to authorize your **Box App** to access to your **User** account.

  Setting this flow up can be hard, which is why we have made this
  straightforward for you with the button below.

  ## Log into your Box app

  <Trigger option='postman.login' value='clicked'>
    <LoginButton id='postman_credentials' />
  </Trigger>

  <LoggedIn id='postman_credentials'>
    ## You are now logged in

    We just sent your browser to the [Box Authorization](e://get-authorize)
    screen where you granted your application access to your user account. Ater
    you granted it access the browser redirected back to this site with a `code`.

    We then [exchanged](e://post-oauth2-token) this short-lived `code` for a
    longer lived **Access Token** and **Refresh Token**. These tokens represent
    you, the **User**.

    <Store disabled inline id='postman_credentials' field='name'>
      Your name
    </Store>

    <Store disabled inline obscured id='postman_credentials' field='access_token'>
      Access Token
    </Store>

    <Store disabled inline obscured id='postman_credentials' field='refresh_token'>
      Refresh Token
    </Store>

    <Message danger>
      # Security notice

      Your API credentials are now stored in the browser cache. We highly
      recommend clearing out this storage by clicking the **Reset** button
      later in this guide.
    </Message>
  </LoggedIn>
</Choice>

<Choice option='postman.app_type' value='use_box' color='none'>
  In the previous step you chose to use our preconfigured **Box App**.

  In this step, we will use this app to authenticate you, the **User**. Because
  this application is owned by us, you will not be able to see the app's
  **Client ID** and **Client Secret** and you will need to come back to this
  page every hour to re-authenticate your app.

  ## The reason to log in

  Currently we have no idea who you, the **User are** and therefore we can't
  authenticate you when making API calls to the Box API. To authenticate
  yourself you will need to send your browser to the Box login screen to
  authorize our **Box App** to access to your **User** account.

  Setting this flow up can be hard, which is why we have made this
  straightforward for you with the button below.

  ## Log into your Box app

  <Trigger option='postman.login' value='clicked'>
    <LoginButton />
  </Trigger>

  <LoggedIn>
    ## You are now logged in

    We just sent your browser to the [Box Authorization](e://get-authorize)
    screen where you granted our application access to your user account. Ater
    you granted it access the browser redirected back to this site with a `code`.

    We then [exchanged](e://post-oauth2-token) this short-lived `code` for a
    longer lived **Access Token** and **Refresh Token**. These tokens represent
    you, the **User**.

    <Store disabled inline id='credentials' field='name'>
      Your name
    </Store>

    <Store disabled inline obscured id='credentials' field='access_token'>
      Access Token
    </Store>

    <Store disabled inline obscured id='credentials' field='refresh_token'>
      Refresh Token
    </Store>

    <Message danger>
      # Security notice

      Your API credentials are now stored in the browser cache. We highly
      recommend clearing out this storage by clicking the **Reset** button
      later in this guide.
    </Message>
  </LoggedIn>
</Choice>

<Choice option='postman.app_type' unset color='none'>
  <Message danger>
    # Incomplete previous step

    Please complete the previous step to select the type of **Box App** you want
    to use.
  </Message>
</Choice>

<Choice option='postman.app_type' value='use_box,use_own' color='none'>

## Summary

* You logged into your **Box account** using your own **Box App** or our
  preconfigured app
* You granted the **Box App** access to your account
* You are able to see your account's **Access Token** and **Refresh Token**
  on this page

</Choice>

<Observe option='postman.login' value='clicked'>
  <Next>I have logged in to Box</Next>
</Observe>