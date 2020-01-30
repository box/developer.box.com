---
related_resources:
  - metadata
  - metadata_template
related_endpoints:
  - get_files_id_metadata_id_id
  - get_folders_id_metadata_id_id
related_guides:
  - metadata/instances/list
  - metadata/instances/create
  - metadata/scopes
  - metadata/templates/list
---

# Get metadata on item

Information about an instance of a metadata template assigned to a file or
folder can be retrieved using the item's `id`, and the template's `templateKey`
and `scope`.

<Message>

  Metadata [scopes][scopes] can be either `global` for templates available to
  all enterprises, `enterprise` for templates available to the current
  enterprise, or the `enterprise_:id` for templates belonging to an enterprise
  whose ID is the `:id` value in the scope name.

</Message>

## Get metadata instance on file

To get an instance of a metadata template on a file, call the
[`GET /files/:file_id/metadata/:scope/:templateKey`][e_on_file] API endpoint
with the file's `file_id` and the template's `scope` and `templateKey`.

<Samples id='get_files_id_metadata_id_id' />

<Message>

  To get the `scope` and `templateKey` for a template, either
  [list all metadata templates][g_list_templates], or
  [list all instances on an file][g_list_instances_item].

</Message>

## Get metadata instance on folder

To get an instance of a metadata template on a folder, call the
[`GET /folders/:folder_id/metadata/:scope/:templateKey`][e_on_file] API endpoint
with the folder's `folder_id` and the template's `scope` and `templateKey`.

<Samples id='get_folders_id_metadata_id_id' />

<Message>

  To get the `scope` and `templateKey` for a template, either
  [list all metadata templates][g_list_templates], or
  [list all instances on an folder][g_list_instances_item].

</Message>

[e_on_file]: e://get_files_id_metadata_id_id
[e_on_folder]: e://get_folders_id_metadata_id_id
[scopes]: g://metadata/scopes
[g_list_templates]: g://metadata/templates/list
[g_list_instances_item]: g://metadata/instances/list
