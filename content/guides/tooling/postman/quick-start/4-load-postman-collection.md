---
type: quick-start
---

<!-- alex disable postman-postwoman -->

# Load Postman Collection

Next up it's time to load the **Box Postman Collection** into the **Postman
App** that we installed previously.

## Collection & Environment

<Choice option='postman.app_type' value='use_own' color='none' lazy>

  Clicking the button below download and load the **Box Postman Collection** 
  into the Postman app, together with the **Access Token**, **Refresh Token**, 
  **Client ID** and **Client Secret** you generated earlier.

  <Trigger option='postman.collection_downloaded' value='true'>
    <Postman id='62d85bbca8bf7bd5a48b' env='postman_credentials' />
  </Trigger>
</Choice>

<Choice option='postman.app_type' value='use_box' color='none' lazy>

  Clicking the button below download and load the **Box Postman Collection** 
  into the Postman app, together with the **Access Token**, **Refresh Token**,
  and **Expiry Date** you generated earlier.

  <Trigger option='postman.collection_downloaded' value='true'>
    <Postman id='62d85bbca8bf7bd5a48b' />
  </Trigger>

</Choice>

<Choice option='postman.collection_downloaded' value='true' color='none'>
  ## Selecting an Environment

</Choice>

<Observe option='postman.collection_downloaded' value='true'>
  <Next>I have loaded my tokens into Postman</Next>
</Observe>