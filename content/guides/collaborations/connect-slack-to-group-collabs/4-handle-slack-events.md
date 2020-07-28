---
type: quick-start
hide_in_page_nav: true
---

# Handle Slack Events

With the application scaffolding and function outlines in place, the next step
is to build the handling and processing functionality for user events and
commands coming from Slack, which will then be passed to Box functions to
perform group and content collaboration tasks.

In this step we'll expand several functions from the last step.

* Listen for new events and slash commands from Slack.
* Process those events and commands to route to the appropriate function.
* Process all Slack users in a channel to be added to a Box group when the
 bot is first added to a channel.
* Fetch profile information for a Slack user to get their email.

## Listen for Slack events

When the Slack application was configured, it was instructed to send events to
our application code under three circumstances.

* A user joins a channel.
* A user leaves a channel.
* A user enters a `/boxadd` Slash command.

Our application needs to have a public route that listens for those messages
from Slack, which will contain similar payloads to the below.

<Tabs>
  <Tab title='/boxadd Command'>

```javascript
{
  token: 'cF1PwB1eIMcRHZWwFHJR1tgs',
  team_id: 'T932DQSV12P',
  team_domain: 'slacktest',
  channel_id: 'C078N43MFHU',
  channel_name: 'bottest',
  user_id: 'U016JCDPN56',
  user_name: 'testuser',
  command: '/boxadd',
  text: 'file 123456',
  response_url: 'https://hooks.slack.com/commands/T541DQSV12P/3977594927231/ankvsRb42WKnKPRp002FeyTx',
  trigger_id: '1189442196855.1183332180295.cca20c3ca1ea193dab432ad8e9e95431'
}
```

  </Tab>
  <Tab title='User Joined Channel Event'>

```javascript
{
  token: 'cF1PwB1eIMcRHZWwFHJR1tgs',
  team_id: 'T932DQSV12P',
  api_app_id: 'A321V573PQT',
  event: {
    type: 'member_joined_channel',
    user: 'U0431JM4RLZ',
    channel: 'C078N43MFHU',
    channel_type: 'C',
    team: 'T932DQSV12P',
    inviter: 'U016JCDPN56',
    event_ts: '1592858788.000700'
  },
  type: 'event_callback',
  event_id: 'Ev032NRJYASJ',
  event_time: 1592858788,
  authed_users: [ 'U0431JM4RLZ' ]
}
```

  </Tab>
  <Tab title='User Left Channel Event'>

```javascript
{
  token: 'cF1PwB1eIMcRHZWwFHJR1tgs',
  team_id: 'T932DQSV12P',
  api_app_id: 'A321V573PQT',
  event: {
    type: 'member_left_channel',
    user: 'U0431JM4RLZ',
    channel: 'C078N43MFHU',
    channel_type: 'C',
    team: 'T932DQSV12P',
    event_ts: '1593033236.000600'
  },
  type: 'event_callback',
  event_id: 'Ev032NRJYASJ',
  event_time: 1593033236,
  authed_users: [ 'U0431JM4RLZ' ]
}
```

  </Tab>
</Tabs>

<Choice option='programming.platform' value='node' color='none'>

* Load `process.js` in your preferred editor.
* Replace the `app.post("/event" ...` listener with the following. 

```javascript
app.post("/event", (req, res) => {
  if (req.body.token !== slackConfig.verificationToken) {
    res.send("Slack Verification Failed");
  }

  handler.process(res, req.body);
});
```

When an event comes through, the listener verifies that the message came from
Slack, using the verification token from our Slack application. If it's a valid
request, the event payload is sent to our event process function.

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Load `Application.java` in your preferred editor, then replace the
`@PostMapping("/event")` block with the following.

