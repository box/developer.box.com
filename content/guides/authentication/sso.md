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
---

# Box API & SSO

Many Box Enterprises use **Single Sign On** (SSO) to authenticate
[Managed Users][user-types] logging in to Box. The way applications built on
Box Platform interact with the SSO provider depends on the type of application
being built.

## Custom Apps with Client-side Authentication

When using a [Custom App][custom_app] that uses
client-side [OAuth 2.0] to authenticate users, the Box API will automatically
redirect a user's browser to their enterprise's configured SSO log-in screen.

Users who are a part of enterprises that require SSO, versus only enabling  
SSO, must have an SSO user profile associated with their Box account.

<Message warning>
  It is not possible to exempt a user from any SSO requirements if it is only
  used for platform use cases. In these scenarios we recommend using server-side
  authentication.
</Message>

## Custom Apps with Server-side Authentication

In any other situation a Custom App is authenticated using server-side
technology and no actual Managed User is involved. These applications often  
utilize their own user-facing authentication flows.

This means that for [Custom Apps][custom_app] that use [JWT][jwt] or [App
Token][app_token] authentication, SSO with Box is not involved during the  
authentication flow.

Instead, these applications authenticate as a [Service Account][user-types] that
does not have access to any Managed User's data. For these applications to have
access to other user's data they will need explicit [admin approval][admin-approval].

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
[app_token]: g://authentication/app-token
[custom_app]: g://applications/custom-apps
[custom_skills]: g://applications/custom-skills
[jwt]: g://applications/jwt
