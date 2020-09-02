---
related_endpoints:
  - get_metadata_cascade_policies_id
related_guides:
  - metadata/cascades/list
  - metadata/cascades/create
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: false
id: metadata/cascades/get
rank: 2
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades/create
previous_page_id: metadata/cascades/list
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/6-cascades/2-get.md
---
# メタデータカスケードポリシーの取得

<Message warning>

メタデータカスケードポリシーは現在ベータ版であり、構文が今後変更される可能性があります。

</Message>

メタデータカスケードポリシーに関する情報を取得するには、ポリシーの`id`を指定して[`GET /metadata_cascade_policies/:id`][e_get] APIエンドポイントを呼び出します。

<Samples id="get_metadata_cascade_policies_id">

</Samples>

<Message>

ポリシーの`id`を取得するには、フォルダに対する[すべてのポリシーのリストを取得][g_list_policies]します。

</Message>

[e_get]: e://get_metadata_cascade_policies_id

[g_list_policies]: g://metadata/cascades/list
