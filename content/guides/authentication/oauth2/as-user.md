---
rank: 3
related_endpoints: []
related_guides:
  - authentication/select
required_guides:
  - authentication/oauth2/with-sdk
related_resources: []
alias_paths: []
---

# As-User Header

It is possible to for an OAuth 2.0 application to act on behalf of another user
through the `as-user` header.

```curl
curl https://api.box.com/2.0/folders/0 \
  -H "as-user: [USER_ID]"
  -H "authorization: Bearer [ACCESS_TOKEN]"
```

<Message>
In this situation the user ID is the Box identifier for a user. User IDs can be
found for any user via the `GET /users` endpoint, which is only available to
admins, or by calling the `GET /users/me` endpoint with an authenticated user session.
</Message>

## Preconditions

Using the `as-user` header has a few requirements. Firstly, the application
needs to be configured to perform actions as users in the [Developer
Console][devconsole].

<ImageFrame border center>
  ![Advanced Features](./enable-perform-actions-as-users.png)
</ImageFrame>

Additionally, the authenticated user needs to be a user with admin permissions,
meaning either an admin, co-admin, or service account. Co-admin users will also
need the 'Manage Users' permission scope. See our guide on [User
Types](page://platform/user-types) for more details.

## as-user using SDKs

<Tabs>
  <Tab title='.NET'>

```csharp
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
