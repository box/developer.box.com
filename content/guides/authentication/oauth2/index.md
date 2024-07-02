---
rank: 2
related_endpoints: []
related_guides:
  - applications/app-types/select
  - ../pages/platform/user-types
required_guides:
  - authentication/select
related_resources: []
alias_paths:
  - /docs/authenticate-with-oauth-2
---

# OAuth 2.0 Auth

Client-side OAuth 2.0 is one of the easiest ways to authenticate a user for the
Box API. It is an [open standard](https://oauth.net/2/) designed to allow users
to provide applications access to their data in other applications.

If you've ever logged in to a website with Twitter, Facebook, or Google you've
most likely used OAuth 2.0.

<ImageFrame border>
  ![the OAuth 2.0 flow](./oauth2-flow.png)
</ImageFrame>

Client-side authentication on Box has a similar flow where a user is redirected
from an application to the Box web app, required to log in, and grant the
application access to the user's data.

## When to use OAuth 2.0

Client-side authentication is the ideal authentication method for apps that:

- Work with users that already have existing Box accounts
- Want or require users to know that they are using Box
- Want to store data within the user's Box account and not within the the application's Box account
