---
related_resources:
  - metadata
  - metadata_template
related_endpoints:
  - get_files_id_metadata
  - get_folders_id_metadata
related_guides:
  - metadata/instances/get
  - metadata/instances/create
  - metadata/instances/update
---

# List all metadata on an item

Metadata instances can be listed for either a file or a folder.

## List metadata on a file

To list all metadata instances on a file, call the 
[`GET /files/:file_id/metadata`][get_metadata_file] API endpoint.

<Samples id="get_files_id_metadata" />

<Message warning>
  This API does not support paging and it will always return all of the metadata
  instances for this file.
</Message>

## List metadata on a folder

To list all metadata instances on any folder (except for the root folder), call
the [`GET /folders/:file_id/metadata`][get_metadata_file] API endpoint.

<Samples id="get_folders_id_metadata" />

<Message warning>
  This API does not support paging and it will always return all of the metadata
  instances for this file. This API can not be used on the root folder with ID `0`.
</Message>

[get_metadata_file]: e://get_files_id_metadata
[get_metadata_folder]: e://get_folders_id_metadata
