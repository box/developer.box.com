---
rank: 3
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
total_steps: 2
sibling_id: authentication
parent_id: authentication
next_page_id: authentication
previous_page_id: authentication/select
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/sso.md
---
# Box API & SSO

Many Box Enterprises use **Single Sign On** (SSO) to authenticate
[Managed Users][user-types] logging in to Box. The way applications built on
Box Platform interact with the SSO provider depends on the type of application
being built.

## Custom Apps with Client-side Authentication

When users authenticate with a [Custom App][custom_app] configured to use
client-side [OAuth 2.0] Box will detect if a user's
enterprise is configured to use SSO. If so, Box will redirect the user's browser
to their own enterprise's configured SSO log-in screen.

### SSO Enabled vs Required

Enterprises on Box can be configured to use SSO in two ways: **SSO Required**
or **SSO Enabled**.

In an enterprise that has set **SSO only as enabled**, users will have the option
to either use a regular Box username and password or to be redirected to their
SSO provider.

In an enterprise that has **SSO set to be required**, Box will force users
to log in with their enterprise's configured SSO provider. In this case, any
user that tries to log in must already have both a Box account and an account
with their SSO provider. Without either of these the log in will fail as either
Box won't know what SSO provider to send a user to, or the SSO provider won't
recognize the user's login.

<Message warning>

It is not possible to exempt a user from SSO in an enterprise with SSO
set to be required, even if it is only used for platform use cases.

</Message>

## Custom Apps with Server-side Authentication

For [Custom Apps][custom_app] that use [JWT][jwt] or
[Limited Access Apps][la-app] that use [App Token][app_token]
authentication, SSO is not used to authenticate with Box.

Custom apps using server-side authentication only use server-to-server API
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

[user-types]: g://authentication/user-types
[admin-approval]: g://applications/custom-apps/app-approval
[jwt]: g://authentication/jwt
[oauth2]: g://authentication/oauth2
[la-app]: guide://applications/web-app-integrations
[app_token]: g://authentication/app-token
[custom_app]: g://applications/custom-apps
[custom_skills]: g://applications/custom-skills
[jwt]: g://applications/custom-apps/jwt-setup