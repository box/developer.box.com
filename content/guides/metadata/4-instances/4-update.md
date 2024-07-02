---
related_endpoints:
  - put_files_id_metadata_id_id
  - put_folders_id_metadata_id_id
related_guides: []
related_resources:
  - metadata
  - metadata_template
required_guides:
  - metadata/instances/list
  - metadata/instances/create
  - metadata/templates/list
---

# Update metadata on an item

Updating the metadata applied to a file or folder can be done by using the
item's `id`, the template's `templateKey` and `scope`, and a set of JSON
operations to manipulate the data on the template instance.

## Update metadata on a file

To update the metadata to a file, call the
[`PUT /files/:file_id/metadata/:scope/:templateKey`][e_on_file] API endpoint
with the file's `file_id`, the template's `scope` and `templateKey`, set of JSON
operations to manipulate the data on the template instance.

<Samples id="put_files_id_metadata_id_id" />

<Message>
  The authenticated user needs to have write access on the file to be able to
  write changes to the metadata on a file.
</Message>

## Update metadata on a folder

To update the metadata to a folder, call the
[`PUT /folders/:folder_id/metadata/:scope/:templateKey`][e_on_folder] API
endpoint with the folder's `folder_id`, the template's `scope` and
`templateKey`, set of JSON operations to manipulate the data on the template instance.

<Samples id="put_folders_id_metadata_id_id" />

<Message>
  The authenticated user needs to have write access on the file to be able to
  write changes to the metadata on a file.
</Message>

## JSON Operations

Updating an piece of metadata follow the [JSON-Patch specification][jsonpatch],
which is represented as a list of operation objects.

For metadata instances, these operations can be either `add`, `replace`,
`remove` , `test`, `move`, or `copy`. Every operation exists out of an `op`
name, the [JSON Pointer][pointer] `path` that points to the field to changes,
and an optional `value` or `from` value depending on the operation being made.

```json
[
  { "op": "test", "path": "/competitiveDocument", "value": "no" },
  { "op": "remove", "path": "/competitiveDocument" },
  { "op": "test", "path": "/status", "value": "active" },
  { "op": "replace", "path": "/status", "value": "inactive" },
  { "op": "test", "path": "/author", "value": "Jones" },
  { "op": "copy", "from": "/author", "path": "/editor" },
  { "op": "move", "from": "/currentState", "path": "/previousState" },
  { "op": "add", "path": "/currentState", "value": "reviewed" }
]
```

<Message warning>
  When editing metadata, only values that adhere to the metadata template schema
  will be accepted. The update is applied completely or not at all. If any
  errors occur during the application of the update operations, the metadata
  instance is not changed.

  The template instance can only be updated if the template has already been
  assigned to the file or folder.
</Message>

### Add a new value

To add a new value on a template, use the `add` operation.

```json
[
  {
    "op": "add",
    "path": "/name",
    "value": "Model 3"
  }
]
```

This will add the `name` field with a value of `Model 3` . Before this
operation, the template did not have a value for the `name` field.

```json
{
  // "name": null, // old value
  "name": "Model 3", // new value
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>
  For `enum` and `multiSelect` fields this new value needs to be one of the
  valid options for the field.
</Message>

### Replace a value

To replace a value on a template, use the `replace` operation.

```json
[
  {
    "op": "replace",
    "path": "/name",
    "value": "Model 4"
  }
]
```

This will replace the `name` field value `Model 3` with a new value of `Model
4`.

```json
{
  // "name": "Model 3", # Old value
  "name": "Model 3", // new value
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>
  For `enum` and `multiSelect` fields this new value needs to be one of the
  valid options for the field.
</Message>

### Copy a value

To copy a value from one field to another, use the `copy` operation.

```json
[
  {
    "op": "copy",
    "from": "/name",
    "path": "/displayName"
  }
]
```

This will add the `displayName` field with a value that matches the value of the
`name` field. Before this operation, the template did not have a value for the
`displayName` field.

```json
{
  "name": "Model 3",
  "displayName": "Model 3", // new value, copied from the name
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>
  For `enum` and `multiSelect` fields this new value needs to be one of the
  valid options for the field.
</Message>

### Move a value

To move a value from one field to another, use the `move` operation.

```json
[
  {
    "op": "copy",
    "from": "/name",
    "path": "/displayName"
  }
]
```

This will add the `displayName` field with a value that matches the value of the
`name` field. Before this operation, the template did not have a value for the
`displayName` field. After this operation, the `name` field no longer exists.

```json
{
  // "name": "Model 3", // old value, no longer present now
  "displayName": "Model 3", // new value, copied from the name
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>
  For `enum` and `multiSelect` fields this new value needs to be one of the
  valid options for the field.
</Message>

### Remove a value

To remove a value from the metadata instance, use the `remove` operation.

```json
[
  {
    "op": "remove",
    "path": "/name"
  }
]
```

This will remove the `name` field completely from the metadata instance.

```json
{
  // "name": "Model 3", // old value, no longer present now
  "category": "SUVs",
  "$type": "productInfo-8120731a-41e4-11ea-b77f-2e728ce88125",
  "$parent": "folder_3456",
  "$id": "22ba8c96-41e6-11ea-b77f-2e728ce88125",
  "$version": 3,
  "$typeVersion": 0,
  "$template": "productInfo",
  "$scope": "enterprise_1234567",
  "$canEdit": true
}
```

<Message warning>
  For `enum` and `multiSelect` fields this new value needs to be one of the
  valid options for the field.
</Message>

### Test a value

To test that a field has the value you expect, use the `test` operation.

```json
[
  {
    "op": "test",
    "path": "/name",
    "value": "Model 4"
  }
]
```

When a test fails the API will not perform any of the operations and return a
`409 Conflict` HTTP status with the following error.

```json
{
  "message": "value differs from expectations",
  "code": "failed_json_patch_application",
  "request_id": "bzxgr1gbcq5h67pj"
}
```

The main purpose of this operation is to validate that the values on the
metadata instance are as expected before any operations are performed. The Box
API either performs all changes or none, and therefore a failing test is very
useful to ensure all values are expected before any transformation is applied.

[e_on_file]: e://put_files_id_metadata_id_id
[e_on_folder]: e://put_folders_id_metadata_id_id
[jsonpatch]: https://tools.ietf.org/html/rfc6902
[pointer]: https://tools.ietf.org/html/rfc6901
