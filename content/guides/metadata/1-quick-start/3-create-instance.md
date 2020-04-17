---
type: quick-start
hide_in_page_nav: true
related_endpoints:
  - post_files_id_metadata_id_id
  - post_folders_id_metadata_id_id
related_guides:
  - metadata/templates
  - metadata/instances/create
---

# Apply metadata to a file

With your new `customerData` template in hand you can now apply this template to
a file or folder. To apply this template you will need the `scope` and
`templateKey` of the template, as well as the ID of the item to apply the
template to.

<!-- markdownlint-disable line-length -->

<Tabs>
  <Tab title='cURL'>

```sh
curl -X POST https://api.box.com/2.0/files/12345/metadata/enterprise/customerInfo \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -H "content-type: application/json" \
     -d '{
       "name": "Box, Inc",
       "industry": "Technology"
     }'
```

  </Tab>
  <Tab title='.NET'>

```c#
var metadataValues = new Dictionary<string, object>()
{
    { "name", "Box, Inc" },
    { "industry", "Technology" }
};

Dictionary<string, object> metadata = await client.MetadataManager
    .CreateFileMetadataAsync(fileId: "12345", metadataValues, "enterprise", "customerInfo");
```

  </Tab>
  <Tab title='Java'>

```java
BoxFile file = new BoxFile(api, "12345");

file.createMetadata(
  "customerInfo",
  "enterprise",
  new Metadata()
    .add("name", "Box, Inc")
    .add("industry", "Technology")
);
```

  </Tab>
  <Tab title='Python'>

```py
metadata = {
  'name': 'Box, Inc',
  'industry': 'Technology',
}

client.file(file_id='11111').metadata(scope='enterprise', template='customerInfo').set(metadata)
```

  </Tab>
  <Tab title='Node'>

```js
client.files.addMetadata(
  '12345', 
  client.metadata.scopes.ENTERPRISE, 
  "customerInfo", 
  {
    name: "Box, Inc",
    industry: "Technology"
  }
).then(metadata => {
  // ...
});
```

  </Tab>
</Tabs>

<Message warning>
  The `industry` field in this example is an `enum` field and therefore the
  value needs to be one of the available options on the field. Any other value
  will result in an error.
</Message>

The API will return the newly created metadata instance.

```json
{
  "name": "Box, Inc",
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

<Next>I've applied metadata to a file</Next>
