---
related_endpoints:
  - delete_metadata_cascade_policies_id
related_guides:
  - metadata/cascades/list
  - metadata/cascades/create
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: false
id: metadata/cascades/delete
rank: 5
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades
previous_page_id: metadata/cascades/force-apply
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/6-cascades/5-delete.md
fullyTranslated: true
---
# メタデータカスケードポリシーの削除

メタデータカスケードポリシーを削除するには、削除するポリシーの`id`を指定して[`DELETE /metadata_cascade_policies/:id`][e_delete] APIエンドポイントを呼び出します。

<Samples id="delete_metadata_cascade_policies_id">

</Samples>

<Message>

ポリシーの`id`を取得するには、フォルダに対する[すべてのポリシーのリストを取得][g_list_policies]します。

</Message>

[e_delete]: e://delete_metadata_cascade_policies_id

[g_list_policies]: g://metadata/cascades/list
