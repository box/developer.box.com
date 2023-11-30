---
rank: 4
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
  - /authentication/user-types
hide: true
---

# User Types

## Overview

A critical part of planning and developing an application is understanding the
types of users involved. There are four main types of users: 

<!-- markdownlint-disable line-length -->

|                  | Admin privileges                   | No Admin privileges         |
| ---------------- | ---------------------------------- | --------------------------- |
| Traditional user | [Admin or Co-Admin User][admin]    | [Managed User][managed-user]|
| Platform only    | [Service Account][service-account] | [App User][app-user]        |

<!-- markdownlint-enable line-length -->

<Message>
  # What type of user does my application use?

The type of user an application is authenticated as is dependent on the
type of application created, as well as the type of authentication used to
create an Access Token.

</Message>

<!-- i18n-enable localize-links -->
[admin]: https://support.box.com/hc/en-us/articles/360043694174-Understanding-Administrator-and-Co-Administrator-Permissions
<!-- i18n-disable localize-links -->
[service-account]: g://getting-started/user-types/service-account
[managed-user]: g://getting-started/user-types/managed-users
[app-user]: g://getting-started/user-types/app-users
