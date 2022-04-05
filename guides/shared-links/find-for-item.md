---
rank: 3
related_endpoints:
  - get_shared_items
related_guides:
  - shared-links/remove
  - shared-links/create-or-update
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
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/shared-links/find-for-item.md
---
# Find Item from Shared Link

The [find item for shared link](endpoint://get_shared_items) API is designed to
accept a shared link as an input using a `BoxApi` header and return the file or
folder object that the shared link is set for.

To get the file or folder object associated with a shared link, supply
the full shared link URL in the request.

<Samples id='get_shared_items' >

</Samples>

<Message note>

Please note that when the shared link is for a folder, the response of this
API does not include the list of nested items within that folder.

To further traverse the items in the folder, use the same `BoxApi` header to
[get a nested folder's information](e://get-folders-id), [list the items in
those folders](e://get-folders-id-items), [get a nested file's
information](e://get-files-id), or [download a file](e://get-files-id-content)

</Message>