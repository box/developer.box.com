---
type: quick-start
hide_in_page_nav: true
---

# Connect Bot to Box

We're now handling and processing events coming from Slack, then obtaining all
information needed to connect with Box users and groups. We now need to
connect that functionality to Box functions.

In this step we'll expand several functions from the last step to incorporate
new Box features.

* Instantiate a Box client.
* Add a Box user to a Box group.
* Remove a Box user from a Box group.
* Fetch a Box group ID from a group name.
* Add content that is shared to a group.

## Instantiate a Box Client

To make calls to the Box APIs, you'll first need to set up a Box client.

<Choice option='programming.platform' value='node' color='none'>

Within `process.js`, replace the `// INSTANTIATE BOX CLIENT` comment at the top
with the following.

```javascript
const configJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, './config.json')));
const sdk = boxSDK.getPreconfiguredInstance(configJSON);
const client = sdk.getAppAuthClient('enterprise');
```

The first `configJSON` assignment line will use the `config.json` file you
downloaded from your Box app at the end of [step 2][step2]. The sample above is
assuming that you have it stored in the same folder as `process.js`. If that's
not that case, change the path to point to where your `config.json` file is,
and what it may be named.

The last `client` assignment line is creating a Box client object which may be
used to make API calls. At this point it is scoped to the
[service account][service-account] of the application, and not a specific user.

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

## Add a Box user to a group

When a bot is added to a channel and needs to create a Box group with all
users of the channel, or when a single user joins the channel after that
action, this function will perform that task.

<Choice option='programming.platform' value='node' color='none'>

Within the `addGroupUser` function, replace the `// ADD USER TO BOX GROUP`
comment with the following.

<!-- markdownlint-disable line-length -->
```javascript
client.enterprise.getUsers({filter_term: email}).then(users => {
  if (users.entries.length > 0) {
    const userId = users.entries[0].id;
    const groupRole = client.groups.userRoles.MEMBER;

    client.groups.addUser(groupId, userId, {role: groupRole}).then(membership => {
      if (membership.id) {
        console.log(`Member added with membership ID: ${membership.id}`);
      } else {
        console.log(`Member not added`);
      }
    }).catch(function (err) {
      console.log(err.response.body);
    });
  } else {
    console.log('No Box user found to add to group');
  }
});
```
<!-- markdownlint-enable line-length -->

<Message type='notice'>
  The Box [Get User](endpoint://get-users-id) endpoint only permits user lookup
  by user ID. To lookup a user by email address, use the
  [List Enterprise Users](endpoint://get-users) endpoint and set the
  `filter_term` option to the email address you're searching for.
</Message>

Since we're matching a Slack user to a Box user via their email address, we
first find a matching Box user using the Slack profile email. If found, a call
is made to add that user to the channel group. The group was created when the
bot was first added.

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

## Remove a Box user to a group

When a user leaves or is removed from a Slack channel, we also want to remove
them from the Box group so that they can no longer access the shared group
content. 

<Choice option='programming.platform' value='node' color='none'>

In the `removeGroupUser` function, replace the `// REMOVE USER FROM BOX GROUP`
comment with the following.

```javascript
client.groups.getMemberships(groupId).then(memberships => {
  for (let i = 0; i < memberships.entries.length; i++) {
    if (memberships.entries[i].user.login === email) {
      client.groups.removeMembership(memberships.entries[i].id).then(() => {
        console.log('Group user removed')
      });
      break;
    }
  }
});
```

This code will take the group ID, which will be the Slack channel ID, and get
all members of the group. If a matching member is found for the person that
left the Slack channel, based on email address, that person is removed from the
group using their membership ID.

<Message type='tip'>
  # Improvement Tip

  While looking up group memberships to obtain a membership ID negates the need
  to store membership IDs in a data store, you can make this more efficient by
  having a data store that saves the Box membership ID with the user record.
  This way the membership ID can be retrieved from the data store rather than
  having to call Box APIs to search for the membership ID.
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
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Fetch a Box group ID from a group name

The next Box function we need has two main purposes.

* Return the Box group ID of an existing group.
* If a group doesn't exist, create the Box group and return the ID.

<Choice option='programming.platform' value='node' color='none'>
  
In the `getGroupId` function, replace the `// GET AND CREATE BOX GROUP` comment
with the following.

<!-- markdownlint-disable line-length -->
```javascript
let groupId = 0;

client.groups.getAll().then(groups => {
  for (let i = 0; i < groups.entries.length; i++) {
    if (groups.entries[i].name === groupName) {
      groupId = groups.entries[i].id;
      break;
    }
  }

  if (groupId === 0) { 
    client.groups.create(groupName, { description: 'Slack channel collaboration group', invitability_level: 'all_managed_users' }).then(group => {
      groupId = group.id;
      _callback(groupId);
    });
  } else {
    _callback(groupId);
  }
});
```
<!-- markdownlint-enable line-length -->

The function will capture all groups in the enterprise, then loop through each
one. 

If the group name matches the Slack channel ID, the group ID is returned.

If there are no matches, a new Box group is created and the ID of the group is
returned for use. The group will be named after the Slack channel ID since that
is a constant that is returned with both slash commands and user events, making
it easier to lookup without additional functions.

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

## Add shared content to a group

The root purpose of this bot is to allow users to share files and folders from
their own Box accounts with everyone in a group. Building upon all previous
functionality, this function performs that task.

<Choice option='programming.platform' value='node' color='none'>

In the `processContent` function, replace the
`// COLLABORATE CONTENT WITH GROUP` comment with the following.

<!-- markdownlint-disable line-length -->
```javascript
getGroupId(channel, function (gid){
  const email = user.profile.email;
  
  client.enterprise.getUsers({filter_term: email}).then(users => {
    if (users.entries.length > 0) {
      client.asUser(users.entries[0].id);
      const collabRole = client.collaborationRoles.VIEWER;
      const collabOptions = { type: type };

      client.collaborations.createWithGroupID(gid, fid, collabRole, collabOptions).then(collaboration => {
        console.log(`Content added with collaboration ID ${collaboration.id}`);
      }).catch(function (err) {
        console.log(util.inspect(err.response.body, {showHidden: false, depth: null}))
      });
    }
  });
});
```
<!-- markdownlint-enable line-length -->

The function starts by capturing the Box group ID for the Slack channel, which
is where content will be shared to.

Since we want to share files and folders from the Box account of the person who
sent the slash command, we next capture their Box user profile based on their
email address.

Lastly, we make a call to collaborate content with the group via the group ID.
`collabRole` defines that we want to assign folks in the group with viewer
permissions for the content, and `collabOptions` defines the type, which will
tell the API whether the Box content being shared is a file or a folder.

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

* You've instantiated a Box client
* You've created Box group user add and remove functions.
* You've created a function to share content with the group.

<Observe option='programming.platform' value='node,java,python,dotnet,ruby'>
  <Next>I've set up my Box functions</Next>
</Observe>

[step2]: g://collaborations/connect-slack-to-group-collabs/configure-box
[service-account]: g://authentication/user-types/app-users/