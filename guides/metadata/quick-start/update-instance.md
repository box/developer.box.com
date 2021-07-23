---
type: quick-start
hide_in_page_nav: true
related_endpoints:
  - put_files_id_metadata_id_id
  - put_folders_id_metadata_id_id
related_guides:
  - metadata/templates
  - metadata/instances/update
category_id: metadata
subcategory_id: metadata/1-quick-start
is_index: false
id: metadata/quick-start/update-instance
rank: 4
total_steps: 7
sibling_id: metadata/quick-start
parent_id: metadata/quick-start
next_page_id: metadata/quick-start/update-template
previous_page_id: metadata/quick-start/create-instance
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/1-quick-start/4-update-instance.md
fullyTranslated: true
---
# ファイルのメタデータを更新

メタデータをファイルまたはフォルダに適用したら、多くの場合は、後日メタデータの更新が必要になります。

メタデータインスタンスを更新するには、元のデータに一連の操作を適用します。これらの操作はアトミックに実行されるため、変更はすべて適用されるか、まったく適用されないかのいずれかになります。

<CTA to="g://metadata/instances/update">

インスタンスの更新の詳細を確認する

</CTA>

この場合、顧客の`name`を`Box, Inc`から`Box`に変更するとします。適用できる操作は2つあり、まず、変更前に名前の値がまだ`Box, Inc`であることを確認し、次に変更を行います。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="cURL">

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

<Tab title=".NET">

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

<Tab title="Java">

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

<Tab title="Python">

```py
file = client.file(file_id='12345')
metadata = file.metadata(scope='enterprise', template='customerInfo')

updates = metadata.start_update()
updates.test('/name', 'Box, Inc')
updates.replace('/name', 'Box') 

file.update(updates)
```

</Tab>

<Tab title="Node">

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

<CTA to="g://metadata/instances/update">

すべての操作の詳細を確認する

</CTA>

このAPIにより、更新されたメタデータインスタンスが返されます。

```json
{
  "name": "Box",
  "industry": "Technology",
  "tav": 1000000,
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

<Next>

ファイルのメタデータを更新しました

</Next>
