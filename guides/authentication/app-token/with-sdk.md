---
rank: 1
related_endpoints:
  - get_authorize
related_guides:
  - authentication/tokens/downscope
required_guides:
  - authentication/select
  - authentication/app-token/app-token-setup
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/app-token
is_index: false
id: authentication/app-token/with-sdk
type: guide
total_steps: 5
sibling_id: authentication/app-token
parent_id: authentication/app-token
next_page_id: authentication/app-token/without-sdk
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/app-token/with-sdk.md
---
# App Tokens with SDKs

The official Box SDKs have built-in support for App Token authentication.

App Token authentication is designed for working directly with the
Box API without requiring a user to redirect through Box to authorize your
application, yet is restricted to the application's own data.

<Message notice>

The method of authentication through JWT is inherently tied to the Service
Account for the application. Any API call made with this token will seem to
come from this application and will not have access to files and folders from
other users without explicitly getting access them.

</Message>

## Prerequisites

Before we can get started, you will need to have completed the following steps.

- Create a Box Application within the developer console
- Ensure the application is configured to use App Token authentication
- Generate a primary and secondary App Token for the application and store the tokens somewhere in your code.

## Initializing an SDK client

To initialize an SDK client for app token auth, ensure the SDK is installed and
then configure the SDK as follows.

<Tabs>

<Tab title='.Net'>

```csharp
var config = new BoxConfig("[CLIENT_ID]", "", new Uri("http://localhost"));
var session = new OAuthSession("[APP_TOKEN]", "N/A", 3600, "bearer");
var client = new BoxClient(config, session);
```

</Tab>

<Tab title='Java'>

```java
BoxTransactionalAPIConnection api = new BoxTransactionalAPIConnection("[APP_TOKEN]");
```

</Tab>

<Tab title='Python'>

```python
from boxsdk import Client, OAuth2

auth = OAuth2(access_token='[APP_TOKEN]')
client = Client(auth)
```

</Tab>

<Tab title='Node'>

```js
var BoxSDK = require('box-node-sdk');
var sdk = new BoxSDK({
    clientID: '[CLIENT_ID]',
    clientSecret: ''
});

var client = sdk.getBasicClient('[APP_TOKEN]');
```

</Tab>

</Tabs>

With this the application should be able to make API calls to any of the
[endpoints](g://authentication/app-token/endpoints) enabled for App Token auth.

## Using SDKs and Application Tokens

To learn more about Application Tokens for each SDK head over to:

- [.Net][.Net]

- [Java][Java]

- [Python][Python]

- [Node][Node]

[.Net]: https://github.com/box/box-windows-sdk-v2/blob/main/docs/authentication.md#box-view-authentication-with-app-tokens
[Java]: https://github.com/box/box-java-sdk/blob/main/doc/authentication.md#box-view-authentication-with-app-token
[Python]: https://github.com/box/box-python-sdk/blob/main/docs/usage/authentication.md#box-view-authentication-with-app-tokens
[Node]: https://github.com/box/box-node-sdk/blob/main/docs/authentication.md#box-view-authentication-with-app-tokens