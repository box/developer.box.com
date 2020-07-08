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
---

# Find Item from Shared Link

The [find item for shared link](endpoint://get_shared_items) API is designed to
accept a shared link as an input using a `BoxApi` header and return the file or
folder object that the shared link is set for.

To get the file or folder object associated with a shared link, supply
the full shared link URL in the request.

<Samples id='get_shared_items' />

<Message note>
  Please note that when the shared link is for a folder, the response of this
  API does not include the list of nested items within that folder.

  To further traverse the items in the folder, use the same `BoxApi` header to
  [get a nested folder's information](e://get-folders-id), [list the items in
  those folders](e://get-folders-id-items), [get a nested file's
  information](e://get-files-id), or [download a file](e://get-files-id-content)
</Message>
