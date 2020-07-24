---
type: quick-start
hide_in_page_nav: true
---

# Scaffold application code

With our Slack and Box applications set up, we're ready to set up the
application which will listen for incoming slash commands and events from
Slack.

This application will be split up into three parts:

* Set up the initial application skeleton and configuration information.
* Set up the Slack event and command handlers.
* Connect those handlers to the required functions in Box.

## Add dependencies and scaffold code

This first step will walk through creating the files and information needed to
start the application.

<Choice option='programming.platform' value='node' color='none'>

* Either create a new local directory for your application or load the existing
 code created for the Slack event URL challenge from [step 1][step1].
* Create a new `package.json` file, or update the existing one, inside the
 local directory, open it in your preferred editor, copy / paste the following
 into it, and save / exit the file.

```javascript
{
  "name": "box-slack",
  "version": "1.0.0",
  "description": "Box Slack integration",
  "main": "process.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node process.js"
  },
  "author": "Box",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.2",
    "body-parser": "^1.19.0",
    "box-node-sdk": "^1.33.0",
    "express": "^4.17.1"
  }
}
```

* Run `npm install` from the terminal / console to install dependencies.
* Create two files, `process.js` and `slackConfig.js` in the local directory.
* Open `slackConfig.js` and save the following default configuration. 

```json
{
  "verificationToken": "TOKEN",
  "botToken": "TOKEN"
}
```

* There are two values above that will need to be replaced with details from
 your Slack application. Replace the `TOKEN` strings with the appropriate
 values.
  * `verificationToken`: Load up your Slack application configuration page.
   Within the **Basic Information** page, scroll down to the
   **App Credentials** section. The **Verification Token** string will be
   available there.
  * `botToken`: Within your Slack application, go to the **OAuth & Permissions**
   page. The **Bot User OAuth Access Token** string is available at the top and
  was auto-populated once the bot was added to your Slack workspace.
* Open up the blank `process.js` file, copy and paste the following code, and
 save the file.

```javascript
const box = require("box-node-sdk");

const slackConfig = require("./slackConfig.json");
const boxConfig = require("./boxConfig.json");

const express = require("express");
const app = express();
const axios = require("axios");
const util = require("util");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// INSTANTIATE BOX CLIENT

app.post('/event', (req, res) => {
  //HANDLE INCOMING EVENTS
});

const handler = (() => {
  function process(res, data) {
    // PROCESS EVENTS
  }

  function processUser(user, event, channel) {
    // PROCESS USER ADD / REMOVE REQUEST
  }

  function addGroupUser(groupId, email) {
    // ADD USER TO BOX GROUP
  }

  function removeGroupUser(groupId, email) {
    // REMOVE USER FROM BOX GROUP
  }

  function processContent(user, channel, type, fid) {
    // COLLABORATE CONTENT WITH GROUP
  }

  function processSlackChannel(channel, gid) { 
    // ADD ALL SLACK CHANNEL USERS TO GROUP
  }
  
  function getSlackUser(userId, _callback) {
    // GET SLACK USER PROFILE
  }

  function getGroupId(groupName, _callback) {
    // GET AND CREATE BOX GROUP
  }

  return {
    process
  };
})();

const port = process.env.PORT || 3000;
app.listen(port, function(err) { 
  console.log("Server listening on PORT", port); 
});
```

This code houses all of the main functions that will be needed to handle and
process events between Slack and Box. From top to bottom, functions include:

* `/event` handler: Captures all incoming Slack traffic, verifies the content,
 and routes to `process`.
* `process`: Parses the Slack event and routes to either Box group
 processing (user channel events) or to add Box content to the group (slash
 commands).
* `processUser`: Handles user event requirements to either add or remove a user
 to a Box group by routing to the appropriate functions.
* `addGroupUser`: Adds a user to a Box group.
* `removeGroupUser`: Removes a user from a Box group. 
* `processContent`: Collaborates Box content with the Box group.
* `processSlackChannel`: Adds all Slack channel users to a Box group.
* `getSlackUser`: Utility function to fetch a Slack user profile from a Slack
 user ID.
* `getGroupId`: Utility function to fetch a Box group ID from a Box group name.

</Choice>
<Choice option='programming.platform' value='java' color='none'>

```java

```

</Choice>
<Choice option='programming.platform' value='dotnet' color='none'>

```dotnet

```

</Choice>
<Choice option='programming.platform' value='python' color='none'>

```python

```

</Choice>
<Choice option='programming.platform' value='ruby' color='none'>

```ruby

```

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Summary

* You created a new local application, files, and basic configuration details.
* You installed all project dependencies.

<Observe option='programming.platform' value='node,java,python,dotnet,ruby'>
  <Next>I have my local application set up</Next>
</Observe>

[step1]: g://collaborations/connect-slack-to-group-collabs/configure-slack