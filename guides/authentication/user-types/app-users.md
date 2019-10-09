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
cId: authentication
scId: authentication/user-types
id: authentication/user-types/app-users
isIndex: false
---

# App Users & Service Accounts

An App User is a virtual type of user that has no login credentials and
can only access Box via the API. This user can be used by applications that
manage their own user authentication yet want to store the data for these users
into separate Box user accounts.

Basic App Users can only be created when developing a Custom App using JWT
authentication and the user is very much tied to the application that created it.

## Service Accounts

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

## Box View / Partner Integrations

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
