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
next_page_id: security/device-pinners
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/security/fedramp.md
fullyTranslated: true
---
# FedRAMP

## 概要

FedRAMPとは、連邦政府機関が政府または行政機関の安全性/機密性が高まりつつあるデータにクラウドプロバイダを使用できるようにする認証プログラムです。

FedRAMPでは、セキュリティのレベルについて、Low (低)、Moderate (中)、High (高) という3つのカテゴリを定義しています。

セキュリティレベルが高いほど、適用される制限が多くなります。

Boxは、現在[FedRAMP Moderate][FedRAMPCert]として認定されています。

## 留意事項

FedRAMPに準拠するため、管理者は非常に特殊な方法でBoxを設定する必要があり、Boxの機能へのアクセスをさらに制限している可能性があります。

APIの使用に影響する可能性があるセキュリティの制限を特定するには、管理者に相談してください。

## FedRAMPでのAPIの使用

FedRAMPに準拠するには、APIエントリポイントに以下のURLを使用できます。

| FedRAMP Moderate          |
| ------------------------- |
| account.box.com           |
| api.box.com               |
| upload.box.com            |
| dl.boxcloud.com           |
| realtime.services.box.net |

<!-- ## API Restrictions  The following API entry points are not yet available for usage under FedRAMP High configuration. -->

<!-- |API Entry point | |----------------| |/sign_requests| |/sign_requests/{sign_request_id}| |/sign_requests/{sign_request_id}/cancel| |/sign_requests/{sign_request_id}/resend| -->

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

```csharp
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
