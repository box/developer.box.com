---
related_endpoints:
  - post_metadata_templates
  - put_metadata_templates_id_id_schema
related_guides:
  - metadata/templates/create
  - metadata/templates/update
related_resources:
  - metadata_template
category_id: metadata
subcategory_id: metadata/3-fields
is_index: false
id: metadata/fields/float
rank: 2
type: guide
total_steps: 5
sibling_id: metadata/fields
parent_id: metadata/fields
next_page_id: metadata/fields
previous_page_id: metadata/fields/string
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/3-fields/2-float.md
---
# Float metadata field

A metadata field of type `float` is displayed to a user as a standard text-field
that only accepts numeric input.

<ImageFrame border center shadow width='400'>

![String field](./metadata-field-float.png)

</ImageFrame>

## Create a float field

A `float` field can be added to a metadata template either when [creating a
metadata template][g_create_template], or when [updating a
template][g_update_template] with the `addField` operation.

The required attributes for a `float` field are a `type`, a `displayName`, and a
`key`.

```json
{
  "scope": "enterprise",
  "displayName": "Contract",
  "fields": [
    {
      "type": "float",
      "key": "contract_value",
      "displayName": "Contract Value",
      "description": "The contract's total value",
      "hidden": false
    }
  ]
}
```

Optionally, a `description` can be provided that is shown to a user in the UI,
and the field can be set to `hidden` to hide it from users in the web and mobile
apps.

## Update a float field

A `float` template field can be updated by [updating the
template][g_update_template] it belongs to. Updates to templates happen through
**operations** to ensure that any template that is already assigned to a file or
folder is updated as well.

When updating a `float` metadata field, the only relevant operation is the
`editField` operation, which can be used to change the field's `key`,
`displayName`, `description`, and `hidden` values.

```json
[
  {
    "op": "editField",
    "fieldKey": "contract_value",
    "data": {
      "displayName": "Total Annual Contract Value",
      "description": "The contract's total anual value",
      "key": "contract_tav",
      "hidden": true
    }
  }
]
```

<Message warning>

This will affect existing instances of this template.

</Message>

[g_create_template]: g://metadata/templates/create
[g_update_template]: g://metadata/templates/update