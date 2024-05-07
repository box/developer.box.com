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

```js
const boxConfig = require("./boxConfig.json");
const sdk = box.getPreconfiguredInstance(boxConfig);
const client = sdk.getAppAuthClient("enterprise");
```

The `boxConfig` assignment line will use the `boxConfig.json` file you
downloaded from your Box app at the end of [step 2][step2]. The sample above is
assuming that you have it stored in the same folder as `process.js`. If that's
not the case, change the path to point to where your `boxConfig.json` file is,
and what it may be named.

The last `client` assignment line is creating a Box client object which may be
used to make API calls. At this point it is scoped to the
[service account][service-account] of the application, and not a specific user.

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Within `Application.java`, replace the `// INSTANTIATE BOX CLIENT` comment
within the `processEvent` method with the following.

```java
this.fileReader = new FileReader("boxConfig.json");
this.boxConfig = BoxConfig.readFrom(fileReader);
this.boxAPI = BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(boxConfig);
```

The `boxConfig` assignment line will use the `boxConfig.json` file you
downloaded from your Box app at the end of [step 2][step2]. The sample above is
assuming that you have it stored at the root of the Java project. If that's
not the case, change the path in the `fileReader` assignment to point to where
your `boxConfig.json` file is, and what it may be named.

The last `boxAPI` assignment line is creating a Box client object which may be
used to make API calls. At this point it is scoped to the
[service account][service-account] of the application, and not a specific user.

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

## Add a Box user to a group

Let's add a function that adds a Box user to a group. When a bot is added to a
channel and needs to create a Box group with all users of the channel, or when
a single user joins the channel after that action, this function will perform
that task.

<Choice option='programming.platform' value='node' color='none'>

Replace the `addGroupUser` function with the following.

```js
function addGroupUser(groupId, email) {
    client.enterprise.getUsers({ filter_term: email }).then((users) => {
        if (users.entries.length > 0) {
            const userId = users.entries[0].id;
            const groupRole = client.groups.userRoles.MEMBER;

            client.groups
                .addUser(groupId, userId, { role: groupRole })
                .then((membership) => {
                    if (membership.id) {
                        console.log(`Member added with membership ID: ${membership.id}`);
                    } else {
                        console.log(`Member not added`);
                    }
                })
                .catch(function (err) {
                    console.log(err.response.body);
                });
        } else {
            console.log("No Box user found to add to group");
        }
    });
}
```

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `addGroupUser` method with the following.

