---
type: quick-start
hide_in_page_nav: true
category_id: sso
subcategory_id: sso/quick-start
is_index: false
id: sso/quick-start/box-users
rank: 5
total_steps: 6
sibling_id: sso/quick-start
parent_id: sso/quick-start
next_page_id: sso/quick-start/run-sample
previous_page_id: sso/quick-start/okta-login
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/guides/sso/quick-start/5-box-users.md
---

# Connect Okta to Box Users

At this point we have application code that will handle traffic from users
visiting, forward them to Okta to login, provide Okta user information, before
finally handing off to a yet to be created handler for Box.

This section will cover the final Box components:

* Validating if an Okta user has an associated Box app user account.
* Creating a new app user for the associated Okta record if they don't.
* Fetching tokens for the Box user to make user-specific API calls.

## Create New App Users

Before validating users we need a method for creating an associated Box user
account if one doesn't already exist for the Okta user.

<Grid columns='3'>

<Choose option='programming.platform' value='node' color='blue'>

# Node/Express

</Choose>

<Choose option='programming.platform' value='java' color='white'>

# Java/Spring Boot

</Choose>

<Choose option='programming.platform' value='python' color='blue'>

# Python/Flask

</Choose>

</Grid>

<Choice option='programming.platform' value='node' color='blue'>

In your local application directory, load the `server.js` file created in
step 1.

Add the following `box` object into the file and save.

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

This object defines a number of definitions:

* Configuration: A new instance of the Box Node SDK is instantiated and made
 available to the object functions, along with a number of variables.
* `validateUser` function: Will house the code to validate whether a Box user
 exists for an associated Okta user.
* `createUser` function: Creates a new Box user bound to the associated Okta
 user ID.

With that structure defined, replace the `// TODO: CREATE USER` section with
the following code.

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

This code will create a new Box app user and will set the
`external_app_user_id` parameter of the user object to the unique Okta user ID,
which will define the binding between the two user records.

</Choice>
<Choice option='programming.platform' value='java' color='white'>

In your local application directory, load the
`/src/main/java/com/box/sample/Application.java` file created in step 1, or
similar directory if an alternate application name was used.

Within the `public class Application` definition, add the following methods:

```java
static String validateUser(OidcUser user) throws IOException {
  // TODO: VALIDATE USER
}

static String createUser(OidcUser user) {
  # TODO: CREATE USER
}
```

These methods will handle the Box user validation and creation. Breaking them
down:

* `validateUser`: Will house the code to validate whether a Box user
 exists for an associated Okta user.
* `createUser`: Creates a new Box user bound to the associated Okta
 user ID.

With those methods defined, replace `# TODO: CREATE USER` with the following
code:

```java
// No user found, create new app user from Okta record
String oktaName = (String) user.getAttributes().get("name");
Object oktaSub = user.getAttributes().get("sub");

CreateUserParams params = new CreateUserParams();
params.setExternalAppUserId((String) oktaSub);
BoxUser.Info createdUserInfo = BoxUser.createAppUser(api, oktaName, params);

return "New User Created: " + createdUserInfo.getName();
```

This code will create a new Box app user and will set the
`external_app_user_id` parameter of the user object to the unique Okta user ID,
which will define the binding between the two user records.

</Choice>
<Choice option='programming.platform' value='python' color='blue'>

In your local application directory, load the `server.py` file created in step
1.

Add the following `Box` class object to the existing code, below the route
definitions.

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

This class defines:

* `init`: When initialized, a new instance of the Box Python SDK is
 instantiated and made available to the object methods.
* `validateUser` method: Accepting a user object as input, this will house the
 code to validate whether a Box user exists for an associated Okta user.
* `createUser` method: Accepting a user object as input, this creates a new Box
 user bound to the associated Okta user ID.

With that class defined, replace the `# TODO: CREATE USER` section with
the following code.

```python
user_name = f'{ouser.profile.firstName} {ouser.profile.lastName}'
uid = ouser.id
space = 1073741824

# Create app user
user = self.box_client.create_user(user_name, None, space_amount=space, external_app_user_id=uid)
print(f'user {user_name} created')
```

This code will create a new Box app user and will set the
`external_app_user_id` parameter of the user object to the unique Okta user ID,
which will define the binding between the two user records.

</Choice>

## Validate Okta Users

With the create user functionality defined, let's turn our attention to
defining the code for validating whether an Okta user record has an associated
Box user record by searching all Box enterprise users for the associated
`external_app_user_id`.

<Grid columns='3'>

<Choose option='programming.platform' value='node' color='blue'>

