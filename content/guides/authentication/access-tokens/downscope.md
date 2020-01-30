---
rank: 7
related_endpoints:
  - post_oauth2_token
related_resources:
  - access_token
related_guides:
  - api-calls/permissions-and-errors/scopes
required_guides:
  - authentication/access-tokens
alias_paths:
  - /docs/downscope-tokens
---

# Downscope a Token

Downscoping is a way to exchange an existing Access Token for a new one that is
more restricted.

## Reasons to downscope

An application might need to share the Access Token with an
environment that it does not fully control. A common example of this would be
when using Box UI Elements in a web browser.

When an application needs to pass an Access Token to the browser there is a
potential security risk that needs to be resolved. In order to limit this risk the
Access Token can be exchanged for a new token with much stricter permissions.

## High-level overview

A downscoped token is a token that has fewer permissions (scopes) than the
original token, as well as the optional additional restriction to only allow
access to a specific file.

<ImageFrame border>
  ![Downscoping overview](./downscope.png)
</ImageFrame>

The new token takes the permissions of the original token and restricts them
to the tokens passed in, as well as the resource provided.

## Downscoping in practice

To downscope a token, pass the `POST /oauth2/token` endpoint an existing Access
Token, a list of scopes, as well as an optional file URL to restrict the token to.

<Samples id="post_oauth2_token" variant="downscope_token" />

<!-- markdownlint-disable line-length -->

| Parameter            | Description                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subject_token`      | The original token to downscope. This can be a token that was acquired through OAuth 2.0, JWT token exchange, or as an App Token.                                                                     |
| `scope`              | A space-delimited list of [scopes][scopes] to limit the new token to. Any valid scope for the application can be used, though a special set of [scopes for Box UI elements][scopes_down] is available |
| `resource`           | An optional full URL path to the file the token should be restricted to.                                                                                                                              |
| `subject_token_type` | Always set to `urn:ietf:params:oauth:token-type:access_token`                                                                                                                                         |
| `grant_type`         | Always set to `urn:ietf:params:oauth:grant-type:token-exchange`                                                                                                                                       |

<!-- markdownlint-enable line-length -->

## Downscoped Access Token Object

A downscoped Access Token returned by the `POST /oauth2/token` endpoint contains
extra information on the specific restrictions.

```json
{
  "access_token": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  "expires_in": 3600,
  "token_type": "bearer",
  "restricted_to": [
    {
      "scope": "item_download",
      "object": {
        "id": 12345,
        "etag": 1,
        "type": "file",
        "sequence_id": 3,
        "name": "Contract.pdf"
      }
    }
  ],
  "refresh_token": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token"
}
```

Most importantly here is the list of `restricted_to` entries that will contain
each combination of `object` and `scope` that the new token has the permissions for.

[scopes]: guide://api-calls/permissions-and-errors/scopes
[scopes_down]: guide://api-calls/permissions-and-errors/scopes/#scopes-for-downscoping
