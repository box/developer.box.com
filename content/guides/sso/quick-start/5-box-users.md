---
type: quick-start
hide_in_page_nav: true
---

# Connect Okta to Box Users

test

## Create New App Users

<Grid columns='3'>
  <Choose option='programming.platform' value='node'>
    # Node/Express
  </Choose>

  <Choose option='programming.platform' value='java'>
    # Java/Spring Boot
  </Choose>
  
  <Choose option='programming.platform' value='python'>
    # Python/Flask
  </Choose>
</Grid>

<Choice option='programming.platform' value='node'>
  
```js
  const box = (() => {
    // Instantiate new Box client
    const configJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, './../config.json')));
    const sdk = boxSDK.getPreconfiguredInstance(configJSON);
    const client = sdk.getAppAuthClient('enterprise');

    let oktaRecord = {};
    let userId = '';
    let userClient;

    // Validate whether an app user already exists for the Okta ID
    function validateUser(userInfo) {
      // TODO: VALIDATE USER
    }

    // Create a new app user if an Okta record doesn't already exist
    function createUser() {
      // TODO: CREATE USER
    }

    return {
      validateUser,
      createUser
    };
  })();
```

```js
  const spaceAmount = 1073741824;   // ~ 1gb

  // Create app user
  client.enterprise.addAppUser(
    this.oktaRecord.name, 
    {
      space_amount: spaceAmount,
      external_app_user_id: this.oktaRecord.sub
    }
  ).then(appUser => {
    console.log(`New app user ${appUser.name} created`);
  });
```

</Choice>
<Choice option='programming.platform' value='java'>
  
```java
  static String validateUser(OidcUser user) throws IOException {
    // TODO: VALIDATE USER
  }

  static String createUser(OidcUser user) {
    # TODO: CREATE USER
  }
```

```java
  // No user found, create new app user from Okta record
  String oktaName = (String) user.getAttributes().get("name");
  Object oktaSub = user.getAttributes().get("sub");

  CreateUserParams params = new CreateUserParams();
  params.setExternalAppUserId((String) oktaSub);
  BoxUser.Info createdUserInfo = BoxUser.createAppUser(api, oktaName, params);

  return "New User Created: " + createdUserInfo.getName();
```

</Choice>
<Choice option='programming.platform' value='python'>
  
```python
  # Box user class
  class Box(object):
    def __init__(self):
      # Instantiate Box Client instance
      auth = JWTAuth.from_settings_file('../config.json')
      self.box_client = Client(auth)

    # Validate if Box user exists
    def validateUser(self, g):
      # TODO: VALIDATE USER

    # Create new Box user
    def createUser(self, ouser):
     # TODO: CREATE USER
```

```python
  user_name = f'{ouser.profile.firstName} {ouser.profile.lastName}'
  uid = ouser.id
  space = 1073741824

  # Create app user
  user = self.box_client.create_user(user_name, None, space_amount=space, external_app_user_id=uid)
  print(f'user {user_name} created')
```

</Choice>

## Validate Okta Users

<Grid columns='3'>
  <Choose option='programming.platform' value='node'>
    # Node/Express
  </Choose>

  <Choose option='programming.platform' value='java'>
    # Java/Spring Boot
  </Choose>
  
  <Choose option='programming.platform' value='python'>
    # Python/Flask
  </Choose>
</Grid>

<Choice option='programming.platform' value='node'>
  
```js
  this.oktaRecord = userInfo

  client.enterprise.getUsers({ "external_app_user_id": this.oktaRecord.sub })
  .then((result) => {
    if (result.total_count > 0) {
      // TODO: MAKE AUTHENTICATED USER CALL
    } else {
      // User not found - create user
      this.createUser();
    }
  });
```

</Choice>
<Choice option='programming.platform' value='java'>
  
```java
  // Set up Box enterprise client
  Reader reader = new FileReader("config.json");
  BoxConfig config = BoxConfig.readFrom(reader);
  api = BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(config);

  // Get Okta user sub for unique ID attachment to Box user
  Object oktaSub = user.getAttributes().get("sub");

  // Check enterprise users for matching external_app_user_id against Okta sub
  URL url = new URL("https://api.box.com/2.0/users?external_app_user_id=" + oktaSub);
  BoxAPIRequest request = new BoxAPIRequest(api, url, "GET");
  BoxJSONResponse jsonResponse = (BoxJSONResponse) request.send();
  JsonObject jsonObj = jsonResponse.getJsonObject();
  JsonValue totalCount = jsonObj.get("total_count");

  // Set return string
  String outputString = "";

  if (totalCount.asInt() > 0) {
    // TODO: MAKE AUTHENTICATED USER CALL
  } else {
    outputString = createUser(user);
  }

  return outputString;
```

</Choice>
<Choice option='programming.platform' value='python'>
  
```python
  # Fetch Okta user ID
  uid = g.user.id

  # Validate is user exists
  url = f'https://api.box.com/2.0/users?external_app_user_id={uid}'
  response = self.box_client.make_request('GET', url)
  user_info = response.json()

  # If user not found, create user, otherwise fetch user token
  if (user_info['total_count'] == 0):
    self.createUser(g.user)
  else:
    # TODO: MAKE AUTHENTICATED USER CALL

  return 'Complete'
```

</Choice>

## Make Authenticated Box User Calls

<Grid columns='3'>
  <Choose option='programming.platform' value='node'>
    # Node/Express
  </Choose>

  <Choose option='programming.platform' value='java'>
    # Java/Spring Boot
  </Choose>
  
  <Choose option='programming.platform' value='python'>
    # Python/Flask
  </Choose>
</Grid>

<Choice option='programming.platform' value='node'>
  
```js
  // User found, get user ID and fetch user token
  this.userId = result.entries[0].id;
  this.userClient = sdk.getAppAuthClient('user', this.userId);

  this.userClient.users.get(this.userClient.CURRENT_USER_ID)
  .then(currentUser => {
    console.log(currentUser);
  });
```

</Choice>
<Choice option='programming.platform' value='java'>
<!-- markdownlint-disable line-length -->

```java
  // User found, authenticate as user
  // Fetch user ID
  JsonArray entries = (JsonArray) jsonObj.get("entries");
  JsonObject userRecord = (JsonObject) entries.get(0);
  JsonValue userId = userRecord.get("id");

  // Get user scoped access token and fetch current user with it
  BoxDeveloperEditionAPIConnection userApi = BoxDeveloperEditionAPIConnection.getAppUserConnection(userId.asString(), config);
  BoxUser currentUser = BoxUser.getCurrentUser(userApi);
  BoxUser.Info currentUserInfo = currentUser.getInfo();

  outputString = "Hello " + currentUserInfo.getName();
```

<!-- markdownlint-enable line-length -->
</Choice>
<Choice option='programming.platform' value='python'>
  
```python
  # Create user client based on discovered user
  user = user_info['entries'][0]
  user_to_impersonate = self.box_client.user(user_id=user['id'])
  user_client = self.box_client.as_user(user_to_impersonate)

  # Get current user
  current_user = self.box_client.user().get()
  print(current_user.id)

  # Get all items in a folder
  items = user_client.folder(folder_id='0').get_items()
  for item in items:
    print('{0} {1} is named "{2}"'.format(item.type.capitalize(), item.id, item.name))
```

</Choice>

## Summary

* You've validated whether an Okta user exists as a Box user.
* You've creating a new app user if they don't exist.
* You're making a Box API call for an existing Box user.

<Observe option='box.app_type' value='use_own,create_new_'>
  <Next>I have set up Box user validation and creation</Next>
</Observe>