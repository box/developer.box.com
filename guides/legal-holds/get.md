---
rank: 2
related_endpoints:
  - get_legal_hold_policies_id
related_guides:
  - legal-holds/list
related_resources:
  - legal_hold_policy
required_guides: []
alias_paths: []
category_id: legal-holds
subcategory_id: null
is_index: false
id: legal-holds/get
type: guide
total_steps: 2
sibling_id: legal-holds
parent_id: legal-holds
next_page_id: legal-holds
previous_page_id: legal-holds/list
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/legal-holds/get.md
fullyTranslated: true
---
# リーガルホールドポリシーの取得

会社内に作成された特定のリーガルホールドポリシーの情報を取得するには、ポリシーの`id`を指定して[`GET /legal_hold_policies/:id`][legal_hold] APIエンドポイントを呼び出します。

<Samples id="get_legal_hold_policies_id">

</Samples>

## 必須のスコープ

リーガルホールドAPIのいずれかを使用する前に、アプリケーションでは適切なスコープを有効にしておく必要があります。詳細については、[必須のスコープ][scopes]を参照してください。

[legal_hold]: e://get_legal_hold_policies_id

[scopes]: g://legal-holds#required-scopes
