---
rank: 1
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/v2/create-v2
required_guides:
  - webhooks/v2/create-v2
alias_paths:
  - /webhooks/creation/triggers
category_id: webhooks
subcategory_id: null
is_index: false
id: webhooks/triggers
type: guide
total_steps: 1
sibling_id: webhooks
parent_id: webhooks
next_page_id: webhooks
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/triggers.md
---
# Webhook Event Triggers

## V2

### Files and Folders

The following is a list of events that can be configured to trigger a v2
webhook. Some events are only available for files, while others are only
available for folders.

<!-- markdownlint-disable line-length -->

| Event                       | Triggered                                                                                                           | File? | Folder? |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|-------|---------|
| `COLLABORATION.CREATED`     | A collaboration is created                                                                                          | No    | Yes     |
| `COLLABORATION.ACCEPTED`    | A collaboration has been accepted                                                                                   | No    | Yes     |
| `COLLABORATION.REJECTED`    | A collaboration has been rejected                                                                                   | No    | Yes     |
| `COLLABORATION.REMOVED`     | A collaboration has been removed                                                                                    | No    | Yes     |
| `COLLABORATION.UPDATED`     | A collaboration has been updated.                                                                                   | No    | Yes     |
| `COMMENT.CREATED`           | A comment object is created                                                                                         | Yes   | Yes     |
| `COMMENT.UPDATED`           | A comment object is edited                                                                                          | Yes   | Yes     |
| `COMMENT.DELETED`           | A comment object is removed                                                                                         | Yes   | Yes     |
| `FILE.UPLOADED`             | A file is uploaded to or moved to this folder                                                                       | No    | Yes     |
| `FILE.PREVIEWED`            | A file is previewed                                                                                                 | Yes   | Yes     |
| `FILE.DOWNLOADED`           | A file is downloaded                                                                                                | Yes   | Yes     |
| `FILE.TRASHED`              | A file is moved to the trash                                                                                        | Yes   | Yes     |
| `FILE.DELETED`              | A file is permanently deleted                                                                                       | Yes   | Yes     |
| `FILE.RESTORED`             | A file is restored from the trash                                                                                   | Yes   | Yes     |
| `FILE.COPIED`               | A file is copied                                                                                                    | Yes   | Yes     |
| `FILE.MOVED`                | A file is moved from one folder to another                                                                          | Yes   | Yes     |
| `FILE.LOCKED`               | A file is locked                                                                                                    | Yes   | Yes     |
| `FILE.UNLOCKED`             | A file is unlocked                                                                                                  | Yes   | Yes     |
| `FILE.RENAMED`              | A file was renamed.                                                                                                 | Yes   | Yes     |
| `FOLDER.CREATED`            | A folder is created                                                                                                 | No    | Yes     |
| `FOLDER.RENAMED`            | A folder was renamed.                                                                                               | No    | Yes     |
| `FOLDER.DOWNLOADED`         | A folder is downloaded                                                                                              | No    | Yes     |
| `FOLDER.RESTORED`           | A folder is restored from the trash                                                                                 | No    | Yes     |
| `FOLDER.DELETED`            | A folder is permanently removed                                                                                     | No    | Yes     |
| `FOLDER.COPIED`             | A copy of a folder is made                                                                                          | No    | Yes     |
| `FOLDER.MOVED`              | A folder is moved to a different folder                                                                             | No    | Yes     |
| `FOLDER.TRASHED`            | A folder is moved to the trash                                                                                      | No    | Yes     |
| `METADATA_INSTANCE.CREATED` | A new metadata template instance is associated with a file or folder                                                | Yes   | Yes     |
| `METADATA_INSTANCE.UPDATED` | An attribute (value) is updated/deleted for an existing metadata template instance associated with a file or folder | Yes   | Yes     |
| `METADATA_INSTANCE.DELETED` | An existing metadata template instance associated with a file or folder is deleted                                  | Yes   | Yes     |
| `SHARED_LINK.DELETED`       | A shared link was deleted                                                                                           | Yes   | Yes     |
| `SHARED_LINK.CREATED`       | A shared link was created                                                                                           | Yes   | Yes     |
| `SHARED_LINK.UPDATED`       | A shared link was updated                                                                                           | Yes   | Yes     |
| `TASK_ASSIGNMENT.CREATED`   | A task is created                                                                                                   | Yes   | Yes     |
| `TASK_ASSIGNMENT.UPDATED`   | A task assignment is changed                                                                                        | Yes   | Yes     |
| `WEBHOOK.DELETED`           | When a webhook is deleted                                                                                           | No    | No      |
<!-- markdownlint-enable line-length -->

### Sign request

<!-- markdownlint-disable line-length -->

| Event                               | Triggered                                                     |
|-------------------------------------|---------------------------------------------------------------|
| `SIGN_REQUEST.SIGNED`               | A sign request is completed                                   |
| `SIGN_REQUEST.DECLINED`             | A sign request is declined                                    |
| `SIGN_REQUEST.EXPIRED`              | A sign request is expired                                     |
| `SIGN_REQUEST.SIGNER_EMAIL_BOUNCED` | A sign request recipient email notification was not delivered |
<!-- markdownlint-enable line-length -->

## V1

The follow is a list of events that can be configured to trigger a v1 webhook.

- Sent
- Created
- Uploaded
- Commented
- Downloaded
- Previewed
- Moved
- Copied
- Task assigned
- Responded to task
- Locked
- Unlocked
- Deleted
- Collaborator added