---
rank: 5
related_endpoints: []
related_guides:
  - applications/app-types/select
  - getting-started/user-types
  - authentication/select
required_guides:
  - authentication/app-token/app-token-setup
  - authentication/select
related_resources: []
alias_paths: []
---

# App Token Auth

Server-side authentication using App Tokens is an alternative way to
authenticate to the Box API with fixed, long-lived Access Tokens that are
restricted to the application's [Service Account][sa]. App Token Auth is
intended to be used by applications leveraging [Box View][box-view].

## App Token Restrictions

A server-side App Token is an authentication method where the application only
has access to read and write data to its own account. By using this
authentication method there is no need to authorize a user as the application is
automatically authenticated as the Service Account that belongs to that
application.

## When to use App Tokens

Server-side authentication with App Tokens is the ideal authentication method
for apps that:

- Want to leverage Box's preview services via [Box View][box-view]
- Work in an environment that either has no user model, or has users that don't
  have Box accounts
- Want to use their own identity system
- Don't want users to have to know that they are using Box
- Want to store data in the application's Service Account and not a user's
  account

[sa]: g://getting-started/user-types/service-account
[box-view]: g://embed/box-view
