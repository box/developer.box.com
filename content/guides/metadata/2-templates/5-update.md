---
related_endpoints:
  - put_metadata_templates_id_id_schema
related_guides:
  - metadata/templates/create
required_guides:
  - metadata/scopes
  - metadata/templates/create
related_resources:
  - metadata_template
---

# Update a metadata template

Updating a metadata template can be achieved by passing an array of operations
to the [`PUT /metadata_templates/:scope/:templateKey/schema`][endpoint] API.

<Samples id="put_metadata_templates_id_id_schema" />

<Message warning>
  # Admin permissions required

  Updating metadata templates is restricted to users with admin permission. This
  means that only admins, or co-admins who have been granted rights to **Create
  and edit metadata templates for your company** by the admin can use the web
  app or the API to manage templates.
</Message>

## Operations

Updates to metadata templates are performed through **operations** rather than
directly changing the template itself. This method allows us to update any
existing metadata instances that are already applied to files and folders.

## Template operations

Template operations update a template's details or fields. These operations are
generally safe as they are applied to any template instance without much impact.

### Edit a template

The operation `editTemplate` allows for editing any of the base properties of
the template, like the `displayName`, `copyInstanceOnItemCopy` and more.

| Parameter |                                                 |
|-----------|-------------------------------------------------|
| `data`    | An object representing the properties to change |

```json
[
  {
    "op": "editTemplate",
    "data": {
      "displayName": "Client",
      "copyInstanceOnItemCopy": true
    }
  }
]
```

This will update the template to have a new display name of Client.

<Message warning>
  This will affect existing instances of this template.
</Message>

### Add a field to a template

The operation `addField` adds a field to a template.

| Parameter |                                     |
|-----------|-------------------------------------|
| `data`    | An object representing field to add |

```json
[
  {
    "op": "addField",
    "data": {
      "displayName": "Category",
      "key": "category",
      "hidden": false,
      "type": "string"
    }
  }
]
```

This will add a new non-hidden string field with a `displayName` and `key` of
**category**.

<Message warning>
  This will affect existing instances of this template.
</Message>

### Reorder fields

The operation `reorderFields` reorders the list of fields in a template to match
the requested field list.

| Parameter   |                                                   |
|-------------|---------------------------------------------------|
| `fieldKeys` | The new list of field keys in the requested order |

```json
{
  "op": "reorderFields",
  "fieldKeys": ["field2", "field1", "field3"]
}
```

This will reorder the fields for the template to have `field2` first, followed
by `field1`, then `field3`.

<Message warning>
  This will affect existing instances of this template. It will reorder the
  fields, yet keep the values of the fields intact.
</Message>

## Field operations

Field operations transform the schema of a template. The following is a list of
operations that can be used in this API and can potentially change the data of
any previously assigned templates.

These changes will be logged as template changes but not as file changes.

### Edit a field

The operation `editField` edits any number of the base properties of a
field like the `displayName`, `description`, `key`, and `hidden` state.

| Parameter  |                                                                |
|------------|----------------------------------------------------------------|
| `data`     | An object representing the new properties to set for the field |
| `fieldKey` | The key of the field to be edited                              |

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
field are migrated to the new key. The search index will be updated, yet it may
take time depending on how many files are affected by the change.

<Message warning>
  This may affect existing instances of this template.
</Message>

### Remove a field

The operation `removeField` removes a field from a template.

| Parameter  |                                                  |
|------------|--------------------------------------------------|
| `fieldKey` | The key of the field to remove from the template |

```json
{
  "op": "removeField",
  "fieldKey": "brand"
}
```

This will remove the field `brand` from the template as well as all instances of
the template. The search index will be updated, yet it may take time depending on
how many files are affected by the change.

<Message warning>
  This will affect existing instances of this template.
</Message>

## Field Option Operations

Both the [`enum`](g://metadata/fields/enum) and
[`multiSelect`](g://metadata/fields/multi-select) metadata field types support
some additional operations to change the options of the fields.

| Operation                                                                       |                                                 |
|---------------------------------------------------------------------------------|-------------------------------------------------|
| [`addEnumOption`](g://metadata/fields/enum#add-an-option)                       | Adds an option to an `enum` field               |
| [`editEnumOption`](g://metadata/fields/enum#edit-an-option)                     | Edits an `enum` field option                    |
| [`reorderEnumOptions`](g://metadata/fields/enum#reorder-options)                | Re-orders the options on an `enum` field        |
| [`removeEnumOption`](g://metadata/fields/enum#remove-an-option)                 | Removes an `enum` field option                 |
| [`addMultiSelectOption`](g://metadata/fields/multi-select#add-an-option)        | Adds an option to a `multiSelect` field        |
| [`editMultiSelectOption`](g://metadata/fields/multi-select#edit-an-option)      | Edits a `multiSelect` field option             |
| [`reorderMultiSelectOptions`](g://metadata/fields/multi-select#reorder-options) | Re-orders the options on a `multiSelect` field |
| [`removeMultiSelectOption`](g://metadata/fields/multi-select#remove-an-option)  | Removes a `multiSelect` field option          |

[endpoint]: e://put_metadata_templates_id_id_schema
