---
rank: 3
related_endpoints:
  - delete_collaboration_whitelist_entries_id
related_guides:
  - collaborations
  - collaborations/allowed-domains/list
  - collaborations/allowed-domains/create
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/collaboration-whitelists/delete-whitelist
category_id: collaborations
subcategory_id: collaborations/allowed-domains
is_index: false
id: collaborations/allowed-domains/delete
type: guide
total_steps: 3
sibling_id: collaborations/allowed-domains
parent_id: collaborations/allowed-domains
next_page_id: collaborations/allowed-domains
previous_page_id: collaborations/allowed-domains/list
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/allowed-domains/delete.md
fullyTranslated: true
---
# 以前コラボレーションが許可されたドメインの削除

コラボレーションの許可されたドメインのリストからドメインを削除すると、自分の会社とそのドメイン内のユーザーとの間にコラボレーションを作成できなくなります。

許可リストからドメインを削除するには、リストのエントリのIDを削除リクエストに指定します。このIDは、[新しいドメインを許可する][create]か[社内で許可されているドメインのリストを取得する][list]と返されます。

<Samples id="delete_collaboration_whitelist_entries_id">

</Samples>

[create]: guide://collaborations/allowed-domains/create

[list]: guide://collaborations/allowed-domains/list
