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

| Box Application Type         | Authentication methods                                              |
| ---------------------------- | ------------------------------------------------------------------- |
| [Custom App][custom-app]     | [OAuth 2.0][oauth2], [JWT][jwt], or [Client Credentials Grant][ccg] |
| [Limited Access App][la]     | [App token][apptoken]                                               |
| [Custom Skill][custom-skill] | No authentication method selection needed                           |

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

<CTA to="guide://authentication/tokens">
  Learn more about Access Tokens
</CTA>

[oauth2]: g://authentication/oauth2
[jwt]: g://authentication/jwt
[apptoken]: g://authentication/app-token
[devtoken]: g://authentication/tokens/developer-tokens
[custom-app]: g://applications/app-types/custom-apps
[custom-skill]: g://applications/app-types/custom-skills
[la]: g://applications/app-types/select/#limited-access-app
[ccg]: g://authentication/client-credentials
