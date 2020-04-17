---
type: quick-start
hide_in_page_nav: true
category_id: identity-management
subcategory_id: identity-management/quick-start
is_index: false
id: identity-management/quick-start/logging-into-app
rank: 4
total_steps: 6
sibling_id: identity-management/quick-start
parent_id: identity-management/quick-start
next_page_id: identity-management/quick-start/find-or-create-box-users
previous_page_id: identity-management/quick-start/configure-box
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/guides/identity-management/quick-start/4-logging-into-app.md
---

# Logging into the app with Okta

With the Okta, Box, and basic application set up, we can turn our attention to
the first step in the application code flow, the Okta login.

During the Okta login we will employ the OpenID Connect (OIDC) frameworks of
the language used to redirect the user to Okta to log in and pass Okta user
information back to the application. Those Okta user details will in turn be
used to validate and create Box users in the next step.

This section will walk you through:

* Setting up the application configuration skeleton.
* Defining the routes for the chosen framework to handle user traffic.
* Passing Okta user information to the next Box user validation step.

## Set up the Skeleton

<Choice option='programming.platform' value='node' color='blue'>

In your local application directory, load the `server.js` file created in
step 1.

Copy the following basic application structure into the file and save. 

```js
const session = require('express-session');               // Express sessions
const { ExpressOIDC } = require('@okta/oidc-middleware'); // Express OIDC
const bodyParser = require('body-parser')                 // Body Parser
const boxSDK = require('box-node-sdk');                   // Box SDK
const config = require('./config.js')                     // Keys and config
const express = require('express')();                     // Express
const http = require('http');                             // HTTP server
const path = require('path');                             // Path for directory
const fs = require('fs');                                 // File system

/*********************************************************************
* Configuration
*********************************************************************/
// session support is required to use ExpressOIDC
express.use(session({
  secret: 'this should be secure',
  resave: true,
  saveUninitialized: false
}));

const oidc = new ExpressOIDC({
  issuer: `https://${config.oktaOrgUrl}/oauth2/default`,
  client_id: config.oktaClientId,
  client_secret: config.oktaClientSecret,
  appBaseUrl: config.oktaBaseUrl,
  loginRedirectUri: `${config.oktaBaseUrl}${config.oktaRedirect}`,
  scope: 'openid profile'
});

express.use(oidc.router);
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({
  extended: true
})); 

/*********************************************************************
* Routes
*********************************************************************/
// Redirect to Okta login
express.get('/', (req, res) => {
  // TODO: HANDLE ROUTE
});

/*********************************************************************
* Server
*********************************************************************/
// Create server
const port = process.env.PORT || 3000;
http.createServer(express).listen(port, () => {
  console.log(`Server started: Listening on port ${port}`);
});
```

Beyond the package definitions, this skeleton will handle the following:

* Configuration: Sets up the Express configuration and Okta OIDC connector
 information. Express is set to use the OIDC connector and the Okta
 information that we saved in step 2 of this quick start is used to configure
 the connector for our Okta integration.
* Routes: Defines the entry route for our application. When a user attempts to
 visit our application root (`/`) the code within this route will be run.
* Server: Initialized the Express server to listen for traffic.

</Choice>
<Choice option='programming.platform' value='java' color='white'>

In your local application directory, load the
`/src/main/java/com/box/sample/Application.java` file created in step 1, or
similar directory if an alternate application name was used.

Copy the following basic application structure into the file and save.

```java
package com.box.okta.sample;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.net.URL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.box.sdk.BoxAPIRequest;
import com.box.sdk.BoxConfig;
import com.box.sdk.BoxDeveloperEditionAPIConnection;
import com.box.sdk.BoxJSONResponse;
import com.box.sdk.BoxUser;
import com.box.sdk.CreateUserParams;
import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

@RestController
@EnableAutoConfiguration
public class Application {
  // Box API connection
  static BoxDeveloperEditionAPIConnection api;

