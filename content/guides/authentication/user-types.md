---
rank: 2
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

# User types

There are a few types of users that an application might encounter. The key
differences the admin-level permissions of a user, and whether a user represents
a real Box user or a virtual user that is only visible to platform applications.

The type of user affects the type of data an application has access to, as a
user with admin permissions will have different permissions than a regular user.

## Overview

The following is a quick overview of the types of users available in the Box API.

|                  | Admin privileges                  | No admin privileges |
| ---------------- | --------------------------------- | ------------------- |
| Traditional user | Managed User with (co-)Admin role | Managed User        |
| Platform only    | Service Account                   | App User            |

<Message>
  # What type of user does my application use?

The type of user that an application is authenticated as is highly dependent
on the type of application created, as well as the type of authentication used
to create an Access Token.

</Message>

## Managed Users

A Managed User is the most regular Box user. It's an employee of an enterprise
that can log in to the Box web and mobile apps. There are a few variations of
Managed Users.

### Admin & co-admin roles

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

### External Users

An externally managed user, or External User, is a Managed
User that belongs to a different enterprise than the application.

External users are often encountered when they are collaborated in on content
owned by a user of the application's enterprise, or when they authorize your
application via OAuth 2.0.

As External Users do not belong to the application's enterprise they don't
appear when retrieving a list of all users for an enterprise. Similarly,
applications can not create, edit, or otherwise manage External Users.

### Limitations & Considerations

There are a few limitations when using Managed Users via the Box API.

- It is not possible to access or a Managed User's data when using
  JWT authentication unless the application has been configured to have
  "Enterprise"-level "Application Access" in the developer dashboard.
- It is not possible to act on behalf of a Managed User's when using
  JWT authentication unless the application has been configured to "Perform
  Actions as Users" or "Generate User Access Tokens".

## App Users

An App User is a virtual type of user that has no login credentials and
can only access Box via the API. This user can be used by applications that
manage their own user authentication yet want to store the data for these users
into separate Box user accounts.

Basic App Users can only be created when developing a Custom App using JWT
authentication and the user is very much tied to the application that created it.

### Service Accounts

A Service Account is a special kind of App User that is similar to an Admin User
yet has no login credentials and can only access Box via the API.

Service Accounts are automatically created when a Custom App is created in the
developer console with the JWT authentication method. When these applications
authenticate the default user it authenticates as is the Service Account for
that application.

With the right scopes configured Service Accounts can edit enterprise
permissions and manage both Managed Users and App Users.

<Message type='warning'>
  # Admin Approval

With the right scopes enabled a Service Account can perform many of the tasks that
Admin Users are able to perform. For this reason JWT applications need explicit
admin approval before they can be used in an enterprise.
</Message>

### Box view / Partner Integrations

A Service Account is also automatically tied to an application when a Partner
Integration (for Box View) is created in the developer console.

This Service Account has some additional restrictions that a Service Account
within a Custom App does not.

- All content used within the Partner Integration must be uploaded and owned by
  this Service Account
- The Service Account can not access any other user's information or content
- The Service Account can not create or otherwise manage any type of new user
- The Service Account can only access a subset of APIs related to previewing
  content
