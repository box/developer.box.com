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

以下は、V2 Webhookをトリガーするよう構成できるイベントのリストです。ファイルに対してのみ使用できるイベントや、フォルダに対してのみ使用できるイベントもあります。

<!-- markdownlint-disable line-length -->

| イベント                        | トリガー                                                       | ファイルに使用可能か | フォルダに使用可能か |
| --------------------------- | ---------------------------------------------------------- | ---------- | ---------- |
| `COLLABORATION.CREATED`     | コラボレーションが作成される                                             | いいえ        | はい         |
| `COLLABORATION.ACCEPTED`    | コラボレーションが同意された                                             | いいえ        | はい         |
| `COLLABORATION.REJECTED`    | コラボレーションが拒否された                                             | いいえ        | はい         |
| `COLLABORATION.REMOVED`     | コラボレーションが削除された                                             | いいえ        | はい         |
| `COLLABORATION.UPDATED`     | コラボレーションが更新された                                             | いいえ        | はい         |
| `COMMENT.CREATED`           | コメントオブジェクトが作成される                                           | はい         | はい         |
| `COMMENT.UPDATED`           | コメントオブジェクトが編集される                                           | はい         | はい         |
| `COMMENT.DELETED`           | コメントオブジェクトが削除される                                           | はい         | はい         |
| `FILE.UPLOADED`             | ファイルがこのフォルダにアップロードまたは移動される                                 | いいえ        | はい         |
| `FILE.PREVIEWED`            | ファイルがプレビューされる                                              | はい         | はい         |
| `FILE.DOWNLOADED`           | ファイルがダウンロードされる                                             | はい         | はい         |
| `FILE.TRASHED`              | ファイルがごみ箱に移動される                                             | はい         | はい         |
| `FILE.DELETED`              | ファイルが完全に削除される                                              | はい         | はい         |
| `FILE.RESTORED`             | ファイルがごみ箱から復元される                                            | はい         | はい         |
| `FILE.COPIED`               | ファイルがコピーされる                                                | はい         | はい         |
| `FILE.MOVED`                | ファイルが別のフォルダに移動される                                          | はい         | はい         |
| `FILE.LOCKED`               | ファイルがロックされる                                                | はい         | はい         |
| `FILE.UNLOCKED`             | ファイルのロックが解除される                                             | はい         | はい         |
| `FILE.RENAMED`              | ファイル名が変更された                                                | はい         | はい         |
| `FOLDER.CREATED`            | フォルダが作成される                                                 | いいえ        | はい         |
| `FOLDER.RENAMED`            | フォルダ名が変更された                                                | いいえ        | はい         |
| `FOLDER.DOWNLOADED`         | フォルダがダウンロードされる                                             | いいえ        | はい         |
| `FOLDER.RESTORED`           | フォルダがごみ箱から復元される                                            | いいえ        | はい         |
| `FOLDER.DELETED`            | フォルダが完全に削除される                                              | いいえ        | はい         |
| `FOLDER.COPIED`             | フォルダのコピーが作成される                                             | いいえ        | はい         |
| `FOLDER.MOVED`              | フォルダが別のフォルダに移動される                                          | いいえ        | はい         |
| `FOLDER.TRASHED`            | フォルダがごみ箱に移動される                                             | いいえ        | はい         |
| `METADATA_INSTANCE.CREATED` | ファイルまたはフォルダに新しいメタデータテンプレートインスタンスが関連付けられる                   | はい         | はい         |
| `METADATA_INSTANCE.UPDATED` | ファイルまたはフォルダに関連付けられている既存のメタデータテンプレートインスタンスの属性 (値) が更新/削除される | はい         | はい         |
| `METADATA_INSTANCE.DELETED` | ファイルまたはフォルダに関連付けられている既存のメタデータテンプレートインスタンスが削除される            | はい         | はい         |
| `SHARED_LINK.DELETED`       | 共有リンクが削除された                                                | はい         | はい         |
| `SHARED_LINK.CREATED`       | 共有リンクが作成された                                                | はい         | はい         |
| `SHARED_LINK.UPDATED`       | 共有リンクが更新された                                                | はい         | はい         |
| `TASK_ASSIGNMENT.CREATED`   | タスクが作成される                                                  | はい         | はい         |
| `TASK_ASSIGNMENT.UPDATED`   | タスク割り当てが変更される                                              | はい         | はい         |
| `WEBHOOK.DELETED`           | Webhookが削除される                                              | いいえ        | いいえ        |

<!-- markdownlint-enable line-length -->

## V1

以下は、V1 Webhookをトリガーするよう構成できるイベントのリストです。

* 送信
* 作成
* アップロード
* コメント
* ダウンロード
* プレビュー
* 移動
* コピー
* タスク割り当て
* タスクへの応答
* ロック
* ロックの解除
* 削除
* コラボレータの追加
