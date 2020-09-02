---
related_endpoints:
  - get_metadata_templates_id_id_schema
  - get_metadata_templates_id
related_guides:
  - metadata/scopes
  - metadata/templates/list
  - metadata/templates/create
related_resources:
  - metadata_templates
category_id: metadata
subcategory_id: metadata/2-templates
is_index: false
id: metadata/templates/get
rank: 3
type: guide
total_steps: 5
sibling_id: metadata/templates
parent_id: metadata/templates
next_page_id: metadata/templates/create
previous_page_id: metadata/templates
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/2-templates/3-get.md
---
# メタデータテンプレートの取得

メタデータテンプレートに関する情報を取得するには、テンプレートの名前とスコープ、またはテンプレートの識別子を使用します。

<Message>

認証済みユーザーが取得できるのは、`global`スコープまたは`enterprise_:id`スコープ(`:id`は会社のID)の中で[スコープ][scopes]が設定されたメタデータテンプレートに関する情報のみです。

</Message>

## 名前を指定してメタデータテンプレートを取得

名前を指定してメタデータテンプレートを取得するには、テンプレートの`scope`と`templateKey`を指定して[`GET
/metadata_templates/:scope/:templateKey`][e_by_name] APIエンドポイントを呼び出します。

<Samples id="get_metadata_templates_id_id_schema">

</Samples>

<Message>

テンプレートの`scope`と`templateKey`を取得するには、[すべてのメタデータテンプレートのリストを取得][g_list_templates]するか、[項目のすべてのインスタンスのリストを取得][g_list_instances_item]します。

</Message>

## IDを指定してメタデータテンプレートを取得

IDを指定してメタデータテンプレートを取得するには、テンプレートの`scope`と`templateKey`の両方を[`GET
/metadata_templates/:id`][e_by_id] APIエンドポイントに渡す必要があります。

<Samples id="get_metadata_templates_id">

</Samples>

<Message>

テンプレートの`id`を取得するには、[すべてのメタデータテンプレートのリストを取得][g_list_templates]するか、[項目のすべてのインスタンスのリストを取得][g_list_instances_item]します。

</Message>

[e_by_name]: e://get_metadata_templates_id_id_schema

[e_by_id]: e://get_metadata_templates_id

[scopes]: g://metadata/scopes

[g_list_templates]: g://metadata/templates/list

[g_list_instances_item]: g://metadata/instances/list