<!-- markdownlint-disable line-length -->
```java
@PostMapping("/event")
@ResponseBody
public void handleEvent(@RequestBody String data, @RequestHeader("Content-Type") String contentType, HttpServletResponse response) throws Exception {
  int code = HttpServletResponse.SC_OK;
  java.io.PrintWriter wr = response.getWriter();
  response.setStatus(code);

  if (contentType.startsWith(MediaType.APPLICATION_JSON_VALUE)) {
    wr.write("Adding content to group");
  } else {
    wr.print(response);
  }

  wr.flush();
  wr.close();

  if (! contentType.startsWith(MediaType.APPLICATION_JSON_VALUE)) {
    JSONObject returnJSON = new JSONObject();
    String[] inputParts = data.split("&");

    for (String part: inputParts) {           
      String[] keyval = part.split("=");

      try {
        keyval[1] = java.net.URLDecoder.decode(keyval[1], StandardCharsets.UTF_8.name());
      } catch (UnsupportedEncodingException e) {
        System.err.println(e);
      }

      returnJSON.put(keyval[0], keyval[1]);
    }

    data = returnJSON.toString();
  }

  processEvent(data);
}
```
<!-- markdownlint-enable line-length -->

When an event comes through, the handler will send an immediate 200 response
back before code processing. Slash commands will be sent as URL encoded
strings, while member join / leave events will be sent as JSON. If a Slash
command is encountered we respond with a processing message, otherwise we send
the `HttpServletResponse` response.

<Message type='notice'>
  An HTTP 200 response is sent before code processing due to the fact that
  Slack requires a response to an event within 3 seconds from dispatch. If the
  code execution goes beyond that a duplicate event will be dispatched by Slack
  during retry.
</Message>

To make event processing easier, we want to standardize all event objects as
JSON. If a content type isn't JSON it'll be the URL encoded string. If that's
encountered the string is converted into a JSON object before being sent to
`processEvent`.

Replace `processEvent` with the following.

```java
@Async
public void processEvent(String data) throws Exception {
  Object dataObj = new JSONParser().parse(data); 
  JSONObject inputJSON = (JSONObject) dataObj; 
  String token = (String) inputJSON.get("token");

  if (token.equals(slackConfig.verificationToken)) {
    // INSTANTIATE BOX CLIENT

    process(inputJSON);
  } else {
    System.err.println("Invalid event source");
  }
}
```

This method will convert the JSON event string to a JSON object, then verify
that the event came from Slack by comparing the verification token. If valid,
the event is routed to `process`.

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Process Slack events

Next, we will want to determine what event was received and pass this on to the
right part of our application.

<Choice option='programming.platform' value='node' color='none'>

Replace the `process` function with the following.

<!-- markdownlint-disable line-length -->
```javascript
function process(res, data) {
  if (data.type && data.type === "event_callback") {
    const eventType = data.event.type;
    const channel = data.event.channel;
    const userId = data.event.user;

    getSlackUser(userId, function (user) {
      processUser(user, eventType, channel);
    });

    res.send();
  } else if (data.command && data.command === "/boxadd") {
    const [itemType, itemId] = data.text.split(" ");
    if (["file", "folder"].includes(itemType) && !isNaN(itemId)) {
      const userId = data.user_id;

      getSlackUser(userId, function (user) {
        processContent(user, data.channel_id, itemType, itemId);
      });
      res.send("Adding content");
    } else {
      res.send("Invalid input. Example usage: /boxadd file 123456");
    }
  } else {
    res.send("Invalid action");
  }
}
```
<!-- markdownlint-enable line-length -->

The purpose of this function is to figure out if the payload from Slack is a
user event or a Slash command, fetch any needed information, then route to the
appropriate function to process the results.

If the payload is a user event, denoted by `data.type` being set to
`event_callback`, we extract a few pieces of information.

* `eventType`: The type of event to determine if a user is leaving
 (`member_left_channel`) or joining (`member_joined_channel`) the channel. 
* `channel`: The channel ID, which will be used as the Box group name.
* `userId`: The ID of the user, to look up their profile email which will bind
 to a user profile in Box that uses the same email.

The process function then fetches the profile of the user by calling
`getSlackUser`, and once obtained that user profile is sent to the
`processUser` function to add or remove them from the Box group.

If the payload is a slash command, denoted by `data.command` being set to
`/boxadd`, the content of the command that represents the Box ID and whether
it's a file or folder, such as `file 1234`, is extracted and split to get the
individual values. Those values are validated for proper content.

Once validated, the profile of the Slack user is obtained to get the email,
then the user profile is sent to `processContent` to collaborate the Box
content in with the Box group so that everyone has access. 

<Message type='notice'>
  The reason we want to obtain the Slack email here is that when we're sharing
  content to the group we want users to be able to share files and folders from
  their own accounts, not the application service account. We need to match the
  Slack email against the Box user account email to do that.
