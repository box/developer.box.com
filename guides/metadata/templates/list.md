---
required_guides:
  - metadata/scopes
related_endpoints:
  - get_metadata_templates_enterprise
  - get_metadata_templates_global
related_guides:
  - metadata/templates/get
  - metadata/templates/create
  - metadata/templates/update
related_resources:
  - metadata_templates
category_id: metadata
subcategory_id: metadata/2-templates
is_index: false
id: metadata/templates/list
rank: 2
type: guide
total_steps: 5
sibling_id: metadata/templates
parent_id: metadata/templates
next_page_id: metadata/templates/get
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/2-templates/2-list.md
---
# すべてのメタデータテンプレートのリストを取得

[enterpriseスコープまたはglobalスコープ][scopes]のメタデータテンプレートのリストを取得できます。

## グローバルテンプレートのリストを取得

すべてのグローバルメタデータテンプレートのリストを取得するには、[`GET
/metadata_templates/global`][get_global] APIエンドポイントを呼び出します。

<Samples id="get_metadata_templates_global">

</Samples>

<Message>

このAPIは、Boxによって作成され、すべての会社が使用できるすべてのメタデータテンプレートのリストを返します。

</Message>

## 現在の会社のテンプレートのリストを取得

現在の会社内で使用するために作成されたすべてのメタデータテンプレートのリストを取得するには、[`GET  /metadata_templates/enterprise`][get_enterprise] APIエンドポイントを呼び出します。

<Samples id="get_metadata_templates_enterprise">

</Samples>

<Message>

このAPIは、この会社によって作成されたすべてのメタデータテンプレートのリストを返します。これらのテンプレートは、この会社内のファイルにのみ適用できます。

</Message>

## ページ割り

このAPIでは、[マーカーベースのページ割り][pagination]が使用されており、応答の本文で、より多くのテンプレートを使用できることを示す`next_marker`値を返すことができます。

[scopes]: g://metadata/scopes

[get_global]: e://get_metadata_templates_global

[get_enterprise]: e://get_metadata_templates_enterprise

[pagination]: g://api-calls/pagination/marker-based
