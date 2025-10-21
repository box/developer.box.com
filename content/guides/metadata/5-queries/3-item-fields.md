---
related_endpoints: []
required_guides: []
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
| `item.extension` | File extension such as `pdf`, `jpeg`, `xlsx`, `txt`, `xls`, `png`, `log`, or `csv` | Yes |
| `item.owned_by` | Owner of the item, for example `user_123` | Yes |
| `item.owner_enterprise_id` | Enterprise ID of the item owner, for example `1234` | Yes |
| `item.created_at` | Date and time when the item was created on Box | Yes |
| `item.modified_at` | Date and time when the item was last updated on Box | Yes |
| `item.content_created_at` | Date and time when the item was originally created, which might be before it was uploaded to Box | Yes |
| `item.content_modified_at` | Date and time when the item was last updated, which might be before it was uploaded to Box | Yes |
| `item.quick_search_content` | Full-text search across item name, description, and metadata fields | No |
