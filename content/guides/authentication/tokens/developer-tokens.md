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
  - /authentication/access-tokens/developer-tokens
---

# Developer Tokens

A Developer Token is an Access Token available to developers during development
and testing. These tokens are short lived, as they expire after 60 minutes, and
cannot be refreshed programmatically. 

## Create Developer Token

To create a Developer Token for an application:

- Navigate to the Box [Developer Console][devconsole] and select the application
  to create a Developer Token for.
- Select the **Configuration** tab.
- Under Developer Token, select **Generate Developer Token**.

<ImageFrame border center shadow>
  ![Generating a Developer Token](../images/developer-token.png)
</ImageFrame>

## Using Developer Token

A Developer Token can be used like any Access Token in the `Authorization`
header of an API call.

```curl
curl https://api.box.com/2.0/users/me \
  -H "authorization: Bearer [DEVELOPER_TOKEN]"
```

<Message warning>
  A Developer Token is associated with the the user that is logged in to the
  Developer Console when the token is generated.
</Message>

Our SDKs can be initialized with a Developer Token to create a basic API client.

<Samples id='x_auth' variant='init_with_dev_token' />

<Message type='danger'>
  # Developer tokens should not be used in production environments

  Developer Tokens should only be used for development or testing purposes.
</Message>

[devconsole]: https://app.box.com/developers/console
