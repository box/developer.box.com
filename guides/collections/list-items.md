---
rank: 2
related_endpoints:
  - get_collections_id_items
related_guides:
  - api-calls/pagination/offset-based
required_guides: []
related_resources:
  - file
  - folder
  - web_link
alias_paths: []
category_id: collections
subcategory_id: null
is_index: false
id: collections/list-items
type: guide
total_steps: 4
sibling_id: collections
parent_id: collections
next_page_id: collections/add
previous_page_id: collections/list
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/collections/list-items.md
---

# List Items in Collections

To list all files, folders and web links in a folder call the [`GET
/collections/:id/items`](e://get_collections_id_items) API.

<Samples id='get_collections_id_items' >

</Samples>

<Message warning>

The only collection that is available via the API is the "Favorites"
collection. The ID of this collection is [different for every
user](g://collections/list).

</Message>
