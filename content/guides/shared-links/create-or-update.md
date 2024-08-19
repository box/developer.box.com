---
rank: 1
related_endpoints:
  - put_files_id
related_guides:
  - shared-links/permissions
  - shared-links/remove
  - shared-links/find-for-item
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /shared-links/create
  - /shared-links/update
---

# Create or Update Shared Link

Shared links may be created or directly for file, folder, or web link
resources to generate a read-only URL to permit users with the appropriate
access level to view the content.

<Message type='notice'>
  You may only have one active shared link for a file, folder, or web link at
  any time.
</Message>

At minimum the information needed to create a shared link will be:

* The type of resource, either a file, folder, or web link.
* The ID of that resource.

Optionally when creating a shared link the following may be specified:

* The access level, which may be one of:
    * open: A public shared link. Anyone with the link may access the link.
    * company: Anyone within your enterprise may access the link.
    * collaborators: Anyone collaborated on the content may access the link.
* An expiration time when the shared link will automatically disable.
* A password required to access the resource.

<Message type='notice'>
  If an access level is not specified when creating a shared link it will use
  the default access level specified by the enterprise admin.
</Message>

## Create or Update Shared Link for File

To create a shared link on a file, specify the ID of the file with any optional
shared link parameters.

<Samples id='put_files_id' variant='add_shared_link' />

## Create or Update Shared Link for Folder

To create a shared link on a folder, specify the ID of the folder with any
optional shared link parameters.

<Samples id='put_folders_id' variant='add_shared_link' />

## Create or Update Shared Link for Web Link

To create a shared link on a web link, specify the ID of the web link with any
optional shared link parameters.

<Samples id='put_web_links_id' variant='add_shared_link' />
