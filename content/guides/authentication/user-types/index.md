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
  - /docs/app-users
  - /docs/service-account
---

# User Types

There are a few types of users that an application might encounter. The key
differences the Admin-level permissions of a user, and whether a user represents
a real Box user or a virtual user that is only visible to platform applications.

The type of user affects the type of data an application has access to, as a
user with Admin permissions will have different permissions than a regular user.

## Overview

<!-- markdownlint-disable line-length -->

The following is a quick overview of the types of users available in the Box API.

|                  | Admin privileges                   | No admin privileges         |
| ---------------- | ---------------------------------- | --------------------------- |
| Traditional user | [Admin User][admin]                | [Managed User][managed-user]|
| Platform only    | [Service Account][service-account] | [App User][app-user]        |

<!-- markdownlint-enable line-length -->

<Message>
  # What type of user does my application use?

The type of user that an application is authenticated as is dependent on the
type of application created, as well as the type of authentication used to
create an Access Token.

</Message>

[admin]: https://support.box.com/hc/en-us/articles/360043694174-Understanding-Administrator-and-Co-Administrator-Permissions
[service-account]: guide://authentication/user-types/service-account/
[managed-user]: guide://authentication/user-types/managed-users
[app-user]: guide://authentication/user-types/app-users
