---
rank: 8
related_endpoints: []
related_guides:
  - authentication/oauth2
  - authentication/jwt
  - authentication/app-token
  - applications/custom-apps
  - applications/custom-skills
required_guides: []
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: null
is_index: false
id: authentication/sso
type: guide
total_steps: 3
sibling_id: authentication
parent_id: authentication
next_page_id: authentication
previous_page_id: authentication/best-practices
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/sso.md
---
# Box API & SSO

Many Box Enterprises use **Single Sign On** (SSO) to authenticate
[Managed Users][mu] logging in to Box. The way an application built on
Box Platform interact with an SSO provider depends on the type of application
being built.

## Custom Apps with Client-side Authentication

When users authenticate with a [Custom App][custom_app] configured to use
[OAuth 2.0][oauth2] Box will detect if the enterprise is configured to use SSO.
If it is, Box will redirect the user to their browser and display the
enterprise's configured SSO log-in screen.

### SSO Enabled vs Required

Enterprises can configure their SSO in one of two ways: **SSO Required**
or **SSO Enabled**.

When SSO is enabled but not required, managed users will have the option to
either:

- log in with a Box username and password
- log in with their SSO provider 

When SSO is enabled and required, Box will force all managed users to log in
with their enterprise's configured SSO provider. In this case, any
user that tries to log in must be configured on the SSO side, in addition to
having a Box account matching the email address passed via SAML.

<Message warning>

It is not possible to exempt a user from SSO in an enterprise with SSO
set to required, even if it is only used for platform use cases.

</Message>

## Custom Apps with Server-side Authentication

For [Custom Apps][custom_app] that use [JWT][jwt] or
[Client Credentials Grant][ccg] and
[Limited Access Apps][la-app] that use [App Token][app_token] authentication,
SSO is not used to authenticate with Box.

Custom Apps using server-side authentication only use server-to-server API
calls to communicate with Box. In this scenario, the way in which an end user
is authenticated is determined by the application and not by Box.

In other words, end user authentication with the application is determined by
the application, while application's authorization to Box is a different
matter completely.

In these use cases the application authenticates not as a regular Managed User
but as a Service Account or App User. These user types do not have access to any
Managed User's data by default. For these applications to have access to other
Managed User's data they will need explicit [admin approval][admin-approval].

## Custom Skills

[Custom Skills][custom_skills] are authenticated in a unique way where the
application is provided with a unique set of access tokens for every skill
event.

In this case, the application does not directly interact with the users and
therefore SSO is not involved.

<Message>

Even when using Skills, a user uploading a file to a folder that might trigger
a Skill event would still need to log in to the web or mobile app. This log in
would require them to use SSO where needed.

</Message>

[mu]: g://getting-started/user-types/managed-users
[admin-approval]: g://authorization/custom-app-approval
[jwt]: g://authentication/jwt
[oauth2]: g://authentication/oauth2
[ccg]: g:///authentication/client-credentials
[la-app]: guide://applications/web-app-integrations
[app_token]: g://authentication/app-token
[custom_app]: g://applications/custom-apps
[custom_skills]: g://applications/custom-skills
[jwt]: g://authentication/jwt/jwt-setup