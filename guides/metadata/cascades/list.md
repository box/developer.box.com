---
related_endpoints:
  - get_metadata_cascade_policies
related_guides:
  - metadata/cascades/get
  - metadata/cascades/create
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: false
id: metadata/cascades/list
rank: 1
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades/get
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/6-cascades/1-list.md
---
# メタデータカスケードポリシーのリストの取得

<Message warning>

メタデータカスケードポリシーは現在ベータ版であり、構文が今後変更される可能性があります。

</Message>

フォルダのメタデータカスケードポリシーのリストを取得するには、`folder_id`を指定して[`GET /metadata_cascade_policies`][get_policies] APIエンドポイントを呼び出します。

<Samples id="get_metadata_cascade_policies">

</Samples>

## ページ割り

このAPIでは、[マーカーベースのページ割り][pagination]が使用されており、応答の本文で、より多くのテンプレートを使用できることを示す`next_marker`値を返すことができます。

[get_policies]: e://get_metadata_cascade_policies

[pagination]: g://api-calls/pagination/marker-based
