---
rank: 1
related_endpoints: 
  - get_authorize
related_guides:
  - applications/select
  - authentication/select
  - appplications/oauth2/setup
required_guides:
  - tooling/sdks
  - authentication/select
  - appplications/oauth2/setup
related_resources: []
alias_paths: []
---

# OAuth 2.0 with SDKs

The Box SDKs have built-in support for client-side OAuth 2.0.

In the process a user is redirected to the Box web app in a browser where they
log in and authorize the application access to their data before they are
redirected back to the applications `redirect_url`. This last step requires the
application to be running on a web server somewhere accessible to the user.

## Overview

To complete an OAuth 2.0 flow the following steps need to be completed.

1. [Configure the Box SDK](#1-configure-sdk)
2. [Redirect the user to the Box website](#2-redirect-user)
3. [The user grants the application access](#3-user-grants-application-access)
4. [Exchange the authorization code for an access token](#4-exchange-code)

At the end of this flow, the application has an Access Token that can be used to
make API calls on behalf of this user.

<Message notice>
  The action token acquired through OAuth 2.0 is inherently tied to the user who
  authorized the application. Any API call made with this token will seem to
  come from this application, and the user needs to have access to any file or
  folder the application tries to access with this token.
</Message>

## Parameters

<!-- markdownlint-disable line-length -->

| Parameter       | Description                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_ID`     | The client ID or API key for the application                                                                                                                  |
| `CLIENT_SECRET` | The client secret or API secret for the application                                                                                                           |
| `REDIRECT_URI`  | The redirect URL for your application that a user will be sent to after they have authorized the application. This can be configured in the developer console |

<!-- markdownlint-enable line-length -->

## 1. Configure SDK

The first step is to make sure your environment has been prepared with the SDK of
your choice.

<Tabs>
  <Tab title='.NET'>

```dotnet
var redirectUrl = "[REDIRECT_URI]";
var config = new BoxConfig("[CLIENT_ID]", "[CLIENT_SECRET]", new Uri(redirectUrl));
var sdk = new BoxClient(config);
```

  </Tab>
  <Tab title='Java'>

<!-- markdownlint-disable line-length -->

```java
import com.box.sdk.BoxAPIConnection;

String authorizationUrl = "https://account.box.com/api/oauth2/authorize?client_id=[CLIENT_ID]&response_type=code";
```

<!-- markdownlint-enable line-length -->

  </Tab>
  <Tab title='Python'>

```python
from boxsdk import OAuth2

sdk = OAuth2(
    client_id='[CLIENT_ID]',
    client_secret='[CLIENT_SECRET]'
)
```

  </Tab>
  <Tab title='Node'>

```js
var BoxSDK = require("box-node-sdk");

var sdk = new BoxSDK({
  clientID: "[CLIENT_ID]",
  clientSecret: "[CLIENT_SECRET]"
});
```

  </Tab>
</Tabs>

<CTA to="guide://tooling/sdks">
  Learn more about installing an SDK for your environment
</CTA>

## 2. Redirect user

Next, redirect the user to the authorization URL. Most of the SDKs support a
simple way to get the authorization URL for an SDK client.

<Tabs>
  <Tab title='.NET'>

```dotnet
var authorizationUrl = "https://account.box.com/api/oauth2/authorize?client_id=[CLIENT_ID]&response_type=code";
// redirectTo(authorizationUrl);
```

  </Tab>
  <Tab title='Java'>

<!-- markdownlint-disable line-length -->

```java
String authorizationUrl = "https://account.box.com/api/oauth2/authorize?client_id=[CLIENT_ID]&response_type=code";

// response.redirect(authorizationUrl);
```

<!-- markdownlint-enable line-length -->

  </Tab>
  <Tab title='Python'>

```python
auth_url, csrf_token = sdk.get_authorization_url('[REDIRECT_URL]')

// redirect(auth_url, code=302)
```

  </Tab>
  <Tab title='Node'>

```js
var authorize_url = sdk.getAuthorizeURL({
  response_type: "code"
});

// res.redirect(authorize_url)
```

  </Tab>
</Tabs>

<Message>
  The way in which a user is redirected to a URL depends on the application
  framework used. Most framework documentation provides extensive guidance on
  this topic.
</Message>

The [redirect URL](endpoint://get-authorize) can also be created manually as
follows.

<!-- markdownlint-disable line-length -->

```curl
https://account.box.com/api/oauth2/authorize?client_id=[CLIENT_ID]&redirect_uri=[REDIRECT_URI]&response_type=code
```

<!-- markdownlint-enable line-length -->

<Message>
  Additional query parameters can be passed along when redirecting the user to
  limit down the scope, or pass along some extra state. See the [reference
  documentation](endpoint://get-authorize) for more information.
</Message>

## 3. User grants application access

Once the user is redirected to the Box web app they will have to log in. After
they logged in they are presented with a screen to approve your application.

<ImageFrame border center shadow width="400">
  ![Example OAuth 2.0 approval screen](./oauth2-grant.png)
</ImageFrame>

When the user accepts this requests and clicks the button, the browser will
redirect to your application's redirect URL as configured in the developer console.

## 4. Exchange code

The user is redirected to your application's redirect URL with a query parameter
containing a short-lived authorization code.

```curl
https://your.domain.com/path?code=1234567
```

This code is not an [Access Token][tokens] and is only valid for a few seconds.
The SDKs can be used to exchange the code for an actual Access Token.

<Tabs>
  <Tab title='.NET'>

```dotnet
var session = await sdk.Auth.AuthenticateAsync("[CODE]");
var client = new BoxClient(config, session);
```

  </Tab>
  <Tab title='Java'>

```java
BoxAPIConnection client = new BoxAPIConnection(
  "[CLIENT_ID]",
  "[CLIENT_SECRET]",
  "[CODE]"
);
```

  </Tab>
  <Tab title='Python'>

```python
oauth.authenticate('[CODE]')
client = Client(oauth)
```

  </Tab>
  <Tab title='Node'>

```js
var code = "...";

sdk.getTokensAuthorizationCodeGrant("[CODE]", null, function(err, tokenInfo) {
  var client = sdk.getPersistentClient(tokenInfo);
});
```

  </Tab>
</Tabs>

At the end of this flow, the application has an Access Token that can be used to
make API calls on behalf of this user.

[tokens]: guide://authentication/access-tokens
