---
rank: 4
related_endpoints:
  - get_collaborations
related_guides:
  - collaborations/share-content
required_guides: []
related_resources:
  - collaboration
  - user
category_id: collaborations
subcategory_id: null
is_index: false
id: collaborations/pending
type: guide
total_steps: 3
sibling_id: collaborations
parent_id: collaborations
next_page_id: collaborations
previous_page_id: collaborations/groups
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/pending.md
fullyTranslated: true
---
# 保留中のコラボレーションの取得

ユーザーの保留中のコラボレーションを取得するには、`status`に`pending`を指定して`GET /collaborations` APIを呼び出します。

<Samples id="get_collaborations">

</Samples>

<Message warning>

これにより、ユーザーの保留中のコラボレーションを表示する現在のリストのみが返されます。このAPIでは、ユーザーのすべてのコラボレーションを返すことは許可されていません。

</Message>
