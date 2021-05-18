---
rank: 6
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
---

# Access Tokens

At the core of every Box API call is an Access Token. Access Tokens represent
the authenticated user and determine what content a user can successfully call.
Similar to using the Box Web App, you will only be able to successfully interact
with content the user associated with the Access Token either a collaborator on
or owns. This can be further restricted by [downscoping][ds] a token.

<Message warning>
  Application scopes, application access, enabled advanced settings, user
  permissions, and endpoint-specific restrictions all work together to determine
  which API calls will be successful. For example, even if a user has
  collaborator access to a folder, a call to get information about the folder
  will not be successful if the read scope is not granted to the application.
</Message>

## Application Types & Access Tokens

The following shows how each application type is expected to create an Access
Token.

<!-- markdownlint-disable line-length -->
| Box Application Type                  | How to get Access Token                          |
| ------------------------------------- | ------------------------------------------------ |
| Custom App + OAuth 2.0                | [Explicit user grant][oauth2-with-sdk]           |
| Custom App + JWT                      | [Exchange a JWT assertion][jwt-with-sdk]         |
| Custom App + Client Credentials Grant | [Use client ID and client secret][clientcred]    |
| Limited Access App + App Token        | Configure token in [Developer Console][devcon]   |
| Custom Skill                          | Access Token in event payload                    |
<!-- markdownlint-enable line-length -->

## Token Object

### OAuth 2.0 authentication

When an Access Token is requested using OAuth 2.0, an Access Token and Refresh
Token pair are returned. 

```curl
curl -X POST https://api.box.com/oauth2/token \
  -H "content-type: application/x-www-form-urlencoded" \
  -d '...'
```

```json
{
  "access_token": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  "expires_in": 3600,
  "token_type": "bearer",
  "refresh_token": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token"
}
```

Within this object we can see the token string (`access_token`), as well
as the Refresh Token (`refresh_token`) that can be used to request a new Access
Token when the current one expires (`expires_in`).

### Server authentication

When an Access Token is requested through using JWT or Client Credentials Grant,
only any Access Token is returned: 

```curl
curl --location --request POST ‘https://api.box.com/oauth2/token’ \
--header ‘Content-Type: application/x-www-form-urlencoded’ \
--data-urlencode '...'
```

```json
{
  "access_token": "DkXZmsjUKizvL2z0WiaLvMBeQ756XCGGf",
  "expires_in": 4123,
  "restricted_to": [],
  "issued_token_type": "bearer"
}
```

Within this object we can see the token string (`access_token`). 
Because a Refresh Token is not returned, you must request a new token when the
Access Token expires (`expires_in`).

[jwt-with-sdk]: g://authentication/jwt/with-sdk
[oauth2-with-sdk]: g://authentication/oauth2/with-sdk
[devcon]: https://app.box.com/developers/console
[clientcred]: g://authentication/client-credentials
[ds]: g://authentication/access-tokens/downscope