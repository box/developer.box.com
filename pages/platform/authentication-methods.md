---
centered: true
rank: 5
category_id: platform
subcategory_id: null
is_index: false
id: platform/authentication-methods
type: page
total_steps: 9
sibling_id: platform
parent_id: platform
next_page_id: platform/support
previous_page_id: platform/application-types
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/platform/authentication-methods.md
---
# Authentication Methods

Box offers a variety of authentication methods for application development,
each tailored to different use cases and application types. Regardless of the
authentication method used, underlying principles still apply. If a user does
not have access to content on the front end of the main Box web app, they will
not be able to access the content using the API, unless they are impersonating
another user. Some API endpoints require admin level privileges - like events.

The following authorization methods are available to each Box application type.

| Box Application Type         | Supports OAuth 2.0? | JWT? | Client Credentials? | App Token? |
| ---------------------------- | ------------------- | ---- | ------------------- | ---------- |
| Platform App     | Yes                 | Yes  | Yes                 | No         |
| Limited Access App | No                  | Yes  | No                  | Yes        |
| Custom Skill | No                  | No   | No                  | No         |

## OAuth 2.0

[OAuth 2.0][oauth] is a client-side authentication method, widely used for its
simplicity in authorizing users to Box API. It's an open standard that allows
users to grant applications access to their data in other applications. Similar
to how logging in to a website with Twitter, Facebook, or Google works, Box's
client-side authentication involves redirecting a user from an app to the Box
web app, where they log in and grant the app access to their data. For example,
We use this
auth type for users logging into our community forum.

<Message>

# When to use OAuth 2.0?

Client-side authentication is the ideal authentication method for apps that:

- Work with users who have existing Box accounts
- Use Box for identity management, so users know they are using Box
- Store data within each user account vs within an application's Service Account

</Message>

You can find a great Python OAuth 2.0 tutorial on [GitHub][python_oauth].

## JSON Web Token (JWT)

JSON Web Tokens (JWT) is the most common server-side authentication method for
the Box API. [JWT][jwt], an open standard, enables robust server-to-server
authentication. This method, exclusive to Platform Apps, does not involve
end-user interaction. It allows an app, if granted appropriate privileges, to
act on behalf of any user in an enterprise, thus facilitating powerful and
seamless integrations. Upon approval by an administrator, a JWT application
will get assigned a service account to make API calls as by default.

<Message>

# When to use JWT?

Server-side authentication with JWT is the ideal authentication method for apps
that:

- Work with users without Box accounts
- Use their own identity system
- Do not want users to know they are using Box
- Store data within the application's Service Account and not a user's account
- Want to manage public and private key pairs

</Message>

You can find a great Node JWT tutorial on [Medium][node_jwt].

## Client Credentials Grant (CCG)

The [Client Credentials Grant][ccg] approach is used for server authentication,
verifying an application's identity using a client ID and secret. It's a secure
way of identifying an app when obtaining an Access Token. This method is
particularly useful for scenarios requiring server-to-server interactions
without user involvement. Depending on the application's configuration, it can
authenticate as either the application's Service Account or as a Managed User.
Upon approval by an administrator, a CCG application
will get assigned a service account to make API calls as by default.

<Message>

# When to use CCG?

Server-side authentication with JWT is the ideal authentication method for apps
that:

- Work with users without Box accounts
- Use their own identity system
- Do not want users to know they are using Box
- Store data within the application's Service Account and not a user's account
- Do not want to manage public and private key pairs

</Message>

## App Token Auth

[App Token Auth][ata]is another server-side authentication option, utilizing
fixed,
long-lived Access Tokens that are restricted to the application's Service
Account. This method is ideal for applications leveraging Box View and is
designed for scenarios where the app only needs access to read and write data
to its own account. By using App Token Auth, there's no need for end-user
authorization, as the application automatically authenticates as the Service
Account associated with it. It also is restricted to a subset of
API [endpoints][app_ep].

<Message>

# When to use App Token Auth?

Server-side authentication with App Tokens is the ideal authentication method
for apps that:

- Work in an environment that either has no user model, or has users without Box accounts
- Use their own identity management system
- Do not want users to know they are using Box
- Store data within the application's Service Account and not a user's account

</Message>

## Box Skills

[Box Skills][skill] are a unique application type used for custom processing of
files uploaded to Box. It uses third-party Machine Learning services to extract
information from files and apply it as metadata. Authentication for Custom
Skills is streamlined with pre-authorized API credentials provided with each
Skill Event, though this limits the API access. Custom Skills don't require a
specific authentication type selection, focusing on simplicity and direct
integration with Box's capabilities.

<Message>

# When to use Box Skills?

Webhook based authentication with Box Skills is the ideal authentication
method for apps that:

- Work in third party machine learning environments
- Potentially want users to know they are using Box
- Achieve an end goal in tandem with other processes
- Only want to process files that trigger the Box Skill

</Message>

You can find a great Box Skills tutorial on [Medium][skill_watson].

## Scopes

When an application is created in the Developer Console, the user must configure
application scopes. Similar to how users have permissions to access files and
folders within Box, applications have their own set of permissions to
perform certain actions on behalf of a Box user or a Box enterprise. The name
for a set of permissions for an application is a "scope". In short, an
application's scopes determine which [endpoints][reference] an application can
successfully call and are reflected in the access provided by
[Access Tokens][at] of the application.

### User permissions and scopes

It is important to understand that even if an application has the right scopes
to perform an action, the user associated with the Access Token making the call
needs to have permission to perform the action as well and vice versa.

For example, if your application is set up to read files, the
authenticated user does need to have permission to read the file you are
trying to access.

To learn more about how scopes, token permissions, and user permissions work
together, see our [security guide][security].

<Next>

Next step

</Next>

[oauth]: g://authentication/oauth2
[jwt]: g://authentication/jwt
[ata]: g://authentication/app-token
[ccg]: g://authentication/client-credentials
[skill]: g://skills/handle/payload/#access-tokens
[app_ep]: g://authentication/app-token/endpoints
[scopes]: g://api-calls/permissions-and-errors/scopes
[at]: g://authentication/tokens
[security]: g://security
<!-- i18n-enable localize-links -->

[reference]: page://reference
[python_oauth]: https://github.com/box-community/box-python-oauth-template
[node_jwt]: https://medium.com/box-developer-blog/authenticate-box-node-js-sdk-with-jwt-47fdd3aeec50
[skill_watson]: https://medium.com/box-developer-blog/box-skills-ibm-watson-speech-to-text-tutorial-b7e3b3c0a8c7
<!-- i18n-disable localize-links -->