---
rank: 0
related_endpoints:
  - post_users
related_guides:
  - authentication/jwt/
  - users/provision/
  - users/create-app-user
  - users/create-managed-user
category_id: sso
subcategory_id: null
is_index: true
id: sso
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/guides/sso/index.md
---

# Integrating Single Sign-On (SSO) Systems with Box Applications

Single Sign-On (SSO) services are used as part of company Identity and Access
Management (IAM) solutions. When deployed, these services grant users the
ability to securely authenticate with multiple applications by logging in once,
with only one set of credentials (username and password). Box is one of the
applications that may be connected to the SSO service of a company.

Popular SSO services include `Okta`, `Auth0`, `Microsoft Azure AD`, `OneLogin`,
`G Suite`, and `Ping Identity`, but there are many others that may be deployed.

When integrating SSO services into a Box application programmatically, we are
referring to the following flow:

1. A user accesses your application in a logged out state.
2. The user is redirected to the SSO service to log in (typically via `OAuth 2`
and `OpenID Connect` flows).
3. After login, the user is redirected back to your web application along with
their SSO identity credentials.
4. If there is an associated Box user already (have already logged in
previously), the SSO identity credentials are used to make calls on behalf of
that user in Box.
5. If there is not an associated Box user already (first time logging in), a
new Box user account is created, based on the SSO identity credentials. The
unique user ID from the SSO service is then bound to the new Box user record
to created the association between the two account for future login attempts.

<Message notice>

If you wish to connect your SSO service to the Box website instead of a Box
application, Box provides a number of [integration options][sso-support] for
supporting SSO integrations of the [Box web application](https://www.box.com)
via SAML 2.0.

</Message>

[sso-support]: https://support.box.com/hc/en-us/articles/360043696514-Setting-Up-Single-Sign-On-SSO-for-your-Enterprise
