---
centered: true
rank: 40
related_guides:
  - webhooks/v2/create-v2
  - webhooks/triggers
  - webhooks/v2
category_id: sign
subcategory_id: sign/40-webhooks
is_index: true
id: sign/webhooks
type: page
total_steps: 0
sibling_id: sign
parent_id: sign
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/40-webhooks/index.md
fullyTranslated: true
---
# Sign Webhook

Sign Webhookを使用すると、Box Signの署名リクエストに伴って発生したイベントに関する通知を受信することができます。Sign Webhookを使用して、自分のアプリケーションで操作をトリガーしたり、Box Signで発生したイベントについてユーザーに通知したりできます。

署名リクエストが非同期処理で、署名者はいつでも (場合によってはアプリケーション外部でも) 署名リクエストを操作できるので、これは特に重要になります。

## Sign関連のイベント

WebhookをトリガーできるBox Sign関連のイベントがあります。Boxイベントの大半と同様、リスナーはフォルダレベルまたはドキュメントレベルで設定されます。

最も一般的なユースケースでは、署名リクエストが作成されるフォルダでイベントをリッスンします。これにより、そのフォルダに作成されるすべての署名リクエストをリッスンできます。

リッスンできるイベントの例を以下に示します。

* `SIGN_REQUEST.COMPLETED`: 署名リクエストが完了した。
* `SIGN_REQUEST.DECLINED`: 署名リクエストが拒否された。
* `SIGN_REQUEST.EXPIRED`: 署名リクエストの有効期限が切れた。
* `SIGN_REQUEST.SIGNER_EMAIL_BOUNCED`: 署名者のメールが差し戻された。
* `SIGN_REQUEST.SIGNER_SIGNED`: 署名リクエストが署名された。
* `SIGN_REQUEST.SIGNATURE_REQUESTED`: 署名が署名者にリクエストされた。
* `SIGN_REQUEST.ERROR_FINALIZING`: 署名リクエストを処理できなかった。
