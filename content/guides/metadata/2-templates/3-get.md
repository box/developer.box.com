---
related_endpoints:
  - get_metadata_templates_id_id_schema
  - get_metadata_templates_id
related_guides:
  - metadata/scopes
  - metadata/templates/list
  - metadata/templates/create
related_resources:
  - metadata_templates
---

# Get a metadata template

Information for a metadata template can be retrieved using the template's name
and scope, or the template's identifier.

<Message>

  The authenticated user can only get Information about metadata templates
  [scoped][scopes] within the `global` scope or the `enterprise_:id` scope where
  `:id` is  the ID of their enterprise.

</Message>

## Get a metadata template by name

To get a metadata template by name, call the [`GET
/metadata_templates/:scope/:templateKey`][e_by_name] API endpoint with the
template's `scope` and `templateKey`.

<Samples id='get_metadata_templates_id_id_schema' />

<Message>

  To get the `scope` and `templateKey` for a template, either
  [list all metadata templates][g_list_templates], or
  [list all instances on an item][g_list_instances_item].

</Message>

## Get a metadata template by ID

To get a metadata template by ID, you will need to pass both the template's
`id` to the [`GET
/metadata_templates/:id`][e_by_id] API endpoint.

<Samples id='get_metadata_templates_id' />

<Message>

  To get the `id` for a template, either
  [list all metadata templates][g_list_templates], or
  [list all instances on an item][g_list_instances_item].
  
</Message>

[e_by_name]: e://get_metadata_templates_id_id_schema
[e_by_id]: e://get_metadata_templates_id
[scopes]: g://metadata/scopes
[g_list_templates]: g://metadata/templates/list
[g_list_instances_item]: g://metadata/instances/list
