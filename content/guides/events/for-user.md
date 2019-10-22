---
rank: 1
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-enterprise
  - events/polling
  - events/pagination
required_guides: []
alias_paths: []
---

# Get User Events

To get a user's events, authenticate as any user and make a call to the
[`GET /events`](e://get_events) API.

<Samples id="get_events" />

<Message>
  The events returned will only be for the user who's access token the API was
  made with. To get the event feed for a different user either use the `As-User`
  header or an actual access token for that user.
</Message>

## Long Polling

The user event stream supports long-polling
[through the `OPTIONS /events` API][longpoll].

## Stream Types

The user event stream support 3 types of stream.

<!-- markdownlint-disable line-length -->

| `stream_type` |                                                                                         |
| ------------- | --------------------------------------------------------------------------------------- |
| `all`         | Returns everything for a user (default)                                                 |
| `changes`     | Returns events that may cause file tree changes such as file updates or collaborations. |
| `sync`        | Is similar to changes but only applies to synced folders                                |

<!-- markdownlint-enable line-length -->

## Limitations

Box does not store events indefinitely.

User events are stored for between two weeks and two months, after which the
user events are removed. Enterprise events are accessible for one year via the
API and seven years via exported reports in the Box Admin Console.

The emphasis of this feed is to return the complete results quickly, which means
that Box may return events more than once or out of order. Duplicate events can
be identified by their event IDs.

## Event Types

The following events can be triggered for a user.

<!-- markdownlint-disable line-length -->

| Event name                   | Description                                                                     |                                         |
| ---------------------------- | ------------------------------------------------------------------------------- | --------------------------------------- |
| `ITEM_CREATE`                | A folder or File was created                                                    | Available in `sync` and `changes` feeds |
| `ITEM_UPLOAD`                | A folder or File was uploaded                                                   | Available in `sync` and `changes` feeds |
| `COMMENT_CREATE`             | A comment was created on a folder, file, or other comment                       |                                         |
| `COMMENT_DELETE`             | A comment was deleted on folder, file, or other comment                         |                                         |
| `ITEM_DOWNLOAD`              | A file or folder was downloaded                                                 |                                         |
| `ITEM_PREVIEW`               | A file was previewed                                                            |                                         |
| `ITEM_MOVE`                  | A file or folder was moved                                                      | Available in `sync` and `changes` feeds |
| `ITEM_COPY`                  | A file or folder was copied                                                     | Available in `sync` and `changes` feeds |
| `TASK_ASSIGNMENT_CREATE`     | A task was assigned                                                             |                                         |
| `TASK_CREATE`                | A task was created                                                              |                                         |
| `LOCK_CREATE`                | A file was locked                                                               | Available in `sync` and `changes` feeds |
| `LOCK_DESTROY`               | A file was unlocked. If a locked file is deleted, the source file will be null. | Available in `sync` and `changes` feeds |
| `ITEM_TRASH`                 | A file or folder was marked as deleted                                          | Available in `sync` and `changes` feeds |
| `ITEM_UNDELETE_VIA_TRASH`    | A file or folder was recovered out of the trash                                 | Available in `sync` and `changes` feeds |
| `COLLAB_ADD_COLLABORATOR`    | A collaborator was added to a folder                                            | Available in `sync` and `changes` feeds |
| `COLLAB_ROLE_CHANGE`         | A collaborator had their role changed                                           | Available in `sync` and `changes` feeds |
| `COLLAB_INVITE_COLLABORATOR` | A collaborator was invited on a folder                                          | Available in `sync` and `changes` feeds |
| `COLLAB_REMOVE_COLLABORATOR` | A collaborator was removed from a folder                                        | Available in `sync` and `changes` feeds |
| `ITEM_SYNC`                  | A folder was marked for sync                                                    | Available in `sync` and `changes` feeds |
| `ITEM_UNSYNC`                | A folder was unmarked for sync                                                 | Available in `sync` and `changes` feeds |
| `ITEM_RENAME`                | A file or folder was renamed                                                    | Available in `sync` and `changes` feeds |
| `ITEM_SHARED_CREATE`         | A file or folder was enabled for sharing                                        |                                         |
| `ITEM_SHARED_UNSHARE`        | A file or folder was disabled for sharing                                       |                                         |
| `ITEM_SHARED`                | A folder was shared                                                             |                                         |
| `ITEM_MAKE_CURRENT_VERSION`  | A previous version of a file was promoted to the current version                | Available in `sync` and `changes` feeds |
| `TAG_ITEM_CREATE`            | A Tag was added to a file or folder                                             |                                         |
| `ENABLE_TWO_FACTOR_AUTH`     | 2 factor authentication enabled by user.                                        |                                         |
| `MASTER_INVITE_ACCEPT`       | Free user accepts invitation to become a managed user.                          |                                         |
| `MASTER_INVITE_REJECT`       | Free user rejects invitation to become a managed user.                          |                                         |
| `ACCESS_GRANTED`             | Granted Box access to account.                                                  |                                         |
| `ACCESS_REVOKED`             | Revoke Box access to account.                                                   |                                         |
| `GROUP_ADD_USER`             | Added user to group                                                             | Available in `sync` and `changes` feeds |
| `GROUP_REMOVE_USER`          | Removed user from group                                                         | Available in `sync` and `changes` feeds |

<!-- markdownlint-enable line-length -->

[longpoll]: g://events/polling
