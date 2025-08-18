---
rank: 2
related_endpoints:
  - post_users
related_guides:
  - users/create-managed-user
  - users/deprovision
  - users/deprovision/transfer-folders
related_pages: []
required_guides: []
related_resources:
  - user
alias_paths: []
category_id: users
subcategory_id: null
is_index: false
id: users/create-app-user
type: guide
total_steps: 4
sibling_id: users
parent_id: users
next_page_id: users/delete-user
previous_page_id: users/create-managed-user
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/users/create-app-user.md
---
# Create App User

App Users are programmatic user accounts that may only be created by apps that
are using [JWT authentication](g://authentication/jwt/jwt-setup).
They are designed to allow for users, groups, or processes to be represented
behind the scenes in an application without the need for the user to have a Box
account to log in.

App users can only be accessed by the Box application through the APIs and do
not have credentials to log in to `box.com` directly.

## Common App User Patterns

Typically app users are created for a number of different patterns:

* To represent a single application user or group of users without a `box.com` account.
* To represent an application process, such as having the app user monitor all events within an enterprise.
* To provide the application with the ability to completely control the file and folder structure of a user account without the possibility of that content being modified through the `box.com` web app.

## Creating a New App User

To generate a new app user, the minimal information that will be required will
be a name for the app user.

<Samples id='post_users_app' >

</Samples>

To see all available optional parameters that may be set when creating an app
user, see the [create user endpoint](endpoint://post-users).

<Message type='notice'>

Before you can make any changes to the newly created account, you need to
click the link you receive in the confirmation email.

</Message>

Once the app user is created a user object will be returned. Within the user
object is an ID for the app user, which may be used to make API requests to
modify the user in the future.