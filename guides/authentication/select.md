---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/authentication-types-and-security
category_id: authentication
subcategory_id: null
is_index: false
id: authentication/select
type: guide
total_steps: 3
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/best-practices
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/select.md
---
# Select Auth Method

The type of authorization your application can use depends on the type of
Box Application that you've configured in the developer console.

<CTA to="guide://applications/select">

Learn how to select the application type for your app

</CTA>

The following authorization methods are available to each Box application type.

<!-- markdownlint-disable line-length -->

| Box Application Type         | Supports OAuth 2.0? | JWT? | Client Credentials? | App Token? |
| ---------------------------- | ------------------- | ---- | ------------------- | ---------- |
| [Custom App][custom-app]     | Yes                 | Yes  | Yes                 | No         |
| [Limited Access App][la-app] | No                  | Yes  | No                  | Yes        |
| [Custom Skill][custom-skill] | No                  | No   | No                  | No         |

<!-- markdownlint-enable line-length -->

## Client-side

### OAuth 2.0

OAuth 2.0 requires the application to redirect end-users to their browser to
login to Box and authorize the application to take actions on their
behalf.

<ImageFrame center width="400" shadow border>

![Box OAuth 2.0 approval](./oauth2-grant.png)

</ImageFrame>

<Message>

# When to use OAuth 2.0?

Client-side authentication is the ideal authentication method for apps that:

- work with users who have existing Box accounts
- use Box for identity management, so users know they are using Box
- store data within each user account vs. within an application's Service
  Account

</Message>

<CTA to="guide://authentication/oauth2">

Learn about client-side authentication with OAuth 2.0

</CTA>

## Server-side

### JWT

Server-side authentication using JSON Web Tokens (JWT) does not require end-user
interaction and, if granted the proper privileges, can be used to act on behalf
of any user in an enterprise. Identity is validated using a JWT assertion and
public/private keypair.

<ImageFrame center shadow border>

![Box JWT flow](./jwt-flow.png)

</ImageFrame>

<Message>

# When to use JWT?

Server-side authentication with JWT is the ideal authentication method for apps
that:

- work with users without Box accounts
- use their own identity system
- do not want users to know they are using Box
- store data within the application's Service Account and not a user's account

</Message>

<CTA to="guide://authentication/jwt">

Learn about server-side authentication with JWT

</CTA>

### Client Credentials Grant

Server-side authentication using Client Credentials Grant does not require
end-user interaction and, if granted the proper privileges, can be used to act
on behalf of any user in an enterprise. Identity is validated using the
application's client ID and client secret.

<Message>

# When to use a Client Credentials Grant?

Server-side authentication with Client Credentials Grant is the ideal
authentication method for apps that:

- work with users without Box accounts
- use their own identity management system
- do not want users to know they are using Box
- store data within the application's Service Account and not a user's account

</Message>

<CTA to="guide://authentication/client-credentials">

Learn about server-side authentication with Client Credentials Grant

</CTA>

### App Token

A server-side App Token is an authentication method where the application only
has access to read and write data to its own account. This is mainly used by Box
View applications. By using this authentication method there is no need to
authorize a user as the application is automatically authenticated as the
application's Service Account.

<Message>

# When to use App Tokens?

Server-side authentication with App Tokens is the ideal authentication method
for apps that:

- work in an environment that either has no user model, or has users without Box
  accounts
- use their own identity management system
- do not want users to know they are using Box
- store data within the application's Service Account and not a user's account

</Message>

<CTA to="guide://authentication/app-token">

Learn about server-side authentication with App Tokens

</CTA>

## Comparison

The following is a quick overview of the key difference between client-side and
server-side authentication.

<!-- markdownlint-disable line-length -->

|                                   | OAuth 2.0 | JWT | Client Credentials | App Tokens |
| --------------------------------- | --------- | --- | ------------------ | ---------- |
| Requires user involvement?        | Yes       | No  | No                 | No         |
| Requires admin approval?          | No        | Yes | Yes                | Yes        |
| Can act on behalf of other users? | Yes       | Yes | Yes                | No         |
| Do users see Box?                 | Yes       | No  | No                 | No         |
| Can create App Users?             | No        | Yes | Yes                | No         |

<!-- markdownlint-enable line-length -->

<Message>

An Access Token is tied to a specific Box user and the way the token has been
obtained determines who that user is.

For example, when using client-side authentication the token represents the
user who granted access to their account, while while when using server-side
authentication the token defaults to the application's Service Account.

</Message>

[custom-app]: g://applications/custom-apps
[custom-skill]: g://applications/custom-skills
[la-app]: g://applications/limited-access-apps