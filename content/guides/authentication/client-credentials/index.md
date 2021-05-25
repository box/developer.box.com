---
rank: 4
related_endpoints:
  - get_authorize
related_guides:
  - applications/select
  - authentication/best-practices/
required_guides:
  - authentication/select
related_resources: []
alias_paths:
  - /docs/construct-jwt-claim-manually
  - /guides/authentication/jwt/without-sdk/#client-credentials-grant
---

# Client Credentials Grant

Follow the steps below if you would like to leverage server authentication and 
verify your application's identity using a client ID and client secret.

## Prerequisites

- A Custom Application using Server Authentication 
 (with Client Credentials Grant) authentication in the Box
 [Developer Console][devconsole]
- [2FA][2fa] enabled on your Box account for viewing and copying the
  application's client secret from the configuration tab
- The application is authorized in the Box Admin Console

<Message notice>

Your client secret is confidential and needs to be protected. Because this is
how we securely identify an application's identity when obtaining an
Access Token, you do not want to freely distribute a client secret. This
includes via email, public forums and code repositories, distributed native
applications, or client-side code. 

</Message>

## How to use

When making your API call to obtain an [Access Token][accesstoken], your 
request body needs to contain your client ID and client Secret. Set the
`grant_type` to `client_credentials`.

If you would like to authenticate as the application's [Service Account][sa]:

- set `box_subject_type` to `enterprise`
- set `box_subject_id` to the enterprise ID

If you would like to authenticate as a Managed User:

- set `box_subject_type` to `user` 
- set `box_subject_id` to the user ID

<Tabs>
  <Tab title='cURL'>

<!-- markdownlint-disable line-length -->

```cURL
curl --location --request POST ‘https://api.box.com/oauth2/token’ \
--header ‘Content-Type: application/x-www-form-urlencoded’ \
--data-urlencode ‘client_id=<client_id>’ \
--data-urlencode ‘client_secret=<client_secret>’ \
--data-urlencode ‘grant_type=client_credentials’ \
--data-urlencode ‘box_subject_type=enterprise’ \
--data-urlencode ‘box_subject_id=<enterprise_id>’
```

<!-- markdownlint-enable line-length -->

  </Tab>
</Tabs>

<Message notice>

Box SDKs do not currently support this authentication method.

</Message>

[2fa]: https://support.box.com/hc/en-us/articles/360043697154-Two-Factor-Authentication-Set-Up-for-Your-Account
[devconsole]: https://app.box.com/developers/console
[accesstoken]: e://post-oauth2-token/
[sa]: g://getting-started/user-types/service-account/