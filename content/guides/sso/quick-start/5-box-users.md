---
type: quick-start
hide_in_page_nav: true
---

# Connect Okta to Box Users

test

## Create New App Users

<Grid columns='3'>
  <Choose option='programming.platform' unset value='node'>
    # Node + Express
  </Choose>

  <Choose option='programming.platform' unset value='java'>
    # Java + Spring Boot
  </Choose>
  
  <Choose option='programming.platform' unset value='python'>
    # Python + Flask
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
    console.log(`New app user created with Box ID ${appUser.id}, Okta ID ${this.oktaRecord.sub}, and name ${appUser.name}`);
  });
```

</Choice>
<Choice option='programming.platform' value='java'>
  
```java

```

</Choice>
<Choice option='programming.platform' value='python'>
  
```python
  # Box user verification
  @app.route("/box_auth")
  @oidc.require_login
  def box_auth():
    box = Box();
    return box.validateUser(g)

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
  <Choose option='programming.platform' unset value='node'>
    # Node + Express
  </Choose>

  <Choose option='programming.platform' unset value='java'>
    # Java + Spring Boot
  </Choose>
  
  <Choose option='programming.platform' unset value='python'>
    # Python + Flask
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

```

</Choice>
<Choice option='programming.platform' value='python'>
  
```python

```

</Choice>

## Make Authenticated Box User Calls

<Grid columns='3'>
  <Choose option='programming.platform' unset value='node'>
    # Node + Express
  </Choose>

  <Choose option='programming.platform' unset value='java'>
    # Java + Spring Boot
  </Choose>
  
  <Choose option='programming.platform' unset value='python'>
    # Python + Flask
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
  
```java

```

</Choice>
<Choice option='programming.platform' value='python'>
  
```python

```

</Choice>

## Summary

* You are validating whether an Okta user exists as a Box user.
* You are creating a new app user if they don't exist.
* You are making a Box API call with the valid new or existing Box user.

<Observe option='box.app_type' value='use_own,create_new_'>
  <Next>I have set up Box user validation and creation</Next>
</Observe>