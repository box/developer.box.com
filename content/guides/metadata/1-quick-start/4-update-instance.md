---
type: quick-start
hide_in_page_nav: true
related_endpoints:
  - put_files_id_metadata_id_id
  - put_folders_id_metadata_id_id
related_guides:
  - metadata/templates
  - metadata/instances/update
---

# Update metadata on a file

Once metadata has been applied to a file or folder there is often a need to
update the metadata at a later date. 

Updating a metadata instance is done by applying a set of operations to the
original data. These operations are performed atomically, ensuring that the
changes are either all applied or not applied at all.

<CTA to='g://metadata/instances/update'>
  Learn more about updating instances
</CTA>

In this case, let's assume we want to change the `name` of the customer from 
`Box, Inc` to `Box`. We can apply two operations, firstly, we ensure the
value of the name is still `Box, Inc` before we change it, and secondly we make
the change.

<!-- markdownlint-disable line-length -->

<Tabs>
  <Tab title='cURL'>

```sh
curl -X PUT https://api.box.com/2.0/files/12345/metadata/enterprise/customerInfo \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -H "content-type: application/json-patch+json" \
     -d '[
        {
          "op": "test",
          "path": "/name",
          "value": "Box, Inc"
        },
        {
          "op": "replace",
          "path": "/name",
          "value": "Box"
        }
      ]'
```

  </Tab>
  <Tab title='.NET'>

```c#
var updates = new List<BoxMetadataUpdate>()
{
  new BoxMetadataUpdate()
  {
      Op = MetadataUpdateOp.test,
      Path = "/name",
      Value = "Box, Inc"
  },
  new BoxMetadataUpdate()
  {
      Op = MetadataUpdateOp.replace,
      Path = "/name",
      Value = "Box"
  }
};
Dictionary<string, object> updatedMetadata = await client.MetadataManager
    .UpdateFileMetadataAsync("12345", updates, "enterprise", "customerInfo");
```

  </Tab>
  <Tab title='Java'>

```java
BoxFile file = new BoxFile(api, "12345");
file.updateMetadata(
  file.createMetadata(
  "customerInfo",
  "enterprise",
  new Metadata().test("/name", "Box, Inc").replace("/name", "Box")
);
```

  </Tab>
  <Tab title='Python'>

```py
file = client.file(file_id='12345')
metadata = file.metadata(scope='enterprise', template='customerInfo')

updates = metadata.start_update()
updates.test('/name', 'Box, Inc')
updates.replace('/name', 'Box') 

file.update(updates)
```

  </Tab>
  <Tab title='Node'>

```js
var updates = [
  { op: 'test', path: '/name', value: 'Box, Inc' },
  { op: 'replace', path: '/name', value: 'Box' }
];

client.files.updateMetadata(
  '12345', 
  client.metadata.scopes.ENTERPRISE, 
  "customerInfo", 
  updates
).then(metadata => {
  //...
});
```

  </Tab>
</Tabs>

<CTA to='g://metadata/instances/update'>
  Learn more about all operations
</CTA>

The API will return the updated metadata instance.

```json
{
  "name": "Box",
  "industry": "Technology",
  "$id": "01234500-12f1-1234-aa12-b1d234cb567e",
  "$parent": "folder_12345,",
  "$scope": "enterprise_34567",
  "$template": "customerInfo",
  "$type": "customerInfo-6bcba49f-ca6d-4d2a-a758-57fe6edf44d0",
  "$typeVersion": 2,
  "$version": 1,
  "$canEdit": true
}
```

<!-- markdownlint-enable line-length -->

<Next>I've updated metadata to a file</Next>
