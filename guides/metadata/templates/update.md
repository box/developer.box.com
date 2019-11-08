---
rank: 1
related_endpoints:
  - put_metadata_templates_id_id_schema
related_guides: []
related_resource:
  - metadata_template
required_guides: []
alias_paths: []
cId: metadata
scId: metadata/templates
id: metadata/templates/update
isIndex: false
---

# Update Metadata Template

Updating a metadata template can be achieved by passing a set of operations to
the [`PUT /metadata_templates/:id/:id/schema`][endpoint] API.

<Samples id="put_metadata_templates_id_id_schema" >

</Samples>

## Safe Operations

Each operation in the list provided to the API performs a transformation of the
template, changing it's schema. The following is a list of operations that can
be used in this API and won't affect any previous templates.

### Edit template properties

The operation `editTemplate` allows for editing any of the base properties of
the template, like the `displayName`, `copyInstanceOnItemCopy` and more.

| Parameter |                                                 |
| --------- | ----------------------------------------------- |
| `data`    | An object representing the properties to change |

```json
{
  "op": "editTemplate",
  "data": {
    "displayName": "Client",
    "copyInstanceOnItemCopy": true
  }
}
```

This will update the template to have a new display name of Client.

### Add a field

The operation `addField` adds an field to a template.

| Parameter |                                     |
| --------- | ----------------------------------- |
| `data`    | An object representing field to add |

```json
{
  "op": "addField",
  "data": {
    "displayName": "Category",
    "key": "category",
    "hidden": false,
    "type": "string"
  }
}
```

This will add a new non-hidden string field with a `displayName` and `key` of
**category**.

### Reorder fields

The operation `reorderFields` reorders the list of fields in a template to match
the requested field list.

| Parameter   |                                                   |
| ----------- | ------------------------------------------------- |
| `fieldKeys` | The new list of field keys in the requested order |

```json
{
  "op": "reorderFields",
  "fieldKeys": ["field2", "field1", "field3"]
}
```

This will reorder the fields for the template to have `field2` first, followed by
`field1`, then `field3`.

### Add enum option

The operation `addEnumOption` adds an enum option at the end of the enum option
list for the specified field.

<!-- markdownlint-disable line-length -->

| Parameter  |                                                                    |
| ---------- | ------------------------------------------------------------------ |
| `data`     | An object representing the option to add to the enum               |
| `fieldKey` | The key of the field to add the option. This must be an enum field |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "addEnumOption",
  "fieldKey": "category",
  "data": {
    "key": "Technology"
  }
}
```

### Reorder enum options

The operation `reorderEnumOptions` reorders the list of options in an enum.

<!-- markdownlint-disable line-length -->

| Parameter        |                                                                             |
| ---------------- | --------------------------------------------------------------------------- |
| `fieldKey`       | The key of the field to reorder the options for. This must be an enum field |
| `enumOptionKeys` | The new list of enum option keys in the requested order                     |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "reorderEnumOptions",
  "fieldKey": "category",
  "enumOptionKeys": [
    "option2",
    "option1",
    "option3"
  ]
}.
```

This will reorder the enum options for field category to have `option2` first,
followed by `option1`, then `option3`.

### Reorder multi select options

The operation `reorderMultiSelectOptions` reorders the list of options in a
multi select.

<!-- markdownlint-disable line-length -->

| Parameter               |                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `fieldKey`              | The key of the field to reorder the options for. This must be an multi select field |
| `multiSelectOptionKeys` | The new list of multi select option keys in the requested order                     |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "reorderMultiSelectOptions",
  "fieldKey": "category",
  "multiSelectOptionKeys": [
    "option2",
    "option1",
    "option3"
  ]
}.
```

This will reorder the multi select options for field category to have `option2`
first, followed by `option1`, then `option3`.

### Add multi-select option

The `addMultiSelectOption` operation adds a multi select option at the end of
the multi select option list for the specified field.

<!-- markdownlint-disable line-length -->

| Parameter  |                                                                           |
| ---------- | ------------------------------------------------------------------------- |
| `fieldKey` | The key of the field to add an item to. This must be a multi select field |
| `data`     | The new item to add to the multi select                                   |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "addMultiSelectOption",
  "fieldKey": "category",
  "data": {
    "key": "Technology"
  }
}
```

This will add a new multi select option **Technology** under the field `category`.

## Hazardous Operations

Each operation in the list provided to the API performs a transformation of the
template, changing it's schema. The following is a list of operations that can
be used in this API and can potentially change the data of any previously
assigned templates.

These changes will be logged as template changes but not as file changes.

