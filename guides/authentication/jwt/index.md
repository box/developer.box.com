---
rank: 2
related_endpoints: []
related_guides:
  - applications/select
  - authentication/user-types
  - authentication/select
required_guides:
  - authentication/select
related_resources: []
alias_paths: []
cId: authentication
scId: authentication/jwt
id: authentication/jwt
isIndex: true
---

# JWT

Server-side authentication using JWT one of the most powerful ways to
authenticate to the Box API. JWT is an [open standard](https://jwt.io/)
designed to allow simple and powerful server-to-server authentication.

<ImageFrame border>

![The JWT flow](./jwt-flow.png)

</ImageFrame>

Server-side authentication using JSON Web Tokens (JWT) is only available to
Custom Apps and Enterprise Integrations. It does not involve a user into the
authorization flow and as such can be used to act on behalf of any user in an
enterprise. JWT uses a public/private key pair verify the application's
permissions.

## When to use JWT

Server-side authentication with JWT is the ideal authentication method for apps
that:

- Work with users that don't have a Box account
- Want to use their own identity system
- Don't want users to have to know that they are using Box
- Want to store data within the application's Box account and not within the the
  user's Box account
