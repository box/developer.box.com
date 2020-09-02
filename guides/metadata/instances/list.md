---
related_resources:
  - metadata
  - metadata_template
related_endpoints:
  - get_files_id_metadata
  - get_folders_id_metadata
related_guides:
  - metadata/instances/get
  - metadata/instances/create
  - metadata/instances/update
category_id: metadata
subcategory_id: metadata/4-instances
is_index: false
id: metadata/instances/list
rank: 1
type: guide
total_steps: 5
sibling_id: metadata/instances
parent_id: metadata/instances
next_page_id: metadata/instances/get
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/4-instances/1-list.md
---
# 項目のすべてのメタデータのリストの取得

ファイルまたはフォルダのメタデータインスタンスのリストを取得できます。

## ファイルのメタデータのリストを取得

ファイルのすべてのメタデータインスタンスのリストを取得するには、[`GET /files/:file_id/metadata`][get_metadata_file] APIエンドポイントを呼び出します。

<Samples id="get_files_id_metadata">

</Samples>

<Message warning>

このAPIはページングをサポートしておらず、常にこのファイルのすべてのメタデータインスタンスを返します。

</Message>

## フォルダのメタデータのリストを取得

任意のフォルダ(ルートフォルダを除く)のすべてのメタデータインスタンスのリストを取得するには、[`GET /folders/:file_id/metadata`][get_metadata_file] APIエンドポイントを呼び出します。

<Samples id="get_folders_id_metadata">

</Samples>

<Message warning>

このAPIはページングをサポートしておらず、常にこのファイルのすべてのメタデータインスタンスを返します。このAPIは、IDが`0`のルートフォルダには使用できません。

</Message>

[get_metadata_file]: e://get_files_id_metadata

[get_metadata_folder]: e://get_folders_id_metadata