### Edit a field

The operation `editField` option edits any number of the base properties of a
field like the `displayName`, `description`, `key`, and `hidden` state.

<!-- markdownlint-disable line-length -->

| Parameter  |                                                                |
| ---------- | -------------------------------------------------------------- |
| `data`     | An object representing the new properties to set for the field |
| `fieldKey` | The key of the field to be edited                              |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "editField",
  "fieldKey": "category",
  "data": {
    "displayName": "Customer Group"
  }
}
```

This will update the field `category` to have a new display name of
**Customer Group**. If the key is changed, existing values of the specified
field are migrated to the new key. The search index will be updated yet it can
take time depending on how many files are affected by the change.

<Message warning>

This may affect existing instances of this template.

</Message>

### Remove a field

The operation `removeField` removes an field from a template.

<!-- markdownlint-disable line-length -->

| Parameter  |                                                  |
| ---------- | ------------------------------------------------ |
| `fieldKey` | The key of the field to remove from the template |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "removeField",
  "fieldKey": "brand"
}
```

This will remove the field `brand` from the template as well as all instances of
the template. The search index will be updated yet it can take time depending on
how many files are affected by the change.

<Message warning>

This will affect existing instances of this template.

</Message>

### Edit an enum option

The operation `editEnumOption` edits an option for an enum.

<!-- markdownlint-disable line-length -->

| Parameter       |                                                                              |
| --------------- | ---------------------------------------------------------------------------- |
| `data`          | An object with the new key of the `enumOption`                               |
| `fieldKey`      | The key of the field the enum option belongs to. Must refer to an enum field |
| `enumOptionKey` | The key of the enum option to be edited                                      |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "editEnumOption",
  "fieldKey": "fy",
  "enumOptionKey": "FY11",
  "data": {
    "key": "FY16"
  }
}
```

This will rename the `enumOption` `FY11` to `FY16`. Existing instances of
the template with the value set will be migrated to the new option. The search
index will be updated yet it can take time depending on how many files are
affected by the change.

<Message warning>

This will affect existing instances of this template.

</Message>

### Remove an enum option

The operation `removeEnumOption` removes an option for an enum.

<!-- markdownlint-disable line-length -->

| Parameter       |                                                                              |
| --------------- | ---------------------------------------------------------------------------- |
| `fieldKey`      | The key of the field the enum option belongs to. Must refer to an enum field |
| `enumOptionKey` | The key of the enum option to be removed                                     |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "removeEnumOption",
  "fieldKey": "fy",
  "enumOptionKey": "FY11"
}
```

This will remove the `enumOption` `FY11` from the field `fy`. It will also
remove the `enumOption` from all instances of the template. If the field on an
instance of the template was set to this option then the value will be unset.

The search index will be updated yet it can take time depending on how many
files are affected by the change.

<Message warning>

This will affect existing instances of this template.

</Message>

### Edit a multi select option

The operation `editMultiSelectOption` edits an option for a multi select.

<!-- markdownlint-disable line-length -->

| Parameter              |                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `data`                 | An object with the new key of the option                                                     |
| `fieldKey`             | The key of the field the multi select option belongs to. Must refer to an multi select field |
| `multiSelectOptionKey` | The key of the multi select option to be edited                                              |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "editMultiSelectOption",
  "fieldKey": "fy",
  "multiSelectOptionKey": "FY11",
  "data": {
    "key": "FY16"
  }
}
```

This will rename the `multiSelectOption` `FY11` to `FY16`. Existing instances of
the template with the value set will be migrated to the new option. The search
index will be updated yet it can take time depending on how many files are
affected by the change.

<Message warning>

This will affect existing instances of this template.

</Message>

### Remove a multi select option

The operation `removeMultiSelectOption` removes an option for an multi select.

<!-- markdownlint-disable line-length -->

| Parameter              |                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `fieldKey`             | The key of the field the multi select option belongs to. Must refer to an multi select field |
| `multiSelectOptionKey` | The key of the multi select option to be removed                                             |

<!-- markdownlint-enable line-length -->

```json
{
  "op": "removeMultiSelectOption",
  "fieldKey": "fy",
  "multiSelectOptionKey": "FY11"
}
```

This will remove the `multiSelectOption` `FY11` from the field `fy`. It will
also remove the `multiSelectOption` from all instances of the template. If the
field on an instance of the template was set to this option then the value will
be unset.

The search index will be updated yet it can take time depending on how many
files are affected by the change.

<Message warning>

This will affect existing instances of this template.

</Message>

[endpoint]: e://put_metadata_templates_id_id_schema
