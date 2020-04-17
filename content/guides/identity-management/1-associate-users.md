---
related_endpoints:
  - post_users
---

# Associate SSO users to Box

Your SSO service will have a unique user record for each person using it within
your company. When accessing a Box application through this SSO service, if
we're creating a Box user for each SSO user, then we need to create an
association between the SSO user and Box user records. 

When a user logs in to Box through the SSO service we will first search for the
user by the association. If a Box user record is found we can begin making
calls as that user to Box APIs. If there is no Box user found will then create
a new Box user with the association to the unique SSO user account.

Exploring the top level of a Box [user object](ref://resources/user/) we can see
the available options for adding the unique identifier from the SSO service
user object into the Box user object to bind the two together. 

```json
{
  "address": "900 Jefferson Ave, Redwood City, CA 94063",
  "avatar_url": "https://www.box.com/api/avatar/large/181216415",
  "can_see_managed_users": true,
  "created_at": "2012-12-12T10:53:43-08:00",
  "enterprise": { .. },
  "external_app_user_id": "my-user-1234",
  "hostname": "https://example.app.box.com/",
  "id": 11446498,
  "is_exempt_from_device_limits": true,
  "is_exempt_from_login_verification": true,
  "is_external_collab_restricted": true,
  "is_platform_access_only": true,
  "is_sync_enabled": true,
  "job_title": "CEO",
  "language": "en",
  "login": "ceo@example.com",
  "max_upload_size": 2147483648,
  "modified_at": "2012-12-12T10:53:43-08:00",
  "my_tags": [ .. ],
  "name": "Aaron Levie",
  "notification_email": { ... },
  "phone": 6509241374,
  "role": "admin",
  "space_amount": 11345156112,
  "space_used": 1237009912,
  "status": "active",
  "timezone": "Africa/Bujumbura",
  "tracking_codes": [{ .. }],
  "type": "user"
}
```

There are two recommended methods for creating a binding between a unique user
within the SSO service and a Box user, placing the unique SSO user ID within
the Box user `external_app_user_id` field, or using the unique SSO email address
as the login email for the new user.

## Using `external_app_user_id` (recommended method)

The `external_app_user_id` field was designed to hold a string identifier to
associate a Box user record with some external service, such as an SSO provider
user record.

Using the `external_app_user_id` field for associating the unique SSO user
account with a Box user account is the preferred method of connecting the two
accounts over email, for a number of reasons:

* Email association is only viable for
 [managed users](guide://authentication/user-types/managed-users/).
 [App users](guide://authentication/user-types/app-users/) are
 automatically assigned an email address by Box, meaning that you cannot assign
 the `login` to be the email from the SSO service. 
* Emails have to be unique in Box. This means that if your SSO service user
 signed up for Box using the same email address, which is not within your Box
 enterprise, then you will not be able to create a user with that email and
 won't be able to connect to that existing user.
* The `external_app_user_id` field was designed for this purpose.

## Using `login` (alternative method)

Using the `login` field of a user object to create an account association is
viable under a few conditions:

* Only the [managed users](guide://authentication/user-types/managed-users/)
 type is being used, not
 [app users](guide://authentication/user-types/app-users/).
* All email addresses and Box account creation requests are managed by your
 enterprise, meaning that users cannot independently create Box accounts with
 those email addresses.

<Message warning>
  Email addresses used for users in Box, under the `login` field, must be
  unique. Making a request to create a user with an email that already exists
  for another account will result in a `409 Conflict` error, stating that
  `user_login_already_used`
</Message>