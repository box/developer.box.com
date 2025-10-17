---
related_endpoints: []
required_guides: []
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/limitations
rank: 5
type: guide
total_steps: 7
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: metadata/queries/pagination
previous_page_id: metadata/queries/errors
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/5-limitations.md
---
# Limitations

A few limits apply to the the metadata query APIs.

## Files and folders

​A metadata query will only return items (files or folders) to which the
requesting user has at least `previewer` access.

## Enterprise vs Global templates

A metadata query only works with metadata templates that have been created by
that enterprise. A query will not return results based on the content of free
form key-value pairs stored in the `​global.properties` template.

## Classification metadata templates

Box uses metadata templates to power its content classification. These metadata
templates can not be used in metadata queries, as they will most likely run
into issues regarding large results sets. More on this next.

There are no immediate plans to start supporting these queries in the future.