  @RequestMapping("/")
  String home(@AuthenticationPrincipal OidcUser user) throws IOException {
    // TODO: HANDLE ROUTE
  }

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
```

Beyond the import statements, this skeleton will handle the following:

* Box API connection: A standard shared Box API connection attribute, to be
 defined in the next step.
* Routes: Defines the entry route for our application. When a user attempts to
 visit our application root (`/`) in a logged out state, the OIDC connector
 will automatically push them through the Okta login, so we don't need to setup
 a redirect. When the user is in a logged in state, the code within this route
 will be run.
* Server: Initialized the Spring Boot server to listen for traffic.

</Choice>
<Choice option='programming.platform' value='python' color='blue'>

In your local application directory, load the `server.py` file created in step
1.

Copy the following basic application structure into the file and save.

```python
from flask import Flask, redirect, g, url_for
from flask_oidc import OpenIDConnect
from okta import UsersClient
from boxsdk import Client
from boxsdk import JWTAuth
import requests
import config
import json

app = Flask(__name__)
app.config.update({
  'SECRET_KEY': config.okta_client_secret,
  'OIDC_CLIENT_SECRETS': './client_secrets.json',
  'OIDC_DEBUG': True,
  'OIDC_ID_TOKEN_COOKIE_SECURE': False,
  'OIDC_SCOPES': ["openid", "profile"],
  'OIDC_CALLBACK_ROUTE': config.okta_callback_route
})

oidc = OpenIDConnect(app)
okta_client = UsersClient(config.okta_org_url, config.okta_auth_token)

# Fetch Okta user record if logged in
@app.before_request
def before_request():
  # TODO: HANDLE BEFORE REQUEST

# Main application route
@app.route('/')
def start():
  # TODO: HANDLE MAIN ROUTE

# Box user verification
@app.route("/box_auth")
@oidc.require_login
def box_auth():
  # TODO: HANDLE BOX AUTH ROUTE

return 'Complete'
```

Beyond the import statements, this skeleton will handle the following:

* Configuration: Sets up the Flask configuration, Okta client, and Okta OIDC
 connector information. Flask is set to use the OIDC connector and the Okta
 information that we saved in step 2 of this quick start is used to configure
 the connector for our Okta integration.
* Before request: Defines code that should be run before route handling is
 engaged. We'll be using this to capture our Okta user information, if
 available.
* Routes: Defines the entry route for our application, as well as a `box_auth`
 route. When a user attempts to visit our application root (`/`) the code
 within this route will be run. When we validate an Okta user, the code within
 the `box_auth` route will be run.

</Choice>

## Setup Application Route

We now need to define the code that will run when our main route (`/`) is
engaged.

<Choice option='programming.platform' value='node' color='blue'>

Replace `// TODO: HANDLE ROUTE` in the main route with the following code.

```js
if (req.userContext && req.userContext.userinfo) {
  const tokenSet = req.userContext.tokens;
  const userInfo = req.userContext.userinfo;

  // If Okta ID is present, pass to Box user validation
  if (userInfo.sub) {
    box.validateUser(userInfo);
  } else {
    console.log('No Okta ID identified');
  }
} else {
  res.redirect('/login');
}
```

What we are doing in the above is first checking to see if there is any Okta
user information available from the OIDC connector. When a user logs in the
connector will make the Okta user and configuration information available to
our route within `req.userContext`.

If user information is present, meaning the user is logged in to Okta, we pass
the user information to `box.validateUser` to see if there is an associated Box
user available, which we'll define in the next step.

If no user information is present, we redirect the user to `/login`. The OIDC
connector will automatically handle this route and force the user through to
the Okta login.

</Choice>
<Choice option='programming.platform' value='java' color='white'>

Replace `// TODO: HANDLE ROUTE` in the main route with the following code.

```java
// Validate OIDC user against Box
return validateUser(user);
```

The Java OIDC connector handles most of the heavy lifting for us. When a logged
out user accesses this route they will automatically be pushed to the Okta
login. Once logged in, an OIDC user object will be made available to the route.
We pass that user object to a `validateUser` function, which we'll define in
the next step.

</Choice>
<Choice option='programming.platform' value='python' color='blue'>

Replace `// TODO: HANDLE BEFORE REQUEST` in the main route with the following code.

```python
if oidc.user_loggedin:
  g.user = okta_client.get_user(oidc.user_getfield('sub'))
else:
  g.user = None
```

This will check if an OIDC user is available, meaning that the user has already
logged in to Okta. If available we set a user object using the Okta client
object, and if not we set the user object to `None`.

Next, replace `// TODO: HANDLE ROUTE` in the main route with the following code.

```python
return redirect(url_for(".box_auth"))
```

When this code is engaged, if the user is not logged in to Okta they will be
redirected to Okta to log in by the OIDC connector. After login, or if the user
is already logged in, they will then be forwarded to the `box_auth` route code.

Finally, replace `// TODO: HANDLE BOX AUTH ROUTE` in the `box_auth` route with
the following code.

```python
box = Box();
return box.validateUser(g)
```

This creates a new instance of the Box class and calls the `validateUser`
method, passing in the Okta user object. We'll define this class and methods in
the next step.

</Choice>

<Choice option='programming.platform' value='node,java,python' color='none'>
<Message danger>

# Incomplete previous step
Please select a preferred language / framework in step 1 to get started.

</Message>

</Choice>

## Summary

* You set up the skeleton routes and configuration for Okta.
* You set up the main route handler to pass to Box user verification.

<Observe option='box.app_type' value='use_own,create_new_'>
<Next>

I have set up the Okta login

</Next>

</Observe>
