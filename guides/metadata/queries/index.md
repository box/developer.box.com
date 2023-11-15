---
related_endpoints: []
required_guides: []
category_id: metadata
subcategory_id: metadata/5-queries
is_index: true
id: metadata/queries
rank: 5
type: guide
total_steps: 6
sibling_id: metadata
parent_id: metadata
next_page_id: metadata/queries/comparison
previous_page_id: metadata/queries/errors
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/0-index.md
fullyTranslated: true
---
# メタデータクエリ

メタデータクエリを使用すると、ファイルやフォルダに追加されているメタデータを検索して、そのファイルやフォルダを見つけることができます。

たとえば、特定のIDが付いた請求書についてすべてのファイルを検索するには、クエリで、その請求書に適用されている`invoiceData`テンプレートと値`id = :id` (この場合、`:id`は請求書の値) が設定されたすべてのファイルとフォルダを検索することができます。

## 認証

メタデータクエリAPIは、従来の[OAuth 2.0][oauth]または[JWT][jwt]を使用して認証されたアプリケーションで使用できます。

[oauth]: g://authentication/oauth2

[jwt]: g://authentication/jwt
