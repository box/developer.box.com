---
rank: 3
related_endpoints: []
related_guides:
  - authentication/jwt
  - getting-started/user-types
  - authentication/select
required_guides:
  - authentication/oauth2/with-sdk
  - getting-started/user-types
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/jwt
is_index: false
id: authentication/jwt/as-user
type: guide
total_steps: 5
sibling_id: authentication/jwt
parent_id: authentication/jwt
next_page_id: authentication/jwt/user-access-tokens
previous_page_id: authentication/jwt/without-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/jwt/as-user.md
---
# as-user Header

It is possible to for a JWT application to act on behalf of another user
by leveraging the `as-user` header.

```curl
curl https://api.box.com/2.0/folders/0 \
  -H "as-user: [USER_ID]"
  -H "authorization: Bearer [ACCESS_TOKEN]"
```

<Message>

In this situation the user ID is the Box identifier for a user. User IDs can
found for any user via the `GET /users` endpoint, which is only available to
admins, or by calling the `GET /users/me` endpoint with an authenticated user
session.

</Message>

## Preconditions

The application must be configured to perform actions as users in the
[Developer Console][devconsole].

<ImageFrame border center>

![Advanced Features](./enable-perform-actions-as-users.png)

</ImageFrame>

Additionally, the authenticated user needs to be a user with Admin permissions,
meaning either an Admin or Co-Admin. See our guide on
[User Types](g://getting-started/user-types) for more details.

<Message>

You cannot use the `user_id` of
[Service Accounts](g://getting-started/user-types/service-account)
in the as-user header.

</Message>

## as-user using SDKs

All of the [official Box SDKs][sdk] support acting on behalf of a user using the
`as-user` header.

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
[sdk]: g://tooling/sdks