```java
public void addGroupUser(String groupId, String userEmail) {
    Iterable<BoxUser.Info> users = BoxUser.getAllEnterpriseUsers(this.boxAPI, userEmail);

    for (BoxUser.Info user : users) {
        if (user.getLogin().toUpperCase().equals(userEmail.toUpperCase())) {
            try {
                BoxGroup group = new BoxGroup(boxAPI, groupId);
                BoxUser boxUser = new BoxUser(this.boxAPI, user.getID());
                BoxGroupMembership.Info groupMembershipInfo = group.addMembership(boxUser);
            } catch (Exception ex) {
                System.err.println("User already present");
            }
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

Since we're matching a Slack user to a Box user via their email address, we
first find a matching Box user using the Slack profile email. If found, a call
is made to add that user to the channel group. The group was created when the
bot was first added.

<Message type='tip'>
  The Box [Get User](endpoint://get-users-id) endpoint only permits user lookup
  by user ID. To lookup a user by email address, use the
  [List Enterprise Users](endpoint://get-users) endpoint and set the
  `filter_term` option to the email address you're searching for.
</Message>

## Remove a Box user to a group

When a user leaves or is removed from a Slack channel, we also want to remove
them from the Box group so that they can no longer access the shared group
content.

<Choice option='programming.platform' value='node' color='none'>

Replace the `removeGroupUser` function with the following.

```js
function removeGroupUser(groupId, email) {
    client.groups.getMemberships(groupId).then(memberships => {
        for (let i = 0; i < memberships.entries.length; i++) {
            if (memberships.entries[i].user.login === email) {
                client.groups
                .removeMembership(memberships.entries[i].id)
                .then(() => {
                    console.log('Group user removed')
                });
                break;
            }
        }
    });
}
```

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `removeGroupUser` method with the following.

```java
public void removeGroupUser(String groupId, String userEmail) {
  BoxGroup boxGroup = new BoxGroup(this.boxAPI, groupId);
  Iterable<BoxGroupMembership.Info> memberships = boxGroup.getAllMemberships();
  for (BoxGroupMembership.Info membershipInfo : memberships) {
    if (membershipInfo.getUser().getLogin().toUpperCase().equals(userEmail.toUpperCase())) {
      BoxGroupMembership membership = new BoxGroupMembership(this.boxAPI, membershipInfo.getID());
      membership.delete();
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

This code will take the group ID, which will be the Slack channel ID, and get
all members of the group. If a matching member is found for the person that
left the Slack channel, based on email address, that person is removed from the
group using their membership ID.

<Message type='tip'>
  # Improving performance with a data store

  While looking up group memberships to obtain a membership ID negates the need
  to store membership IDs in a local data store (like a database), this code
  can be made more efficient by having a data store that saves the Box
  membership ID with the user record.

  By using a local data store, the membership ID can be retrieved from the data
  store rather than having to call the Box API repeatedly to search for the
  membership ID.
</Message>

## Fetch a Box group ID for a group name

The next Box function we need has two main purposes.

* Return the Box group ID of an existing group.
* If a group doesn't exist, create the Box group and return the ID.

<Choice option='programming.platform' value='node' color='none'>

Replace the `getGroupId` function with the following.

```js
function getGroupId(groupName, callback) {
    client.groups.getAll().then((groups) => {
        const group = groups.entries.filter((g) => g.name === groupName)[0];

        if (!group) {
            client.groups
              .create(groupName, {
                  description: "Slack channel collaboration group",
                  invitability_level: "all_managed_users",
              })
              .then((group) => {
                  callback(group.id);
              });
        } else {
            callback(group.id);
        }
    });
}
```

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `getGroupId` method with the following.

```java
public String getGroupId(String groupName) {
    String groupId = new String();

    Iterable<BoxGroup.Info> groups = BoxGroup.getAllGroups(this.boxAPI);
    for (BoxGroup.Info groupInfo : groups) {
        if (groupInfo.getName().toUpperCase().equals(groupName)) {
            groupId = groupInfo.getID();
        }
    }

    if (groupId.isEmpty()) {
        BoxGroup.Info groupInfo = BoxGroup.createGroup(boxAPI, groupName);
        groupId = groupInfo.getID();
    }

    return groupId;
}
```

</Choice>
<Choice option='programming.platform' unset color='none'>
  <Message danger>
    # Incomplete previous step
    Please select a preferred language / framework in step 1 to get started.
  </Message>
</Choice>

The code fetches all the groups in the enterprise, and then tries to match the
Slack channel ID to the group name. If any of the groups matches, the group ID
is returned.

If there are no matches, a new Box group is created and the ID of the group is
returned for use. The group will be named after the Slack channel ID since that
is a constant that is returned with both slash commands and user events, making
it easier to lookup without additional functions.

## Add shared content to a group

Finally, the main purpose of our whole application is to allow users to share
files and folders from their own Box accounts with everyone else in the group.

Building upon all previous functionality, the following function performs that
task.

<Choice option='programming.platform' value='node' color='none'>

Replace the `processContent` function with the following.

```js
function processContent(user, channel, itemType, itemId) {
    getGroupId(channel, function (groupId) {
        const email = user.profile.email;

        client.enterprise.getUsers({ filter_term: email }).then((users) => {
            if (users.entries.length > 0) {
                client.asUser(users.entries[0].id);
                const collabRole = client.collaborationRoles.VIEWER;
                const collabOptions = { type: itemType };

                client.collaborations
                    .createWithGroupID(groupId, itemId, collabRole, collabOptions)
                    .then((collaboration) => {
                        console.log(
                            `Content added with collaboration ID ${collaboration.id}`
                        );
                    })
                    .catch(function (err) {
                        console.log(
                          util.inspect(err.response.body, {
                              showHidden: false,
                              depth: null,
                          })
                        );
                    });
            }
        });
    });
}
```

</Choice>
<Choice option='programming.platform' value='java' color='none'>

Replace the `processContent` method with the following.

```java
public void processContent(JSONObject userResponse, String channel, String fType, String fId) {
    String groupId = getGroupId(channel);

    JSONObject userObj = (JSONObject) userResponse.get("user");
    JSONObject userProfile = (JSONObject) userObj.get("profile");
    String userEmail = (String) userProfile.get("email");

    Iterable<BoxUser.Info> users = BoxUser.getAllEnterpriseUsers(this.boxAPI, userEmail);

    for (BoxUser.Info user : users) {
        if (user.getLogin().toUpperCase().equals(userEmail.toUpperCase())) {
            String uid = user.getID();
            boxAPI.asUser(uid);

            BoxCollaborator collabGroup = new BoxGroup(boxAPI, groupId);

            try {
                if (fType.equals("file")) {
                    BoxFile file = new BoxFile(boxAPI, fId);
                    file.collaborate(collabGroup, BoxCollaboration.Role.VIEWER, false, false);
                } else if (fType.equals("folder")) {
                    BoxFolder folder = new BoxFolder(boxAPI, fId);
                    folder.collaborate(collabGroup, BoxCollaboration.Role.VIEWER);
                }
            } catch (Exception ex) {
                System.err.println("Collaboration failed");
            }

            boxAPI.asSelf();
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

The code starts by capturing the Box group ID for the Slack channel, which
is where content will be shared to.

Since we want to share files and folders from the Box account of the person who
sent the slash command, we next capture their Box user profile based on their
email address.

Lastly, we make a call to collaborate content with the group via the group ID.

## Summary

* You've instantiated a Box client
* You've created Box group user add and remove functions.
* You've created a function to share content with the group.

<Observe option='programming.platform' value='node,java'>
  <Next>I've set up my Box functions</Next>
</Observe>

[step2]: g://collaborations/connect-slack-to-group-collabs/configure-box
[service-account]: page://platform/user-types/#service-account/