---
rank: 2
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/user-events/for-user
  - events/user-events/polling
  - events/parameters/pagination
required_guides: []
alias_paths:
  - /guides/events/for-enterprise
  - /guides/events/for-enterprise/
category_id: events
subcategory_id: events/enterprise-events
is_index: false
id: events/enterprise-events/for-enterprise
type: guide
total_steps: 2
sibling_id: events/enterprise-events
parent_id: events/enterprise-events
next_page_id: events/enterprise-events/migrate-to-stream
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/enterprise-events/for-enterprise.md
---
# Get Enterprise Events

To get a enterprise's events, make
a call to the [`GET /events`](e://get_events) API with the `stream_type` set to
`admin_logs` or `admin_logs_streaming`.

<Message>

This API requires the user to be an enterprise admin or co-admin with the
permission to **Run new reports and access existing reports**.

</Message>

<Samples id="get_events" variant='enterprise_stream' >

</Samples>

## Stream Types

| Stream Type |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| `admin_logs`       | Enables querying historical events up to one year                                                 |
| `admin_logs_streaming`   | Enables subscribing to live events in near real time                      |

## Live Monitoring

To monitor recent events that have been generated within Box across the
enterprise, set the `stream_type` to `admin_logs_streaming`. This is also known
as the Enterprise Event Stream API.

The emphasis for this feed is on low latency rather than chronological
accuracy, which means that Box may return events more than once and out of
chronological order. Events are returned via the API in near real time after
they are processed by Box. A small delay/buffer ensures that new events are not
written after your cursor position. Only two weeks of events are available via
this `stream_type`.

## Historical Querying

To query historical events across the enterprise up to one year old, set the
`stream_type` to `admin_logs`. This is also known as the Enterprise Event
History API.

The emphasis for this feed is on completeness over latency, which means that
Box will deliver admin events in chronological order and without duplicates,
but with higher latency than the user or `admin_logs_streaming` feed. Consuming
events in near real time may lead to missed events as events can arrive later
than your filtering window.

## Anonymous Users

In some cases, the event feed might list a user with an ID of `2`. This is Box's
internal identifier for anonymous users.

An anonymous user is a user that is not logged in. This can happen any time a
user interacts with content and they aren't asked to log in first. An example
would be when a user downloads a file through an open shared link.

## Limitations

The enterprise event feed does not support long polling.

Box does not store events indefinitely. Two weeks of enterprise events are
available when `stream_type` is set to `admin_logs_streaming`. One year of
enterprise events are available when `stream_type` is set to `admin_logs`.
Seven years of enterprise events are available via the Box Admin Console’s
[exported reports][reports].

The emphasis of the `admin_logs_streaming` feed is to return the complete
results quickly, which means that Box may return events more than once and out
of order. Duplicate events can be identified by their event IDs.

## Filter by Event Type

The enterprise event feed supports filtering by event type.

<Samples id="get_events" variant='enterprise_stream_filter' >

</Samples>

A full list of event types can be found below.

## Event Types

The following events can be triggered for an enterprise. This list is not
exhaustive, so it is possible events appear that are not listed.

| Event name                                     | Description                                                                                     |
|------------------------------------------------|-------------------------------------------------------------------------------------------------|
| `ACCESS_GRANTED`                               | A user has granted Box support access to their account                                          |
| `ACCESS_REVOKED`                               | A user has revoked Box support access to their account                                          |
| `ADD_DEVICE_ASSOCIATION`                       | Added device association                                                                        |
| `ADD_LOGIN_ACTIVITY_DEVICE`                    | A user is logging in from a device we have not seen before                                      |
| `ADMIN_LOGIN`                                  | Admin console used to log in to a managed user's account                                        |
| `ANNOTATIONV2_CREATE`                          | An annotation is created                                                                        |
| `ANNOTATIONV2_DELETE`                          | An annotation is deleted                                                                        |
| `ANNOTATIONV2_EDIT`                            | An annotation is edited                                                                         |
| `APPLICATION_CREATED`                          | A new application is created in the Box Developer Console                                       |
| `APPLICATION_PUBLIC_KEY_ADDED`                 | An application public key is added.                                                             |
| `APPLICATION_PUBLIC_KEY_DELETED`               | An application public key is deleted.                                                           |
| `CHANGE_ADMIN_ROLE`                            | When an admin role changes for a user                                                           |
| `CHANGE_FOLDER_PERMISSION`                     | Edit the permissions on a folder                                                                |
| `COLLABORATION_ACCEPT`                         | Accepted invites                                                                                |
| `COLLABORATION_EXPIRATION`                     | Set collaborator expiration                                                                     |
| `COLLABORATION_INVITE`                         | Invited                                                                                         |
| `COLLABORATION_REMOVE`                         | Removed collaborators                                                                           |
| `COLLABORATION_ROLE_CHANGE`                    | Changed user roles                                                                              |
| `COLLECTION_CREATE`                            | A collection is created                                                                         |
| `COLLECTION_DELETE`                            | A collection is deleted                                                                         |
| `COLLECTION_UPDATE`                            | A collection is updated                                                                         |
| `COLLECTION_ITEM_CREATE`                       | An item is added to a collection                                                                |
| `COLLECTION_ITEM_DELETE`                       | An item is removed from a collection                                                            |
| `COLLECTION_ITEM_UPDATE`                       | An item in a collection is updated                                                              |
| `COMMENT_CREATE`                               | A comment is created on a file                                                                  |
| `COMMENT_DELETE`                               | A comment is deleted on a file                                                                  |
| `CONTENT_ACCESS`                               | A file is accessed by an authorized end user or programmatically by a Box application           |
| `CONTENT_RECOVERY_REPORT_CREATE` | A Content Recovery report is created |
| `CONTENT_RECOVERY_REPORT_DELETE` | A Content Recovery report is deleted  |
| `CONTENT_RECOVERY_REPORT_INITIATE` | A Content Recovery report is initiated |
| `CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY`  | A policy set in the Admin console is triggered                                                  |
| `CONTENT_WORKFLOW_AUTOMATION_ADD`              | An automation is added                                                                          |
| `CONTENT_WORKFLOW_AUTOMATION_DELETE`           | An automation is deleted                                                                        |
| `CONTENT_WORKFLOW_POLICY_ADD`                  | A content policy is added                                                                       |
| `CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION`    | There is a sharing policy violation.                                                            |
| `CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION`     | A collaborator violated an admin-set upload policy                                              |
| `COPY`                                         | Copied                                                                                          |
| `DATA_RETENTION_CREATE_RETENTION`              | Retention is created                                                                            |
| `DATA_RETENTION_REMOVE_RETENTION`              | Retention is removed                                                                            |
| `DELETE`                                       | Deleted                                                                                         |
| `DELETE_USER`                                  | Deleted user                                                                                    |
| `DEVICE_TRUST_CHECK_FAILED`                    | Device Trust check failed                                                                       |
| `DISABLE_MULTI_FACTOR_AUTH`                           | When multifactor authentication has been disabled                      |
| `DOWNLOAD`                                     | Downloaded                                                                                      |
| `EDIT`                                         | Edited                                                                                          |
| `EDIT_USER`                                    | Edited user                                                                                     |
| `EDR_CROWDSTRIKE_DEVICE_DETECTED`                                    | Device detected by the CrowdStrike Falcon platform                                                                                     |
| `EDR_CROWDSTRIKE_NO_BOX_TOOLS`                                    | Box Tools package not detected on device with CrowdStrike Falcon platform support                                                                           |
| `EDR_CROWDSTRIKE_BOX_TOOLS_OUTDATED`                                    | Box Tools package outdated on device with CrowdStrike Falcon platform support                                                                                     |
| `EDR_CROWDSTRIKE_DRIVE_OUTDATED`                                    | Box Drive application outdated on device with CrowdStrike Falcon platform support                                                                                     |
| `EDR_CROWDSTRIKE_ACCESS_ALLOWED_NO_CROWDSTRIKE_DEVICE`                                    | Access allowed to a device not identified by the CrowdStrike Falcon platform                                                                                   |
| `EDR_CROWDSTRIKE_ACCESS_REVOKED`                                    | Access revoked to a device identified by the CrowdStrike Falcon platform                                                                                     |
| `EMAIL_ALIAS_CONFIRM`                          | A user email alias is confirmed                                                                 |
| `EMAIL_ALIAS_REMOVE`                           | A user email alias is removed                                                                   |
| `ENABLE_MULTI_FACTOR_AUTH`                           | When multifactor authentication has been enabled                      |
| `ENTERPRISE_APP_AUTHORIZATION_UPDATE`          | When a JWT application has been authorized or reauthorized                                      |
| `EXTERNAL_COLLAB_SECURITY_SETTINGS`            | Changes in external collaboration security settings                                             |
| `FAILED_LOGIN`                                 | Failed login                                                                                    |
| `FILE_MARKED_MALICIOUS`                        | Virus found on a file. Event is only received by enterprises that have opted in to be notified. |
| `FILE_WATERMARKED_DOWNLOAD`                    | A watermarked file is downloaded                                                                |
| `GROUP_ADD_ITEM`                               | An item is added to a group                                                                     |
| `GROUP_ADD_USER`                               | Added user to group                                                                             |
| `GROUP_ADMIN_CREATED` | Group admin is created |
| `GROUP_ADMIN_DELETED` | Group admin is deleted |
| `GROUP_ADMIN_PERMISSIONS_UPDATED` | Group admin permissions are updated |
| `GROUP_CREATION`                               | Created new group                                                                               |
| `GROUP_DELETION`                               | Deleted group                                                                                   |
| `GROUP_EDITED`                                 | Edited group                                                                                    |
| `GROUP_REMOVE_ITEM`                            | Folders were removed from a group in the Admin console                                          |
| `GROUP_REMOVE_USER`                            | Removed user from group                                                                         |
| `ITEM_EMAIL_SEND` | An email is sent to a collaborator on an item |
| `ITEM_MODIFY`                                  | Item is modified                                                                                |
| `ITEM_OPEN`                                    | Item is opened                                                                                  |
| `ITEM_SHARED_UPDATE`                           | Share links settings updated                                                                    |
| `ITEM_SYNC`                                    | Synced folder                                                                                   |
| `ITEM_UNSYNC`                                  | Unmarked folder for synced                                                                      |
| `LEGAL_HOLD_ASSIGNMENT_CREATE`                 | A legal hold assignment is created                                                              |
| `LEGAL_HOLD_ASSIGNMENT_DELETE`                 | A legal hold assignment is deleted                                                              |
| `LEGAL_HOLD_POLICY_CREATE`                     | A legal hold policy is created                                                                  |
| `LEGAL_HOLD_POLICY_DELETE`                     | A legal hold policy is deleted                                                                  |
| `LEGAL_HOLD_POLICY_UPDATE`                     | A legal hold policy is updated                                                                  |
| `LOCK`                                         | Locked                                                                                          |
| `LOGIN`                                        | Login                                                                                           |
| `METADATA_INSTANCE_CREATE`                     | Creation of metadata instance                                                                   |
| `METADATA_INSTANCE_DELETE`                     | Deletion of metadata instance                                                                   |
| `METADATA_INSTANCE_UPDATE`                     | Update of metadata instance                                                                     |
| `METADATA_TEMPLATE_CREATE`                     | Creation of metadata template                                                                   |
| `METADATA_TEMPLATE_UPDATE`                     | Update of metadata template                                                                     |
| `METADATA_TEMPLATE_DELETE`                     | Deletion of metadata template                                                                   |
| `MOVE`                                         | Moved                                                                                           |
| `NEW_USER`                                     | Created user                                                                                    |
| `OAUTH2_ACCESS_TOKEN_REVOKE`                   | An OAuth 2.0 access token has been revoked                                                      |
| `PREVIEW`                                      | Previewed                                                                                       |
| `REMOVE_DEVICE_ASSOCIATION`                    | Removed device association                                                                      |
| `REMOVE_LOGIN_ACTIVITY_DEVICE`                 | We invalidated a user session associated with an app                                            |
| `RENAME`                                       | A file or folder name or description is changed                                                 |
| `RETENTION_POLICY_ASSIGNMENT_ADD`              | A retention policy assignment is added                                                          |
| `SHARE`                                        | Enabled shared links                                                                            |
| `SHARE_EXPIRATION`                             | Set shared link expiration                                                                      |
| `SHARED_LINK_SEND` | An email is sent with a shared link and an optional message |
| `SHARED_LINK_REDIRECT_OUT_OF_SHARED_CONTEXT`   | Shared link causes a redirect                                                                   |
| `SHIELD_ALERT`                                 | Shield detected an anomalous  download, session, location, or malicious content based on enterprise Shield rules. See [shield alert events][shield-events] for more information. |
| `SHIELD_DOWNLOAD_BLOCKED`                                 | End user blocked from downloading a file based on a shield access policy |
| `SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`        | Access to an external collaboration is  blocked                                                 |
| `SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION` | Access to an external collaboration is  blocked due to missing a justification   |
| `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`        | An invite to externally collaborate is blocked                                                  |
| `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION` | An invite to externally collaborate is blocked due to missing a justification    |
| `SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`      | An invite to externally collaborate is justified                                                |
| `SHIELD_JUSTIFICATION_APPROVAL`                | A Shield justification is approved                                                              |
| `SHIELD_SHARED_LINK_ACCESS_BLOCKED` | Access to a shared link is blocked |
| `SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE` | A shared link is created and access to the content is restricted |
| `SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE` | A shared link is updated and access to the content is restricted |
| `SHIELD_INFORMATION_BARRIER_ENABLED`           | A Shield information barrier is enabled                                                              |
| `SHIELD_INFORMATION_BARRIER_DISABLED`           | A Shield information barrier is deactivated                                                       |
| `SHIELD_INFORMATION_BARRIER_PENDING`           | A Shield information barrier is not yet active                                                              |
| `SHIELD_INFORMATION_BARRIER_GROUP_ADD_USER_BLOCKED`           | Adding user blocked due to information barrier restrictions                        |
| `SHIELD_INFORMATION_BARRIER_COLLAB_BLOCKED`           | Creating collaborations for users blocked due to information barrier restrictions   |
| `SHIELD_INFORMATION_BARRIER_SHARED_ITEM_ACCESS_BLOCKED`   | Access to shared items blocked for users due to information barrier restrictions           |
| `SHIELD_INFORMATION_BARRIER_ITEM_MOVE_BLOCKED`   | Moving items blocked due to information barrier restrictions           |
| `SHIELD_INFORMATION_BARRIER_ITEM_COPY_BLOCKED`   | Copying items blocked due to information barrier restrictions                   |
| `SHIELD_INFORMATION_BARRIER_ITEM_OWNER_TRANSFER_BLOCKED`   | Transferring items blocked due to information barrier restrictions                   |
| `SIGN_DOCUMENT_ASSIGNED`                       | A sign request was sent to a signer                                                             |
| `SIGN_DOCUMENT_CANCELLED`                      | A sign request was cancelled via API or UI                                                      |
| `SIGN_DOCUMENT_COMPLETED`                      | A sign request was signed by all signers                                                        |
| `SIGN_DOCUMENT_CONVERTED`                      | A sign request was converted to a `.pdf` for signing                                            |
| `SIGN_DOCUMENT_CREATED`                        | A sign request was created via API or UI. The document is not yet sent to signers               |
| `SIGN_DOCUMENT_DECLINED`                       | A sign request was declined by a signer                                                         |
| `SIGN_DOCUMENT_EXPIRED`                        | A sign request expired with incomplete signatures                                               |
| `SIGN_DOCUMENT_SIGNED`                         | A sign request was signed by a signer                                                           |
| `SIGN_DOCUMENT_VIEWED_BY_SIGNER`               | A signer clicked on **Review Document** in the signer email or visited the signing URL          |
| `SIGNER_DOWNLOADED`                            | A signer downloaded the signing document                                                        |
| `SIGNER_FORWARDED`                             | A signer forwarded the signing document                                                         |
| `STORAGE_EXPIRATION`                           | Set file auto-delete                                                                            |
| `TASK_ASSIGNMENT_UPDATE`                       | Update of a task assignment                                                                     |
| `TASK_ASSIGNMENT_CREATE`                       | A task assignment is created                                                                    |
| `TASK_ASSIGNMENT_DELETE`                       | A task assignment is deleted                                                                    |
| `TASK_CREATE`                                  | A task is created.                                                                              |
| `TASK_UPDATE`                                  | A task's comment is  edited                                                                     |
| `TERMS_OF_SERVICE_ACCEPT`                      | Accepted terms                                                                                  |
| `TERMS_OF_SERVICE_REJECT`                      | Rejected terms                                                                                  |
| `UNDELETE`                                     | Restored                                                                                        |
| `UNLOCK`                                       | Unlocked                                                                                        |
| `UNSHARE`                                      | Shared link removed                                                                             |
| `UPDATE_COLLABORATION_EXPIRATION`              | Extend collaborator expiration                                                                  |
| `UPDATE_SHARE_EXPIRATION`                      | Extend shared link expiration                                                                   |
| `UPLOAD`                                       | Uploaded                                                                                        |
| `USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE` | An OAuth 2.0 access token has been created                                                      |
| `WATERMARK_LABEL_CREATE`                       | A watermark is added to a file                                                                  |
| `WATERMARK_LABEL_DELETE`                       | A watermark is removed from a file                                                              |

[shield-events]: g://events/event-triggers/shield-alert-events
[reports]:https://support.box.com/hc/en-us/articles/360043696534-Running-Reports