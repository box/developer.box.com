---
centered: true
rank: 1
category_id: sign
subcategory_id: sign/10-quick-start
is_index: false
id: sign/quick-start/api-basics
type: page
total_steps: 2
sibling_id: sign/quick-start
parent_id: sign/quick-start
next_page_id: sign/quick-start/your-first-request
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/10-quick-start/10-api-basics.md
fullyTranslated: true
---
# APIの基本

## Sign API

署名リクエストを作成して管理するには、署名リクエストのエンドポイントを使用します。署名リクエストは、作成、再送信、キャンセルできます。また、すべての署名リクエストのリストを取得したり、特定の署名リクエストの詳細を取得したりすることもできます。

エンドポイントは`https://{api.box.com}/2.0/sign_requests`です。次の表に、このエンドポイントで実行できる操作を示します。

| 操作   | エンドポイント                     | 説明                     |
| ---- | --------------------------- | ---------------------- |
| GET  | `/sign_requests`            | すべての署名リクエストのリストを取得します。 |
| GET  | `/sign_requests/:id`        | 特定の署名リクエストの詳細を取得します。   |
| POST | `/sign_requests`            | 署名リクエストを作成します。         |
| POST | `/sign_requests/:id/resend` | 署名リクエストを再送信します。        |
| POST | `/sign_requests/:id/cancel` | 署名リクエストをキャンセルします。      |

リクエストとレスポンスのパラメータの詳細については、[署名リクエストAPIリファレンス][sign-api-reference]を参照してください。

## SignテンプレートAPI

テンプレートのリストと詳細を取得するには、Signテンプレートエンドポイントを使用します。

<Message type="notice">

このAPIを使用してテンプレートを作成、編集、削除することはできません。これらのテンプレートは、Boxウェブアプリでのみ管理されます。

</Message>

エンドポイントは`https://{api.box.com}/2.0/sign_templates`です。次の表に、このエンドポイントで実行できる操作を示します。

| 操作  | エンドポイント               | 説明                    |
| --- | --------------------- | --------------------- |
| GET | `/sign_templates`     | すべてのテンプレートのリストを取得します。 |
| GET | `/sign_templates/:id` | 特定のテンプレートの詳細を取得します。   |

リクエストとレスポンスのパラメータの詳細については、[SignテンプレートリクエストAPIリファレンス][sign-api-template-ref]を参照してください。

[sign-api-reference]: https://developer.box.com/reference/resources/sign-request/

[sign-api-template-ref]: https://developer.box.com/reference/resources/sign-template/
