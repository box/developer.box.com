---
related_endpoints:
  - delete_files_id_metadata_id_id
  - delete_folders_id_metadata_id_id
related_resources:
  - metadata
  - metadata_template
required_guides:
  - metadata/instances/list
related_guides:
  - metadata/instances/list
  - metadata/instances/create
  - metadata/scopes
category_id: metadata
subcategory_id: metadata/4-instances
is_index: false
id: metadata/instances/delete
rank: 5
type: guide
total_steps: 5
sibling_id: metadata/instances
parent_id: metadata/instances
next_page_id: ''
previous_page_id: metadata/instances
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/4-instances/5-delete.md
fullyTranslated: true
---
# 項目からのメタデータの削除

To remove an instance of a metadata template assigned to a file or folder, use the item's `id`, and the template's `templateKey` and `scope`.

<Message>

メタデータの[スコープ][scopes]には、`global` (すべての会社が利用できるテンプレートの場合)、`enterprise` (現在の会社が利用できるテンプレートの場合)、または`enterprise_:id` (IDがスコープ名の`:id`である会社に属するテンプレートの場合) のいずれかを指定できます。

</Message>

## Remove metadata from a file

To delete an instance of a metadata template from a file, call the [`DELETE /files/:file_id/metadata/:templateKey/schema`][e_on_file] API endpoint.

<Samples id="delete_files_id_metadata_id_id">

</Samples>

ファイルからインスタンスが正常に削除されている場合、このAPIは、レスポンスの本文がない`204 No Content` APIレスポンスを返します。

## Remove metadata from a folder

To delete an instance of a metadata template, call the [`DELETE /folders/:folder_id/metadata/:templateKey/schema`][e_on_folder] API endpoint.

<Samples id="delete_folders_id_metadata_id_id">

</Samples>

フォルダからインスタンスが正常に削除されている場合、このAPIは、レスポンスの本文がない`204 No Content` APIレスポンスを返します。

[e_on_file]: e://delete_files_id_metadata_id_id

[e_on_folder]: e://delete_folders_id_metadata_id_id

[scopes]: g://metadata/scopes
