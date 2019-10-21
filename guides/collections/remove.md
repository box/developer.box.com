---
rank: 4
related_endpoints:
  - put_files_id
  - put_folders_id
  - put_web_links_id
related_guides: []
required_guides:
  - get_collections
related_resources:
  - file
  - folder
  - web_link
alias_paths: []
cId: collections
scId: null
id: collections/remove
isIndex: false
---

# Remove Item from Collection

To remove an item from a collection, call the `PUT` endpoint for that specific
type of item and pass along a list of collection IDs that does not include the
ID of the collection that needs to be removed.

<Message warning>

The only collection that is available via the API is the "Favorites"
collection and therefore to remove an item from this collection can be
achieved by passing the API an empty array of collections.

</Message>

## Remove file from collection

To add a file to a collection, call the `PUT /files/:id` API and pass an empty
array of collection IDs.

<Samples id='put_files_id' variant='remove_from_collection' >

</Samples>

## Remove folder from collection

To add a folder to a collection, call the `PUT /folders/:id` API and pass an
empty array of collection IDs.

<Samples id='put_folders_id' variant='remove_from_collection' >

</Samples>

## Remove web link from collection

To add a web link to a collection, call the `PUT /web_links/:id` API and pass an
empty array of collection IDs.

<Samples id='put_web_links_id' variant='remove_from_collection' >

</Samples>
