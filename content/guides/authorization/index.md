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
- Server Authentication (with Client Credentials Grant)
- App Token Authentication
- Custom Skill 

These authentication methods automatically generate a [Service Account][sa].
With the right [scopes][scopes] enabled, a Service Account can perform many
Admin actions, thus requiring Admin authorization before use. 

<CTA to='g://authorization/custom-app-approval'>
  Learn how to authorize a Custom Application
</CTA>

<CTA to='g://authorization/custom-skill-approval'>
  Learn how to authorize a Custom Skill
</CTA>

## Enterprise Settings

Subsequent steps are required if either of the following enterprise settings are
enabled: 

- Disable published applications by default
- Disable unpublished application by default

These [settings][setting] can be found by navigating to: 

**Admin Console** > **Apps** > **Custom Apps** > click the ⚙ icon

## Scenarios

To see what steps an Admin must complete for a given app, review the following
scenarios. 

<!--alex ignore-->
If both disable published and unpublished apps are disabled:
<!--alex enable-->

<!-- markdownlint-disable line-length -->

| Authentication Method                            | Published      | Unpublished                              |
| ------------------------------------------------ | --------------------------------------------------------- |
|[OAuth 2.0][standauth]                            | Ready for use  | Ready for use                            |
|[Server Authentication (with JWT)][jwt]           | N/A            | Authorize in **Apps** > **Custom Apps**  |
|[Server Authentication (client credentials)][cc]  | N/A            | Authorize in **Apps** > **Custom Apps**  |
|[App Token Authentication][apptoken]              | N/A            | Authorize in **Apps** > **Custom Apps**  |

<!--alex ignore-->
If both disable published and unpublished apps are enabled:
<!--alex enable-->

| Authentication Method                            | Published                                           | Unpublished                                                   |
| ------------------------------------------------ | ----------------------------------------------------| ------------------------------------------------------------- |
|[OAuth 2.0][standauth]                            | Set to available in individual application controls | Add to allow list                                             |
|[Server Authentication (with JWT)][jwt]           | N/A                                                 | Authorize in **Apps** > **Custom Apps** and add to allow list |
|[Server Authentication (client credentials)][cc]  | N/A                                                 | Authorize in **Apps** > **Custom Apps** and add to allow list |
|[App Token Authentication][apptoken]              | N/A                                                 | Authorize in **Apps** > **Custom Apps** and add to allow list |

<!--alex ignore-->
If **disable published applications by default** is enabled and
**disable unpublished applications by default** is disabled:
<!--alex enable-->

| Authentication Method                            | Published                                           | Unpublished                              |
| ------------------------------------------------ | ----------------------------------------------------| ---------------------------------------- |
|[OAuth 2.0][standauth]                            | Set to available in individual application controls | Ready for use                            |
|[Server Authentication (with JWT)][jwt]           | N/A                                                 | Authorize in **Apps** > **Custom Apps**  |
|[Server Authentication (client credentials)][cc]  | N/A                                                 | Authorize in **Apps** > **Custom Apps**  |
|[App Token Authentication][apptoken]              | N/A                                                 | Authorize in **Apps** > **Custom Apps**  |

<!--alex ignore-->
If **disable published applications by default** is disabled and
**disable unpublished applications by default** is enabled:
<!--alex enable-->

| Authentication Method                            | Published      | Unpublished                                                   |
| ------------------------------------------------ | -------------- |-------------------------------------------------------------- |
|[OAuth 2.0][standauth]                            | Ready for use  | Add to allow list                                             |
|[Server Authentication (with JWT)][jwt]           | N/A            | Authorize in **Apps** > **Custom Apps** and add to allow list |
|[Server Authentication (client credentials)][cc]  | N/A            | Authorize in **Apps** > **Custom Apps** and add to allow list |
|[App Token Authentication][apptoken]              | N/A            | Authorize in **Apps** > **Custom Apps** and add to allow list |

<!-- markdownlint-enable line-length -->

[setting]: https://support.box.com/hc/en-us/articles/360044196653-Managing-custom-apps
[sa]: g://getting-started/user-types/service-account
[scopes]: g://api-calls/permissions-and-errors/scopes
[ag]: g://applications/app-gallery
[standauth]: g://authentication/oauth2
[jwt]: g://authentication/jwt
[cc]: g://authentication/client-credentials
[apptoken]: g://authentication/app-token
