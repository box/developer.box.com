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
cId: collections
scId: null
id: collections/list-items
isIndex: false
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
