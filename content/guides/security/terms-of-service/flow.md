---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
 - terms_of_service
 - terms_of_service_user_status
alias_paths: []
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

## Server authentication and impersonation

Applications using JWT, Client Credentials Grant (CCG), or OAuth 2.0 may act as
a [service account][user-types], an [App User][user-types], or a managed user.
Terms of Service enforcement depends on which user is in context for the API
request.

| Scenario | Blocked if Managed ToS not accepted? |
| -------- | ------------------------------------ |
| API call with a service account or App User token (no `As-User`) | **No** — headless users are exempt |
| API call with CCG/JWT and [`As-User`][as-user] set to a managed user | **Yes** — the impersonated user must have accepted |
| User access token issued for a managed user | **Yes** — token issuance is blocked until ToS is accepted |
| OAuth authorization code flow for a managed user | **Yes** — authorization is blocked until ToS is accepted |
| API call with `As-User` set to a service account or App User | **No** — headless users are exempt |

### Accepting Terms of Service programmatically

When a managed user has not accepted Managed Terms of Service, most API calls
made on their behalf return `terms_of_service_required`. To resolve this
without requiring the user to sign in to the Box web application:

1. Obtain a server authentication access token (JWT or CCG).
2. Set the [`As-User`][as-user] header to the managed user's ID so subsequent
   requests run in that user's context.
3. Call the Terms of Service endpoints, which remain available even when ToS
   acceptance is outstanding:
   * [`GET /terms_of_services/:id`][get_tos_id] to retrieve the terms text
   * [`POST /terms_of_service_user_statuses`][post_tosus] or
     [`PUT /terms_of_service_user_statuses/:id`][put_tosus] to accept or reject
4. Retry the original API call.

An admin cannot accept Managed Terms of Service for another user without using
the `As-User` header to act as that user. Acceptance must be recorded for the
user who is subject to the Terms of Service.

[as-user]: g://authentication/oauth2/as-user
[user-types]: page://platform/user-types
[put_tosus]: e://put_terms_of_service_user_statuses_id
[post_tosus]: e://post_terms_of_service_user_statuses
[get_tos_id]: e://get_terms_of_services_id
