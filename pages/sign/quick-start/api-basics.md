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
---
# API Basics

## Sign API

The Sign request endpoint is used to create and manage signature requests.
You can create, resend, and cancel signature requests.
You can also list all signature requests and get details
of a specific signature request.

The endpoint is `https://{api.box.com}/2.0/sign_requests`.
The following table lists the operations that you can perform on this endpoint.

| Operation | Endpoint | Description |
| --- | --- | --- |
| GET | `/sign_requests` | List all signature requests. |
| GET | `/sign_requests/:id`| Get details of a specific signature request. |
| POST | `/sign_requests`| Create a signature request. |
| POST | `/sign_requests/:id/resend` | Resend a signature request. |
| POST | `/sign_requests/:id/cancel` | Cancel a signature request. |

For full details on the request and response parameters, see the [Sign
request API reference][sign-api-reference].

## Sign templates API

The Sign templates endpoint is used to list and get details of a template.

<Message type='notice'>

You can not create, edit, or delete templates using the API. These templates
are exclusively managed in the Box web application.

</Message>

The endpoint is `https://{api.box.com}/2.0/sign_templates`.
The following table lists the operations that you can perform on this endpoint.

| Operation | Endpoint | Description |
| --- | --- | --- |
| GET | `/sign_templates` | List all templates. |
| GET | `/sign_templates/:id` | Get details of a specific template. |

For a full details on the request and response parameters, see the [Sign
template request API reference][sign-api-template-ref].

[sign-api-reference]: resource://sign-request
[sign-api-template-ref]: resource://sign-template