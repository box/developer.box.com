---
rank: 3
related_endpoints: []
related_guides:
  - authentication/jwt
  - authentication/user-types
  - authentication/select
required_guides:
  - authentication/oauth2/with-sdk
  - authentication/user-types
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/jwt
is_index: false
id: authentication/jwt/as-user
type: guide
total_steps: 4
sibling_id: authentication/jwt
parent_id: authentication/jwt
next_page_id: authentication/jwt/user-access-tokens
previous_page_id: authentication/jwt
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/authentication/jwt/as-user.md
---

# As-User Header

It is possible to for a JWT application to act on behalf of another user
through the `As-User` header.

```curl
curl https://api.box.com/2.0/folders/0 \
  -H "As-User: [USER_ID]"
  -H "Authorization: Bearer [ACCESS_TOKEN]"
```

<Message>

In this situation the user ID is the Box identifier for a user. User IDs can
found for any user via the `GET /users` endpoint, which is only available to
admins, or by calling the `GET /users/me` endpoint with an authenticated user session.

</Message>

## Preconditions

Using the `As-User` header has a few requirements. Firstly, the application
needs to be configured to perform actions as users in the [developer
console][devconsole].

<ImageFrame border center>

![Advanced Features](./enable-perform-actions-as-users.png)

</ImageFrame>

Additionally, the authenticated user needs to be a user with admin permissions,
meaning either an admin, co-admin, or service account. See our guide on [User
Types](g://authentication/user-types) for more details.

## As-User using SDKs

All of the official SDKs support acting on behalf of a user using the `As-User` header.

<Tabs>

<Tab title='.NET'>

```dotnet
var user_client = new BoxClient(config, session, asUser: '[USER_ID]');
```

</Tab>
<Tab title='Java'>

```java
client.asUser([USER_ID]");
// client.asSelf();
```

</Tab>
<Tab title='Python'>

```python
user_to_impersonate = client.user(user_id='[USER_ID]')
user_client = client.as_user(user_to_impersonate)
```

</Tab>
<Tab title='Node'>

```js
client.asUser('[USER_ID]');
// client.asSelf();
```

</Tab>

</Tabs>

<Message warning>

Please note that some of our SDKs create new clients for the other user, while
others modify the existing client and provide a way to return to a state where
the client authenticates for the original user itself.

</Message>

[devconsole]: https://app.box.com/developers/console
