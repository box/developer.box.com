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

以下は、V2 Webhookをトリガーするよう構成できるイベントのリストです。ファイルに対してのみ使用できるイベントや、フォルダに対してのみ使用できるイベントもあります。

| イベント                                | トリガー                                                        | ファイルに使用可能か | フォルダに使用可能か |
| ----------------------------------- | ----------------------------------------------------------- | ---------- | ---------- |
| `COLLABORATION.CREATED`             | コラボレーションが作成される。                                             | いいえ        | はい         |
| `COLLABORATION.ACCEPTED`            | コラボレーションが承認される。                                             | いいえ        | はい         |
| `COLLABORATION.REJECTED`            | コラボレーションが拒否される。                                             | いいえ        | はい         |
| `COLLABORATION.REMOVED`             | コラボレーションが削除される。                                             | いいえ        | はい         |
| `COLLABORATION.UPDATED`             | コラボレーションが更新される。                                             | いいえ        | はい         |
| `COMMENT.CREATED`                   | コメントオブジェクトが作成される。                                           | はい         | はい         |
| `COMMENT.UPDATED`                   | コメントオブジェクトが編集される。                                           | はい         | はい         |
| `COMMENT.DELETED`                   | コメントオブジェクトが削除される。                                           | はい         | はい         |
| `FILE.UPLOADED`                     | ファイルがこのフォルダにアップロードまたは移動される。                                 | いいえ        | はい         |
| `FILE.PREVIEWED`                    | ファイルがプレビューされる。                                              | はい         | はい         |
| `FILE.DOWNLOADED`                   | ファイルがダウンロードされる。                                             | はい         | はい         |
| `FILE.TRASHED`                      | ファイルがごみ箱に移動される。                                             | はい         | はい         |
| `FILE.DELETED`                      | ファイルが完全に削除される。                                              | はい         | はい         |
| `FILE.RESTORED`                     | ファイルがごみ箱から復元される。                                            | はい         | はい         |
| `FILE.COPIED`                       | ファイルがコピーされる。                                                | はい         | はい         |
| `FILE.MOVED`                        | ファイルが別のフォルダに移動される。                                          | はい         | はい         |
| `FILE.LOCKED`                       | ファイルがロックされる。                                                | はい         | はい         |
| `FILE.UNLOCKED`                     | ファイルのロックが解除される。                                             | はい         | はい         |
| `FILE.RENAMED`                      | ファイル名が変更される。                                                | はい         | はい         |
| `FOLDER.CREATED`                    | フォルダが作成される                                                  | いいえ        | はい         |
| `FOLDER.RENAMED`                    | フォルダ名が変更される。                                                | いいえ        | はい         |
| `FOLDER.DOWNLOADED`                 | フォルダがダウンロードされる。                                             | いいえ        | はい         |
| `FOLDER.RESTORED`                   | フォルダがごみ箱から復元される。                                            | いいえ        | はい         |
| `FOLDER.DELETED`                    | フォルダが完全に削除される。                                              | いいえ        | はい         |
| `FOLDER.COPIED`                     | フォルダがコピーされる。                                                | いいえ        | はい         |
| `FOLDER.MOVED`                      | フォルダが別のフォルダに移動される。                                          | いいえ        | はい         |
| `FOLDER.TRASHED`                    | フォルダがごみ箱に移動される。                                             | いいえ        | はい         |
| `METADATA_INSTANCE.CREATED`         | ファイルまたはフォルダに新しいメタデータテンプレートインスタンスが関連付けられる。                   | はい         | はい         |
| `METADATA_INSTANCE.UPDATED`         | ファイルまたはフォルダに関連付けられている既存のメタデータテンプレートインスタンスの属性 (値) が更新/削除される。 | はい         | はい         |
| `METADATA_INSTANCE.DELETED`         | ファイルまたはフォルダに関連付けられている既存のメタデータテンプレートインスタンスが削除される。            | はい         | はい         |
| `SHARED_LINK.DELETED`               | 共有リンクが削除される。                                                | はい         | はい         |
| `SHARED_LINK.CREATED`               | 共有リンクが作成される。                                                | はい         | はい         |
| `SHARED_LINK.UPDATED`               | 共有リンクが更新される。                                                | はい         | はい         |
| `TASK_ASSIGNMENT.CREATED`           | タスクの作成                                                      | はい         | はい         |
| `TASK_ASSIGNMENT.UPDATED`           | タスク割り当てが変更される。                                              | はい         | はい         |
| `SIGN_REQUEST.COMPLETED`            | 署名リクエストが完了する。                                               | はい         | はい         |
| `SIGN_REQUEST.DECLINED`             | 署名リクエストが拒否される。                                              | はい         | はい         |
| `SIGN_REQUEST.EXPIRED`              | 署名リクエストの有効期限が切れる。                                           | はい         | はい         |
| `SIGN_REQUEST.SIGNER_EMAIL_BOUNCED` | 署名者のメールが差し戻される。                                             | はい         | はい         |
| `WEBHOOK.DELETED`                   | Webhookが削除される。                                              | いいえ        | いいえ        |

<!-- | `SIGN_REQUEST.SIGNER_EMAIL_BOUNCED` | A sign request recipient email notification was not delivered | -->

## V1

V1 Webhookをトリガーするよう構成できるイベントを以下に示します。

* Sent
* Created
* Uploaded
* Commented
* Downloaded
* Previewed
* Moved
* Copied
* Task assigned
* Responded to task
* Locked
* Unlocked
* Deleted
* Collaborator added
