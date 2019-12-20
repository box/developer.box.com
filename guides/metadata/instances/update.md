---
rank: 1
related_endpoints:
  - put_files_id_metadata_id_id
  - put_folders_id_metadata_id_id
related_guides: []
related_resource:
  - metadata
required_guides: []
alias_paths: []
cId: metadata
scId: metadata/instances
id: metadata/instances/update
isIndex: false
---

# Update Metadata Instances

Updating metadata on a file can be achieved by passing a set of JSON operations
to the [`PUT /files/:id/metadata_templates/:id/:id`][files_endpoint] API.

<Samples id="put_files_id_metadata_id_id" >

</Samples>

Similarly, metadata assigned to a folder can be updated by passing a set of JSON
operations to the [`PUT /files/:id/metadata_templates/:id/:id`][folders_endpoint]
API.

<Samples id="put_folders_id_metadata_id_id" >

</Samples>

## JSON Operations

The request body must follow the [JSON-Patch specification][jsonpatch], which is
represented as a list of operation objects.

Updates can be either `add`, `replace`, `remove` , `test`, `move`, or `copy`.
The template instance can only be updated if the template has already been
assigned to the file or folder.

```json
[
  { "op": "test", "path": "/competitiveDocument", "value": "no" },
  { "op": "remove", "path": "/competitiveDocument" },
  { "op": "test", "path": "/status", "value": "active" },
  { "op": "replace", "path": "/status", "value": "inactive" },
  { "op": "test", "path": "/author", "value": "Jones" },
  { "op": "copy", "from": "/author", "path": "/editor" },
  { "op": "test", "path": "/currentState", "value": "proposal" },
  { "op": "move", "from": "/currentState", "path": "/previousState" },
  { "op": "add", "path": "/currentState", "value": "reviewed" }
]
```

Every operation exists out of an `op` name, the [JSON Pointer][pointer] `path`
that points to the field to changes, and an optional `value` or `from` value
depending on the operation being made.

<Message>

When editing metadata, only values that adhere to the metadata template schema
will be accepted. The update is applied completely or not at all. If any
errors occur during the application of the update operations, the metadata
instance is not changed.

</Message>

## Limitations

Folder metadata operations on user's root folder with ID `0` are not allowed.
Attempts to perform metadata operations on this will result in a `403` HTTP
status code.

[files_endpoint]: e://put_files_id_metadata_id_id
[folders_endpoint]: e://put_folders_id_metadata_id_id
[jsonpatch]: https://tools.ietf.org/html/rfc6902
[pointer]: https://tools.ietf.org/html/rfc6901
