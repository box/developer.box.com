---
type: quick-start
hide_in_page_nav: true
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

<Choice option='programming.platform' value='node' color='none'>
In your local application directory, load the `server.js` file created in
step 1.

Start by copying the following package definitions and configuration
information into the file.

```js
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');
const bodyParser = require('body-parser');
const boxSDK = require('box-node-sdk');
const config = require('./config.js');
const express = require('express')();
const http = require('http');
const path = require('path');
const fs = require('fs');

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
```

This sets up the Express configuration and Okta OIDC connector
information. Express is set to use the OIDC connector and the Okta
information that we saved in step 2 of this quick start is used to configure
the connector for our Okta integration.

Now add the routing details.

```js
// Redirect to Okta login
express.get('/', (req, res) => {
    // TODO: HANDLE ROUTE
});
```

This defines the entry route for our application. When a user attempts to
visit our application root (`/`) the code within this route will be run.

Lastly, add the Express server initialization to listen for traffic.

```js
// Create server
const port = process.env.PORT || 3000;
http.createServer(express).listen(port, () => {
    console.log(`Server started: Listening on port ${port}`);
});
```

</Choice>
<Choice option='programming.platform' value='java' color='none'>
In your local application directory, load the
`/src/main/java/com/box/sample/Application.java` file created in step 1, or
similar directory if an alternate application name was used.

Copy the following basic application structure into the file.

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
    static BoxDeveloperEditionAPIConnection api;

    // TODO: SET ROUTE

    // TODO: INITIALIZE SERVER
}
```

This sets up the needed imports, the `Application` class, and a standard shared
Box API connection attribute, to be defined in the next step.

Replace `// TODO: SET ROUTE` with the following.

```java
@RequestMapping("/")
String home(@AuthenticationPrincipal OidcUser user) throws IOException {
  // TODO: HANDLE ROUTE
}
```

The route mapping defines the entry route for our application. When a user
attempts to visit our application root (`/`) in a logged out state, the OIDC
connector will automatically push them through the Okta login, so we don't need
to setup a redirect. When the user is in a logged in state, the code within
this route will be run.

Replace `// TODO: INITIALIZE SERVER` with the following to initialize the
Spring Boot server to listen for traffic.

```java
public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
}
```

</Choice>
<Choice option='programming.platform' value='python' color='none'>
In your local application directory, load the `server.py` file created in step 1.

Copy the following basic application structure into the file.

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
```

This sets up the Flask configuration, Okta client, and Okta OIDC
connector information. Flask is set to use the OIDC connector and the Okta
information that we saved in step 2 of this quick start is used to configure
the connector for our Okta integration.

Next, add a `before_request` definition to be run before route handling is
engaged. We'll be using this to capture our Okta user information, if available.

```python
# Fetch Okta user record if logged in
@app.before_request
def before_request():
  # TODO: HANDLE BEFORE REQUEST
```

Lastly, define the entry route for our application, as well as a `box_auth`
route.

```python
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

When a user attempts to visit our application root (`/`) the code
within this route will be run. When we validate an Okta user, the code within
the `box_auth` route will be run.

</Choice>
<Choice option='programming.platform' value='cs' color='none'>
In your local application, load `Views` > `Shared` > `Layout.cshtml`. Once the
ASP.NET application loads this will be the visual component that is rendered.
At the top of the page, insert the following.

```csharp
@using System.Security.Claims;

@if (User.Identity.IsAuthenticated)
{
    <p class="navbar-text">Hello, @User.Identity.Name</p>
}
else
{
    <a asp-controller="Account" asp-action="SignIn">Sign In</a>
}
```

If a user who is logged in to Okta visits, they will see the hello message. If
the user is not logged in a sign in link will be provided to them.

Within the line `<a asp-controller="Account" asp-action="SignIn">Sign In</a>`,
`asp-controller="Account"` means that the to be created Account controller will
handle the request, and `asp-action="SignIn"` states that the `SignIn` method
in that controller will be enacted. Save and close that file.

Within the `Controllers` directory create a new file, `AccountController.cs`.
This will be the controller that is enacted when that sign in link is clicked.

Copy the following basic application structure into the file.

```csharp
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Okta.AspNetCore;
using Box.V2;
using Box.V2.Config;
using Box.V2.JWTAuth;
using Box.V2.Models;

public class AccountController : Controller
{
    public IActionResult SignIn()
    {
        if (!HttpContext.User.Identity.IsAuthenticated)
        {
            return Challenge(OktaDefaults.MvcAuthenticationScheme);
        }

        return RedirectToAction("Profile", "Account");
    }

    [Authorize]
    [Route("~/profile")]
    public IActionResult Profile()
    {
        // TODO: HANDLE ROUTE
    }
}
```

When the user clicks on the sign in link the `SignIn` method in this controller
will be run. If the user is not already authenticated they will be sent to
`Challenge`, which will redirect the user to Okta to log in. This functionality
is handled by the routing framework and does not require any additional code to
enact. If the user is authenticated, they will be redirected to the `Profile`
routing method.

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Setup Application Route

We now need to define the code that will run when our main route (`/`) is
engaged.

<Choice option='programming.platform' value='node' color='none'>

Replace `// TODO: HANDLE ROUTE` in the main route with the following code.

```js
if (req.userContext && req.userContext.userinfo) {
    const tokenSet = req.userContext.tokens;
    const userInfo = req.userContext.userinfo;

    // If Okta ID is present, pass to Box user validation
    if (userInfo.sub) {
        box.validateUser(userInfo, res);
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
the user information to `box.validateUser` along with the Express response
object to see if there is an associated Box user available, which we'll define
in the next step.

If no user information is present, we redirect the user to `/login`. The OIDC
connector will automatically handle this route and force the user through to
the Okta login.

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace `// TODO: HANDLE MAIN ROUTE` in the main route with the following code.

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
<Choice option='programming.platform' value='python' color='none'>

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
    box = Box()
    return box.validateUser(g)
```

This creates a new instance of the Box class and calls the `validateUser`
method, passing in the Okta user object. We'll define this class and methods in
the next step.

</Choice>
<Choice option='programming.platform' value='cs' color='none'>
Replace `// TODO: HANDLE ROUTE` in the main route with the following code.

```csharp
var subClaim = HttpContext.User.Claims.First(c => c.Type == "sub");
var sub = subClaim.Value;

var nameClaim = HttpContext.User.Claims.First(c => c.Type == "name");
var name = nameClaim.Value;

Task userSearch = validateUser(name, sub);

Task.WaitAll(userSearch);

return Content(name);
```

This block will capture the Okta user account sub (unique ID) and name, then
sends that data to the to be created `validateUser` method to find a matching
Box user, which will be created in the next step.

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Summary

* You set up the skeleton routes and configuration for Okta.
* You set up the main route handler to pass to Box user verification.

<Observe option='box.app_type' value='use_own,create_new_'>
  <Next>I have set up the Okta login</Next>
</Observe>
