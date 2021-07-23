---
rank: 1
related_endpoints:
  - post_collaboration_whitelist_entries
related_guides:
  - collaborations
  - collaborations/allowed-domains/list
  - collaborations/allowed-domains/delete
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/collaboration-whitelists/create-whitelist
category_id: collaborations
subcategory_id: collaborations/allowed-domains
is_index: false
id: collaborations/allowed-domains/create
type: guide
total_steps: 3
sibling_id: collaborations/allowed-domains
parent_id: collaborations/allowed-domains
next_page_id: collaborations/allowed-domains/list
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/allowed-domains/create.md
fullyTranslated: true
---
# ドメインへのコラボレーションの許可

一般にコラボレーションの作成を制限している会社は、社内に作成されている可能性のあるコラボレーションのリストに`example.com`などのドメインを追加できます。

<Samples id="post_collaboration_whitelist_entries">

</Samples>

この[エンドポイント](endpoint://post_collaboration_whitelist_entries)には、コラボレーションを許可する`domain`と、以下のように設定できる`direction`が必要です。

* `inbound`: 外部ユーザーが社内のコンテンツでコラボレーションできるかどうか。
* `outbound`: 社内の管理対象ユーザーが外部の会社内で所有されているコンテンツでコラボレーションできるかどうか。
* `both`: 上記の両方。

新しく許可されたドメインを設定する場合はbothパラメータを指定します。

<Samples id="post_collaboration_whitelist_entries">

</Samples>
