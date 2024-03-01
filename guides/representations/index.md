---
rank: 190
related_endpoints:
  - get_files_id
  - get_files_id_thumbnail_id
related_guides: []
required_guides: []
alias_paths: []
category_id: representations
subcategory_id: null
is_index: true
id: representations
type: guide
total_steps: 8
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: representations/supported-file-types
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/representations/index.md
---
# Representations

A representation is an alternative asset for a file stored in Box. These assets
can be PDFs, thumbnails, or text extractions.

Representations are automatically generated for the supported file types, either
when uploading to Box or when requesting the asset.

These representations are exposed through the `GET /files/:id` endpoint by using
the `fields=representations` query parameter and the `x-rep-hints` header.