---
rank: 3
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - authentication/user-types
required_guides: []
related_resources:
  - user
---

# Managed & External Users

## Managed Users

Managed Users are accounts in a Box enterprise that Admins and Co-Admins can
directly edit, delete, enforce security settings, and run reports against
through the Admin Console. These users consume a standard Box
license and often, but not always, share the same email domain.

<Message>
  # Log in as Admin User

Some applications need permissions that only Admins have in order to 
properly operate and therefore require an Admin to log in. 

An example of this would be a security application that monitors enterprise
events and takes action on suspicious events. The events endpoint can only 
be used by Admins or a Co-Admin with permission to access reporting. 

</Message>

### Limitations & Considerations

There are a few limitations when using Managed Users via the Box API.

- It is not possible to access or a Managed User's data when using
  JWT authentication unless the application has been configured to have
  "Enterprise"-level Application Access in the [Developer Console][dc].
- It is not possible to act on behalf of a Managed User's when using
  JWT authentication unless the application has been configured to "Perform
  Actions as Users" or "Generate User Access Tokens".

## External Users

An externally managed user, or External User, is a Managed
User that belongs to a different enterprise. An external user is often
encountered with collaborations. External users are often encountered when they
are collaborated in on content owned by a user of the application's enterprise,
or when they authorize an OAuth 2.0 application. These users still have
their own Box accounts, but cannot be managed via the Admin Console.

### Limitations & Considerations

There are a few limitations when using External Users via the Box API.

- Because External Users do not belong to the application's enterprise, they will
  not return when retrieving a list of all users for an enterprise.
- Applications cannot create, edit, or otherwise manage External Users.

[dc]: https://app.box.com/developers/console