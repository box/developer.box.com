---
rank: 1
related_endpoints:
  - get_authorize
related_guides:
  - applications/select
  - authentication/select
  - authentication/oauth2/oauth2-setup
required_guides:
  - authentication/select
  - authentication/oauth2/oauth2-setup
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/jwt
is_index: false
id: authentication/jwt/with-sdk
type: guide
total_steps: 5
sibling_id: authentication/jwt
parent_id: authentication/jwt
next_page_id: authentication/jwt/without-sdk
previous_page_id: authentication/jwt/jwt-setup
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/jwt/with-sdk.md
---
# JWT with SDKs

The official Box SDKs have built-in support for JWT authentication.

This guide will take you through user authentication using JWT with the use
of the Box SDKs. JWT authentication is designed for working directly with the
Box API without requiring a user to redirect through Box to authorize your
application.

## Overview

To complete a JWT authorization the following steps need to be completed.

1. Read the configuration file
2. Initialize an SDK client

At the end of this flow, the application has a Box SDK client that can be used to
make API calls on behalf of the application.

<Message notice>

The default method of authentication through JWT is inherently tied to the Service
Account for the application. Any API call made with this token will seem to
come from this application and will not have access to files and folders from
other users without explicitly getting access them.

</Message>

## Prerequisites

Before we can get started, you will need to have completed the following steps.

- Create a Box Application within the developer console
- Create and download the private key configuration file for your application
  and save it as `config.json`
- Ensure your Box Application is approved for usage within your enterprise

## 1. Read JSON configuration

After creating a Box Application there should be a `config.json` file containing
the application's private key and other details. The following is an example.

<Tabs>

<Tab title='config.json'>

<!-- markdownlint-disable line-length -->

```json
{
  "boxAppSettings": {
    "clientID": "abc...123",
    "clientSecret": "def...234",
    "appAuth": {
      "publicKeyID": "abcd1234",
      "privateKey": "-----BEGIN ENCRYPTED PRIVATE KEY-----\n....\n-----END ENCRYPTED PRIVATE KEY-----\n",
      "passphrase": "ghi...345"
    }
  },
  "enterpriseID": "1234567"
}
```

<!-- markdownlint-enable line-length -->

</Tab>

</Tabs>

To use this object in the application it needs to be read from file.

<Tabs>

<Tab title='.Net'>

```dotnet
var reader = new StreamReader("path/to/config.json");
var json = reader.ReadToEnd();
var config = BoxConfig.CreateFromJsonString(json);
```

</Tab>

<Tab title='Java'>

```java
Reader reader = new FileReader("path/to/config.json");
BoxConfig config = BoxConfig.readFrom(reader);
```

</Tab>

<Tab title='Python'>

```python
from boxsdk import JWTAuth

config = JWTAuth.from_settings_file('path/to/config.json')
```

</Tab>

<Tab title='Node'>

```js
var config = require('path/to/config.json');
```

</Tab>

</Tabs>

<Message>

# Parsing JSON

In some programming languages there is more than one way to read and parse
JSON from a file. Refer to guides on your preferred programming language for
more complete guides, including error handling.

</Message>

## 2. Initialize SDK client

The next step is to configure the Box SDK with the configuration and then
initialize the client to connect as the application.

<Tabs>

<Tab title='.Net'>

```dotnet
var sdk = new BoxJWTAuth(config);
var token = sdk.AdminToken();
BoxClient client = sdk.AdminClient(token);
```

</Tab>

<Tab title='Java'>

```java
BoxDeveloperEditionAPIConnection api = BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(config);
```

</Tab>

<Tab title='Python'>

```python
client = Client(config)
```

</Tab>

<Tab title='Node'>

```js
var sdk = BoxSDK.getPreconfiguredInstance(config);
var client = sdk.getAppAuthClient('enterprise');
```

</Tab>

</Tabs>

<Message warning>

# Service Accounts

At this point the application is authenticated as an application user, not as
a managed or app user. Head over to our guide on [User
Types](page://platform/user-types) to learn more about the different types
of users.

</Message>

## Summary

By now the application should be able to authorize an application using JWT
with any of our official SDKs, by using the following steps.

1. Read the configuration file
2. Initialize an SDK client

To learn how to use this client head over to the guide on [Making API
calls](g://api-calls).

## Using SDKs and JSON Web Tokens

To learn more about JWT for each SDK head over to:

- [.Net][.Net]

- [Java][Java]

- [Python][Python]

- [Node][Node]

- [IOS][IOS]

[.Net]: https://github.com/box/box-windows-sdk-v2/blob/main/docs/authentication.md#server-auth-with-jwt
[Java]: https://github.com/box/box-java-sdk/blob/main/doc/authentication.md#server-authentication-with-jwt
[Python]: https://github.com/box/box-python-sdk/blob/main/docs/usage/authentication.md#server-auth-with-jwt
[Node]: https://github.com/box/box-node-sdk/blob/main/docs/authentication.md#server-auth-with-jwt
[IOS]: https://github.com/box/box-ios-sdk/blob/main/docs/usage/authentication.md#server-auth-with-jwt