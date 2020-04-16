---
type: quick-start
hide_in_page_nav: true
category_id: sso
subcategory_id: sso/quick-start
is_index: false
id: sso/quick-start/run-sample
rank: 6
total_steps: 6
sibling_id: sso/quick-start
parent_id: sso/quick-start
next_page_id: ''
previous_page_id: sso/quick-start/box-users
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/guides/sso/quick-start/6-run-sample.md
---

# Run Sample

With all the components of the sample in place, it's time to run our program to
see if everything is working correctly.

<Grid columns='3'>

<Choose option='programming.platform' value='node' color='blue'>

# Node + Express

</Choose>

<Choose option='programming.platform' value='java' color='white'>

# Java + Spring Boot

</Choose>

<Choose option='programming.platform' value='python' color='blue'>

# Python + Flask

</Choose>

</Grid>

<Choice option='programming.platform' value='node' color='blue'>

From the terminal / command prompt in the local application directory, type
`node server.js` and click enter. The server will start up and output
`Server started: Listening on port 3000`.

From your browser, go to `http://localhost:3000/`. Since this is the first time
we'll be testing out the user sign in flow, you'll see the Okta login.

<ImageFrame noborder center shadow>

![Okta Login](./img/okta-qs-step6-login.png)

</ImageFrame>

Sign in with the credentials for the Okta user you created in the last section
of [step 2](g://sso/quick-start/setup-okta/).

Once signed in, you will see a message stating
`New app user {{USERNAME}} created` output to the console / terminal.

When attempting to log in with this user in subsequent attempts, you
will now see the user record for that newly created Box app user being output
to the console / terminal.

</Choice>
<Choice option='programming.platform' value='java' color='white'>

From Eclipse (or your preferred editor) click to run the application. You will
see console output stating that the Spring boot application is now running on
port 8080.

From your browser, go to `http://localhost:8080/`. Since this is the first time
we'll be testing out the user sign in flow, you'll see the Okta login.

<ImageFrame noborder center shadow>

![Okta Login](./img/okta-qs-step6-login.png)

</ImageFrame>

Sign in with the credentials for the Okta user you created in the last section
of [step 2](g://sso/quick-start/setup-okta/).

Once signed in, you will see a message stating `New User Created: {{USERNAME}}`
output to the browser.

When attempting to log in with this user in subsequent attempts, you
will now see `Hello {{USERNAME}}` output to the browser.

</Choice>
<Choice option='programming.platform' value='python' color='blue'>

From the terminal / command prompt in the local application directory, type
`env FLASK_APP=server.py flask run` and click enter. The server will start up
and output `Running on http://127.0.0.1:5000/`.

From your browser, go to `http://127.0.0.1:5000/`. Since this is the first time
we'll be testing out the user sign in flow, you'll see the Okta login.

<ImageFrame noborder center shadow>

![Okta Login](./img/okta-qs-step6-login.png)

</ImageFrame>

Sign in with the credentials for the Okta user you created in the last section
of [step 2](g://sso/quick-start/setup-okta/).

Once signed in, you will see a message stating
`user {{USER NAME}} created` output to the console / terminal.

When attempting to log in with this user in subsequent attempts, you
will now see the user ID for that newly created Box app user being output
to the console / terminal.

</Choice>

## Summary

You've reached the end of this Quick Start guide. By now you should have taken
the following steps.

1. [Created your local application.](g://sso/quick-start/create-local-app/)
1. [Setup and configured your Okta application and users.](g://sso/quick-start/setup-okta/)
1. [Setup and configured your Box application.](g://sso/quick-start/setup-box/)
1. [Created a login for your Okta application to get user credentials.](g://sso/quick-start/okta-login/)
1. [Created user management in Box that is unified to the Okta user accounts.](g://sso/quick-start/box-users/)
1. [Run the sample](g://sso/quick-start/run-sample/)

## Next Steps

We recommend the following resource for anyone who wants to learn more about
more advanced capabilities that may be attached into the user creation and
access process.

* [User provisioning](g://users/provision/) best practices for advanced user
 folder architecture setup.
* [User deprovisioning](g://users/deprovision/) best practices cleaning up
 inactive users and transferring user content to another account.
* [Uploading content](g://uploads/) into Box, including running preflight
 checks and large file (chunked) uploading.
 
 <Choice option='programming.platform' value='node,java,python' color='none'>
<LoggedIn reverse>

<Message danger>

# Incomplete previous step

Please select a preferred language / framework in step 1 to get started.

</Message>

</LoggedIn>

</Choice>
