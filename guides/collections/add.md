---
rank: 3
related_endpoints:
  - put_files_id
  - put_folders_id
  - put_web_links_id
  - get_collections
related_guides: []
required_guides: []
related_resources:
  - file
  - folder
  - web_link
alias_paths: []
category_id: collections
subcategory_id: null
is_index: false
id: collections/add
type: guide
total_steps: 4
sibling_id: collections
parent_id: collections
next_page_id: collections/remove
previous_page_id: collections/list-items
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/collections/add.md
---

# Add Item to Collection

To add an item to a collection, call the `PUT` endpoint for that specific type of
item and pass along a list of collection IDs.

<Message warning>

The only collection that is available via the API is the "Favorites"
collection. The ID of this collection is [different for every
user](g://collections/list).

</Message>

## Add file to collection

To add a file to a collection, call the `PUT /files/:id` API and pass along a
list of collection IDs.

<Samples id='put_files_id' variant='add_to_collection' >

</Samples>

## Add folder to collection

To add a folder to a collection, call the `PUT /folders/:id` API and pass along
a list of collection IDs.

<Samples id='put_folders_id' variant='add_to_collection' >

</Samples>

## Add web link to collection

To add a web link to a collection, call the `PUT /web_links/:id` API and pass
along a list of collection IDs.

<Samples id='put_web_links_id' variant='add_to_collection' >

</Samples>
