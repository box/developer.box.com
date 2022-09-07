---
rank: 3
related_endpoints: []
related_guides:
  - applications/select
  - getting-started/user-types
  - authentication/select
required_guides:
  - authentication/select
related_resources: []
alias_paths:
  - /docs/authenticate-with-jwt
category_id: authentication
subcategory_id: authentication/jwt
is_index: true
id: authentication/jwt
type: guide
total_steps: 5
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/jwt/user-access-tokens
previous_page_id: authentication/jwt/without-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/jwt/index.md
---
# JWT Auth

Server-side authentication using JSON Web Tokens (JWT) is the most common way to
authenticate to the Box API. JWT is an [open standard](https://jwt.io/)
designed to allow powerful server-to-server authentication.

<ImageFrame border>

![The JWT flow](./jwt-flow.png)

</ImageFrame>

Server-side authentication using JWT is only available to the Custom Application
[app type][app-type]. This authentication method does not require end-user
interaction and, if granted the proper privileges, can be used
to act on behalf of any user in an enterprise.

There are two ways you can verify an application's permissions:

- using a public and private key pair
- using a client id and client secret 
  ([Client Credentials Grant][cca])

To learn more about these options visit our guide on using
[JWT without SDKs][jwtnosdk].

Upon authorizing a JWT application in the Box Admin Console, a
[Service Account][sa] is automatically generated and is the default
Access Token used when authenticating. This is an admin-like user and why
applications leveraging JWT require explicit Box Admin approval before use.

## When to use JWT

Server-side authentication with JWT is the ideal authentication method for apps
that:

- Work with users that don't have a Box account
- Want to use their own identity system
- Don't want users to have to know that they are using Box
- Want to store data within the application's Box account and not within the the
  user's Box account

[app-type]: g://applications/select
[sa]: g://getting-started/user-types/service-account
[jwtnosdk]: g://authentication/jwt/without-sdk
[cca]: g://authentication/client-credentials