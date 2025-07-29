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
---

# Webhook Event Triggers

## V2

### Files and Folders

The following is a list of events that can be configured to trigger a V2
webhook. Some events are only available for files, while others are only
available for folders.

| Event                       | Triggered                                                                                                           | File? | Folder? |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|-------|---------|
| `COLLABORATION.CREATED`     | A collaboration is created.                                                                                          | No    | Yes     |
| `COLLABORATION.ACCEPTED`    | A collaboration is accepted.                                                                                   | No    | Yes     |
| `COLLABORATION.REJECTED`    | A collaboration is rejected.                                                                                   | No    | Yes     |
| `COLLABORATION.REMOVED`     | A collaboration is removed.                                                                                    | No    | Yes     |
| `COLLABORATION.UPDATED`     | A collaboration is updated.                                                                                   | No    | Yes     |
| `COMMENT.CREATED`           | A comment object is created.                                                                                         | Yes   | Yes     |
| `COMMENT.UPDATED`           | A comment object is edited.                                                                                         | Yes   | Yes     |
| `COMMENT.DELETED`           | A comment object is removed.                                                                                         | Yes   | Yes     |
| `DOCGEN_DOCUMENT_GENERATION_FAILED` | Doc Gen failed to generate a document. | Yes | No |
| `DOCGEN_DOCUMENT_GENERATION_STARTED` | Doc Gen started to create a document. | Yes | No |
| `DOCGEN_DOCUMENT_GENERATION_SUCCEEDED` | Doc Gen succeeded to create a document. | Yes | No |
| `FILE.UPLOADED`             | A file is uploaded or moved to this folder.                                                                       | No    | Yes     |
| `FILE.PREVIEWED`            | A file is previewed.                                                                                                 | Yes   | Yes     |
| `FILE.DOWNLOADED`           | A file is downloaded.                                                                                                | Yes   | Yes     |
| `FILE.TRASHED`              | A file is moved to trash.                                                                                        | Yes   | Yes     |
| `FILE.DELETED`              | A file is permanently deleted.                                                                                       | Yes   | Yes     |
| `FILE.RESTORED`             | A file is restored from trash.                                                                                   | Yes   | Yes     |
| `FILE.COPIED`               | A file is copied.                                                                                                    | Yes   | Yes     |
| `FILE.MOVED`                | A file is moved from one folder to another.                                                                          | Yes   | Yes     |
| `FILE.LOCKED`               | A file is locked.                                                                                                    | Yes   | Yes     |
| `FILE.UNLOCKED`             | A file is unlocked.                                                                                                  | Yes   | Yes     |
| `FILE.RENAMED`              | A file is renamed.                                                                                                 | Yes   | Yes     |
| `FOLDER.CREATED`            | A folder is created                                                                                                 | No    | Yes     |
| `FOLDER.RENAMED`            | A folder is renamed.                                                                                               | No    | Yes     |
| `FOLDER.DOWNLOADED`         | A folder is downloaded.                                                                                              | No    | Yes     |
| `FOLDER.RESTORED`           | A folder is restored from trash.                                                                                 | No    | Yes     |
| `FOLDER.DELETED`            | A folder is permanently removed.                                                                                    | No    | Yes     |
| `FOLDER.COPIED`             | A folder is copied.                                                                                          | No    | Yes     |
| `FOLDER.MOVED`              | A folder is moved to a different folder.                                                                             | No    | Yes     |
| `FOLDER.TRASHED`            | A folder is moved to trash.                                                                                      | No    | Yes     |
| `METADATA_INSTANCE.CREATED` | A new metadata template instance is associated with a file or folder.                                                | Yes   | Yes     |
| `METADATA_INSTANCE.UPDATED` | An attribute (value) is updated/deleted for an existing metadata template instance associated with a file or folder. | Yes   | Yes     |
| `METADATA_INSTANCE.DELETED` | An existing metadata template instance associated with a file or folder is deleted.                                  | Yes   | Yes     |
| `SHARED_LINK.DELETED`       | A shared link is deleted.                                                                                           | Yes   | Yes     |
| `SHARED_LINK.CREATED`       | A shared link is created.                                                                                           | Yes   | Yes     |
| `SHARED_LINK.UPDATED`       | A shared link is updated.                                                                                           | Yes   | Yes     |
| `TASK_ASSIGNMENT.CREATED`   | A task is created.                                                                                                   | Yes   | Yes     |
| `TASK_ASSIGNMENT.UPDATED`   | A task assignment is changed.                                                                                        | Yes   | Yes     |
| `SIGN_REQUEST.COMPLETED`    | A sign request is completed.                                                                                         | Yes   | Yes     |
| `SIGN_REQUEST.DECLINED`     | A sign request is declined.                                                                                          | Yes   | Yes     |
| `SIGN_REQUEST.EXPIRED`      | A sign request is expired.                                                                                           | Yes   | Yes     |
| `SIGN_REQUEST.SIGNER_EMAIL_BOUNCED` | A signer's email is bounced. | Yes | Yes |
| `WEBHOOK.DELETED`           | A webhook is deleted.                                                                                           | No    | No      |

<!-- | `SIGN_REQUEST.SIGNER_EMAIL_BOUNCED` | A sign request recipient email notification was not delivered | -->

## V1

Events that can be configured to trigger a v1 webhook:

- Sent,
- Created,
- Uploaded,
- Commented,
- Downloaded,
- Previewed,
- Moved,
- Copied,
- Task assigned,
- Responded to task,
- Locked,
- Unlocked,
- Deleted,
- Collaborator added.