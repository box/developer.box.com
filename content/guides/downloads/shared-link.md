---
rank: 3
related_endpoints:
  - get_files_id_content
related_guides:
  - downloads/file
  - uploads/file
required_guides:
  - shared-links/find-for-item
related_resources: []
alias_paths: []
---

# Download Shared Link

To download the file for a [Shared Link][shared-link], first [determine the
file][get-file] for the link.

Once the file ID has been determined, the file can be downloaded by passing the
`BoxAPI` header to the API.

<Samples id='get_files_id_content' variant='for_shared_file' />

<Message warning>
  To get the Shared Link for an item the user must have at least viewer-level
  access to the item.
</Message>
