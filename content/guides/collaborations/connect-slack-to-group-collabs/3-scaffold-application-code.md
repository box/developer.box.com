---
type: quick-start
hide_in_page_nav: true
---

# Scaffold application code

With our Slack and Box applications configured, we're ready to write the code
for our application which will listen for incoming slash commands and events
from Slack.

This application will be split up into three parts:

* Set up the initial application skeleton and configuration information.
* Set up the handlers for Slack events and slash commands.
* Connect those handlers to the required functions in Box.

## Add dependencies and scaffold code

Let's start by scaffolding the files and minimal code needed to
run the application.

<Choice option='programming.platform' value='node' color='none'>

* Either create a new local directory for your application or load the existing code created for the Slack event URL challenge from [step 1][step1].
* Create a new `package.json` file, or update the existing one, inside the local directory, open it in your preferred editor, copy / paste the following into it, and save / exit the file.

```json
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

* Run `npm install` from the terminal / console to install the dependencies.
* Create two files, `process.js` and `slackConfig.json` in the local directory.
* Open `slackConfig.json` and save the following default configuration.

```json
{
  "verificationToken": "TOKEN",
  "botToken": "TOKEN"
}
```

* There are two values above that will need to be replaced with details from your Slack application. Replace the `TOKEN` strings with the appropriate values.
    * `verificationToken`: Load up your Slack application configuration page. Within the **Basic Information** page, scroll down to the **App Credentials** section. The **Verification Token** string will be available there.
    * `botToken`: Within your Slack application, go to the **OAuth & Permissions** page. The **Bot User OAuth Access Token** string is available at the top and was auto-populated once the bot was added to your Slack workspace.
* Open up the blank `process.js` file, copy and paste the following code, and save the file.

```js
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

This code contains all of the main functions that will be needed to handle and
process the communication between Slack and Box. From top to bottom, the
functions are:

* `/event` handler: Captures all incoming Slack traffic, verifies the content, and routes them to the `process` function.
* `process`: Parses the Slack event and routes the event to either Box group processing (user channel events) or to add Box content to the group (slash commands).
* `processUser`: Handles user events, either adding or removing a user from a Box group by routing to the appropriate functions.
* `addGroupUser`: Adds a user to a Box group.
* `removeGroupUser`: Removes a user from a Box group.
* `processContent`: Collaborates Box content with the Box group.
* `processSlackChannel`: Adds all Slack channel users to a Box group.
* `getSlackUser`: Utility function to fetch a Slack user's profile from their Slack user ID.
* `getGroupId`: Utility function to fetch a Box group ID from a Box group name.

</Choice>
<Choice option='programming.platform' value='java' color='none'>

A configuration file needs to be created to house our Slack credentials and
URLs.

* Within your `src/main/java` path, where your `Application.java` file is located, create a new Java class file named `slackConfig.java`.
* Open the file and save the following into it.

```java
package com.box.slack.box;

public class slackConfig {
    public static String verificationToken = "TOKEN";
    public static String botToken = "TOKEN";
    public static String slackApiUrl = "https://slack.com/api";
}
```

* There are two values above that will need to be replaced with details from your Slack application. Replace the `TOKEN` strings with the appropriate values.
  * `verificationToken`: Load up your Slack application configuration page. Within the **Basic Information** page, scroll down to the **App Credentials** section. The **Verification Token** string will be available there.
  * `botToken`: Within your Slack application, go to the **OAuth & Permissions** page. The **Bot User OAuth Access Token** string is available at the top and was auto-populated once the bot was added to your Slack workspace.
* Open up the `Application.java` file that was created for the previous Slack event challenge setup and replace the content of the file with the following.

