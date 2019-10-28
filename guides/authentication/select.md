---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/authentication-types-and-security
cId: authentication
scId: null
id: authentication/select
isIndex: false
---

# Select Auth Method

The type of authorization your application can use depends on the type of
Box Application that you've configured in the developer console.

<CTA to="guide://applications/select">
  Learn how to select the application type for your app

</CTA>

## Available methods

The following authorization methods are available to each Box Application type.

<!-- markdownlint-disable line-length -->

| Box Application Type         | Supports OAuth 2.0? | JWT? | App Token? | Developer Token? |
| ---------------------------- | ------------------- | ---- | ---------- | ---------------- |
| [Custom App][custom-app]     | Yes                 | Yes  | Yes        | Yes              |
| [Custom Skill][custom-skill] | No                  | No   | No         | No               |
| Enterprise Integration       | Yes                 | Yes  | No         | Yes              |
| Partner Integration          | No                  | No   | Yes        | No               |

<!-- markdownlint-enable line-length -->

<Message warning>

Enterprise and Partner Integrations exist for legacy purposes. Please use
Custom Apps instead and use the relevant authentication method where needed.

</Message>

<Message>

When you are creating a [Custom Skill][custom-skill] or Partner Integration
application there is no need to select a authentication method as there is no
choice to be made.

In the case of Custom Skills, there isn't even a need to set up anything further
as every Skills Event-payload will include an Access Token that can be used to
make the API calls.

</Message>

### Client-side OAuth 2.0

Client-side OAuth 2.0 is only available to [Custom Apps][custom-app] and
Enterprise Integrations. It requires the application to redirect a user to the
Box website to grant the application's access to their data.

<ImageFrame center width="400" shadow border>

  ![Box OAuth 2.0 approval](./oauth2-grant.png)

</ImageFrame>

<Message>

  # When to use OAuth 2.0?

Client-side authentication is the ideal authentication method for apps that:

- Work with users that already have existing Box accounts
- Want or require users to know that they are using Box
- Want to store data within the user's Box account and not within the the
  application's Box account

</Message>

<CTA to="guide://authentication/oauth2">
  Learn about client-side authentication with OAuth 2.0

</CTA>

### Server-side JWT

Server-side authentication using JSON Web Tokens (JWT) is only available to
[Custom Apps][custom-app] and Enterprise Integrations. It does not involve a
user into the authorization flow and as such can be used to act on behalf of any
user in an enterprise. JWT uses a public/private key pair verify the
application's permissions.

<ImageFrame center shadow border>

![Box JWT flow](./jwt-flow.png)

</ImageFrame>

<Message>

  # When to use JWT?

Server-side authentication with JWT is the ideal authentication method for apps that:

- Work with users that don't have a Box account
- Want to use their own identity system
- Don't want users to have to know that they are using Box
- Want to store data within the application's Box account and not within the the
  user's Box account

</Message>

<CTA to="guide://authentication/jwt">
  Learn about server-side authentication with JWT

</CTA>

### Server-side App Tokens

A server-side App Token is an authentication method where the application only
has access to read and write data to its own account. This is mainly used by Box
View applications. By using this authentication method there is no need to
authorize a user as the application is automatically authenticated as the
Service Account that belongs to that application.

<Message>

  # When to use App Tokens?

Server-side authentication with App Tokens is the ideal authentication method
for apps that:

- Work in an environment that either has no user model, or has users that don't
  have Box accounts
- Want to use their own identity system
- Don't want users to have to know that they are using Box
- Want to store data in the application's Service Account and not a user's account

</Message>

<CTA to="guide://authentication/app-token">
  Learn about server-side authentication with App Tokens

</CTA>

### Developer Token

A server-side Developer Token is a short-lived authentication available to
developers creating applications that use OAuth 2.0. It is an Access
Token that is only valid for 1 hour, and authenticates as the developer who
created the token.

<Message>

  # When to use a Developer Token?

A Developer Token is the ideal authentication method during development and
testing. It is ideal in situations where the developer:

- Wants to quickly test an API calls
- Does not want to authenticate as a different user
- Does not need the token for more than an hour
- Does not intend to ship the code to production

</Message>

## Comparison

The following is a quick overview of the key difference between client-side and
server-side authentication.

<!-- markdownlint-disable line-length -->

|                                   | OAuth 2.0 | JWT | App Tokens | Developer Token |
| --------------------------------- | --------- | --- | ---------- | --------------- |
| Requires user involvement?        | Yes       | No  | No         | Yes             |
| Requires admin approval?          | No        | Yes | Yes        | No              |
| Can act on behalf of other users? | Yes       | Yes | No         | Yes             |
| Do users see Box?                 | Yes       | No  | No         | Yes             |
| Can create App Users?             | No        | Yes | No         | Yes             |
| Can be used in production?        | Yes       | Yes | Yes        | No              |

<!-- markdownlint-enable line-length -->

<Message>

An Access Token is tied to a specific Box user and the way the token has been
obtained determines who that user is.

For example, when using client-side authentication the token represents the
user who granted access to their account, while while when using server-side
authentication the token defaults to a Service Account.

</Message>

[custom-app]: guide://applications/custom-apps
[custom-skill]: guide://applications/custom-skills
