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
* A user entered a `/boxadd` Slash command.

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

* Load up `process.js`.
* In the `/event` listener, replace the `/HANDLE INCOMING EVENTS` comment with
 the following.

```javascript
if (req.body.token !== config.verificationToken) {
  res.status(200).send('Slack Verification Failed');
}

handler.process(res, req.body);
```

When an event comes through, the listener verifies that the messages came from
Slack, using the verification token from our Slack application. If it's a valid
request, the event payload is sent to our event process function.

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
    Please select a preferred language / framework to get started.
  </Message>
</Choice>

## Process Slack events

<Choice option='programming.platform' value='node' color='none'>

In the `process` function, replace the `// PROCESS EVENTS` comment with the
following.

<!-- markdownlint-disable line-length -->
```javascript
let userId;

if (data.type && data.type === 'event_callback') {
  const eventType = data.event.type;
  const channel = data.event.channel;
  userId = data.event.user;

  getSlackUser(userId, function(user) {
    processUser(user, eventType, channel);
  });

  res.status(200).send();
} else if (data.command && data.command === '/boxadd') {
  textOptions = data.text.split(' ');
  if (['file', 'folder'].indexOf(textOptions[0]) >= 0 && isNaN(textOptions[1]) === false) {
    userId = data.user_id;

    getSlackUser(userId, function(user) {
      processContent(user, data.channel_id, textOptions[0], textOptions[1]);
    });
    res.status(200).send('Adding content');
  } else {
    res.status(200).send('Invalid input. Example usage: /boxadd file 123456');
  }
} else {
  res.status(200).send('Invalid action');
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
 to their user profile in Box.

The process function then fetches the profile of the user by calling
`getSlackUser`, and once obtained that user profile is sent to the
`processUser` function to add or remove them from the Box group.

If the payload is a slash command, denoted by `data.command` being set to
`/boxadd`, the content of the command that denotes the Box ID and whether it's
a file or folder, such as `file 1234`, is extracted and pulled apart. Those values
are validated for proper content.

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
    Please select a preferred language / framework to get started.
  </Message>
</Choice>

## Process Slack channel users

<Choice option='programming.platform' value='node' color='none'>

When a bot is first added to a channel, it needs to run an audit of all users
currently in the channel and create a Box group with those people in order to
create a baseline for the channel.

In the `processSlackChannel` function, replace the
`// ADD ALL SLACK CHANNEL USERS TO GROUP` comment with the following.

```javascript
const limit = 100;
const channelUsersPath = `https://slack.com/api/conversations.members?token=${config.botToken}&channel=${channel}&limit=${limit}`;
let userPath = '';

axios.get(channelUsersPath).then((response) => {
  response.data.members.forEach(uid => {
    getSlackUser(uid, function(user) {
      if (user.profile.email && user.is_bot === false) {
        addGroupUser(gid, user.profile.email);
      }
    });
  });
});
```

This function runs a number of actions in sequence.

* First, we call the Slack APIs to fetch all members of the channel. `limit`
 may be adjusted to collect more users in the channel.
* For every user that is found, we then call the `getSlackUser` function to get
 their profile, specifically for the email address to map to a Box user.
* Each user is then sent to `addGroupUser` to add them into the group.

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
    Please select a preferred language / framework to get started.
  </Message>
</Choice>

## Fetch Slack user profile

The last Slack related function is a utility mechanism used by the other
functions above, and that's the call the Slack API to fetch the user profile
given the user IDs provided by either Slack events / commands or when fetching
a list of channel users. Since we're matching Slack users to Box users via
their email address, that is the field that we care about from the user profile
lookup.

<Message type='notice'>
  Email addresses in Box are unique and cannot be used for multiple accounts,
  meaning that they can be used effectively for user account lookup.
</Message>

<Choice option='programming.platform' value='node' color='none'>

In the `getSlackUser` function, replace the `// GET SLACK USER PROFILE` comment
with the following.

```javascript
const userPath = `https://slack.com/api/users.info?token=${config.botToken}&user=${userId}`;

axios.get(userPath).then((response) => {
  if (response.data.user && response.data.user.profile) {
    _callback(response.data.user);
  } else {
    console.log('No user data found');
  }
});
```

This function makes a call to the Slack user profile endpoint, then sends the
user profile information (if valid) to the specified callback.

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
    Please select a preferred language / framework to get started.
  </Message>
</Choice>

## Summary

* You're verifying incoming events and forwarding them to be processed.
* You're processing events and routing to the appropriate function.
* You have functions for processing all users in a channel and for fetching the
 Slack profile of a single user.

<Observe option='programming.platform' value='node,java,python,dotnet,ruby'>
  <Next>I've set up my Slack functions</Next>
</Observe>
