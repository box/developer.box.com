---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - terms_of_service
  - terms_of_service_user_status
alias_paths: []
category_id: security
subcategory_id: security/terms-of-service
is_index: false
id: security/terms-of-service/flow
type: guide
total_steps: 3
sibling_id: security/terms-of-service
parent_id: security/terms-of-service
next_page_id: security/terms-of-service/for-colaboration
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/security/terms-of-service/flow.md
---
<!-- alex disable reject -->

# アプリケーションフロー

一般的に、アプリケーションでは以下のように利用規約を使用します。

ユーザーとして認証されたアプリケーションが、関連する利用規約にユーザーが同意している必要があるBox内の項目にアクセスしようとすると、`TERMS_OF_SERVICE_REQUIRED`エラーが返されます。

```json
{
    "type": "error",
    "status": 400,
    "code": "terms_of_service_required",
    "context_info": {
        "tos_id": 261346614,
        "tos_user_status_id": 4562456
    },
    "help_url": "http://developers.box.com/docs/#errors",
    "message": "User must accept custom terms of service before action can be taken",
    "request_id": "ADF7722DD"
}
```

アプリケーションは、[`GET /terms_of_services/:id`][get_tos_id]を呼び出して利用規約の情報をリクエストします。

```json
{
  "id": 261346614,
  "type": "terms_of_service",
  "status": "enabled",
  "enterprise": {
    "id": 11446498,
    "type": "enterprise",
    "name": "Acme Inc."
  },
  "tos_type": "managed",
  "text": "By using this service, you agree to ...",
  "created_at": "2012-12-12T10:53:43-08:00",
  "modified_at": "2012-12-12T10:53:43-08:00"
}
```

その後、アプリケーションは利用規約のテキストをユーザーに表示できます。

ユーザーが利用規約を同意または拒否すると、最初のエラーによって応答で`tos_user_status_id`が返されたかどうかに応じて、[`PUT /terms_of_service_user_statuses/:id`][put_tosus]または[`POST /terms_of_service_user_statuses`][post_tosus]が呼び出されます。

[put_tosus]: e://put_terms_of_service_user_statuses_id

[post_tosus]: e://post_terms_of_service_user_statuses

[get_tos_id]: e://get_terms_of_services_id
