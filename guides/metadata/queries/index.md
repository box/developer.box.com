---
related_endpoints:
  - post_metadata_queries_execute_read
category_id: metadata
subcategory_id: metadata/5-queries
is_index: true
id: metadata/queries
rank: 5
type: guide
total_steps: 7
sibling_id: metadata
parent_id: metadata
next_page_id: metadata/queries/indexes
previous_page_id: metadata/queries/errors
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/5-queries/0-index.md
---
# メタデータクエリ

[メタデータクエリ][query]を使用すると、ファイルやフォルダに追加されているメタデータを検索して、そのファイルやフォルダを見つけることができます。

たとえば、特定のIDが付いた請求書についてすべてのファイルを検索するには、クエリで、その請求書に適用されている`invoiceData`テンプレートと値`id = :id` (この場合、`:id`は請求書の値)が設定されたすべてのファイルとフォルダを検索することができます。

## 認証

メタデータクエリAPIは、従来の[OAuth 2.0][oauth]または[JWT][jwt]を使用して認証されたアプリケーションで使用できます。

[query]: g://metadata/queries

[oauth]: g://authentication/oauth2

[jwt]: g://authentication/jwt
