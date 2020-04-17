---
type: quick-start
hide_in_page_nav: true
---

# Scaffold application code

Our first step in this guide is to create a local application to house our code
and configuration data as we start to create the Okta and Box applications that
will be needed.

Depending on your language / framework preference, create a blank application,
install the required dependencies, as well as all configuration and program
files.

Choose your preferred language / framework below to get started.

<Grid columns='3'>
  <Choose option='programming.platform' value='node' color='blue'>
    # Node/Express
  </Choose>

  <Choose option='programming.platform' value='java' color='blue'>
    # Java/Spring Boot
  </Choose>
  
  <Choose option='programming.platform' value='python' color='blue'>
    # Python/Flask
  </Choose>
</Grid>

<Choice option='programming.platform' value='node' color='none'>
* Create a local directory for your application.
* Create a `package.json` file inside the local directory, open it in your
 preferred editor, copy / paste the following into it, and save / exit the
 file.

```js
{
  "name": "okta-box",
  "version": "1.0.0",
  "description": "Box / Okta sample integration",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Box",
  "license": "ISC",
  "dependencies": {
    "@okta/oidc-middleware": "^4.0.0",
    "@okta/okta-sdk-nodejs": "^3.2.0",
    "box-node-sdk": "^1.31.0",
    "express-session": "^1.17.0"
  }
}
```

* Run `npm init` from the terminal / console to install dependencies.
* Create two files, `server.js` and `config.js` in the local directory.
* Open `config.js` and save the following default configuration.

```js
const oktaClientId = exports.oktaClientId = '';
const oktaClientSecret = exports.oktaClientSecret = '';
const oktaOrgUrl = exports.oktaOrgUrl = '';
const oktaBaseUrl = exports.oktaBaseUrl = 'http://localhost:3000';
const oktaRedirect = exports.oktaRedirect = '/authorization-code/callback';
```

</Choice>
<Choice option='programming.platform' value='java' color='none'>
* From Eclipse, create a new project. When prompted, select a Gradle project.
* Enter a unique name for the project, we used `okta.sample` for this guide.
* Open your `build.gradle` file and add the following dependencies. Once saved,
 refresh the Gradle project.

```java
dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-security'
  implementation 'org.springframework.boot:spring-boot-starter-web'
  implementation 'com.okta.spring:okta-spring-boot-starter:1.4.0'
  testImplementation('org.springframework.boot:spring-boot-starter-test') {
    exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
  }
  testImplementation 'org.springframework.security:spring-security-test'
  compile 'com.box:box-java-sdk:2.44.1'
}
```

* Open your `/src/main/resources/application.properties` file and save the
 following defaults.

```java
okta.oauth2.redirect-uri=/authorization-code/callback
okta.oauth2.issuer=
okta.oauth2.clientId=
okta.oauth2.clientSecret=

security.oauth2.sso.loginPath=/authorization-code/callback
```

</Choice>
<Choice option='programming.platform' value='python' color='none'>
* Create a local directory for your application.
* Install needed dependencies using the following `pip` command from your
 terminal / command prompt: `pip install flask flask_oidc okta boxsdk config`
* Create three files in the local directory, `client_secrets.json`,
 `config.py`, and `server.py`.
* Open `config.py` and save the following into it. This will be some of Okta
 app configuration information needed. We'll fill in the remaining information
 in the next step.

```python
okta_client_secret = 'YOUR OKTA CLIENT SECRET'
okta_org_url = 'YOUR OKTA ORG URL'
okta_auth_token = 'YOUR OKTA APP TOKEN'
okta_callback_route = '/oidc/callback'
```

* Open `client_secrets.json` and save the following into it. This will be a
 standard object that the Flask OpenID Connect integration will use during
 configuration. We'll fill in the remaining information in the next step.

```js
{
  "web": {
    "client_id": "OKTA CLIENT ID",
    "client_secret": "OKTA CLIENT SECRET",
    "auth_uri": "OKTA AUTHORIZE URI",
    "token_uri": "OKTA TOKEN URI",
    "issuer": "OKTA APP DEFAULT",
    "userinfo_uri": "OKTA APP USER INFO URI",
    "redirect_uris": [
      "http://127.0.0.1:5000/oidc/callbac"
    ]
  }
}
```

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework to get started.
  </Message>
</Choice>

## Summary

* You created a new local application, files, and basic configuration details.
* You installed all project dependencies.

<Observe option='programming.platform' value='node,java,python'>
  <Next>I have my local application set up</Next>
</Observe>