---
rank: 2
related_endpoints:
  - get_authorize
related_guides:
  - authentication/tokens/downscope
required_guides:
  - authentication/select
  - authentication/app-token/app-token-setup
related_resources: []
alias_paths: []
---

# App Tokens without SDKs

If you are not ready to use any of the official Box SDKs, or an SDK is not
available in your language of choice, it is totally possible to use the Box APIs
without them.

App Token authentication is designed for working directly with the
Box API without requiring a user to redirect through Box to authorize your
application, yet is restricted to the application's own data.

<Message notice>
  The method of authentication through JWT is inherently tied to the Service
  Account for the application. Any API call made with this token will seem to
  come from this application and will not have access to files and folders from
  other users without explicitly getting access them.
</Message>

## Prerequisites

Before we can get started, you will need to have completed the following steps.

- Create a Box Application within the developer console
- Ensure the application is configured to use App Token authentication
- Generate a primary and secondary App Token for the application and store the tokens somewhere in your code.

## Making API calls

To use an App Token directly the application can use the App Token the same way
it would use any Access Token.

```curl
curl https://api.box.com/2.0/users/me \
    -H "authorization: Bearer EGmDmRVfhfHsqesn5yVYHAqUkD0dyDfk"
```
