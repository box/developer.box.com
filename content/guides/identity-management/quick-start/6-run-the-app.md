---
type: quick-start
hide_in_page_nav: true
---

# Run the application

With all the components of the sample in place, it's time to run our program to
see if everything is working correctly. 

<Choice option='programming.platform' value='node' color='none'>

From the terminal / command prompt in the local application directory, type
`node server.js` and click enter. The server will start up and output
`Server started: Listening on port 3000`.

From your browser, go to `http://localhost:3000/`. Since this is the first time
we'll be testing out the user sign in flow, you'll see the Okta login.

<ImageFrame noborder center shadow>
  ![Okta Login](./img/okta-qs-step6-login.png)
</ImageFrame>

Sign in with the credentials for the Okta user you created in the last section
of [step 2](g://identity-management/quick-start/configure-okta/).

Once signed in, you will see a message stating
`New app user {{USERNAME}} created` output to the console / terminal. 

When attempting to log in with this user in subsequent attempts, you
will now see the user record for that newly created Box app user being output
to the console / terminal. 

</Choice>
<Choice option='programming.platform' value='java' color='none'>

From Eclipse (or your preferred editor) click to run the application. You will
see console output stating that the Spring boot application is now running on
port 8080.

From your browser, go to `http://localhost:8080/`. Since this is the first time
we'll be testing out the user sign in flow, you'll see the Okta login.

<ImageFrame noborder center shadow>
  ![Okta Login](./img/okta-qs-step6-login.png)
</ImageFrame>

Sign in with the credentials for the Okta user you created in the last section
of [step 2](g://identity-management/quick-start/configure-okta/).

Once signed in, you will see a message stating `New User Created: {{USERNAME}}`
output to the browser. 

When attempting to log in with this user in subsequent attempts, you
will now see `Hello {{USERNAME}}` output to the browser.

</Choice>
<Choice option='programming.platform' value='python' color='none'>

From the terminal / command prompt in the local application directory, type
`env FLASK_APP=server.py flask run` and click enter. The server will start up
and output `Running on http://127.0.0.1:5000/`.

From your browser, go to `http://127.0.0.1:5000/`. Since this is the first time
we'll be testing out the user sign in flow, you'll see the Okta login.

<ImageFrame noborder center shadow>
  ![Okta Login](./img/okta-qs-step6-login.png)
</ImageFrame>

Sign in with the credentials for the Okta user you created in the last section
of [step 2](g://identity-management/quick-start/configure-okta/).

Once signed in, you will see a message stating
`user {{USER NAME}} created` output to the console / terminal. 

When attempting to log in with this user in subsequent attempts, you
will now see the user ID for that newly created Box app user being output
to the console / terminal.

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Summary

You've reached the end of this Quick Start guide. By now you should have taken
the following steps.

1. [Created a web application scaffold][step1].
1. [Setup and configured an Okta application][step2] and created
   a first user that could be used to log into the web app.
1. [Setup and configured a Box application][step3] so that the
   web app can connect to Box.
1. [Created a log in flow for the web application][step4],
   allowing the Okta user to log in.
1. [Added a check to find an existing Box user][step5], and optionally create a
   Box user the first time that Okta user logs into the web application.
1. [And finally, ran the application][step6] and saw
   the complete flow in action.

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

[step1]: g://identity-management/quick-start/scaffold-application-code/
[step2]: g://identity-management/quick-start/configure-okta/
[step3]: g://identity-management/quick-start/configure-box/
[step4]: g://identity-management/quick-start/logging-into-app/
[step5]: g://identity-management/quick-start/find-or-create-box-users/
[step6]: g://identity-management/quick-start/run-the-app/
