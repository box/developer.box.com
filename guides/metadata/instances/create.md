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
  - metadata/scopes
category_id: metadata
subcategory_id: metadata/4-instances
is_index: false
id: metadata/instances/create
rank: 3
type: guide
total_steps: 5
sibling_id: metadata/instances
parent_id: metadata/instances
next_page_id: metadata/instances
previous_page_id: metadata/instances/get
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/metadata/4-instances/3-create.md
---

# Apply metadata to an item

A metadata template can be applied to a file or folder using the item's `id`,
the template's `templateKey` and `scope`, and a set of values for each field in
the template.

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

<Samples id='post_files_id_metadata_id_id' >

</Samples>

<Message>

To get the `scope` and `templateKey` for a template, either
[list all metadata templates][g_list_templates], or
[list all instances on an file][g_list_instances_item].

</Message>

<Message warning>

## Tuple already exists error

When there is already metadata applied to this file for the given metadata
template, a error is returned with the error code `tuple_already_exists`. In
this case, it this case the instance needs to be [updated
instead](g://metadata/instances/update).

</Message>

## Apply metadata to a folder

To apply an instance of a metadata template to a folder, call the
[`POST /folders/:folder_id/metadata/:scope/:templateKey`][e_on_folder] API endpoint
with the folder's `folder_id`, the template's `scope` and `templateKey`,  and an
optional set of values for each [field][fields] in the template.

<Samples id='post_folders_id_metadata_id_id' >

</Samples>

<Message>

To get the `scope` and `templateKey` for a template, either
[list all metadata templates][g_list_templates], or
[list all instances on an folder][g_list_instances_item].

</Message>

<Message warning>

## Tuple already exists error

When there is already metadata applied to this folder for the given metadata
template, a error is returned with the error code `tuple_already_exists`. In
this case, it this case the instance needs to be [updated
instead](g://metadata/instances/update).

</Message>

## Request body

The body of the request can contain a value for each [field][fields] in the
template. To inspect what fields are present on a template, [inspect a
metadata metadata template][g_get_metadata_template].

For example, let's assume the following template.

```json
{
  "id": "8120731a-41e4-11ea-b77f-2e728ce88125",
  "type": "metadata_template",
  "templateKey": "productInfo",
  "scope": "enterprise_1234567",
  "displayName": "Product Info",
  "hidden": false,
  "copyInstanceOnItemCopy": true,
  "fields": [
    {
      "id": "feed71de-41e5-11ea-b77f-2e728ce88125",
      "type": "string",
      "key": "name",
      "displayName": "Name",
      "hidden": false
    },
    {
      "id": "02b36bb6-41e6-11ea-b77f-2e728ce88125",
      "type": "enum",
      "key": "category",
      "displayName": "Category",
      "hidden": false,
      "options": [
        {
          "id": "06a7bcc2-41e6-11ea-b77f-2e728ce88125",
          "key": "SUVs"
        },
        {
          "id": "0a50df02-41e6-11ea-b77f-2e728ce88125",
          "key": "Saloons"
        },
        {
          "id": "0e466be0-41e6-11ea-b77f-2e728ce88125",
          "key": "Cabriolets"
        }
      ]
    }
  ]
}
```

This template has 2 [template fields][fields], `name` and `category`. The `name`
field is a regular text field, and the `category` is an enum.

The request body to assign this template to a file or folder can include a value
for any of the fields on the template. It is possible for the body to have no
values for no fields.

In this case, a valid example would be the following request body.

```json
{
  "name": "Model 3",
  "category": "SUVs"
}
```

<Message notice>

One exception is a `global` scoped template with the key `properties` that can
be used to assign any data to a template. Using this template, any set of
key/value pairs can be assigned to a template.

</Message>

<Message warning>

The `category` field in this example is an `enum` field and needs to be one of
the available options on the field.

</Message>

[fields]: g://metadata/fields
[scopes]: g://metadata/scopes
[e_on_file]: e://post_files_id_metadata_id_id
[e_on_folder]: e://post_folders_id_metadata_id_id
[g_list_templates]: g://metadata/templates/list
[g_list_instances_item]: g://metadata/instances/list
[g_get_metadata_template]: g://metadata/templates/get
