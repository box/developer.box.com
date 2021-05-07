---
rank: 25
---

# Authorization 

Some applications require explicit Admin authorization before use with an
enterprise. The steps an Admin needs to take are dependent on the 
developer-selected authentication method and enabled enterprise settings. 

## Authentication Methods

The following authentication methods always require explicit Admin 
authorization: 

- Server Authentication (with JWT)
- Server Authentication (client credentials grant)
- App Token Authentication
- Custom Skill 

These authentication methods automatically generate a [Service Account][sa].
With the right [scopes][scopes] enabled, a Service Account can perform many
Admin actions, thus requiring Admin authorization before use. 

## Enterprise Settings

### Disable Unpublished Applications by Default

A secondary step is required if this enterprise setting is enabled. All
applications, regardless of their authentication method, must be added to the
allow-list before use unless published to the [app gallery][ag]. 

This [setting][setting] can be found by navigating to: 

**Admin Console** > **Apps** > **Custom Apps** > click the ⚙ icon

[setting]: https://support.box.com/hc/en-us/articles/360044196653-Managing-custom-apps
[sa]: g://getting-started/user-types/service-account
[scopes]: g://api-calls/permissions-and-errors/scopes
[ag]: g://applications/app-gallery
