---
rank: 2
related_endpoints:
  - get_retention_policies_id
related_guides:
  - retention-policies/list
related_resources:
  - retention_policy
required_guides: []
alias_paths: []
category_id: retention-policies
subcategory_id: null
is_index: false
id: retention-policies/get
type: guide
total_steps: 2
sibling_id: retention-policies
parent_id: retention-policies
next_page_id: retention-policies
previous_page_id: retention-policies/list
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/retention-policies/get.md
fullyTranslated: true
---
# リテンションポリシーの取得

会社内に作成された特定のリテンションポリシーの情報を取得するには、ポリシーの`id`を指定して[`GET /retention_policies/:id`][retention] APIエンドポイントを呼び出します。

<Samples id="get_retention_policies_id">

</Samples>

## 必須のスコープ

リテンションポリシーAPIのいずれかを使用する前に、アプリケーションでは適切なスコープを有効にしておく必要があります。詳細については、[必須のスコープ][scopes]を参照してください。

[retention]: e://get_retention_policies_id

[scopes]: g://retention-policies#required-scopes
