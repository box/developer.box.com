---
rank: 0
related_endpoints: []
related_guides:
  - tooling/sdks
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-postman-collection
category_id: tooling
subcategory_id: tooling/postman
is_index: true
id: tooling/postman
type: guide
total_steps: 5
sibling_id: tooling
parent_id: tooling
next_page_id: tooling/postman/install
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/postman/index.md
---
# Postman Collection

<Message type='danger'>

We are aware of the issue related to importing the collection into Postman,
and are working on a fix. In the meantime, please make sure to download
and use [version 8][v8] of the desktop application.

</Message>

[Postman][postman] is a tool that lets you build and test HTTP requests in an
easy-to-use interface without configuring a full development environment. The
**Box Postman Collection** is a set of preconfigured requests that make it
possible to get started with the Box API without having to manually configure
the requests.

The simplest way to get started with Postman is with our Postman Quick Start guide.

<CTA to='g://tooling/postman/quick-start'>

Get Started with the Box Postman Collection

</CTA>

## Latest Collection

Clicking the following button will install our latest Postman
collection. It is a complete Postman collection that covers every API endpoint
and is auto-generated from our [OpenAPI specification][openapi]. It is expected
to get many more updates including some to make authentication a lot easier.

<Postman anonymous >

</Postman>

<Message warning>

The Postman collection requires the [Postman desktop app][postman] to be
installed. The Box Postman collection does not support the now deprecated
Postman Chrome application.

</Mesage>

[postman]: https://postman.com
[legacy]: https://www.postman.com/collections/768279fde466dffc5511
[openapi]: https://github.com/box/box-openapi
[v8]: https://learning.postman.com/docs/administration/upgrading/#downloading-postman-v8