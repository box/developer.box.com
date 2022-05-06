---
rank: 4
related_endpoints:
  - put_files_id
  - put_folders_id
  - put_web_links_id
related_guides:
  - shared-links/create-or-update
  - shared-links/find-for-item
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: shared-links
subcategory_id: null
is_index: false
id: shared-links/remove
type: guide
total_steps: 4
sibling_id: shared-links
parent_id: shared-links
next_page_id: shared-links/permissions
previous_page_id: shared-links/find-for-item
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/shared-links/remove.md
---
# Remove Shared Link

A shared link may be removed from a resource by calling the
[update file](endpoint://put_files_id) or
[update folder](endpoint://put_folders_id) or
[update weblink](endpoint://put_web_links_id) endpoint and setting the
`shared_link` value to `null`.

<Message type='warning'>

If you delete the shared link and create a new one, the new shared link will
have a different URL and users with the old URL will not be able to access
the resource.

</Message>

## Remove Shared Link on File

To remove a shared link on a file, specify the ID of file to set the
`shared_link` field to `null`.

<Samples id='put_files_id' variant='remove_shared_link' >

</Samples>

## Remove Shared Link on Folder

To remove a shared link on a folder, specify the ID of folder to set the
`shared_link` field to `null`.

<Samples id='put_folders_id' variant='remove_shared_link' >

</Samples>

## Remove Shared Link on Web Link

To remove a shared link on a web link, specify the ID of web link to set the
`shared_link` field to `null`.

<Samples id='put_web_links_id' variant='remove_shared_link' >

</Samples>