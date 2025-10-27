---
related_endpoints: []
required_guides: []
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/item-fields
rank: 3
type: guide
total_steps: 7
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: metadata/queries/errors
previous_page_id: metadata/queries/syntax
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/3-item-fields.md
fullyTranslated: true
---
# クエリの項目フィールド

項目フィールドとは、Box内の項目 (ファイルおよびフォルダ) を説明する検索可能なメタデータフィールドです。これらのフィールドは、名前、タイプ、所有者、タイムスタンプなどの組み込みの項目プロパティを定義されたデータ型を使用して公開します。これにより、Boxコンテンツのフィルタ、並べ替え、検索が可能になります。

## サポートされている項目フィールド

次の表に、メタデータクエリで使用できる項目フィールドを示します。

| フィールド名                      | 説明                                                            | 並べ替え |
| --------------------------- | ------------------------------------------------------------- | ---- |
| `item.type`                 | 項目のタイプ: `file`または`folder`                                     | はい   |
| `item.name`                 | 項目の名前                                                         | はい   |
| `item.description`          | 項目の説明                                                         | はい   |
| `item.extension`            | ファイル拡張子 (`pdf`、`jpeg`、`xlsx`、`txt`、`xls`、`png`、`log`、`csv`など) | はい   |
| `item.owned_by`             | 項目の所有者 (例: `user_123`)                                        | はい   |
| `item.owner_enterprise_id`  | 項目所有者のEnterprise ID (例: `1234`)                               | はい   |
| `item.created_at`           | Boxで項目が作成された日時                                                | はい   |
| `item.modified_at`          | Boxで項目が最後に更新された日時                                             | はい   |
| `item.content_created_at`   | 項目が最初に作成された日時 (この日時は項目がBoxにアップロードされた時点よりも前になる場合があります)         | はい   |
| `item.content_modified_at`  | 項目が最後に更新された日時 (この日時は項目がBoxにアップロードされた時点よりも前になる場合があります)         | はい   |
| `item.quick_search_content` | 項目名、説明、メタデータのフィールド全体でのファイルコンテンツ検索                             | いいえ  |
