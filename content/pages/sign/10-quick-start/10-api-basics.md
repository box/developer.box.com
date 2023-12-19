---
centered: true
rank: 1
---

# API Basics

## Sign API

The sign request endpoint is used to create and manage signature requests. 
You can create, resend, and cancel signature requests. 
You can also list all signature requests and get details 
of a specific signature request.

The endpoint is `https://{api.box.com}/2.0/sign_requests`.
The following table lists the operations that you can perform on this endpoint.

| Operation | Endpoint | Description |
| --- | --- | --- |
| GET | /sign_requests | List all signature requests. |
| GET | /sign_requests/:id | Get details of a specific signature request. |
| POST | /sign_requests | Create a signature request. |
| POST | /sign_requests/:id/resend | Resend a signature request. |
| POST | /sign_requests/:id/cancel | Cancel a signature request. |

## Sign templates API

The sign templates endpoint is used to list and get details of a template.
You can not created, edit, or delete templates using the API. These templates 
are exclusively managed in the Box web application.

The endpoint is `https://{api.box.com}/2.0/sign_templates`.
The following table lists the operations that you can perform on this endpoint.

| Operation | Endpoint | Description |
| --- | --- | --- |
| GET | /sign_templates | List all templates. |
| GET | /sign_templates/:id | Get details of a specific template. |

<Next>First request</Next>