---
rank: 1
related_endpoints:
  - post-archives
  - get-archives
  - delete-archives-id
  - put-files-id
  - put-folders-id
related_resources:
  - archive
related_guides:
  - archives/add-content
  - archives/restore-content
  - archives/supported-apis
required_guides: []
alias_paths: []
category_id: archives
subcategory_id: null
is_index: true
id: archives
type: guide
total_steps: 3
sibling_id: guides
parent_id: guides
next_page_id: archives/restore-content
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/archives/index.md
fullyTranslated: true
---
# Box Archive

<Message type="notice">

Box Archiveは、Enterprise Advancedアカウントでのみ使用できます。

</Message>

Box Archiveを使用すると、アーカイブを作成および管理できます。アーカイブとは、冗長なコンテンツ、古くなったコンテンツ、または重要でないコンテンツの保存専用のフォルダです。アーカイブ内のコンテンツは、企業が所有しており、以前の所有者やコラボレータがアクセスすることはできません。

## アーカイブはフォルダ

Archives are a special type of folders. Box Archive APIs allow you to create, list, update and delete archives. However, there are other APIs that also work with archives or with content within archives. For a full list of supported APIs, see the [Supported APIs][Supported APIs] guide.

## 必須のスコープ

Before using any of the Box Archive APIs, make sure you can access [Box Archive in Admin Console][Box Archive in Admin Console]. Your Box Platform app must have the `GCM` and `Read and write all files and folders` [scopes][Scopes] enabled. If you plan to only view archives and not modify them, use the `Read all files and folders` instead of the `Read and write all files and folders` scope. Additionally, to be able to assign [storage policy][Storage policy] to an archive during its creation, your enterprise must have access to the Box Zones feature and your app must have the `Manage users` scope.

<Message type="notice">

`GCM`スコープは、開発者コンソールでは使用できないため、カスタマーサポートに連絡して有効にする必要があります。

</Message>

[Supported APIs]: g://archives/supported-apis

[Box Archive in Admin Console]: https://support.box.com/hc/en-us/p/Product_Page_2023?section-id=40168863437843

[Scopes]: g://api-calls/permissions-and-errors/scopes

[Storage policy]: r://storage-policy
