---
rank: 1
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
  - events/user-events/polling
  - events/parameters/pagination
required_guides: []
alias_paths:
  - /guides/events/for-user
  - /guides/events/for-user/
---

# Get User Events

To get a user's events, authenticate as any user and make a call to the
[`GET /events`](e://get_events) API.

<Samples id="get_events" />

<Message>
  The events returned will only be for the user who's access token the API was
  made with. To get the event feed for a different user either use the `as-user`
  header or an actual access token for that user.
</Message>

## Stream Types

The user event stream support 3 types of stream.

| Stream Type |                                                                                         |
|-------------|-----------------------------------------------------------------------------------------|
| `all`       | Returns everything for a user (default)                                                 |
| `changes`   | Returns events that may cause file tree changes such as file updates or collaborations. |
| `sync`      | Is similar to changes but only applies to synced folders                                |

## Anonymous Users

In some cases, the event feed might list a user with an ID of `2`. This is Box's
internal identifier for anonymous users.

An anonymous user is a user that is not logged in. This can happen any time a
user interacts with content and they aren't asked to log in first. An example
would be when a user downloads a file through an open shared link.

## Limitations

Box does not store events indefinitely.

User events are stored for between two weeks and two months, after which the
user events are removed. Enterprise events are accessible for one year via the
API and seven years via exported reports in the Box Admin Console.

The emphasis of this feed is to return the complete results quickly, which means
that Box may return events more than once or out of order. Duplicate events can
be identified by their event IDs.

## Long Polling

The user event stream supports long-polling
[through the `OPTIONS /events` API][longpoll].

## Event Types

The following events can be triggered for a user. This list is not exhaustive,
so it is possible events appear that are not listed.

The following events are available in all feeds.

| Event name                   | Description                                                                     |
|------------------------------|---------------------------------------------------------------------------------|
| `ITEM_CREATE`                | A folder or File was created                                                    |
| `ITEM_UPLOAD`                | A folder or File was uploaded                                                   |
| `ITEM_MOVE`                  | A file or folder was moved                                                      |
| `ITEM_COPY`                  | A file or folder was copied                                                     |
| `LOCK_CREATE`                | A file was locked                                                               |
| `LOCK_DESTROY`               | A file was unlocked. If a locked file is deleted, the source file will be null. |
| `ITEM_TRASH`                 | A file or folder was marked as deleted                                          |
| `ITEM_UNDELETE_VIA_TRASH`    | A file or folder was recovered out of the trash                                 |
| `COLLAB_ADD_COLLABORATOR`    | A collaborator was added to a folder

                                            |
| `COLLAB_ROLE_CHANGE`         | A collaborator had their role changed                                           |
| `COLLAB_INVITE_COLLABORATOR` | A collaborator was invited on a folder                                          |
| `COLLAB_REMOVE_COLLABORATOR` | A collaborator was removed from a folder                                    |
| `ITEM_SYNC`                  | A folder was marked for sync                                                    |
| `ITEM_UNSYNC`                | A folder was unmarked for sync                                                  |
| `ITEM_RENAME`                | A file or folder was renamed                                                    |
| `ITEM_MAKE_CURRENT_VERSION`  | A previous version of a file was promoted to the current version                |
| `GROUP_ADD_USER`             | Added user to group                                                             |
| `GROUP_REMOVE_USER`          | Removed user from group                                                         |

The following events are only available in the `all` feed.

| Event name               | Description                                               |
|--------------------------|-----------------------------------------------------------|
| `COMMENT_CREATE`         | A comment was created on a folder, file, or other comment |
| `COMMENT_DELETE`         | A comment was deleted on folder, file, or other comment   |
| `ITEM_DOWNLOAD`          | A file or folder was downloaded                        |
| `ITEM_PREVIEW`           | A file was previewed                                    |
| `TASK_ASSIGNMENT_CREATE` | A task was assigned                                       |
| `TASK_CREATE`            | A task was created                                        |
| `ITEM_SHARED_CREATE`     | A file or folder was enabled for sharing                  |
| `ITEM_SHARED_UNSHARE`    | A file or folder was disabled for sharing                 |
| `ITEM_SHARED`            | A folder was shared                                       |
| `TAG_ITEM_CREATE`        | A Tag was added to a file or folder                       |
| `ENABLE_TWO_FACTOR_AUTH` | 2 factor authentication enabled by user                  |
| `MASTER_INVITE_ACCEPT`   | Free user accepts invitation to become a managed user    |
| `MASTER_INVITE_REJECT`   | Free user rejects invitation to become a managed user    |
| `ACCESS_GRANTED`         | Granted Box access to account                            |
| `ACCESS_REVOKED`         | Revoke Box access to account                             |

## Event notifications

To reduce the noise of the event stream and optimize event consumption, the  event types listed in the table trigger a limited number of notifications.

| Event type | Notification behavior|
|-----------|--------------|
|`COLLAB_ADD_COLLABORATOR`, `COLLAB_REMOVE_COLLABORATOR`, `COLLAB_INVITE_COLLABORATOR`, `COLLAB_ROLE_CHANGE` | When these events take place, the content owner on the `changes` event stream is notified. Collaborators see an additional event that matches what they see on the `all` stream.|
| `ITEM_DOWNLOAD` | When an item is downloaded, only the content owner gets the notification. Collaborators are not notified.|
| `ITEM_PREVIEW` | When an item is previewed, only the content owner gets the notification. Collaborators are not notified. |

[longpoll]: g://events/user-events/polling
