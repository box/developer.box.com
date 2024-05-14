---
type: quick-start
hide_in_page_nav: true
---

# Handle Slack Events

With the application scaffold in place, the next step is to build the handling
and processing functionality for user events, as well as the handling of slash
commands coming from Slack. Each one of these will eventually be passed to a
Box API endpoint to perform group and content collaboration tasks.

In this step we'll expand the empty functions we wrote in the last step. These
functions will perform the following tasks.

* Listen for new events and slash commands from Slack.
* Process those events and commands to route to the appropriate function.
* Process all Slack users in a channel to be added to a Box group when the bot is first added to a channel.
* Fetch profile information for a Slack user to get their email.

## Listen for Slack events

When the Slack application was configured, it was instructed to send events to
our application code for three events.

* When a user joins a channel.
* When a user leaves a channel.
* When a user enters a `/boxadd` Slash command.

Our application needs to have a public route that listens for those messages
from Slack. The payloads of these messages will like something like this.

<Tabs>
  <Tab title='"/boxadd"-command'>

```json
{
  "token": "cF1PwB1eIMcRHZWwFHJR1tgs",
  "team_id": "T932DQSV12P",
  "team_domain": "slacktest",
  "channel_id": "C078N43MFHU",
  "channel_name": "bottest",
  "user_id": "U016JCDPN56",
  "user_name": "testuser",
  "command": "/boxadd",
  "text": "file 123456",
  "response_url": "https://hooks.slack.com/commands/T541DQSV12P/3977594927231/ankvsRb42WKnKPRp002FeyTx",
  "trigger_id": "1189442196855.1183332180295.cca20c3ca1ea193dab432ad8e9e95431"
}
```

  </Tab>
  <Tab title='"member_joined_channel"-event'>

```json
{
  "token": "cF1PwB1eIMcRHZWwFHJR1tgs",
  "team_id": "T932DQSV12P",
  "api_app_id": "A321V573PQT",
  "event": {
    "type": "member_joined_channel",
    "user": "U0431JM4RLZ",
    "channel": "C078N43MFHU",
    "channel_type": "C",
    "team": "T932DQSV12P",
    "inviter": "U016JCDPN56",
    "event_ts": "1592858788.000700"
  },
  "type": "event_callback",
  "event_id": "Ev032NRJYASJ",
  "event_time": 1592858788,
  "authed_users": [ "U0431JM4RLZ" ]
}
```

  </Tab>
  <Tab title='"member_left_channel"-event'>

```json
{
  "token": "cF1PwB1eIMcRHZWwFHJR1tgs",
  "team_id": "T932DQSV12P",
  "api_app_id": "A321V573PQT",
  "event": {
    "type": "member_left_channel",
    "user": "U0431JM4RLZ",
    "channel": "C078N43MFHU",
    "channel_type": "C",
    "team": "T932DQSV12P",
    "event_ts": "1593033236.000600"
  },
  "type": "event_callback",
  "event_id": "Ev032NRJYASJ",
  "event_time": 1593033236,
  "authed_users": [ "U0431JM4RLZ" ]
}
```

  </Tab>
</Tabs>

<Choice option='programming.platform' value='node' color='none'>

To start processing these events, load `process.js` in your preferred editor
and replace the `app.post("/event" ...` listener with the following.

```js
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

When an event comes through, the handler will send an immediate 200 response
back before code processing. Slash commands will be sent as URL encoded
strings, while member join / leave events will be sent as JSON. If a slash
command is encountered we respond with a processing message, otherwise we send
the `HttpServletResponse` response.

<Message type='notice'>
  In this example we send a `HTTP 200` response before the event is fully
  processed. This is done because Slack requires a response to an event within
  3 seconds from dispatch. When the code execution takes longer than 3 seconds
  then duplicate event will be dispatched by Slack.
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

```js
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

