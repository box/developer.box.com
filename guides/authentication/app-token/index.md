---
rank: 3
related_endpoints: []
related_guides:
  - applications/select
  - getting-started/user-types
  - authentication/select
required_guides:
  - authentication/app-token/app-token-setup
  - authentication/select
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/app-token
is_index: true
id: authentication/app-token
type: guide
total_steps: 5
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/app-token/rollover
previous_page_id: authentication/app-token/without-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/app-token/index.md
---
# App Token Auth

Server-side authentication using App Tokens is an alternative way to
authenticate to the Box API with fixed, long-lived Access Tokens that are
restricted to the application's [Service Account][sa].

## App Token Restrictions

A server-side App Token is an authentication method where the application only
has access to read and write data to its own account. App Token auth is mainly
intended to be used by Box View applications.

By using this authentication method there is no need to authorize a user as the
application is automatically authenticated as the Service Account that belongs
to that application.

## When to use App Tokens

Server-side authentication with App Tokens is the ideal authentication method
for apps that:

- Work in an environment that either has no user model, or has users that don't
  have Box accounts
- Want to use their own identity system
- Don't want users to have to know that they are using Box
- Want to store data in the application's Service Account and not a user's
  account

[sa]: g://getting-started/user-types/service-account