</Message>

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `process` method with the following.

<!-- markdownlint-disable line-length -->
```java
public void process(JSONObject inputJSON) throws Exception {
  if (inputJSON.containsKey("event")) {
    JSONObject event = (JSONObject) inputJSON.get("event");
    String eventType = (String) event.get("type");
    String eventUserId = (String) event.get("user");
    String eventChannel = (String) event.get("channel");

    processUser(getSlackUser(eventUserId), eventType, eventChannel);
  } else if (inputJSON.containsKey("command")) {
    String eventCommand = (String) inputJSON.get("command");
    if (eventCommand.equals("/boxadd")) {
      String eventChannelId = (String) inputJSON.get("channel_id");
      String eventUserId = (String) inputJSON.get("user_id");
      String cInput = (String) inputJSON.get("text");
      String[] cInputParts = cInput.split(" ");

      if (cInputParts[0].matches("file|folder")) {
        processContent(getSlackUser(eventUserId), eventChannelId, cInputParts[0], cInputParts[1]);
      }
    }
  } else {
    System.err.println("Invalid event action");
  }
}
```
<!-- markdownlint-enable line-length -->

The purpose of this method is to figure out if the payload from Slack is a
user event or a Slash command, fetch any needed information, then route to the
appropriate method to process the results.

If the payload is a user event, denoted by the event node being present in the
JSON payload, we extract a few pieces of information.

* `eventType`: The type of event to determine if a user is leaving
 (`member_left_channel`) or joining (`member_joined_channel`) the channel.
* `eventUserId`: The ID of the user, to look up their profile email which will 
 bind to a user profile in Box that uses the same email.
* `eventChannel`: The channel ID, which will be used as the Box group name.

We then route to `processUser`, passing in the return value
from the `getSlackUser` method (a user object), the type of event, and the
channel.

If the payload is a slash command, denoted by the `command` node being present
in the JSON payload, we extract a few pieces of information.

* `eventChannelId`: The Slack channel ID, to be used as the Box group name.
* `eventUserId`: The ID of the user who issued the command.
* `cInputParts`: The type and ID of the command input, from a string such as
 `file 1234`.

We then route to `processContent`, passing in the return value
from the `getSlackUser` method (a user object), the channel ID, the content
type (file or folder), and the content ID for the file or folder stored in Box.

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Process Slack user

Now we need to define how users should be processed. There are three instances
that we need to account for: 

* The bot was added to the channel.
* A regular user joined the channel.
* A regular user left the channel.

<Choice option='programming.platform' value='node' color='none'>

Replace the `processUser` function with the following.

<!-- markdownlint-disable line-length -->
```javascript
function processUser(user, event, channel) {
  getGroupId(channel, function (groupId) {
    // if bot was added, add all channel users
    if (user.is_bot) {
      processSlackChannel(channel, groupId);
    } else if (
      user.profile &&
      user.profile.email &&
      event === "member_joined_channel"
    ) {
      addGroupUser(groupId, user.profile.email);
    } else if (
      user.profile &&
      user.profile.email &&
      event === "member_left_channel"
    ) {
      removeGroupUser(groupId, user.profile.email);
    }
  });
}
```
<!-- markdownlint-enable line-length -->

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `processUser` method with the following.

<!-- markdownlint-disable line-length -->
```java
public void processUser(JSONObject userResponse, String event, String channel) throws Exception {
  String groupId = getGroupId(channel);

  JSONObject userObj = (JSONObject) userResponse.get("user");

  Boolean isBot = (Boolean) userObj.get("is_bot");
  JSONObject userProfile = (JSONObject) userObj.get("profile");
  String userEmail = (String) userProfile.get("email");

  if (isBot) {
    processSlackChannel(channel, groupId);
  } else if (event.equals("member_joined_channel")) {
    addGroupUser(groupId, userEmail);
  } else if (event.equals("member_left_channel")) {
    removeGroupUser(groupId, userEmail);
  }
}
```
<!-- markdownlint-enable line-length -->

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

The code starts by fetching the current Box group ID, which will be defined
in the next step. Once obtained, we process users in the following way:

* If the user is a bot, we need to initialize the Box group and add all current
 users of the channel as Box users in the group. This is to account for the bot
 being added to existing channels, and this initializing is ignored if the bot
 is being re-added to a channel that they were already present in.
