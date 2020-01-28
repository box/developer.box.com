---
rank: 3
related_endpoints:
  - get_shared_items
related_guides:
  - shared-links/update
  - shared-links/remove
  - shared-links/create
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: shared-links
subcategory_id: null
is_index: false
id: shared-links/find-for-item
type: guide
total_steps: 4
sibling_id: shared-links
parent_id: shared-links
next_page_id: shared-links/remove
previous_page_id: shared-links/update
---

# Find Item from Shared Link

The [find item for shared link](endpoint://get_shared_items) API is designed to
accept a shared link as an input using a `BoxApi` header and return the file or
folder object that the shared link is set for.

To get the file or folder object associated with a shared link, supply
the full shared link URL in the request.

<Samples id='get_shared_items' >

</Samples>
