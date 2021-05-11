---
rank: 25
category_id: authorization
subcategory_id: null
is_index: true
id: authorization
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authorization/index.md
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

<CTA to='g://authorization/custom-app-approval'>

Learn how to authorize an application

</CTA>

## Enterprise Settings

### Disable Unpublished Applications by Default

A secondary step is required if this enterprise setting is enabled. All
applications, regardless of their authentication method, must be added to the
allow-list before use unless published to the [app gallery][ag].

This [setting][setting] can be found by navigating to:

**Admin Console** > **Apps** > **Custom Apps** > click the ⚙ icon

<!--alex ignore-->

WARNING: IF ENABLED AND THEN disabled
<!--alex enable-->

### Scenarios
<!--alex ignore-->

If both disable published and unpublished apps are disabled:
<!--alex enable-->

<!-- markdownlint-disable line-length -->

| Authentication Method                            | Published      | Unpublished                              |
| ------------------------------------------------ | --------------------------------------------------------- |
|[OAuth 2.0][standauth]                            | Ready for use  | Ready for use                            |
|[Server Authentication (with JWT)][jwt]           | N/A            | Authorize in Apps > Custom Apps          |
|[Server Authentication (client credentials)][cc]  | N/A            | Authorize in Apps > Custom Apps          |
|[App Token Authentication][apptoken]              | N/A            | Authorize in Apps > Custom Apps          |

<!--alex ignore-->

If both disable published and unpublished apps are enabled:
<!--alex enable-->

| Authentication Method                            | Published                                           | Unpublished                                           |
| ------------------------------------------------ | ----------------------------------------------------| ----------------------------------------------------- |
|[OAuth 2.0][standauth]                            | Set to available in individual application controls | Add to allow list                                     |
|[Server Authentication (with JWT)][jwt]           | N/A                                                 | Authorize in Apps > Custom Apps and add to allow list |
|[Server Authentication (client credentials)][cc]  | N/A                                                 | Authorize in Apps > Custom Apps and add to allow list |
|[App Token Authentication][apptoken]              | N/A                                                 | Authorize in Apps > Custom Apps and add to allow list |

<!--alex ignore-->

If **disable published applications by default** is enabled and
**disable unpublished applications by default** is disabled:
<!--alex enable-->

| Authentication Method                            | Published                                           | Unpublished                     |
| ------------------------------------------------ | ----------------------------------------------------| ------------------------------- |
|[OAuth 2.0][standauth]                            | Set to available in individual application controls | Ready for use                   |
|[Server Authentication (with JWT)][jwt]           | N/A                                                 | Authorize in Apps > Custom Apps |
|[Server Authentication (client credentials)][cc]  | N/A                                                 | Authorize in Apps > Custom Apps |
|[App Token Authentication][apptoken]              | N/A                                                 | Authorize in Apps > Custom Apps |

<!--alex ignore-->

If **disable published applications by default** is disabled and
**disable unpublished applications by default** is enabled:
<!--alex enable-->

| Authentication Method                            | Published      | Unpublished                                           |
| ------------------------------------------------ | -------------- |------------------------------------------------------ |
|[OAuth 2.0][standauth]                            | Ready for use  | Add to allow list                                     |
|[Server Authentication (with JWT)][jwt]           | N/A            | Authorize in Apps > Custom Apps and add to allow list |
|[Server Authentication (client credentials)][cc]  | N/A            | Authorize in Apps > Custom Apps and add to allow list |
|[App Token Authentication][apptoken]              | N/A            | Authorize in Apps > Custom Apps and add to allow list |

<!-- markdownlint-enable line-length -->

[setting]: https://support.box.com/hc/en-us/articles/360044196653-Managing-custom-apps
[sa]: g://getting-started/user-types/service-account
[scopes]: g://api-calls/permissions-and-errors/scopes
[ag]: g://applications/app-gallery
[standauth]: g://authentication/oauth2
[jwt]: g://authentication/jwt
[cc]: g://authentication/client-credentials
[apptoken]: g://authentication/app-token