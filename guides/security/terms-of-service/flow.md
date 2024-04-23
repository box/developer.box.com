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
  https://github.com/box/developer.box.com/blob/main/content/guides/security/terms-of-service/flow.md
---
# Application Flow

In general, applications use Terms of Services as follows.

When an application, authenticated as a user, tries to access an item in Box that
requires the user to have accepted the relevant Terms of Service it receives a
`TERMS_OF_SERVICE_REQUIRED`  error.

```json
{
  "type": "error",
  "status": 400,
  "code": "terms_of_service_required",
  "context_info": {
    "tos_id": 261346614,
    "tos_user_status_id": 4562456
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "message": "User must accept custom terms of service before action can be taken",
  "request_id": "ADF7722DD"
}
```

The application requests the Terms of Service's information by calling
[`GET /terms_of_services/:id`][get_tos_id].

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

The application can then show the text from the Terms of Service to the user.

When the user accepts or rejects the terms, it makes a call to either
[`PUT /terms_of_service_user_statuses/:id`][put_tosus] or
[`POST /terms_of_service_user_statuses`][post_tosus] depending on if the initial
error returned a `tos_user_status_id` in the response.

[put_tosus]: e://put_terms_of_service_user_statuses_id
[post_tosus]: e://post_terms_of_service_user_statuses
[get_tos_id]: e://get_terms_of_services_id