```java
package com.box.slack.box;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;

import javax.servlet.http.HttpServletResponse;

import org.jose4j.json.internal.json_simple.JSONArray;
import org.jose4j.json.internal.json_simple.JSONObject;
import org.jose4j.json.internal.json_simple.parser.JSONParser;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.box.sdk.BoxAPIConnection;
import com.box.sdk.BoxCollaborator;
import com.box.sdk.BoxCollaboration;
import com.box.sdk.BoxConfig;
import com.box.sdk.BoxDeveloperEditionAPIConnection;
import com.box.sdk.BoxFile;
import com.box.sdk.BoxFolder;
import com.box.sdk.BoxGroup;
import com.box.sdk.BoxGroupMembership;
import com.box.sdk.BoxUser;

@RestController
@EnableAutoConfiguration
public class Application extends slackConfig {
    private Reader fileReader;
    private BoxConfig boxConfig;
    private BoxAPIConnection boxAPI;

    @PostMapping("/event")
    @ResponseBody
    public void handleEvent(@RequestBody String data, @RequestHeader("Content-Type") String contentType, HttpServletResponse response) throws Exception {
        // HANDLE EVENTS
    }

    @Async
    public void processEvent(String data) throws Exception {
        // VERIFY EVENTS
    }

    public void process(JSONObject inputJSON) throws Exception {
        // PROCESS EVENTS
    }

    public void processUser(JSONObject userResponse, String event, String channel) throws Exception {
        // PROCESS USER ADD / REMOVE REQUEST
    }

    public void addGroupUser(String groupId, String userEmail) {
        // ADD USER TO BOX GROUP
    }

    public void removeGroupUser(String groupId, String userEmail) {
        // REMOVE USER FROM BOX GROUP
    }

    public void processContent(JSONObject userResponse, String channel, String fType, String fId) {
        // COLLABORATE CONTENT WITH GROUP
    }

    public void processSlackChannel(String channel, String groupId) throws Exception {
        // ADD ALL SLACK CHANNEL USERS TO GROUP
    }

    public JSONObject getSlackUser(String userId) throws Exception {
        // GET SLACK USER PROFILE
    }

    public String getGroupId(String groupName) {
        // GET AND CREATE BOX GROUP
    }

    public JSONObject sendGETRequest(String reqURL) throws Exception {
        StringBuffer response = new StringBuffer();

        URL obj = new URL(reqURL);
        HttpURLConnection httpURLConnection = (HttpURLConnection) obj.openConnection();
        httpURLConnection.setRequestMethod("GET");

        int responseCode = httpURLConnection.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader in = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String inputLine;

            while ((inputLine = in .readLine()) != null) {
                response.append(inputLine);
            } in .close();
        } else {
            System.err.println("GET request failed");
        }

        Object dataObj = new JSONParser().parse(response.toString());
        JSONObject outputJSON = (JSONObject) dataObj;

        return outputJSON;
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

This code contains all of the main functions that will be needed to handle and
process the communication between Slack and Box. From top to bottom, the
functions are:

* `handleEvent`: Captures all incoming Slack traffic and responds with an HTTP 200 response to notify Slack that the event was received. Since slash commands will transmit their payload as `application/x-www-form-urlencoded` rather than `application/json`, we convert those payloads to JSON objects to standardize the input.
* `processEvent`: Verifies that the event is from Slack, instantiates a Box client, and routes for processing.
* `process`: Parses the Slack event and routes to either Box group processing (user channel events) or to add Box content to the group (slash commands).
* `processUser`: Handles user event requirements to either add or remove a user to a Box group by routing to the appropriate functions.
* `addGroupUser`: Adds a user to a Box group.
* `removeGroupUser`: Removes a user from a Box group.
* `processContent`: Collaborates Box content with the Box group.
* `processSlackChannel`: Adds all Slack channel users to a Box group.
* `getSlackUser`: Utility function to fetch a Slack user profile from a Slack user ID.
* `getGroupId`: Utility function to fetch a Box group ID from a Box group name.
* `sendGETRequest`: Utility function to send an HTTP GET request.

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Summary

* You created a minimal application scaffold, and provided the basic configuration details.
* You installed all the project dependencies.

<Observe option='programming.platform' value='node,java'>
  <Next>I have my local application set up</Next>
</Observe>

[step1]: g://collaborations/connect-slack-to-group-collabs/configure-slack