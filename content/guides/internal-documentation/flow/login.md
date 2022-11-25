---
hide: true
rank: 6
---

<!-- does not need translation -->

# Log in

Sometimes a user needs to be logged in. A log in button can be shown to allow a
user to log in to the default Box app.

```html
<LoginButton />
```

<LoginButton></LoginButton>

## Custom Log-in button

By default, the `LoginButton` uses the API credentials for the default Box app.
It can though be configured to use the `client_id` and `client_secret` the user
configured earlier using a `Store`.

```html
<LoginButton id='a_custom_id' />
```

In this case, it will use the following client ID and secret from local storage:

* `com.box.developer.a_custom_id.client_id` 
* `com.box.developer.a_custom_id.client_secret`

After log in, the user's access token, refresh token, name, and expiry date will
be saved in an object in `com.box.developer.a_custom_id`.

<Message>
  A `Store` can be used to collect the custom client ID and secret.
</Message>

## Show when logged in or out

A block can be shown or hidden based on whether the user is logged in or not.

```html
<LoggedIn>
  This is shown when the user is logged in.
</LoggedIn>

<LoggedIn reverse>
  This is shown when the user is logged out.
</LoggedIn>
```

If the log in was performed with a custom set of credentials, the ID of the
credentials must be passed in.

```html
<LoginButton id='a_custom_id' />

<LoggedIn id='a_custom_id'>
  This is shown when the user is logged in.
</LoggedIn>

<LoggedIn id='a_custom_id' reverse>
  This is shown when the user is logged out.
</LoggedIn>
```

## Resetting values

A reset button can be shown to allow a user to clear their credentials. 

```html
<ResetButton id='credentials'>
  Reset all credentials
</ResetButton>
```

<H>
<ResetButton id='credentials'>
  Reset all credentials
</ResetButton>
</H>

If a custom ID was provided, make sure to pass in that ID.

```html
<ResetButton id='a_custom_id'>
  Reset all credentials
</ResetButton>
```
