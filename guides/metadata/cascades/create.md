---
related_endpoints:
  - post_metadata_cascade_policies
related_guides:
  - metadata/cascades/list
  - metadata/cascades/force-apply
  - metadata/cascades/delete
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: false
id: metadata/cascades/create
rank: 3
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades/force-apply
previous_page_id: metadata/cascades/get
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/6-cascades/3-create.md
fullyTranslated: true
---
# メタデータカスケードポリシーの作成

メタデータテンプレートがフォルダに適用されたら、メタデータカスケードポリシーを作成できます。それには、ポリシーの適用先となるフォルダの`folder_id`と、メタデータテンプレートの`scope`および`templateKey`を指定して、[`POST /metadata_cascade_policies`][e_post] APIエンドポイントを呼び出します。

<Samples id="post_metadata_cascade_policies">

</Samples>

<Message>

テンプレートの`scope`と`templateKey`を取得するには、[すべてのメタデータテンプレートのリストを取得][g_list_templates]するか、[ファイルのすべてのインスタンスのリストを取得][g_list_instances_item]します。

</Message>

<Message warning>

カスケードポリシーを作成できるのは、指定した`scope`と`templateKey`のフォルダにメタデータインスタンスがすでに適用されている場合のみです。

</Message>

[e_post]: e://post_metadata_cascade_policies

[g_list_templates]: g://metadata/templates/list

[g_list_instances_item]: g://metadata/instances/list