The purpose of this function is to figure out if the payload from Slack is a
user event or a Slash command, fetch any needed information, then route to the
appropriate function to process the results.

If the payload is a user event, denoted by `data.type` being set to
`event_callback`, we extract a few pieces of information.

* `eventType`: The type of event to determine if a user is leaving (`member_left_channel`) or joining (`member_joined_channel`) the channel.
* `channel`: The channel ID, which will be used as the Box group name.
* `userId`: The ID of the user, to look up their profile email which will bind to a user profile in Box that uses the same email.

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
  The reason for fetching the Slack user's email in this step is because the
  file or folder is owned by the user, not by the application's service
  account. When we share content (by creating a collaboration) the action will
  need to be performed by a user who has sharing permissions on that file or
  folder. For this reason, we need to match the Slack user's email address
  against a Box user's email address so that we can create the collaboration on
  their behalf.
</Message>

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `process` method with the following.

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

The purpose of this method is to figure out if the payload from Slack is a
user event or a Slash command, fetch any needed information, then route to the
appropriate method to process the results.

If the payload is a user event, denoted by the event node being present in the
JSON payload, we extract a few pieces of information.

* `eventType`: The type of event to determine if a user is leaving (`member_left_channel`) or joining (`member_joined_channel`) the channel.
* `eventUserId`: The ID of the user, to look up their profile email which will bind to a user profile in Box that uses the same email.
* `eventChannel`: The channel ID, which will be used as the Box group name.

We then route to `processUser`, passing in the return value
from the `getSlackUser` method (a user object), the type of event, and the
channel.

If the payload is a slash command, denoted by the `command` node being present
in the JSON payload, we extract a few pieces of information.

* `eventChannelId`: The Slack channel ID, to be used as the Box group name.
* `eventUserId`: The ID of the user who issued the command.
* `cInputParts`: The type and ID of the command input, from a string such as `file 1234`.

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

Next, we need to define how user events should be processed. There are three
events that we need to account for:

* The bot was added to the channel.
* A regular user joined the channel.
* A regular user left the channel.

<Choice option='programming.platform' value='node' color='none'>

Replace the `processUser` function with the following.

```js
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

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `processUser` method with the following.

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

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

The code starts by fetching the Box group ID for the channel, which will be
defining in the next step. Once obtained, it processes users as follows.

* If the user is a bot, it needs to initialize the Box group and add all current users of the channel as Box users in the group. This is to account for the bot being added to existing channels, and this is ignored if the bot is being re-added to a channel that they were already present in previously.
* If the user joined the channel it needs to add them to the group.
* If the user left the channel it needs to remove them from the group.

## Process Slack channel users

When a bot is first added to a channel, it needs to list all users
currently in the channel and create a Box group with those people in order to
create a baseline for the channel.

<Choice option='programming.platform' value='node' color='none'>

Replace the `processSlackChannel` function with the following.

```js
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

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

This code runs a number of actions in sequence.

* First, it calls the Slack APIs to fetch all members of the channel. The
* `limit` can be adjusted to collect more users in the channel.
* For every user that is found, it calls `getSlackUser` to get their profile, allow it to map their email address to a Box user's email address.
* Each user is then sent to `addGroupUser` to add them into the group.

## Fetch Slack user profile

The last Slack related function is a utility mechanism used by the other
functions. It calls the Slack API to fetch the user profile
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

```js
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

```java
public JSONObject getSlackUser(String userId) throws Exception {
    String usersPath = String.format("%s/users.info?token=%s&user=%s", slackConfig.slackApiUrl, slackConfig.botToken, userId);
    return sendGETRequest(usersPath);
}
```

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

* You've verified incoming events and forwarded them to be processed.
* You've processed events and routed to the appropriate function.
* You've implemented functions for processing all users in a channel and for fetching the Slack profile of a single user.

<Observe option='programming.platform' value='node,java'>
  <Next>I've set up my Slack functions</Next>
</Observe>
