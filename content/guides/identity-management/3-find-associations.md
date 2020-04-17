---
related_endpoints:
  - get-users
related_guides:
  - identity-management/create-association
---

# Find associated users

When a user logs into a Box custom application with their SSO provider, the
first step that should be taken is to see if that user already exists from a
previous login attempt where a Box user record was already created. 

If a Box user is found you should
[create a user access token](guide://authentication/jwt/user-access-tokens/),
or make [as user calls](guide://authentication/jwt/as-user/), to access Box
APIs as that user.

If a Box user is not found you should create a new user with an association to
the SSO user record. 

To search for existing users the [List Enterprise Users](ref://get-users/)
endpoint may be used. Depending on whether you're using the
`external_app_user_id` or `login` method your query will look slightly
different.

## Find user by `external_app_user_id`

To search for enterprise users by the stored `external_app_user_id` value you
will need one piece of information from the SSO provider:

* UID (required): The unique identifier from the SSO user record.

Once available, make a request to the list enterprise users endpoint, supplying
the `external_app_user_id` definition in the parameters.

<Tabs>
  <Tab title='Node'>
    ```js
    const ssoUID = 'SSO User Unique ID';

    // Check enterprise users for matching external_app_user_id against SSO UID
    client.enterprise.getUsers({ "external_app_user_id": ssoUID })
    .then((users) => {
      if (users.total_count > 0) {
        // User found, fetch user ID
        const userId = users.entries[0].id;
      } else {
        // User not found - create new user record
      }
    });
    ```
  </Tab>
  <Tab title='Java'>
    ```java
    String ssoUID = "SSO User Unique ID";

    // Check enterprise users for matching external_app_user_id against SSO UID
    URL url = new URL("https://api.box.com/2.0/users?external_app_user_id=" + ssoUID);
    BoxAPIRequest request = new BoxAPIRequest(client, url, "GET");
    BoxJSONResponse jsonResponse = (BoxJSONResponse) request.send();
    JsonObject jsonObj = jsonResponse.getJsonObject();
    JsonValue totalCount = jsonObj.get("total_count");

    if (totalCount.asInt() > 0) {
      // User found, fetch 
      // Fetch user ID
      JsonArray entries = (JsonArray) jsonObj.get("entries");
      JsonObject userRecord = (JsonObject) entries.get(0);
      JsonValue userId = userRecord.get("id");
    } else {
      // User not found - create new user record
    }
    ```
  </Tab>
  <Tab title='Python'>
    ```python
    sso_uid = 'SSO User Unique ID'

    # Validate is user exists
    url = f'https://api.box.com/2.0/users?external_app_user_id={sso_uid}'
    headers = {'Authorization': 'Bearer ' + access_token}
    response = requests.get(url, headers=headers)
    user_info = response.json()

    if (user_info['total_count'] == 0):
      # User not found - create new user record
    else:
      # User found, fetch user ID
      user = user_info['entries'][0]
      user_id = user['id']
    ```
  </Tab>
</Tabs>

## Find user by email address

To search for enterprise users by their `login` email you
will need one piece of information from the SSO provider:

* Email (required): The unique email from the SSO user record.

Once available, make a request to the list enterprise users endpoint, supplying
the email address as the `filter_term`, which is made available to search by
email or name.

<Tabs>
  <Tab title='Node'>
    ```js
    const ssoEmail = 'ssouser@email.com';

    client.enterprise.getUsers({filter_term: ssoEmail})
    .then(users => {
      if (users.total_count > 0) {
        // User found, fetch user ID
        const userId = users.entries[0].id;
      } else {
        // User not found - create new user record
      }
    });
    ```
  </Tab>
  <Tab title='Java'>
    ```java
    String ssoEmail = "ssouser@email.com";

    Iterable<BoxUser.Info> users = BoxUser.getAllEnterpriseUsers(client, ssoEmail);
    ```
  </Tab>
  <Tab title='Python'>
    ```python
    sso_email = 'ssouser@email.com'

    users = client.users(user_type='all', filter_term=ssoEmail)
    if (users['total_count'] == 0):
      # User not found - create new user record
    else:
      # User found, fetch user ID
      user = users['entries'][0]
      user_id = user['id']
    ```
  </Tab>
</Tabs>