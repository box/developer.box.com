---
type: quick-start
hide_in_page_nav: true
---

# Create Okta Login Flow

test

## Set up the Skeleton

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

</Choice>
<Choice option='programming.platform' value='java'>
  
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
    @RequestMapping("/")
      // TODO: HANDLE ROUTE
    }

    public static void main(String[] args) {
      SpringApplication.run(Application.class, args);
    }
  }
```

</Choice>
<Choice option='programming.platform' value='python'>
  
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
    # TODO: HANDLE ROUTE

  return 'Complete'
```

</Choice>

## Setup Application Route

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

</Choice>
<Choice option='programming.platformn' value='java'>
  
```java
  // Validate OIDC user against Box
  return validateUser(user);
```

</Choice>
<Choice option='programming.platform' value='python'>

HANDLE BEFORE REQUEST

```python
  if oidc.user_loggedin:
    g.user = okta_client.get_user(oidc.user_getfield('sub'))
  else:
    g.user = None
```

HANDLE MAIN ROUTE

```python
  return redirect(url_for(".box_auth"))
```

</Choice>

## Summary

* You set up the skeleton routes and configuration for Okta.
* You set up the main route handler to pass to Box user verification.

<Observe option='box.app_type' value='use_own,create_new_'>
  <Next>I have set up the Okta login</Next>
</Observe>