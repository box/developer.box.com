---
related_endpoints:
  - post_users
related_guides:
  - identity-management/find-associations
---

# Create associated user

When a user signs in to a custom Box application for the first time using their
SSO provider credentials a new Box user will need to be created and associated
with their SSO user record using some piece of unique information from that SSO
user record. Typically the data that is used to make the association between
those two accounts is either a unique ID or an email address.

To make that association, a Box account may be created in a few ways:

* Using the `external_app_user_id` field of a Box user to store the unique ID
 from the SSO provider.
* Using the `login` field of a Box user to store the unique email from the SSO
 provider (managed users only).

## Create association with `external_app_user_id`

Using the `external_app_user_id` field of a Box user record is a viable option
for both app users and managed users, and is the recommended method when
associating a user record from an SSO provider with a Box user account.

### App user

To create a new Box app user with an `external_app_user_id` association to a
SSO user record you will need two pieces of information from the SSO provider:

* UID (required): The unique identifier from the SSO user record.
* Name (optional): To maintain uniformity between the records, the SSO user
 name may be extracted to associate with the Box user record.

Once available, make a request to create a new app user, supplying the optional
`external_app_user_id` definition in the user parameters.

<Tabs>
  <Tab title='Node'>
    ```js
    const ssoName = 'SSO User Name';
    const ssoUID = 'SSO User Unique ID';
    const spaceAmount = 1073741824;
    
    // Create app user
    client.enterprise.addAppUser(
      ssoName,
      {
        space_amount: spaceAmount,
        external_app_user_id: ssoUID
      }
    ).then(appUser => {
      console.log(`New user created: ${appUser.name}`);
    });
    ```
  </Tab>
  <Tab title='Java'>
    ```java
    String ssoName = "SSO User Name";
    String ssoUID = "SSO User Unique ID";

    // Create app user
    CreateUserParams params = new CreateUserParams();
    params.setExternalAppUserId(ssoUID);
    BoxUser.Info createdUserInfo = BoxUser.createAppUser(client, ssoName, params);

    outputString = "New user created: " + createdUserInfo.getName();
    ```
  </Tab>
  <Tab title='Python'>
    ```python
    sso_name = 'SSO User Name'
    sso_uid = 'SSO User Unique ID'
    space = 1073741824

    # Create app user
    user = box_client.create_user(sso_name, None, space_amount=space, external_app_user_id=sso_uid)
    print('New user created: {name}')
    ```
  </Tab>
</Tabs>

### Managed user

To create a new Box managed user with an `external_app_user_id` association to
a SSO user record you will need two pieces of information from the SSO
provider:
  
* Email (required): The unique email from the SSO user record.
* Name (optional): To maintain uniformity between the records, the SSO user
 name may be extracted to associate with the Box user record.

Once available, make a request to create a new managed user, supplying the
SSO user record email address for the login.

<Tabs>
  <Tab title='Node'>
    ```js
    const ssoName = 'SSO User Name';
    const ssoEmail = 'ssouser@email.com';
    const spaceAmount = 1073741824;
    
    // Create app user
    client.enterprise.addUser(
      ssoEmail,
      ssoName,
      {
        space_amount: spaceAmount
      }
    ).then(managedUser => {
      console.log(`New user created: ${managedUser.name}`);
    });
    ```
  </Tab>
  <Tab title='Java'>
    ```java
    String ssoName = "SSO User Name";
    String ssoEmail = "ssouser@email.com";

    // Create managed user
    BoxUser.Info createdUserInfo = 
      BoxUser.createEnterpriseUser(client, ssoEmail, ssoName);

    outputString = "New user created: " + createdUserInfo.getName();
    ```
  </Tab>
  <Tab title='Python'>
    ```python
    sso_name = 'SSO User Name'
    sso_email = 'ssouser@email.com'
    space = 1073741824

    # Create managed user
    user = box_client.create_user(sso_name, sso_email, space_amount=space)
    print('New user created: {name}')
    ```
  </Tab>
</Tabs>

## Create association by email

Creating a new [managed user](guide://authentication/user-types/managed-users/)
that is associated by the SSO user email address is the same process as
creating a standard managed user. 

After the user logs in via your SSO provider, if the user doesn't already exist
as a Box user, extract the email address from the SSO user record and make a
request to create a new Box managed user.

<Samples id='post_users'></Samples>
