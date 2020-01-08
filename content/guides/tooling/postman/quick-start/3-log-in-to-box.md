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

<Message>
  # This is part 3 of a multi-part guide

  We highly recommend starting at the beginning of this quick start guide.
</Message>

<Choice option='postman.app_type' value='use_own' color='none'>
  In the previous step you set up your own **Box App**. In this step, we will
  use the **Client ID** and **Client Secret** of your app to
  authenticate you, the **User**.

  ## Why login is needed

  Currently you have provided us with the following bits of information.

  <Store disabled inline id='postman_credentials.client_id'>
    Client ID
  </Store>

  <Store disabled inline obscured id='postman_credentials.client_secret'>
    Client Secret
  </Store>

  These **credentials** allow any program to authenticate itself to the **Box
  API** as the specific **Box App** you created, but they don't tell the API who
  you (the **User**) are.

  To authenticate yourself we will need to send your browser to the Box login
  screen to authorize your **Box App** access to your **User** account.

  ## Log into your Box app

  <Trigger option='postman.login' value='clicked'>
    <LoginButton id='postman_credentials' />
  </Trigger>

  <LoggedIn id='postman_credentials'>
    ## You are now logged in

    We just sent your browser to the **[Box Authorization](e://get-authorize)**
    screen where you granted our application access to your user account. Ater
    you granted us access, the browser redirected back to the
    `developer.box.com` site together with a `code`.

    We then [exchanged](e://post-oauth2-token) this short lived `code` for a
    longer lived **Access Token** and **Refresh Token**. These tokens represent
    you, the user with the following name, to the Box API when making API calls.

    <Store disabled inline id='postman_credentials' field='name'>
      Your name
    </Store>

    <Store disabled inline obscured id='postman_credentials' field='access_token'>
      Access Token
    </Store>

    <Store disabled inline obscured id='postman_credentials' field='refresh_token'>
      Refresh Token
    </Store>

    <Store disabled inline id='postman_credentials' field='expires_at'>
      Expires At
    </Store>
  </LoggedIn>
</Choice>

<Choice option='postman.app_type' value='use_box' color='none'>
  In the previous step you chose to use our preconfigured **Box App**. In this
  step, we will use the **Client ID** and **Client Secret** of your app to
  authenticate you, the **User**.

  ## Why login is needed

  Because this application is owned by us, you will not be able to see the app's
  **Client ID** and **Client Secret**. These **credentials** allow any
  application to authenticate itself to the **Box API** as the specific **Box
  App** we created, yet they don't tell the API who the authenticating **User**
  (you) is.

  To authenticate yourself we will need to send your browser to the Box login
  screen to authorize your **Box App** access to your **User** account.

  ## Log into your Box app

  <Trigger option='postman.login' value='clicked'>
    <LoginButton />
  </Trigger>

  <LoggedIn>
    ## You are now logged in

    We just sent your browser to the **[Box Authorization](e://get-authorize)**
    screen where you granted our application access to your user account. Ater
    you granted us access, the browser redirected back to the
    `developer.box.com` site together with a `code`.

    We then [exchanged](e://post-oauth2-token) this short lived `code` for a
    longer lived **Access Token** and **Refresh Token**. These tokens represent
    you, the user with the following name, to the Box API when making API calls.

    <Store disabled inline id='credentials' field='name'>
      Your name
    </Store>

    <Store disabled inline obscured id='credentials' field='access_token'>
      Access Token
    </Store>

    <Store disabled inline obscured id='credentials' field='refresh_token'>
      Refresh Token
    </Store>

    <Store disabled inline id='credentials' field='expires_at'>
      Expires At
    </Store>
  </LoggedIn>
</Choice>

## Summary

* You logged into your **Box account** using your own **Box App** or our
  preconfigured app
* You granted the **Box App** access to your account
* You are able to see your account's **Access Token** and **Refresh Token**
  on this page

<Observe option='postman.login' value='clicked'>
  <Next>I have logged in to Box</Next>
</Observe>