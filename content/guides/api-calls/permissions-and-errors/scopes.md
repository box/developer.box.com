---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
alias_paths:
  - /docs/scopes
---

# Scopes

It is important to select the correct permissions for a Box application
when setting it up in the [developer console][console] by selecting the correct
scopes.

## About scopes

Similar to how users have certain permissions to access items like files and
folders within Box, applications have their own set of permissions to perform
certain actions on behalf of a Box user or a Box enterprise.

The name for a set of permissions for an application is a "scope". By selecting
the correct scopes for your application you can enable your application to
perform certain tasks for a user, as well as restrict an application from
performing tasks you did not intend it to do.

<Message type='notice'>
  # User permissions and scopes

It is important to understand that even if an application has the right scopes
to perform an action, the user authenticated in the API call needs to have
permission to perform that action as well, and vice versa.

For example, if your application is set up to read files, the
authenticated user does need to have permission to read the file you are
trying to access.

</Message>

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

These scopes are available through the developer console when configuring a
custom application. Head over to the "Application Scopes" section of the
"Configuration" page of your application settings and select one of the
following scope.

### Read all files and folders

|                       |                                          |
| --------------------- | ---------------------------------------- |
| **OAuth Scope**       | `root_readonly`                          |
| **Application Scope** | Read all files and folders stored in Box |

Gives an application the ability to read all the files/folders for an
authenticated user.

Although this gives an application the permission to read file and folder, the
user making the API call does need to have access to the items being accessed.

In the case of a JWT authenticated application accessing a managed user's
items this means that the application needs to use the `As-User` header or
create a **User Access Token** to authenticate as the user who has access to
the item.

### Read and write all files and folders

|                       |                                                    |
| --------------------- | -------------------------------------------------- |
| **OAuth Scope**       | `root_readwrite`                                   |
| **Application Scope** | Read and write all files and folders stored in Box |

Gives an application write access for the authenticated user. This allows the
application to upload files, new versions of files, create new folders, create,
edit, and delete collaborations, create comments, tasks, collection, and more.

Although this gives an application read/write access to items, the
user making the API call does need to have access to the items being accessed.

### Manage users

The manage users application scope option in the developer console actually maps
to two OAuth scopes.

|                       |                        |
| --------------------- | ---------------------- |
| **OAuth Scope**       | `manage_managed_users` |
| **Application Scope** | Manage users           |

Gives an application permission to manage standard (managed) Box users. It
allows the app to change the user's primary login, reset their password, and
change roles for managed users.

<Message type='notice'>
Although this gives an application access to a user, it does mean that the
authenticated user needs to have permissions to access these users. In the case
of a client-side authenticated application this means that the user needs be an
admin or co-admin.

In the case of a JWT application, this means that the application needs to
additionally be configured to have "Enterprise"-level application access.

</Message>

|                       |                    |
| --------------------- | ------------------ |
| **OAuth Scope**       | `manage_app_users` |
| **Application Scope** | Manage users       |

Gives an application permission to manage standard App users. App users are
different from regular (managed) users and can not log in to the Box web app.
Instead, they are virtual users that can be used by an application to separate
data in a server-side authenticated application.

This scope only applies to server-side authenticated (JWT) applications.

### Manage groups

|                       |                 |
| --------------------- | --------------- |
| **OAuth Scope**       | `manage_groups` |
| **Application Scope** | Manage groups   |

Gives an application permission to manage an enterprise's group. It
allows the app to change the create, update, and delete groups, as well as add
and remove users to groups.

<Message type='notice'>
Although this gives an application access to user groups, it does mean that the
authenticated user needs to have permissions to access these users. In the case
of a client-side authenticated application this means that the user needs be an
admin or co-admin.

In the case of a JWT application, this means that the application needs to
additionally be configured to have "Enterprise"-level application access.

</Message>

### Manage webhooks

|                       |                   |
| --------------------- | ----------------- |
| **OAuth Scope**       | `manage_webhooks` |
| **Application Scope** | Manage webhooks   |

