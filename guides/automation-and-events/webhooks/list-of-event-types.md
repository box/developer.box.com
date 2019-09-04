---
rank: 4
tag: webhooks
related_endpoints:
  - post_webhooks
related_guides:
  - automation-and-events/webhooks/create-a-webhook
required_guides:
  - automation-and-events/webhooks/create-a-webhook
alias_paths: []
id: automation-and-events/webhooks/list-of-event-types
cId: automation-and-events
scId: automation-and-events/webhooks
isIndex: false
---

# List of event types

The following is a list of event triggers available when creating webhooks. Some
events are only available for files, while others are only available for folders.

<!-- markdownlint-disable line-length -->
| Event                       | Triggered                                                                                                           | File? | Folder? |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|-------|---------|
| `FILE.UPLOADED`             | A file is uploaded to this folder                                                                                   | No    | Yes     |
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
| `COMMENT.CREATED`           | A comment object is created                                                                                         | Yes   | Yes     |
| `COMMENT.UPDATED`           | A comment object is edited                                                                                          | Yes   | Yes     |
| `COMMENT.DELETED`           | A comment object is removed                                                                                         | Yes   | Yes     |
| `TASK_ASSIGNMENT.CREATED`   | A task is created                                                                                                   | Yes   | Yes     |
| `TASK_ASSIGNMENT.UPDATED`   | A task assignment is changed                                                                                        | Yes   | Yes     |
| `METADATA_INSTANCE.CREATED` | A new metadata template instance is associated with a file or folder                                                | Yes   | Yes     |
| `METADATA_INSTANCE.UPDATED` | An attribute (value) is updated/deleted for an existing metadata template instance associated with a file or folder | Yes   | Yes     |
| `METADATA_INSTANCE.DELETED` | An existing metadata template instance associated with a file or folder is deleted                                  | Yes   | Yes     |
| `FOLDER.CREATED`            | A folder is created                                                                                                 | No    | Yes     |
| `FOLDER.RENAMED`            | A folder was renamed.                                                                                               | No    | Yes     |
| `FOLDER.DOWNLOADED`         | A folder is downloaded                                                                                              | No    | Yes     |
| `FOLDER.RESTORED`           | A folder is restored from the trash                                                                                 | No    | Yes     |
| `FOLDER.DELETED`            | A folder is permanently removed                                                                                     | No    | Yes     |
| `FOLDER.COPIED`             | A copy of a folder is made                                                                                          | No    | Yes     |
| `FOLDER.MOVED`              | A folder is moved to a different folder                                                                             | No    | Yes     |
| `FOLDER.TRASHED`            | A folder is moved to the trash                                                                                      | No    | Yes     |
| `WEBHOOK.DELETED`           | When a webhook is deleted                                                                                           | No    | No      |
| `COLLABORATION.CREATED`     | A collaboration is created                                                                                          | No    | Yes     |
| `COLLABORATION.ACCEPTED`    | A collaboration has been accepted                                                                                   | No    | Yes     |
| `COLLABORATION.REJECTED`    | A collaboration has been rejected                                                                                   | No    | Yes     |
| `COLLABORATION.REMOVED`     | A collaboration has been removed                                                                                    | No    | Yes     |
| `COLLABORATION.UPDATED`     | A collaboration has been updated.                                                                                   | No    | Yes     |
| `SHARED_LINK.DELETED`       | A shared link was deleted                                                                                           | Yes   | Yes     |
| `SHARED_LINK.CREATED`       | A shared link was created                                                                                           | Yes   | Yes     |
| `SHARED_LINK.UPDATED`       | A shared link was updated                                                                                           | Yes   | Yes     |
<!-- markdownlint-enable line-length -->
