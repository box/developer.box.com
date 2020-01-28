---
related_endpoints:
  - post_files_id_metadata_id_id
  - post_folders_id_metadata_id_id
related_resources:
  - metadata
  - metadata_template
required_guides:
  - metadata/templates/list
related_guides:
  - metadata/instances/list
  - metadata/instances/update
  - metadata/templates/scopes
---

# Apply metadata to an item

A metadata template can be applied to a file or folder using the item's `id`, the
template's `templateKey` and `scope`, and a set of values for each field in the
template.

<Message>

  Metadata [scopes][scopes] can be either `global` for templates available to
  all enterprises, `enterprise` for templates available to the current
  enterprise, or the `enterprise_:id` for templates belonging to an enterprise
  whose ID is the `:id` value in the scope name.

</Message>

## Apply metadata to a file

To apply an instance of a metadata template to a file, call the
[`POST /files/:file_id/metadata/:scope/:templateKey`][e_on_file] API endpoint
with the file's `file_id`, the template's `scope` and `templateKey`,  and an
optional set of values for each [field][fields] in the template.

<Samples id='post_files_id_metadata_id_id' />

<Message>

  To get the `scope` and `templateKey` for a template, either
  [list all metadata templates][g_list_templates], or
  [list all instances on an file][g_list_instances_item].

</Message>

The body of the request can contain a value for each [field][fields] in the
template. To inspect what fields are present on a template, [inspect a
metadata metadata template][g_get_metadata_template].

## Apply metadata to a folder

To apply an instance of a metadata template to a folder, call the
[`POST /folders/:folder_id/metadata/:scope/:templateKey`][e_on_folder] API endpoint
with the folder's `folder_id`, the template's `scope` and `templateKey`,  and an
optional set of values for each [field][fields] in the template.

<Samples id='post_folders_id_metadata_id_id' />

<Message>

  To get the `scope` and `templateKey` for a template, either
  [list all metadata templates][g_list_templates], or
  [list all instances on an folder][g_list_instances_item].

</Message>

The body of the request can contain a value for each [field][fields] in the
template. To inspect what fields are present on a template, [inspect a
metadata metadata template][g_get_metadata_template].

[fields]: g://metadata/fields
[scopes]: g://metadata/templates/scopes
[e_on_file]: e://post_files_id_metadata_id_id
[e_on_folder]: e://post_folders_id_metadata_id_id
[g_list_templates]: g://metadata/templates/list
[g_list_instances_item]: g://metadata/instances/list
[g_get_metadata_template]: g://metadata/templates/get
