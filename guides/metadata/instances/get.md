---
related_resources:
  - metadata
  - metadata_template
related_endpoints:
  - get_files_id_metadata_id_id
  - get_folders_id_metadata_id_id
related_guides:
  - metadata/instances/list
  - metadata/instances/create
  - metadata/scopes
  - metadata/templates/list
category_id: metadata
subcategory_id: metadata/4-instances
is_index: false
id: metadata/instances/get
rank: 2
type: guide
total_steps: 5
sibling_id: metadata/instances
parent_id: metadata/instances
next_page_id: metadata/instances/create
previous_page_id: metadata/instances/list
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/4-instances/2-get.md
---
# 項目のメタデータの取得

ファイルまたはフォルダに割り当てられたメタデータテンプレートのインスタンスに関する情報を取得するには、項目の`id`に加え、テンプレートの`templateKey`と`scope`を使用します。

<Message>

メタデータの[スコープ][scopes]には、`global` (すべての会社が利用できるテンプレートの場合)、`enterprise` (現在の会社が利用できるテンプレートの場合)、または`enterprise_:id` (IDがスコープ名の`:id`である会社に属するテンプレートの場合)のいずれかを指定できます。

</Message>

## ファイルのメタデータインスタンスを取得

ファイルのメタデータテンプレートのインスタンスを取得するには、ファイルの`file_id`およびテンプレートの`scope`と`templateKey`を指定して、[`GET /files/:file_id/metadata/:scope/:templateKey`][e_on_file] APIエンドポイントを呼び出します。

<Samples id="get_files_id_metadata_id_id">

</Samples>

<Message>

テンプレートの`scope`と`templateKey`を取得するには、[すべてのメタデータテンプレートのリストを取得][g_list_templates]するか、[ファイルのすべてのインスタンスのリストを取得][g_list_instances_item]します。

</Message>

## フォルダのメタデータインスタンスを取得

フォルダのメタデータテンプレートのインスタンスを取得するには、フォルダの`folder_id`およびテンプレートの`scope`と`templateKey`を指定して、[`GET /folders/:folder_id/metadata/:scope/:templateKey`][e_on_file] APIエンドポイントを呼び出します。

<Samples id="get_folders_id_metadata_id_id">

</Samples>

<Message>

テンプレートの`scope`と`templateKey`を取得するには、[すべてのメタデータテンプレートのリストを取得][g_list_templates]するか、[フォルダのすべてのインスタンスのリストを取得][g_list_instances_item]します。

</Message>

[e_on_file]: e://get_files_id_metadata_id_id

[e_on_folder]: e://get_folders_id_metadata_id_id

[scopes]: g://metadata/scopes

[g_list_templates]: g://metadata/templates/list

[g_list_instances_item]: g://metadata/instances/list
