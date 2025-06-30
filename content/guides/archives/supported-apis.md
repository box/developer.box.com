---
rank: 3
related_endpoints: []
related_resources:
  - archive
related_guides: []
required_guides: []
alias_paths: []
---

# Supported APIs for Box Archive

Archives are a special type of folder. Box Archive APIs allow you to create, list and delete archives.
However, there are other APIs that also work with archives or with content within archives.
Below is a table with all APIs that support Box Archive.

<Message type='notice'>
  Those APIs require the `GCM` scope to be enabled in your application.
  This scope is not available in the Developer Console and needs to be enabled by contacting customer support.

  Additionally, some of the below APIs need to be enabled by contacting customer support to properly work with Box Archive.
  When contacting customer support, please specify the user ID you plan to use those APIs with.
</Message>

| API Endpoint                                                                                                      | Description                                                                                                                                                                                        |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`POST /archives`][Create archive]                                                                                | Create an archive.                                                                                                                                                                                 |
| [`GET /archives`][List archives]                                                                                  | List all archives.                                                                                                                                                                                 |
| [`DELETE /archives/:id`][Delete archive]                                                                          | Delete an archive.                                                                                                                                                                                 |
| [`PUT /files/:id`][Update file]                                                                                   | Add a file to an archive, restore a file from an archive, or move file within/between archives. Other updates to the file are not allowed. Requires contacting customer support to enable.         |
| [`PUT /folders/:id`][Update folder]                                                                               | Add a folder to an archive, restore a folder from an archive, or move folder within/between archives. Other updates to the folder are not allowed. Requires contacting customer support to enable. |
| [`POST /files/content`][Upload file]                                                                              | Upload a file to an archive or to folder within archive. Requires contacting customer support to enable.                                                                                           |
| [`GET /files/:id/content`][Download file]                                                                         | Download a file from an archive or from folder within archive.                                                                                                                                     |
| [`POST /zip_downloads`][Download zip]                                                                             | Download a zip file of an archive or of a folder within archive.                                                                                                                                   |
| [`POST /folders`][Create folder within archive]                                                                   | Create a folder within an archive. Requires contacting customer support to enable.                                                                                                                 |
| [`GET /files/:id`][Get file details]                                                                              | Get details of a file within an archive.                                                                                                                                                           |
| [`GET /folders/:id`][Get folder details]                                                                          | Get details of archive or a folder within an archive.                                                                                                                                              |
| [`GET /folders/:id/items`][List folder items]                                                                     | List items within an archive or a folder within an archive.                                                                                                                                        |
| [`POST /files/:id/copy`][Copy file]                                                                               | Copy a file within an archive or to another archive.                                                                                                                                               |
| [`POST /folders/:id/copy`][Copy folder]                                                                           | Copy a folder within an archive or to another archive.                                                                                                                                             |
| [`POST /files/:id/metadata/:scope/:template_key`][Create metadata on file]                                        | Create metadata instance on a file within an archive.                                                                                                                                              |
| [`GET /files/:id/metadata/:scope/:template_key`][View metadata on file]                                           | View metadata instance on a file within an archive.                                                                                                                                                |
| [`GET /files/:id/metadata`][List metadata on file]                                                                | List all metadata instances on a file within an archive.                                                                                                                                           |
| [`PUT /files/:id/metadata/:scope/:template_key`][Update metadata on file]                                         | Update metadata instance on a file within an archive.                                                                                                                                              |
| [`DELETE /files/:id/metadata/:scope/:template_key`][Delete metadata on file]                                      | Delete metadata instance on a file within an archive.                                                                                                                                              |
| [`POST /files/:id/metadata/enterprise/securityClassification/6VMVochwUWo`][Create classification label on file]   | Create a classification label on a file within an archive.                                                                                                                                         |
| [`GET /files/:id/metadata/enterprise/securityClassification/6VMVochwUWo`][View classification label on file]      | View a classification label on a file within an archive.                                                                                                                                           |
| [`PUT /files/:id/metadata/enterprise/securityClassification/6VMVochwUWo`][Update classification label on file]    | Update a classification label on a file within an archive.                                                                                                                                         |
| [`DELETE /files/:id/metadata/enterprise/securityClassification/6VMVochwUWo`][Delete classification label on file] | Delete a classification label on a file within an archive.                                                                                                                                         |

[Create archive]: e://post-archives
[List archives]: e://get-archives
[Delete archive]: e://delete-archives-id
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
[Create metadata on file]: e://post-files-id-metadata-id-id
[View metadata on file]: e://get-files-id-metadata-id-id
[List metadata on file]: e://get-files-id-metadata
[Update metadata on file]: e://put-files-id-metadata-id-id
[Delete metadata on file]: e://delete-files-id-metadata-id-id
[Create classification label on file]: e://post-files-id-metadata-enterprise-securityClassification-6VMVochwUWo
[View classification label on file]: e://get-files-id-metadata-enterprise-securityClassification-6VMVochwUWo
[Update classification label on file]: e://put-files-id-metadata-enterprise-securityClassification-6VMVochwUWo
[Delete classification label on file]: e://delete-files-id-metadata-enterprise-securityClassification-6VMVochwUWo
