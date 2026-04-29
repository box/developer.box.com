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

| イベント                                   | トリガー                                                        | ファイルに使用可能か | フォルダに使用可能か |
| -------------------------------------- | ----------------------------------------------------------- | ---------- | ---------- |
| `COLLABORATION.CREATED`                | コラボレーションが作成される。                                             | いいえ        | あり         |
| `COLLABORATION.ACCEPTED`               | コラボレーションが承認される。                                             | いいえ        | あり         |
| `COLLABORATION.REJECTED`               | コラボレーションが拒否される。                                             | いいえ        | あり         |
| `COLLABORATION.REMOVED`                | コラボレーションが削除される。                                             | いいえ        | あり         |
| `COLLABORATION.UPDATED`                | コラボレーションが更新される。                                             | いいえ        | あり         |
| `COMMENT.CREATED`                      | コメントオブジェクトが作成される。                                           | あり         | あり         |
| `COMMENT.UPDATED`                      | コメントオブジェクトが編集される。                                           | あり         | あり         |
| `COMMENT.DELETED`                      | コメントオブジェクトが削除される。                                           | あり         | あり         |
| `DOCGEN_DOCUMENT_GENERATION_FAILED`    | Doc Genがドキュメントの生成に失敗しました。                                   | あり         | いいえ        |
| `DOCGEN_DOCUMENT_GENERATION_STARTED`   | Doc Genがドキュメントの作成を開始しました。                                   | あり         | いいえ        |
| `DOCGEN_DOCUMENT_GENERATION_SUCCEEDED` | Doc Genがドキュメントの作成に成功しました。                                   | あり         | いいえ        |
| `FILE.UPLOADED`                        | ファイルがこのフォルダにアップロードまたは移動される。                                 | いいえ        | あり         |
| `FILE.PREVIEWED`                       | ファイルがプレビューされる。                                              | あり         | あり         |
| `FILE.DOWNLOADED`                      | ファイルがダウンロードされる。                                             | あり         | あり         |
| `FILE.TRASHED`                         | ファイルがごみ箱に移動される。                                             | あり         | あり         |
| `FILE.DELETED`                         | ファイルが完全に削除される。                                              | あり         | あり         |
| `FILE.RESTORED`                        | ファイルがごみ箱から復元される。                                            | あり         | あり         |
| `FILE.COPIED`                          | ファイルがコピーされる。                                                | あり         | あり         |
| `FILE.MOVED`                           | ファイルが別のフォルダに移動される。                                          | あり         | あり         |
| `FILE.LOCKED`                          | ファイルがロックされる。                                                | あり         | あり         |
| `FILE.UNLOCKED`                        | ファイルのロックが解除される。                                             | あり         | あり         |
| `FILE.RENAMED`                         | ファイル名が変更される。                                                | あり         | あり         |
| `FOLDER.CREATED`                       | フォルダが作成される。                                                 | いいえ        | あり         |
| `FOLDER.RENAMED`                       | フォルダ名が変更される。                                                | いいえ        | あり         |
| `FOLDER.DOWNLOADED`                    | フォルダがダウンロードされる。                                             | いいえ        | あり         |
| `FOLDER.RESTORED`                      | フォルダがごみ箱から復元される。                                            | いいえ        | あり         |
| `FOLDER.DELETED`                       | フォルダが完全に削除される。                                              | いいえ        | あり         |
| `FOLDER.COPIED`                        | フォルダがコピーされる。                                                | いいえ        | あり         |
| `FOLDER.MOVED`                         | フォルダが別のフォルダに移動される。                                          | いいえ        | あり         |
| `FOLDER.TRASHED`                       | フォルダがごみ箱に移動される。                                             | いいえ        | あり         |
| `METADATA_INSTANCE.CREATED`            | ファイルまたはフォルダに新しいメタデータテンプレートインスタンスが関連付けられる。                   | あり         | あり         |
| `METADATA_INSTANCE.UPDATED`            | ファイルまたはフォルダに関連付けられている既存のメタデータテンプレートインスタンスの属性 (値) が更新/削除される。 | あり         | あり         |
| `METADATA_INSTANCE.DELETED`            | ファイルまたはフォルダに関連付けられている既存のメタデータテンプレートインスタンスが削除される。            | あり         | あり         |
| `SHARED_LINK.DELETED`                  | 共有リンクが削除される。                                                | あり         | あり         |
| `SHARED_LINK.CREATED`                  | 共有リンクが作成される。                                                | あり         | あり         |
| `SHARED_LINK.UPDATED`                  | 共有リンクが更新される。                                                | あり         | あり         |
| `TASK_ASSIGNMENT.CREATED`              | タスクの作成                                                      | あり         | あり         |
| `TASK_ASSIGNMENT.UPDATED`              | タスク割り当てが変更される。                                              | あり         | あり         |
| `SIGN_REQUEST.COMPLETED`               | 署名リクエストが完了する。                                               | あり         | あり         |
| `SIGN_REQUEST.DECLINED`                | 署名リクエストが拒否される。                                              | あり         | あり         |
| `SIGN_REQUEST.EXPIRED`                 | 署名リクエストの有効期限が切れる。                                           | あり         | あり         |
| `SIGN_REQUEST.SIGNER_EMAIL_BOUNCED`    | 署名者のメールが差し戻される。                                             | あり         | あり         |
| `SIGN_REQUEST.SIGNER_SIGNED`           | 署名リクエストが特定の署名者によって署名される。                                    | あり         | あり         |
| `SIGN_REQUEST.SIGNATURE_REQUESTED`     | 署名者に対して署名がリクエストされる。                                         | あり         | あり         |
| `SIGN_REQUEST.ERROR_FINALIZING`        | 署名リクエストの確定時にエラーが発生する。                                       | あり         | あり         |
| `WEBHOOK.DELETED`                      | Webhookが削除される。                                              | いいえ        | いいえ        |

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
