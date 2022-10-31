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
fullyTranslated: true
---
# Webhookイベントトリガー

## V2

### ファイルとフォルダ

The following is a list of events that can be configured to trigger a V2 webhook. Some events are only available for files, while others are only available for folders.

<!-- markdownlint-disable line-length -->

| イベント                        | トリガー                                                                                                                 | ファイルに使用可能か | フォルダに使用可能か |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| `COLLABORATION.CREATED`     | A collaboration is created.                                                                                          | いいえ        | はい         |
| `COLLABORATION.ACCEPTED`    | A collaboration is accepted.                                                                                         | いいえ        | はい         |
| `COLLABORATION.REJECTED`    | A collaboration is rejected.                                                                                         | いいえ        | はい         |
| `COLLABORATION.REMOVED`     | A collaboration is removed.                                                                                          | いいえ        | はい         |
| `COLLABORATION.UPDATED`     | A collaboration is updated.                                                                                          | いいえ        | はい         |
| `COMMENT.CREATED`           | A comment object is created.                                                                                         | はい         | はい         |
| `COMMENT.UPDATED`           | A comment object is edited.                                                                                          | はい         | はい         |
| `COMMENT.DELETED`           | A comment object is removed.                                                                                         | はい         | はい         |
| `FILE.UPLOADED`             | A file is uploaded or moved to this folder.                                                                          | いいえ        | はい         |
| `FILE.PREVIEWED`            | A file is previewed.                                                                                                 | はい         | はい         |
| `FILE.DOWNLOADED`           | A file is downloaded.                                                                                                | はい         | はい         |
| `FILE.TRASHED`              | A file is moved to trash.                                                                                            | はい         | はい         |
| `FILE.DELETED`              | A file is permanently deleted.                                                                                       | はい         | はい         |
| `FILE.RESTORED`             | A file is restored from trash.                                                                                       | はい         | はい         |
| `FILE.COPIED`               | A file is copied.                                                                                                    | はい         | はい         |
| `FILE.MOVED`                | A file is moved from one folder to another.                                                                          | はい         | はい         |
| `FILE.LOCKED`               | A file is locked.                                                                                                    | はい         | はい         |
| `FILE.UNLOCKED`             | A file is unlocked.                                                                                                  | はい         | はい         |
| `FILE.RENAMED`              | A file is renamed.                                                                                                   | はい         | はい         |
| `FOLDER.CREATED`            | フォルダが作成される                                                                                                           | いいえ        | はい         |
| `FOLDER.RENAMED`            | A folder is renamed.                                                                                                 | いいえ        | はい         |
| `FOLDER.DOWNLOADED`         | A folder is downloaded.                                                                                              | いいえ        | はい         |
| `FOLDER.RESTORED`           | A folder is restored from trash.                                                                                     | いいえ        | はい         |
| `FOLDER.DELETED`            | A folder is permanently removed.                                                                                     | いいえ        | はい         |
| `FOLDER.COPIED`             | A folder is copied.                                                                                                  | いいえ        | はい         |
| `FOLDER.MOVED`              | A folder is moved to a different folder.                                                                             | いいえ        | はい         |
| `FOLDER.TRASHED`            | A folder is moved to trash.                                                                                          | いいえ        | はい         |
| `METADATA_INSTANCE.CREATED` | A new metadata template instance is associated with a file or folder.                                                | はい         | はい         |
| `METADATA_INSTANCE.UPDATED` | An attribute (value) is updated/deleted for an existing metadata template instance associated with a file or folder. | はい         | はい         |
| `METADATA_INSTANCE.DELETED` | An existing metadata template instance associated with a file or folder is deleted.                                  | はい         | はい         |
| `SHARED_LINK.DELETED`       | A shared link is deleted.                                                                                            | はい         | はい         |
| `SHARED_LINK.CREATED`       | A shared link is created.                                                                                            | はい         | はい         |
| `SHARED_LINK.UPDATED`       | A shared link is updated.                                                                                            | はい         | はい         |
| `TASK_ASSIGNMENT.CREATED`   | タスクの作成                                                                                                               | はい         | はい         |
| `TASK_ASSIGNMENT.UPDATED`   | A task assignment is changed.                                                                                        | はい         | はい         |
| `SIGN_REQUEST.COMPLETED`    | A sign request is completed.                                                                                         | はい         | はい         |
| `SIGN_REQUEST.DECLINED`     | A sign request is declined.                                                                                          | はい         | はい         |
| `SIGN_REQUEST.EXPIRED`      | A sign request is expired.                                                                                           | はい         | はい         |
| `WEBHOOK.DELETED`           | A webhook is deleted.                                                                                                | いいえ        | いいえ        |

<!-- markdownlint-enable line-length -->

<!-- markdownlint-disable line-length -->

<!-- | `SIGN_REQUEST.SIGNER_EMAIL_BOUNCED` | A sign request recipient email notification was not delivered | -->

<!-- markdownlint-enable line-length -->

## V1

Events that can be configured to trigger a v1 webhook:

* Sent,
* Created,
* Uploaded,
* Commented,
* Downloaded,
* Previewed,
* Moved,
* Copied,
* Task assigned,
* Responded to task,
* Locked,
* Unlocked,
* Deleted,
* Collaborator added.
