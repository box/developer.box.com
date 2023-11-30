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
category_id: authentication
subcategory_id: authentication/client-credentials
is_index: true
id: authentication/client-credentials
type: guide
total_steps: 1
sibling_id: authentication
parent_id: authentication
next_page_id: ''
previous_page_id: authentication/client-credentials/client-credentials-setup
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/client-credentials/index.md
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
- The application is [authorized][auth] in the Box Admin Console

<Message danger>

Your client secret is confidential and needs to be protected. Because this is
how we securely identify an application's identity when obtaining an
Access Token, you do not want to freely distribute a client secret. This
includes via email, public forums and code repositories, distributed native
applications, or client-side code. If you would like to add more security
mechanisms, we recommend using our standard JWT application type.

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

<Samples id='x_auth' variant='with_client_credentials' >

</Samples>

## Common Errors

<!--alex ignore invalid-->

### Grant credentials are invalid

This error indicates either:

- the client ID and client secret passed are incorrect or are not for the same
application

- the `box_subject_id` cannot be used based on the selected
[application access][aa]. For example, if you send in a `box_subject_type` of
`enterprise` and your application is configured for App Access Only, the
`grant credentials are invalid` error will be returned

<!-- i18n-enable localize-links -->

[2fa]: https://support.box.com/hc/en-us/articles/360043697154-Two-Factor-Authentication-Set-Up-for-Your-Account
<!-- i18n-disable localize-links -->

[devconsole]: https://app.box.com/developers/console
[accesstoken]: e://post-oauth2-token/
[sa]: page://platform/user-types/#service-account/
[auth]: g://authorization
[aa]: g://authentication/client-credentials/client-credentials-setup/#application-access