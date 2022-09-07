---
rank: 1
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - getting-started/user-types
required_guides: []
related_resources:
  - user
alias_paths:
  - /guides/authentication/user-types/managed-users
category_id: getting-started
subcategory_id: getting-started/user-types
is_index: false
id: getting-started/user-types/managed-users
type: guide
total_steps: 3
sibling_id: getting-started/user-types
parent_id: getting-started/user-types
next_page_id: getting-started/user-types/service-account
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/user-types/managed-users.md
---
# Managed & External Users

## Managed Users

Each Box enterprise is assigned a unique enterprise ID. Managed Users are any
users that belong to one enterprise ID. Admins and Co-Admins can directly edit,
delete, enforce security settings, and run reports against these users via the
Admin Console. Managed Users consume a standard Box license and often, but not
always, share the same email domain.

<Message>

# Log in as Admin User

Some applications need permissions that only Admins have in order to
properly operate and therefore require an Admin to log in.

An example of this would be a security application that monitors enterprise
events and takes action on suspicious events. The events endpoint can only
be used by Admins or a Co-Admin with permission to access reporting.

</Message>

## External Users

An externally managed user, or External User, is a Managed
User that belongs to a different enterprise ID. External users are often
encountered when they are collaborated in on content owned by a Managed User of
the application's enterprise, or when they authorize an OAuth 2.0 application.
These users still have their own Box accounts, but cannot be managed via the
Admin Console.

[dc]: https://app.box.com/developers/console