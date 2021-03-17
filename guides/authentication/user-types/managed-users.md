---
rank: 1
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - authentication/user-types
required_guides: []
related_resources:
  - user
category_id: authentication
subcategory_id: authentication/user-types
is_index: false
id: authentication/user-types/managed-users
type: guide
total_steps: 3
sibling_id: authentication/user-types
parent_id: authentication/user-types
next_page_id: authentication/user-types/app-users
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/user-types/managed-users.md
---
# Managed Users

A Managed User is the most regular Box user. It's an employee of an enterprise
that can log in to the Box web and mobile apps. There are a few variations of
Managed Users.

## Admin & co-admin roles

A Managed User with an admin or co-admin role is often referred to as an Admin
User.

The admin and co-admins for a Box Enterprise are the maintainers of the Box
instance and therefore are granted more access than a regular user. This means
that Admin Users can manage some resources like groups, users, and metadata
templates via the API, while regular Managed Users can not.

<Message>

# Log in as Admin User

Some applications require an Admin User to log in as the application requires
permissions that only Admin Users have to properly operate.

An example of this would be a security application that monitors an enterprise's
event feed and takes action on suspicious events. To monitor the enterprise feed
and take actions on other user's files the application would need admin level
access.

</Message>

## External Users

An externally managed user, or External User, is a Managed
User that belongs to a different enterprise than the application.

External users are often encountered when they are collaborated in on content
owned by a user of the application's enterprise, or when they authorize your
application via OAuth 2.0.

As External Users do not belong to the application's enterprise they don't
appear when retrieving a list of all users for an enterprise. Similarly,
applications can not create, edit, or otherwise manage External Users.

## Limitations & Considerations

There are a few limitations when using Managed Users via the Box API.

- It is not possible to access or a Managed User's data when using
JWT authentication unless the application has been configured to have
"Enterprise"-level "Application Access" in the developer dashboard.
- It is not possible to act on behalf of a Managed User's when using
JWT authentication unless the application has been configured to "Perform
Actions as Users" or "Generate User Access Tokens".