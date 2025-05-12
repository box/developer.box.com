---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
alias_paths:
  - /docs/scopes
---

# Scopes

When an application is created in the Developer Console, the user must configure
application scopes. Similar to how users have permissions to access files and
folders within Box, applications have their own set of permissions to
perform certain actions on behalf of a Box user or a Box enterprise. The name
for a set of permissions for an application is a "scope". In short, an
application's scopes determine which [endpoints][reference] an application can
successfully call and are reflected in the access provided by
[Access Tokens][at] of the application.

## User permissions and scopes

It is important to understand that even if an application has the right scopes
to perform an action, the user associated with the Access Token making the call
needs to have permission to perform the action as well and vice versa.

For example, if your application is set up to read files, the
authenticated user does need to have permission to read the file you are
trying to access.

To learn more about how scopes, token permissions, and user permissions work
together, see our [security guide][security].

## Scopes & OAuth 2 authorization

When sending a user through a client-side OAuth 2 flow to authorize your
application it is possible to append a set of scopes to the authorization URL to
further restrict the user's access token.

For example, if you application has the `root_readonly` and `root_readwrite`
scopes enabled, it is possible to restrict a user's access token to
`root_readonly` by specifying this scope when redirecting the user.

```js
GET https://account.box.com/api/oauth2/authorize?scope=root_readonly&client_id=....
```

When the scope parameter is omitted the application will use the scopes that
were set when the application was created.

## Self-service scopes

These scopes are available through the Developer Console when configuring an
application. Navigate to the **Application Scopes** section of the
**Configuration** tab and select one or more of the following scope.

### Read all files and folders

|                       |                                          |
| --------------------- | ---------------------------------------- |
| **OAuth Scope**       | `root_readonly`                          |
| **Application Scope** | Read all files and folders stored in Box |

Gives an application the ability to read all the files/folders for the
authenticated user.

Although this gives an application the permission to read files and folders, the
user making the API call does need to have access to the items being accessed.