# Node/Express

</Choose>

<Choose option='programming.platform' value='java' color='white'>

# Java/Spring Boot

</Choose>

<Choose option='programming.platform' value='python' color='blue'>

# Python/Flask

</Choose>

</Grid>

<Choice option='programming.platform' value='node' color='blue'>

Replace the `// TODO: VALIDATE USER` comment with the following:

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

Using the Box Node SDK, we call `enterprise.getUsers` to search all enterprise
users, and pass in the unique Okta user ID as the `external_app_user_id` value
to search specifically for that user.

If found (number of records is greater than 0) we can make an
authenticated call to the Box APIs using that user record, which will be
defined in the next section.

If not found, we call the `createUser` function we defined in the last section
to create a new Box user with that `external_app_user_id` association.

</Choice>
<Choice option='programming.platform' value='java' color='white'>

Replace the `// TODO: VALIDATE USER` comment with the following:

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

Using the Box Java SDK generic request method, we make a call directly to the
`https://api.box.com/2.0/users` endpoint to search enterprise users, passing in
the unique Okta user ID as the `external_app_user_id` value to search
specifically for that user.

If found (number of records is greater than 0) we can make an
authenticated call to the Box APIs using that user record, which will be
defined in the next section.

If not found, we call the `createUser` function we defined in the last section
to create a new Box user with that `external_app_user_id` association.

</Choice>
<Choice option='programming.platform' value='python' color='blue'>

Replace the `# TODO: VALIDATE USER` comment with the following:

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

Using the Box Python SDK generic request method, we make a call directly to the
`https://api.box.com/2.0/users` endpoint to search enterprise users, passing in
the unique Okta user ID as the `external_app_user_id` value to search
specifically for that user.

If found (number of records is greater than 0) we can make an
authenticated call to the Box APIs using that user record, which will be
defined in the next section.

If not found, we call the `createUser` function we defined in the last section
to create a new Box user with that `external_app_user_id` association.

</Choice>

## Make Authenticated Box User Calls

Once an associated Box user is found for the Okta user we're going to generate
an access token specifically
[scoped for that user](g://authentication/jwt/user-access-tokens/) to make Box
API calls, then make a call to get the current user to ensure that everything
is working and that we have a valid user access token.

<Grid columns='3'>

<Choose option='programming.platform' value='node' color='blue'>

# Node/Express

</Choose>

<Choose option='programming.platform' value='java' color='white'>

# Java/Spring Boot

</Choose>

<Choose option='programming.platform' value='python' color='blue'>

# Python/Flask

</Choose>

</Grid>

<Choice option='programming.platform' value='node' color='blue'>

Replace `// TODO: MAKE AUTHENTICATED USER CALL` from the previous section with
the following:

```js
// User found, get user ID and fetch user token
this.userId = result.entries[0].id;
this.userClient = sdk.getAppAuthClient('user', this.userId);

this.userClient.users.get(this.userClient.CURRENT_USER_ID)
.then(currentUser => {
  console.log(currentUser);
});
```

With a user found we capture the Box user ID, then generate a user client
object scoped for that user. We finish by making a call to fetch the current
user with the user client object, which should return the user profile
information for the Okta associated Box app user.

</Choice>
<Choice option='programming.platform' value='java' color='white'>

<!-- markdownlint-disable line-length -->

Replace `// TODO: MAKE AUTHENTICATED USER CALL` from the previous section with
the following:

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

With a user found we capture the Box user ID, then generate a user client
object scoped for that user. We finish by making a call to fetch the current
user with the user client object, which should return the user profile
information for the Okta associated Box app user.

<!-- markdownlint-enable line-length -->

</Choice>
<Choice option='programming.platform' value='python' color='blue'>

Replace `# TODO: MAKE AUTHENTICATED USER CALL` from the previous section with
the following:

```python
# Create user client based on discovered user
user = user_info['entries'][0]
user_to_impersonate = self.box_client.user(user_id=user['id'])
user_client = self.box_client.as_user(user_to_impersonate)

# Get current user
current_user = self.box_client.user().get()
print(current_user.id)
```

With a user found we capture the Box user ID, then generate a user client
object scoped for that user. We finish by making a call to fetch the current
user with the user client object, which should return the user profile
information for the Okta associated Box app user.

</Choice>

## Summary

* You've validated whether an Okta user exists as a Box user.
* You've creating a new app user if they don't exist.
* You're making a Box API call for an existing Box user.

<Observe option='box.app_type' value='use_own,create_new_'>
<Next>

I have set up Box user validation and creation

</Next>

</Observe>
