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

アーカイブは、特別な種類のフォルダです。Box Archive APIを使用すると、アーカイブの作成、リスト取得、削除を実行できます。ただし、アーカイブまたはアーカイブ内のコンテンツを操作する他のAPIも存在します。サポートされているAPIの詳細なリストについては、[サポートされているAPI][Supported APIs]ガイドを参照してください。

## 必須のスコープ

Box Archive APIのいずれかを使用する前に、[管理コンソール内のBox Archive][Box Archive in Admin Console]にアクセスできることを確認してください。Box Platformアプリでは、`GCM`および`Read and write all files and folders`[スコープ][Scopes]が有効になっている必要があります。アーカイブを表示するだけで、変更しない予定の場合は、`Read and write all files and folders`スコープではなく`Read all files and folders`スコープを使用してください。

<Message type="notice">

`GCM`スコープは、開発者コンソールでは使用できないため、カスタマーサポートに連絡して有効にする必要があります。

</Message>

[Supported APIs]: g://archives/supported-apis

[Box Archive in Admin Console]: https://support.box.com/hc/en-us/p/Product_Page_2023?section-id=40168863437843

[Scopes]: https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/