In the case of a [JWT][jwt] application accessing a [Managed User's][mu]
items, the Service Account's Token will need to either use the `as-user`
[header][au] or create a [User Access Token][uat] to directly authenticate as
the user who has access to the content.

### Read and write all files and folders

|                       |                                                    |
| --------------------- | -------------------------------------------------- |
| **OAuth Scope**       | `root_readwrite`                                   |
| **Application Scope** | Read and write all files and folders stored in Box |

Gives an application write access for the authenticated user. This allows the
application to upload files or new file versions, download content, create new
folders, update or delete collaborations, create comments or tasks, and more.

Although this gives an application read/write access to items, the
user making the API call needs to have access to the content.

### Manage users

The manage users scope in the Developer Console maps to two OAuth scopes.

|                       |                        |
| --------------------- | ---------------------- |
| **OAuth Scope**       | `manage_managed_users` |
| **Application Scope** | Manage users           |

Gives an application permission to manage [Managed Users][mu]. It
allows the app to change the user's primary login, reset their password, and
change roles for managed users.

<Message type='notice'>
Although this allows an application manage users, for client-side applications,
the Access Token used must be associated with an Admin or Co-Admin with the
correct permissions.

Additionally, for JWT applications, the application must be configured with
**App Access + Enterprise Access** [application access][appaccess].
</Message>

|                       |                    |
| --------------------- | ------------------ |
| **OAuth Scope**       | `manage_app_users` |
| **Application Scope** | Manage users       |

Gives an application permission to manage [App Users][appu], which means this
scope only applies to server-side authenticated (JWT) applications.

### Manage groups

|                       |                 |
| --------------------- | --------------- |
| **OAuth Scope**       | `manage_groups` |
| **Application Scope** | Manage groups   |

Gives an application permission to manage an enterprise's groups. It
allows the app to create, update, and delete groups, as well as manage group
membership.

<Message type='notice'>
Although this allows an application manage groups, for client-side applications,
the Access Token used must be associated with an Admin Co-Admin with the
correct permissions.

Additionally, for JWT applications, the application must be configured with
**App Access + Enterprise Access** [application access][appaccess].
</Message>

### Manage webhooks

|                       |                   |
| --------------------- | ----------------- |
| **OAuth Scope**       | `manage_webhook`  |
| **Application Scope** | Manage webhooks   |

Gives an application permission to create webhooks for a user.
Please review webhook [limitations](g://webhooks/v2/limitations-v2). Most
notably, there is a limit of 1000 webhooks per application, per user.

### Manage enterprise properties

|                       |                                |
| --------------------- | ------------------------------ |
| **OAuth Scope**       | `manage_enterprise_properties` |
| **Application Scope** | Manage enterprise properties   |

Gives an application permission to view the enterprise event stream, as well as
view and edit the enterprise's attributes and reports. It also allows the
application to edit and delete device pins.

<Message type='notice'>
Although this allows an application to enterprise properties, for client-side
applications, the Access Token used must must be associated with an
Admin Co-Admin with the correct permissions.
</Message>

### Manage retention policies

|                       |                            |
| --------------------- | -------------------------- |
| **OAuth Scope**       | `manage_data_retention`    |
| **Application Scope** | Manage retention policies  |
| **Depends on**        | `enterprise_content`-scope |

Gives an application permission to view and create retention policies
with Box Governance. This requires the enterprise to have purchased
[Box Governance][governance].

<Message type='warning'>
  This scope also requires the `enterprise_content` scope to function properly.
  These scopes can be requested by opening a ticket via our support channels.
</Message>

### Manage signature requests

|                       |                            |
| --------------------- | -------------------------- |
| **OAuth Scope**       | `sign_requests.readwrite`  |
| **Application Scope** | Manage signature requests  |

Gives an application permission to get, create, cancel, and resend sign
requests.

This scope requires the application to also have read/write scopes, which are
automatically selected when enabled. In addition, an enterprise must have Sign
enabled.

### Manage Box AI API

|                       |                            |
| --------------------- | -------------------------- |
| **OAuth Scope**       | `ai.readwrite`  |
| **Application Scope** | Manage AI  |

Gives an application permission to send requests to
Box AI API.

### Manage Box Relay

|                       |                             |
| --------------------- | --------------------------- |
| **OAuth Scope**       | `manage_triggers`           |
| **Application Scope** | Manage Box Relay            |

Gives an application permission to get workflows and start flows of type `WORKFLOW_MANUAL_START`

This scope requires the application to also have read/write scopes.

## Available on request

There are some additional scopes that are only available upon request. To do so,
please submit a ticket to our [support team](page://support). They will review
these requests on an individual basis and only provide approval if the use case
requires the scope.

<Message type='notice'>
It is not possible to request extra scopes if your account is a free trial
account. Before filing a support request for activation of the following
scopes, log in to your paid enterprise account or
[upgrade your free developer account][pricing] to an enterprise account tier.
</Message>

### Manage Legal Holds

|                       |                           |
| --------------------- | ------------------------- |
| **OAuth Scope**       | `manage_legal_holds`      |
| **Application Scope** | Manage retention policies |
| **Depends on**        | `enterprise_content`-scope               |

Gives an application permission to view and create retention policies
with Box Governance. This requires the enterprise to have purchased Box
Governance.

<Message type='notice'>
  This scope depends on the `enterprise_content` scope to function properly.
  This scope can be requested by opening a ticket via our support channels.
</Message>

### Suppress email notifications

|                       |                                                 |
| --------------------- | ----------------------------------------------- |
| **Application Scope** | Can suppress email notifications from API calls |

Allows some types of [email notifications][suppress] to be suppressed when API
calls are made.

### Global Content Manager (GCM)

|                       |                        |
| --------------------- | ---------------------- |
| **OAuth Scope**       | `enterprise_content`   |
| **Application Scope** | Global Content Manager |

To allow Admins, Co-Admins and [Service Accounts][sa] 
Allows Admin, Co-Admins, and [Service Accounts][sa] with the **Manage User** or
**View/Edit User Content** permissions to retrieve any content not owned by them within their enterprise. 

This scope is required to manage the retention policies and legal holds.

<Message type='danger'>
  # Side effects

Enabling this scope on an application changes the behavior of some API calls,
and most notably, makes it impossible to write content without explicitly
authenticating as a user using the `as-user` header. Additionally, enabling this
scope disables accessing content that is owned by users in another enterprise.

For this reason, this scope will not be provisioned unless absolutely necessary.
</Message>

## Scopes for downscoping

In some cases an Access Token needs to be [downscoped][ds] to a more strict
permission level, especially when a token needs to be exposed to a client-side,
public environment like a browser. The primary example for this is when using
[Box UI Elements][ui-elements], which require an Access Token in the user's
browser.

The following is a list of **additional** scopes that can be used with the
[`POST /oauth2/token`](endpoint://post-oauth2-token) endpoint to downscope an
existing access token.

| OAuth Scope            | UI Element affected | Description                                                                         |
| ---------------------- | ------------------- | ----------------------------------------------------------------------------------- |
| `annotation_edit`      | Preview             | Allow user to edit & delete annotations                                             |
| `annotation_view_all`  | Preview             | Allows user to view annotations by all users                                        |
| `annotation_view_self` | Preview             | Allows user to view their own annotations only                                      |
| `base_explorer`        | Explorer            | Allows access to content in the folder tree based on user/file/token permissions    |
| `base_picker`          | Picker              | Allows access to content in the folder tree based on user/file/token permissions    |
| `base_preview`         | Preview             | Allows the user to preview the file, nothing else                                   |
| `base_sidebar`         | Sidebar             | Allows the user to get basic file info needed for the sidebar UI element            |
| `base_upload`          | Uploader            | Allows upload into the folder specified under `resource` when downscoping the token |
| `item_delete`          | Explorer            | Allows files and folders to be deleted                                              |
| `item_download`        | Explorer, Preview   | Allows files or a folder's content to be downloaded                                 |
| `item_preview`         | Explorer            | Enables preview of a file                                                           |
| `item_rename`          | Explorer            | Allows files and folders to be renamed                                              |
| `item_share`           | Explorer, Picker    | Allows the item specified under `resource` of the token exchange to be shared       |
| `item_upload`          | Picker              | Allows upload in the content picker                                                 |

The standard OAuth scopes are also supported when downscoping.

| OAuth Scope                    | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| `root_readonly`                | Read all files and folders stored in Box           |
| `root_readwrite`               | Read and write all files and folders stored in Box |
| `manage_managed_users`         | Manage managed users                               |
| `manage_app_users`             | Manage app users                                   |
| `manage_groups`                | Manage groups                                      |
| `manage_webhook`               | Manage webhooks                                    |
| `manage_enterprise_properties` | Manage enterprise properties                       |
| `manage_data_retention`        | Manage retention policies                          |
| `sign_requests.readwrite`      | Manage sign requests                               |

<!-- i18n-enable localize-links -->
[console]: https://app.box.com/developers/console
[ui-elements]: https://github.com/box/box-ui-elements
[pricing]: https://www.box.com/pricing/platform
[reference]: page://reference
<!-- i18n-disable localize-links -->
[at]: g://authentication/tokens
[security]: g://security
[jwt]: g://authentication/jwt
[mu]: page://platform/user-types/#managed-users
[au]: g://authentication/jwt/as-user
[uat]: g://authentication/jwt/user-access-tokens
[appaccess]: g://authentication/jwt/jwt-setup/#application-access
[appu]: page://platform/user-types/#app-user
<!-- i18n-enable localize-links -->
[governance]: https://www.box.com/security/governance-and-compliance
<!-- i18n-disable localize-links -->
[suppress]: g://api-calls/suppress-notifications
[ds]: g://authentication/tokens/downscope
[sa]: page://platform/user-types/#service-account