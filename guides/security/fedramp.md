---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/security/fedramp-high/
category_id: security
subcategory_id: null
is_index: false
id: security/fedramp
type: guide
total_steps: 3
sibling_id: security
parent_id: security
next_page_id: security/cors
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/security/fedramp.md
fullyTranslated: true
---
# FedRAMP

## 概要

FedRAMP is a certification program that allows federal agencies to use cloud providers for increasingly secure/sensitive government or government-adjacent data.

FedRAMPでは、セキュリティのレベルについて、Low (低)、Moderate (中)、High (高) という3つのカテゴリを定義しています。

セキュリティレベルが高いほど、適用される制限が多くなります。

Box is currently certified as [FedRAMP Moderate][FedRAMPCert].

## 留意事項

In order to be FedRAMP compliant, your administrator must setup Box in very a very specific way. It is possible that the administrator has further restricted access to Box functionalities.

APIの使用に影響する可能性があるセキュリティの制限を特定するには、管理者に相談してください。

## API usage in FedRAMP

For FedRAMP compliance, you may use the below URLs for API entry points.

<!-- markdownlint-disable line-length -->

| FedRAMP Moderate          |
| ------------------------- |
| account.box.com           |
| api.box.com               |
| upload.box.com            |
| dl.boxcloud.com           |
| realtime.services.box.net |

<!-- markdownlint-enable line-length -->

<!-- ## API Restrictions  The following API entry points are not yet available for usage under FedRAMP High configuration. -->

<!-- markdownlint-disable line-length -->

<!-- |API Entry point | |----------------| |/sign_requests| |/sign_requests/{sign_request_id}| |/sign_requests/{sign_request_id}/cancel| |/sign_requests/{sign_request_id}/resend| -->

<!-- markdownlint-enable line-length -->

<!-- ## Code Samples  Code samples allow you to bring in SDK, CLI, and cURL code samples. The ID needs to be an endpoint ID.  <Samples id='get_files_id' >

</Samples>

Make sure to close the HTML tag, either directly or like this.

<Samples id='get_files_id'>

</Samples>

## Messages

Messages are used to mark a text visually as being notable, a warning, or a sign
of danger.

<Message type='notice'>

A simple note

</Message>

<Message type='warning'>

A warning note

</Message>

<Message type='danger'>

A danger note

</Message>

Messages support a small size, and the content can include more Markdown text.

<Message size='small'>

# A title

A danger note with a markdown title and body.

</Message>

## Tabs

Not all code samples exist in the SDKs/CLI. You can add new code samples
for each language as follows.

<Tabs>

<Tab title='Node'>

```js
console.log('!')

```

</Tab>

<Tab title='.NET'>

```dotnet
// some .NET code

```

</Tab>

</Tabs>

## Links

We recommend using referenced links.

This would [look like this][1].

At the end of the document, define the link.

[1]: https://box.com

We provide ways to link to guides, endpoints,
and resources without hard-coding the locale.

[Get a file by ID][endpoint://get-files-id]

[File resource][resource://file]

-->

[FedRAMPCert]: https://marketplace.fedramp.gov/products/F1212191840
