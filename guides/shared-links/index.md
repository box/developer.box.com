---
rank: 110
related_endpoints: []
related_guides: []
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: shared-links
subcategory_id: null
is_index: true
id: shared-links
type: guide
total_steps: 4
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: shared-links/remove
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/shared-links/index.md
---
# 共有リンク

共有リンクは、Boxに保存されているファイルまたはフォルダを対象として生成されるURLです。これにより、リソースへの直接的な読み取り専用アクセスが可能になります。

共有リンクのアクセスレベルをopenに設定すると、そのURLを知っているすべてのユーザーが項目にアクセスできますが、アクセスレベルをcompanyまたはcollaboratorsに設定すると、適切な認証済みBoxユーザーのみがアクセスできます。共有リンクに関連するすべてのオプションと管理設定については、[こちら][community_create_shared_link]を参照してください。

ユーザーは、ブラウザに共有リンクURLを入力することにより、共有項目にアクセスできます。アプリケーションからも[共有項目API](endpoint://get_shared_items)を使用して共有項目にアクセスできます。

[community_create_shared_link]: https://community.box.com/t5/Using-Shared-Links/Creating-Shared-Links/ta-p/19523