Gives an application permission to create webhooks for a user.
Some [limitations exists](guide://webhooks/limitations) for webhooks, most
notably there is a limit of 1000 webhooks per application, per user.

### Manage enterprise properties

|                       |                                |
| --------------------- | ------------------------------ |
| **OAuth Scope**       | `manage_enterprise_properties` |
| **Application Scope** | Manage enterprise properties   |

Gives an application permission to view the enterprise event stream, as well as
view and edit the enterprise's attributes and reports. It also allows the
application to edit and delete device pinners.

<Message type="notice">
  Although this gives an application access to user groups, it does mean that
  the authenticated user needs to have permissions to access these users.
</Message>

### Manage retention policies

|                       |                           |
| --------------------- | ------------------------- |
| **OAuth Scope**       | `manage_data_retention`   |
| **Application Scope** | Manage retention policies |
| **Depends on**        | `gcm`-scope               |

Gives an application permission to view and create retention policies
with Box Governance. This requires the enterprise to have purchased Box
Governance.

<Message type="warning">
  This scope depends on the `gcm` scope to function properly. This scope can be
  requested by opening a ticket via our support channels.
</Message>

## Available on request

There are some additional scopes that are available on request which will
enable some specific capabilities for your application.

This scope can be requested by opening a ticket via our support team, who will
review request on an individual basis and only provide approval of the use case
requires the scope.

### Manage Legal Holds

|                       |                           |
| --------------------- | ------------------------- |
| **OAuth Scope**       | `manage_legal_holds`      |
| **Application Scope** | Manage retention policies |
| **Depends on**        | `gcm`-scope               |

Gives an application permission to view and create retention policies
with Box Governance. This requires the enterprise to have purchased Box
Governance.

<Message type="notice">
  This scope depends on the `gcm` scope to function properly. This scope can be
  requested by opening a ticket via our support channels.
</Message>

### Suppress email notifications

|                       |                                                 |
| --------------------- | ----------------------------------------------- |
| **Application Scope** | Can suppress email notifications from API calls |

Allows email notifications to be suppressed when API calls are made.

### Global Content Manager

|                       |                        |
| --------------------- | ---------------------- |
| **OAuth Scope**       | `gcm`                  |
| **Application Scope** | Global Content Manager |

Allows admins and service accounts to retrieve any content within their
enterprise without having to explicitly authenticated as a user who has access
to that content. This scope may be required for certain applications that work
with retention policies and legal holds.

<Message type='danger'>
  # Side effects

Enabling this scope on an application changes the behavior of some API calls,
and most notable makes it impossible to write content without explicitly
authenticating as a user using the `As-User` header. Additionally, enabling this
scope disables accessing content that is owned by users in another enterprise.

For this reason, this scope will not be provisioned unless absolutely necessary.

</Message>

## Scopes for downscoping

In some cases an Access Token needs to be downscoped to a more strict permission
level, especially when a token needs to be exposed to a client-side, public
environment like a browser. The primary example for this is when using [Box UI
Elements][ui-elements] which requires an Access Token in the user's browser.

The following is a list of **additional** scopes that can be used with the
[`POST /oauth2/token`](endpoint://post-oauth2-token) endpoint to downscope an
existing access token.

<!-- markdownlint-disable line-length -->

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

<!-- markdownlint-enable line-length -->

The standard OAuth scopes are also supported when downscoping.

<!-- markdownlint-disable line-length -->

| OAuth Scope                    | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| `root_readonly`                | Read all files and folders stored in Box           |
| `root_readwrite`               | Read and write all files and folders stored in Box |
| `manage_managed_users`         | Manage managed users                               |
| `manage_app_users`             | Manage app users                                   |
| `manage_groups`                | Manage groups                                      |
| `manage_webhooks`              | Manage webhooks                                    |
| `manage_enterprise_properties` | Manage enterprise properties                       |
| `manage_data_retention`        | Manage retention policies                          |

<!-- markdownlint-enable line-length -->

[console]: https://app.box.com/developers/console
[ui-elements]: https://github.com/box/box-ui-elements
