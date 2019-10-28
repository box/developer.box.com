---
rank: 4
related_endpoints: []
related_resources: []
related_guides:
  - authentication/select
required_guides:
  - applications/select
alias_paths:
  - /docs/authenticate-with-developer-token
---

# Developer Tokens

A Developer Token is an Access Token available to developers during development
and testing. These tokens are short lived as they expire after 60 minutes and
can not be refreshed automatically.

Developer tokens are **always authenticated as the developer's user account**,
not any other user. This is different from most of the other authentication
methods.

## Create Developer Token

To create a Developer Token for an application:

- Go to the Box [developer console][devconsole] and select the application to
  create a Developer Token for.
- From the sidebar select "Configuration".
- In the "Developer Token" section select "Generate Developer Token".

## Using Developer Token

A Developer Token can be used like any Access Token in the `Authorization`
header of an API call.

```curl
curl https://api.box.com/2.0/users/me \
  -H "Authorization: Bearer [DEVELOPER_TOKEN]"
```

<Message warning>
  Please be aware that the developer token is associated to the user (developer)
  that was logged in to the developer console when the token was created.
</Message>

Most of our SDKs can be initialized with a Developer Token as well to create a
basic API client.

<Samples id='x_auth' variant='init_with_dev_token' />

<Message type='danger'>
  # Developer tokens should not be used in production environments

  The Developer Token should only be used for development and testing purposes. As
  tokens automatically expire and can not be refreshed automatically they are of
  limited use in a production environment.
</Message>

[devconsole]: https://app.box.com/developers/console
