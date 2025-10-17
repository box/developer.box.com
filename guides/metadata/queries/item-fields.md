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
---
# Query item fields

Item fields are searchable metadata fields that describe items (files and folders) in Box. These fields expose built-in item properties such as name, type, owner, and timestamps with defined data types so you can filter, sort, and search Box content.

## Supported item fields

The following table lists the item fields you can use in metadata queries.

| Field name | Data type | Description | Sorting |
|------------|-----------|-------------|----------|
| `item.type` | KEYWORD | Type of the item: `file` or `folder` | Yes |
| `item.name` | TEXT, KEYWORD | Name of the item | Yes |
| `item.description` | TEXT, KEYWORD | Description of the item | Yes |
| `item.extension` | KEYWORD | File extension such as `pdf`, `jpeg`, `xlsx`, `txt`, `xls`, `png`, `log`, or `csv` | Yes |
| `item.owned_by` | KEYWORD | Owner of the item, for example `user_123` | Yes |
| `item.owner_enterprise_id` | KEYWORD | Enterprise ID of the item owner, for example `1234` | Yes |
| `item.created_at` | DATE | Date and time when the item was created on Box | Yes |
| `item.modified_at` | DATE | Date and time when the item was last updated on Box | Yes |
| `item.content_created_at` | DATE | Date and time when the item was originally created, which might be before it was uploaded to Box | Yes |
| `item.content_modified_at` | DATE | Date and time when the item was last updated, which might be before it was uploaded to Box | Yes |
| `item.quick_search_content` | TEXT | Full-text search across item name, description, and metadata fields | No |

## Supported operators by data type

Different data types support different operators. The following table shows which operators you can use with each data type.

| Data type | Supported operators | Filtering | Sorting |
|-----------|---------------------|-----------|---------|
| string | `NOT`, `IN`, `NOT IN`, `IS NULL`, `IS NOT NULL`, `=`, `>`, `<`, `>=`, `<=`, `<>`, `~`, `LIKE`, `NOT LIKE`, `ILIKE`, `NOT ILIKE` | Yes | Yes |
| float | `NOT`, `IN`, `NOT IN`, `IS NULL`, `IS NOT NULL`, `=`, `>`, `<`, `>=`, `<=`, `<>` | Yes | Yes |
| date | `AND`, `OR`, `NOT`, `IN`, `NOT IN`, `IS NULL`, `IS NOT NULL`, `=`, `>`, `<`, `>=`, `<=`, `<>` | Yes | Yes |
| enum | `NOT`, `IN`, `NOT IN`, `IS NULL`, `IS NOT NULL`, `=`, `>`, `<`, `>=`, `<=`, `<>`, `HASANY` | Yes | No |
| multiSelect | `NOT`, `IN`, `NOT IN`, `IS NULL`, `IS NOT NULL`, `=`, `>`, `<`, `>=`, `<=`, `<>`, `HASANY`, `HASALL` | Yes | No |

<Message warning>

**Note:** Avoid the `%text%` pattern due to poor performance.

</Message>