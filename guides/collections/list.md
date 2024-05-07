---
rank: 1
related_endpoints:
  - get_collections
related_guides: []
required_guides: []
related_resources:
  - collection
alias_paths: []
category_id: collections
subcategory_id: null
is_index: false
id: collections/list
type: guide
total_steps: 4
sibling_id: collections
parent_id: collections
next_page_id: collections/list-items
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collections/list.md
---
# List User's Collections

To list all collections for a user, call the [`GET
/collections`](e://get_collections) API.

<Samples id='get_collections' >

</Samples>

<Message warning>

The only collection that is available via the API is the "Favorites"
collection. The ID of this collection is different for every
user.

</Message>

## Favorites Collection

The only collection that can items can currently be added and removed to via the
API is the "Favorites" collection.

The ID of the favorites collection is different for every user. To find the
user's collection ID for their favorites, list all the user's collections and
then find the collection with a `collection_type` of `favorites`.

```json
{
  "entries": [
    {
      "collection_type": "favorites",
      "id": "12345678",
      "name": "Favorites",
      "type": "collection"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total_count": 1
}
```