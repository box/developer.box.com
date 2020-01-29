---
related_endpoints:
  - delete_files_id_metadata_id_id
  - delete_folders_id_metadata_id_id
related_resources:
  - metadata
  - metadata_template
required_guides:
  - metadata/instances/list
related_guides:
  - metadata/instances/list
  - metadata/instances/create
  - metadata/scopes
---

# Remove metadata from an item

Removing an instance of a metadata template assigned to a file or
folder can be done using the item's `id`, and the template's `templateKey`
and `scope`.

<Message>

  Metadata [scopes][scopes] can be either `global` for templates available to
  all enterprises, `enterprise` for templates available to the current
  enterprise, or the `enterprise_:id` for templates belonging to an enterprise
  whose ID is the `:id` value in the scope name.

</Message>

## Remove metadata from an file

Deleting an instance of a metadata template from a file be achieved by calling
the [`DELETE /files/:file_id/metadata/:templateKey/schema`][e_on_file] API.

<Samples id="delete_files_id_metadata_id_id" />

This API returns a `204 No Content` API response with no response body when
the instance has been successfully removed from the file.

## Remove metadata from an folder

Deleting an instance of a metadata template from a folder be achieved by calling
the [`DELETE /folders/:folder_id/metadata/:templateKey/schema`][e_on_folder]
API.

<Samples id="delete_folders_id_metadata_id_id" />

This API returns a `204 No Content` API response with no response body when
the instance has been successfully removed from the folder.

[e_on_file]: e://delete_files_id_metadata_id_id
[e_on_folder]: e://delete_folders_id_metadata_id_id
[scopes]: g://metadata/scopes
