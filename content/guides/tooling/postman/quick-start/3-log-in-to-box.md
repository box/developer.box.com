---
type: quick-start
---

# Log in to Box

<Message> 
  # This is part 3 of a multi-part guide

  We highly recommend starting at the beginning of this quick start guide.
</Message>

## API Credentials

<Store disabled id='postman.client_id'>
  Client ID
</Store>

<Store disabled obscured id='postman.client_secret'>
  Client Secret
</Store>

## Log into your Box app

<Trigger event='login'>
  <LoginButton client='postman' />
</Trigger>

<LoggedIn>
  ## Your access Token
  
  <Store disabled id='credentials' field='access_token'>
    Access Token
  </Store>

  <Store disabled id='credentials' field='refresh_token'>
    Refresh Token
  </Store>

  <Store disabled id='credentials' field='expires_at'>
    Expires At
  </Store>

  <Store disabled id='credentials' field='name'>
    Name
  </Store>
</LoggedIn>

<Observe event='login'>
  <Next>I have logged in to Box</Next>
</Observe>