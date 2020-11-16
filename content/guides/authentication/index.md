---
rank: 20
alias_paths:
  - /docs/application-setup
  - /docs/authentication
---

# Authentication

Authentication with the Box API uses an Access Token to identify a user. The
way in which an Access Token is acquired depends on the method used to authorize
a user. The type of authorization available to an application depends on the
use-case as well as the type of application that has been created in the developer
console.

<!-- markdownlint-disable line-length -->

| Box Application Type         | Authorization methods                                     |
| ---------------------------- | --------------------------------------------------------- |
| [Custom App][custom-app]     | [OAuth 2.0][oauth2] or [JWT][jwt]                         |
| [Limited Access App][la]     | [App token][apptoken]                                     |
| [Custom Skill][custom-skill] | No authorization needed                                   |

<!-- markdownlint-enable line-length -->

<CTA to="guide://authentication/select">
  Learn how to select an authorization type
</CTA>

## Access Tokens for Authentication

Every API endpoint requires a valid and active **Access Token** to make API
calls. An Access Token is a unique string that identifies an authenticated Box
user to the API endpoints.

```curl
curl https://api.box.com/2.0/users/me \
  -H "authorization: Bearer EGmDmRVfhfHsqesn5yVYHAqUkD0dyDfk"
```

## User Authorization

There are a few ways to get an an Access Token for a user. There is
client-side authorization through [OAuth 2.0][oauth2], server-side authorization
using [JWT][jwt], as well as a long lived [App Token][apptoken] and a
short-lived [Developer Token][devtoken].

[oauth2]: guide://authentication/oauth2
[jwt]: guide://authentication/jwt
[apptoken]: guide://authentication/app-token
[devtoken]: guide://authentication/access-tokens/developer-tokens
[custom-app]: guide://applications/custom-apps
[custom-skill]: guide://applications/custom-skills
[la]: g://applications/select/#limited-access-app
