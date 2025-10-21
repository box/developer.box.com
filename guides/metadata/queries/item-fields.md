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

| Field name | Description | Sorting |
|------------|-------------|---------|
| `item.type` | Type of the item: `file` or `folder` | Yes |
| `item.name` | Name of the item | Yes |
| `item.description` | Description of the item | Yes |
| `item.extension` | File extension, such as `pdf`, `jpeg`, `xlsx`, `txt`, `xls`, `png`, `log`, or `csv` | Yes |
| `item.owned_by` | Owner of the item, for example `user_123` | Yes |
| `item.owner_enterprise_id` | Enterprise ID of the item owner, for example `1234` | Yes |
| `item.created_at` | Date and time when the item was created in Box | Yes |
| `item.modified_at` | Date and time when the item was last updated in Box | Yes |
| `item.content_created_at` | Date and time when the item was originally created, which might be before it was uploaded to Box | Yes |
| `item.content_modified_at` | Date and time when the item was last updated, which might be before it was uploaded to Box | Yes |
| `item.quick_search_content` | Full-text search across item name, description, and metadata fields | No |