---
rank: 5
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - applications/select
required_guides: []
related_resources:
  - user
alias_paths:
  - /docs/user-types
---

# User Types

There are a few types of users that an application might encounter. The key
differences the admin-level permissions of a user, and whether a user represents
a real Box user or a virtual user that is only visible to platform applications.

The type of user affects the type of data an application has access to, as a
user with admin permissions will have different permissions than a regular user.

## Overview

<!-- markdownlint-disable line-length -->

The following is a quick overview of the types of users available in the Box API.

|                  | Admin privileges                   | No admin privileges         |
| ---------------- | ---------------------------------- | --------------------------- |
| Traditional user | [Admin User][admin-user]           | [Managed User][managed-user] |
| Platform only    | [Service Account][service-account] | [App User][app-user]        |

<!-- markdownlint-enable line-length -->

<Message>
  # What type of user does my application use?

The type of user that an application is authenticated as is highly dependent
on the type of application created, as well as the type of authentication used
to create an Access Token.

</Message>

[admin-user]: guide://authentication/user-types/managed-users/#admin--co-admin-roles
[service-account]: guide://authentication/user-types/app-users/#service-accounts
[managed-user]: guide://authentication/user-types/managed-users
[app-user]: guide://authentication/user-types/app-users
