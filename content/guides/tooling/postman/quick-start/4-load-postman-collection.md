---
type: quick-start
hide_in_page_nav: true
---

<!-- alex disable postman-postwoman -->

# Load Postman Collection

<LoggedIn>
  Now that you are logged in we can load the **Box Postman Collection** into the
  **Postman App** that we installed previously. When we load the Postman
  Collection we will also automatically load your API credentials as a Postman
  environment.

  ## Loading a collection and environment

  By clicking the button below you will load the **Box Postman
  Collection** into your Postman application. In the same click it will also
  load your **Access Token** into a Postman environment.

  <Trigger option='postman_collection_downloaded' value='true'>
    <Postman id='87493998b8bbe053a8f9' />
  </Trigger>
</LoggedIn>

<LoggedIn id='postman_credentials'>
  Now that you are logged in we can load the **Box Postman Collection** into the
  **Postman App** that we installed previously. When we load the Postman
  Collection we will also automatically load your API credentials as a Postman
  environment.

  ## Loading a collection and environment

  By clicking the button below you will load the **Box Postman
  Collection** into your Postman application. In the same click it will also
  load your **Access Token**, **Refresh Token**, **Client ID** and **Client
  Secret** into a Postman environment.

  <Trigger option='postman_collection_downloaded' value='true'>
    <Postman id='87493998b8bbe053a8f9' env='postman_credentials' />
  </Trigger>
</LoggedIn>

<Choice option='postman_collection_downloaded' value='true' color='none'>

## Exploring the collection

When you clicked the button above it would have asked you to import the
collection into the Postman application. Once imported, the collection should
appear within the app in the left-hand sidebar.

<ImageFrame border center shadow>
  ![Box collection in Postman](./collection-in-postman.png)
</ImageFrame>

You can click on the collection to open it up and explore our over 170 API
endpoints.

## Summary

* You loaded the Postman collection into Postman
* You additionally loaded your Box Postman environment into Postman

</Choice>

<Choice option='postman.app_type' value='use_box' color='none'>
  <LoggedIn reverse>
    <Message danger>
      # Incomplete previous step

      Please complete the previous steps to select and log in to a **Box App**.
    </Message>
  </LoggedIn>
</Choice>

<Choice option='postman.app_type' value='use_own' color='none'>
  <LoggedIn id='postman_credentials' reverse>
    <Message danger>
      # Incomplete previous step

      Please complete the previous steps to select and log in to a **Box App**.
    </Message>
  </LoggedIn>
</Choice>

<Choice option='postman.app_type' unset color='none'>
  <LoggedIn id='postman_credentials' reverse>
    <Message danger>
      # Incomplete previous step

      Please complete the previous steps to select and log in to a **Box App**.
    </Message>
  </LoggedIn>
</Choice>

<Observe option='postman_collection_downloaded' value='true'>
  <Next>I have imported the collection</Next>
</Observe>