* If the user joined the channel we send them to be added to the group.
* If the user left the channel we send them to be removed from the group.

## Process Slack channel users

When a bot is first added to a channel, it needs to run an audit of all users
currently in the channel and create a Box group with those people in order to
create a baseline for the channel.

<Choice option='programming.platform' value='node' color='none'>

Replace the `processSlackChannel` function with the following.

```javascript
function processSlackChannel(channel, groupId) {
  const limit = 100;
  const channelUsersPath = `https://slack.com/api/conversations.members?token=${slackConfig.botToken}&channel=${channel}&limit=${limit}`;

  axios.get(channelUsersPath).then((response) => {
    response.data.members.forEach((uid) => {
      getSlackUser(uid, function (user) {
        if (user.profile.email && !user.is_bot) {
          addGroupUser(groupId, user.profile.email);
        }
      });
    });
  });
}
```

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `processSlackChannel` method with the following.

<!-- markdownlint-disable line-length -->
```java
public void processSlackChannel(String channel, String groupId) throws Exception {
  String limit = "100";
  String channelUsersPath = String.format("%s/conversations.members?token=%s&channel=%s&limit=%s", slackConfig.slackApiUrl, slackConfig.botToken, channel, limit);

  JSONObject channelUserList = sendGETRequest(channelUsersPath);
  JSONArray channelUserIds = (JSONArray) channelUserList.get("members");

  @SuppressWarnings("rawtypes")
  Iterator i = channelUserIds.iterator();
  while(i.hasNext()) {
    String uid = (String)i.next();

    JSONObject userResponse = (JSONObject) getSlackUser(uid.toString());
    JSONObject userObj = (JSONObject) userResponse.get("user");
    JSONObject userProfile = (JSONObject) userObj.get("profile");
    Boolean isBot = (Boolean) userObj.get("is_bot");

    String userEmail = new String();
    if (!isBot) {
      userEmail = (String) userProfile.get("email");
    }

    if (!userEmail.isEmpty() && !isBot) {
      addGroupUser(groupId, userEmail);
    }
  }
}
```
<!-- markdownlint-enable line-length -->

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

This code runs a number of actions in sequence.

* First, we call the Slack APIs to fetch all members of the channel. `limit`
 may be adjusted to collect more users in the channel.
* For every user that is found, we  call `getSlackUser` to get
 their profile, specifically for the email address to map to a Box user.
* Each user is then sent to `addGroupUser` to add them into the group.

## Fetch Slack user profile

The last Slack related function is a utility mechanism used by the other
functions above, and that's to call the Slack API to fetch the user profile
given the user ID provided by either Slack event / command or when fetching
a list of channel users. Since we're matching Slack users to Box users via
their email address, that is the field that we care about from the user profile
lookup.

<Message type='notice'>
  Email addresses in Box are unique and cannot be used for multiple accounts,
  meaning that they can be used effectively for user account lookup.
</Message>

<Choice option='programming.platform' value='node' color='none'>

Replace the `getSlackUser` function with the following.

```javascript
function getSlackUser(userId, callback) {
  const userPath = `https://slack.com/api/users.info?token=${slackConfig.botToken}&user=${userId}`;

  axios.get(userPath).then((response) => {
    if (response.data.user && response.data.user.profile) {
      callback(response.data.user);
    } else {
      console.log("No user data found");
    }
  });
}
```

This function makes a call to the Slack user profile endpoint, then sends the
user profile information (if valid) to the specified callback.

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `getSlackUser` method with the following.

<!-- markdownlint-disable line-length -->
```java
public JSONObject getSlackUser(String userId) throws Exception {
  String usersPath = String.format("%s/users.info?token=%s&user=%s", slackConfig.slackApiUrl, slackConfig.botToken, userId);
  return sendGETRequest(usersPath);
}
```
<!-- markdownlint-enable line-length -->

This method sends a request to Slack to capture the user profile, then returns
the response from that request, which should be a user profile JSON object.

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Summary

* You're verifying incoming events and forwarding them to be processed.
* You're processing events and routing to the appropriate function.
* You have a function for processing all users in a channel and for fetching the
 Slack profile of a single user.

<Observe option='programming.platform' value='node,java'>
  <Next>I've set up my Slack functions</Next>
</Observe>
