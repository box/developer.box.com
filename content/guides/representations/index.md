---
rank: 90
related_endpoints: 
 - get_files_id
 - get_files_id_thumbnail_id
related_guides: []
required_guides: []
alias_paths: []
---

# Thumbnails & Representations

A representation is an alternative asset for a file stored in Box. These assets
can be PDFs, thumbnails, or text extractions.

Representations are automatically generated for the supported file types, either
when uploading to Box or when requesting the asset.

These representations are exposed through the `GET /files/:id` endpoint by using
the `fields=representations` query parameter and the `X-Rep-Hints` header.
