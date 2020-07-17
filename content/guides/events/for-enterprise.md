---
rank: 2
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-user
  - events/polling
  - events/pagination
required_guides: []
alias_paths: []
---

# Get Enterprise Events

To get a enterprise's events, authenticate a user with admin permission and make
a call to the [`GET /events`](e://get_events) API with the `stream_type` set to
`admin_logs`.

<Samples id="get_events" variant='enterprise' />

<Message>
  This API requires the user to be an enterprise admin or co-admin with the
  permission to **Run new reports and access existing reports**.
</Message>

## Filter by Event Type

The enterprise event feed support filtering by event type.

<Samples id="get_events" variant='enterprise_filter' />

A full list of event types can be found below.

## Limitations

The admin event feed does not support long polling. To long poll for events, use
the user event feed.

Box does not store events indefinitely.

User events are stored for between two weeks and two months, after which the
user events are removed. Enterprise events are accessible for one year via the
API and seven years via exported reports in the Box Admin Console.

The emphasis for this feed is on completeness over latency, which means that Box
may deliver admin events with higher latency than the user feed. Unlike the user
events stream, the admin events stream supports filtering for specific events
but does not support long polling.

## Event Types

The following events can be triggered for an enterprise.

<!-- markdownlint-disable line-length -->

| Event name                                     | Description                                                                                     |
|------------------------------------------------|-------------------------------------------------------------------------------------------------|
| `ACCESS_GRANTED`                               | A user has granted Box access to their account.                                                 |
| `ACCESS_REVOKED`                               | A user has revoked Box access to their account.                                                 |
| `ADD_DEVICE_ASSOCIATION`                       | Added device association                                                                        |
| `ADD_LOGIN_ACTIVITY_DEVICE`                    | A user is logging in from a device we haven’t seen before                                       |
| `ADMIN_LOGIN`                                  | Admin login                                                                                     |
| `APPLICATION_CREATED`                          | A new application was created in the Box developer console.                                     |
| `APPLICATION_PUBLIC_KEY_ADDED`                 | An application public key is added.                                                             |
| `APPLICATION_PUBLIC_KEY_DELETED`               | An application public key is deleted.                                                           |
| `CHANGE_ADMIN_ROLE`                            | When an admin role changes for a user                                                           |
| `CHANGE_FOLDER_PERMISSION`                     | Edit the permissions on a folder                                                                |
| `COLLABORATION_ACCEPT`                         | Accepted invites                                                                                |
| `COLLABORATION_EXPIRATION`                     | Set collaborator expiration                                                                     |
| `COLLABORATION_INVITE`                         | Invited                                                                                         |
| `COLLABORATION_REMOVE`                         | Removed collaborators                                                                           |
| `COLLABORATION_ROLE_CHANGE`                    | Changed user roles                                                                              |
| `COMMENT_CREATE`                               | A comment is created on a file.                                                                 |
| `COMMENT_DELETE`                               | A comment is deleted on a file.                                                                 |
| `CONTENT_ACCESS`                               | A file was accessed by an authorized end user or programmatically by a Box application.         |
| `CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY`  | When a policy set in the Admin console is triggered.                                            |
| `CONTENT_WORKFLOW_AUTOMATION_ADD`              | An automation is added.                                                                         |
| `CONTENT_WORKFLOW_AUTOMATION_DELETE`           | An automation is deleted.                                                                       |
| `CONTENT_WORKFLOW_POLICY_ADD`                  | A content policy is added.                                                                      |
| `CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION`    | There is a sharing policy violation.                                                            |
| `CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION`     | A collaborator violated an admin-set upload policy                                              |
| `COPY`                                         | Copied                                                                                          |
| `DATA_RETENTION_CREATE_RETENTION`              | Retention is created.                                                                           |
| `DATA_RETENTION_REMOVE_RETENTION`              | Retention is removed.                                                                           |
| `DELETE`                                       | Deleted                                                                                         |
| `DELETE_USER`                                  | Deleted user                                                                                    |
| `DEVICE_TRUST_CHECK_FAILED`                    | Device Trust check failed                                                                       |
| `DOWNLOAD`                                     | Downloaded                                                                                      |
| `EDIT`                                         | Edited                                                                                          |
| `EDIT_USER`                                    | Edited user                                                                                     |
| `EMAIL_ALIAS_CONFIRM`                          | A user email alias is confirmed.                                                                |
| `EMAIL_ALIAS_REMOVE`                           | A user email alias is removed.                                                                  |
| `ENTERPRISE_APP_AUTHORIZATION_UPDATE`          | When a JWT application has been authorized or reauthorized                                      |
| `EXTERNAL_COLLAB_SECURITY_SETTINGS`            | Changes in external collaboration security settings                                             |
| `FAILED_LOGIN`                                 | Failed login                                                                                    |
| `FILE_MARKED_MALICIOUS`                        | Virus found on a file. Event is only received by enterprises that have opted in to be notified. |
| `FILE_WATERMARKED_DOWNLOAD`                    | A watermarked file was downloaded.                                                              |
| `GROUP_ADD_ITEM`                               | An item is added to a group.                                                                    |
| `GROUP_ADD_USER`                               | Added user to group                                                                             |
| `GROUP_CREATION`                               | Created new group                                                                               |
| `GROUP_DELETION`                               | Deleted group                                                                                   |
| `GROUP_EDITED`                                 | Edited group                                                                                    |
| `GROUP_REMOVE_ITEM`                            | Folders were removed from a group in the Admin console.                                         |
| `GROUP_REMOVE_USER`                            | Removed user from group                                                                         |
| `ITEM_MODIFY`                                  | Item was modified.                                                                              |
| `ITEM_OPEN`                                    | Item was opened.                                                                                |
| `ITEM_SHARED_UPDATE`                           | Share links settings updated                                                                    |
| `ITEM_SYNC`                                    | Synced folder                                                                                   |
| `ITEM_UNSYNC`                                  | Unmarked folder for synced                                                                      |
| `LEGAL_HOLD_ASSIGNMENT_CREATE`                 | A legal hold assignment is created.                                                             |
| `LEGAL_HOLD_ASSIGNMENT_DELETE`                 | A legal hold assignment is deleted.                                                             |
| `LEGAL_HOLD_POLICY_CREATE`                     | A legal hold policy is created.                                                                 |
| `LEGAL_HOLD_POLICY_DELETE`                     | A legal hold policy is deleted.                                                                 |
| `LEGAL_HOLD_POLICY_UPDATE`                     | A legal hold policy is updated.                                                                 |
| `LOCK`                                         | Locked                                                                                          |
| `LOGIN`                                        | Login                                                                                           |
| `METADATA_INSTANCE_CREATE`                     | Creation of metadata instance.                                                                  |
| `METADATA_INSTANCE_DELETE`                     | Deletion of metadata instance.                                                                  |
| `METADATA_INSTANCE_UPDATE`                     | Update of metadata instance.                                                                    |
| `METADATA_TEMPLATE_CREATE`                     | Creation of metadata template instance.                                                         |
| `METADATA_TEMPLATE_UPDATE`                     | Update of metadata template instance.                                                           |
| `METADATA_TEMPLATE_DELETE`                     | Deletion of metadata template instance.                                                         |
| `MOVE`                                         | Moved                                                                                           |
| `NEW_USER`                                     | Created user                                                                                    |
| `OAUTH2_ACCESS_TOKEN_REVOKE`                   | An OAuth 2.0 access token has been revoked                                                      |
| `PREVIEW`                                      | Previewed                                                                                       |
| `REMOVE_DEVICE_ASSOCIATION`                    | Removed device association                                                                      |
| `REMOVE_LOGIN_ACTIVITY_DEVICE`                 | We invalidated a user session associated with an app                                            |
| `RENAME`                                       | A file or folder name or description is changed.                                                |
| `RETENTION_POLICY_ASSIGNMENT_ADD`              | A retention policy assignment is added.                                                         |
| `SHARE`                                        | Enabled shared links                                                                            |
| `SHARE_EXPIRATION`                             | Set shared link expiration                                                                      |
| `SHIELD_ALERT`                                 | Shield detected an anomalous  download, session, location, or malicious content based on enterprise Shield rules. See [shield alert events](g://events/shield-alert-events) for more information. |
| `STORAGE_EXPIRATION`                           | Set file auto-delete                                                                            |
| `TASK_ASSIGNMENT_UPDATE`                       | Update of a task assignment.                                                                    |
| `TASK_ASSIGNMENT_CREATE`                       | A task assignment is created.                                                                   |
| `TASK_ASSIGNMENT_DELETE`                       | A task assignment is deleted.                                                                   |
| `TASK_CREATE`                                  | A task is created.                                                                              |
| `TASK_UPDATE`                                  | A task's comment was edited.                                                                    |
| `TERMS_OF_SERVICE_ACCEPT`                      | Accepted terms                                                                                  |
| `TERMS_OF_SERVICE_REJECT`                      | Rejected terms                                                                                  |
| `UNDELETE`                                     | Restored                                                                                        |
| `UNLOCK`                                       | Unlocked                                                                                        |
| `UNSHARE`                                      | Shared link removed                                                                             |
| `UPDATE_COLLABORATION_EXPIRATION`              | Extend collaborator expiration                                                                  |
| `UPDATE_SHARE_EXPIRATION`                      | Extend shared link expiration                                                                   |
| `UPLOAD`                                       | Uploaded                                                                                        |
| `USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE` | An OAuth 2.0 access token has been created                                                      |
| `WATERMARK_LABEL_CREATE`                       | A watermark is added to a file.                                                                 |
| `WATERMARK_LABEL_DELETE`                       | A watermark is removed from a file.                                                             |
<!-- markdownlint-enable line-length -->

## Anonymous Users

In some cases, the event feed might list a user with an ID of `2`. This is Box's
internal identifier for anonymous users.

An anonymous user is a user that is not logged in. This can happen any time a
user interacts with content and they aren't asked to log in first. An example
would be when a user downloads a file through an open shared link.
