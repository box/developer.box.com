---
rank: 3
related_endpoints: []
related_resources:
  - archive
related_guides: []
required_guides: []
alias_paths: []
category_id: archives
subcategory_id: null
is_index: false
id: archives/supported-apis
type: guide
total_steps: 3
sibling_id: archives
parent_id: archives
next_page_id: ''
previous_page_id: archives/restore-content
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/archives/supported-apis.md
---
# Supported APIs for Box Archive

The basic Box Archive APIs allow you to create, list, update and delete archives, but you can use other APIs to interact with an archive or its content.
See the table below for the full list of those APIs.

<Message type='notice'>

Those APIs require the [`GCM` scope][GCM scope] to be enabled in your application.
This scope is not available in the Developer Console and needs to be enabled by contacting customer support.

Additionally, some of the below APIs need to be enabled by contacting customer support to properly work with Box Archive.
When contacting customer support, specify the user ID you plan to use those APIs with.

</Message>

| API Endpoint                                                                 | Description                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`POST /archives`][Create archive]                                           | Create an archive.                                                                                                                                                                                                                                                |
| [`GET /archives`][List archives]                                             | List all archives.                                                                                                                                                                                                                                                |
| [`PUT /archives/:id`][Update archive]                                        | Update an archive.                                                                                                                                                                                                                                                |
| [`DELETE /archives/:id`][Delete archive]                                     | Delete an archive.                                                                                                                                                                                                                                                |
| [`PUT /files/:id`][Update file]                                              | Add a file to an archive, restore a file from an archive, or move a file within/between archives. Other updates to the file are not allowed. Requires contacting customer support to enable.                                                                      |
| [`PUT /folders/:id`][Update folder]                                          | Add a folder to an archive, restore a folder from an archive, move a folder within/between archives, or rename and change the description of a folder in an archive. Other updates to the folder are not allowed. Requires contacting customer support to enable. |
| [`POST /files/content`][Upload file]                                         | Upload a file to an archive or to a folder within an archive. Requires contacting customer support to enable.                                                                                                                                                     |
| [`GET /files/:id/content`][Download file]                                    | Download a file from an archive or from a folder within an archive.                                                                                                                                                                                               |
| [`POST /zip_downloads`][Download zip]                                        | Download a zip file of an archive or of a folder within an archive.                                                                                                                                                                                               |
| [`POST /folders`][Create folder within archive]                              | Create a folder within an archive. Requires contacting customer support to enable.                                                                                                                                                                                |
| [`GET /files/:id`][Get file details]                                         | Get details of a file within an archive.                                                                                                                                                                                                                          |
| [`GET /folders/:id`][Get folder details]                                     | Get details of an archive or of a folder within an archive.                                                                                                                                                                                                       |
| [`GET /folders/:id/items`][List folder items]                                | List items within an archive or items in a folder within an archive.                                                                                                                                                                                              |
| [`POST /files/:id/copy`][Copy file]                                          | Copy a file to an archive.                                                                                                                                                                                                                                        |
| [`POST /folders/:id/copy`][Copy folder]                                      | Copy a folder to an archive.                                                                                                                                                                                                                                      |
| [`DELETE /files/:id`][Delete file]                                           | Permanently delete a file within an archive.                                                                                                                                                                                                                      |
| [`DELETE /folders/:id`][Delete folder]                                       | Permanently delete a folder within an archive. Requires contacting customer support to enable.                                                                                                                                                                    |
| [`POST /files/:id/metadata/:scope/:template_key`][Create metadata on file]   | Create a metadata instance attached to a file within an archive.                                                                                                                                                                                                  |
| [`GET /files/:id/metadata/:scope/:template_key`][View metadata on file]      | View a metadata instance attached to a file within an archive.                                                                                                                                                                                                    |
| [`GET /files/:id/metadata`][List metadata on file]                           | List all metadata instances attached to a file within an archive.                                                                                                                                                                                                 |
| [`PUT /files/:id/metadata/:scope/:template_key`][Update metadata on file]    | Update a metadata instance attached to a file within an archive.                                                                                                                                                                                                  |
| [`DELETE /files/:id/metadata/:scope/:template_key`][Delete metadata on file] | Delete a metadata instance attached to a file within an archive.                                                                                                                                                                                                  |
| [`POST securityClassification`][Create classification label on file]         | Create a classification label for a file within an archive.                                                                                                                                                                                                       |
| [`GET securityClassification`][View classification label on file]            | View a classification label of a file within an archive.                                                                                                                                                                                                          |
| [`PUT securityClassification`][Update classification label on file]          | Update a classification label for a file within an archive.                                                                                                                                                                                                       |
| [`DELETE securityClassification`][Delete classification label on file]       | Delete a classification label from a file within an archive.                                                                                                                                                                                                      |

[Create archive]: https://developer.box.com/reference/v2025.0/post-archives/
[List archives]: https://developer.box.com/reference/v2025.0/get-archives/
[Update archive]: https://developer.box.com/reference/v2025.0/put-archives-id/
[Delete archive]: https://developer.box.com/reference/v2025.0/delete-archives-id/
[Update file]: e://put-files-id
[Update folder]: e://put-folders-id
[Upload file]: e://post-files-content
[Download file]: e://get-files-id-content
[Download zip]: e://post-zip-downloads
[Create folder within archive]: e://post-folders
[Get file details]: e://get-files-id
[Get folder details]: e://get-folders-id
[List folder items]: e://get-folders-id-items
[Copy file]: e://post-files-id-copy
[Copy folder]: e://post-folders-id-copy
[Delete file]: e://delete-files-id
[Delete folder]: e://delete-folders-id
[Create metadata on file]: e://post-files-id-metadata-id-id
[View metadata on file]: e://get-files-id-metadata-id-id
[List metadata on file]: e://get-files-id-metadata
[Update metadata on file]: e://put-files-id-metadata-id-id
[Delete metadata on file]: e://delete-files-id-metadata-id-id
[Create classification label on file]: e://post-files-id-metadata-enterprise-securityClassification-6VMVochwUWo
[View classification label on file]: e://get-files-id-metadata-enterprise-securityClassification-6VMVochwUWo
[Update classification label on file]: e://put-files-id-metadata-enterprise-securityClassification-6VMVochwUWo
[Delete classification label on file]: e://delete-files-id-metadata-enterprise-securityClassification-6VMVochwUWo
[GCM scope]: https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/#global-content-manager-gcm