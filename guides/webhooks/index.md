---
rank: 280
related_endpoints:
  - get_webhooks
  - get_webhooks_id
  - post_webhooks
  - put_webhooks_id
  - delete_webhooks_id
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /docs/work-with-webhooks
  - /docs/file-workflow-with-webhooks
  - /docs/webhooks
  - /docs/getting-started-with-webhooks-v2
category_id: webhooks
subcategory_id: null
is_index: true
id: webhooks
type: guide
total_steps: 1
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: webhooks/triggers
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/index.md
fullyTranslated: true
---
# Webhook

Webhookを使用すると、Boxコンテンツのイベントを監視し、イベントの発生時に任意のURLへの通知を受け取ることができます。たとえば、ワークフローには、共有リンクを削除するためのファイルダウンロードの待機が含まれる場合があります。このファイルにWebhookを設定すれば、ダウンロードイベントが通知されたときに、スクリプトが起動し、共有リンクを削除するためのAPI呼び出しを実行できます。

## バージョン

WebhookにはV1とV2の2種類があります。この2つの比較を以下に示します。

<!-- markdownlint-disable line-length -->

| V1                     | V2                                     |
| ---------------------- | -------------------------------------- |
| 開発者コンソールで作成            | API呼び出しで作成                             |
| ルートレベルに設定              | 特定のファイル/フォルダに設定 (ただしルートには設定不可)         |
| 14のイベントトリガーから選択        | 30以上のイベントトリガーから選択                      |
| 選択したコールバックパラメータを提供     | ペイロードに、オブジェクトレスポンスと追加のコンテキスト情報がすべて含まれる |
| 通知配信の失敗後の再試行メカニズムなし    | 通知配信の失敗後、10回まで再試行可能                    |
| ペイロード検証をサポートしない        | ペイロード検証をサポート                           |
| 通知URLはHTTPまたはHTTPSを指定可 | 通知URLはHTTPSのみ指定可                       |
| 拡張性は小さい                | 拡張性に優れ、信頼性が高い                          |

<!-- markdownlint-enable line-length -->
