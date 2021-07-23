---
type: quick-start
hide_in_page_nav: true
related_endpoints:
  - post_files_id_metadata_id_id
  - post_folders_id_metadata_id_id
related_guides:
  - metadata/templates
  - metadata/instances/create
category_id: metadata
subcategory_id: metadata/1-quick-start
is_index: false
id: metadata/quick-start/create-instance
rank: 3
total_steps: 7
sibling_id: metadata/quick-start
parent_id: metadata/quick-start
next_page_id: metadata/quick-start/update-instance
previous_page_id: metadata/quick-start/create-template
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/1-quick-start/3-create-instance.md
fullyTranslated: true
---
# ファイルにメタデータを適用

新しい`customerData`テンプレートが完成したら、このテンプレートをファイルまたはフォルダに適用できます。このテンプレートを適用するには、テンプレートの`scope`と`templateKey`のほか、テンプレートの適用先となる項目のIDが必要になります。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="cURL">

```sh
curl -X POST https://api.box.com/2.0/files/12345/metadata/enterprise/customerInfo \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -H "content-type: application/json" \
     -d '{
       "name": "Box, Inc",
       "industry": "Technology",
       "tav": 1000000
     }'
```

</Tab>

<Tab title=".NET">

```c#
var metadataValues = new Dictionary<string, object>()
{
    { "name", "Box, Inc" },
    { "industry", "Technology" },
    { "tav", 100000 }
};

Dictionary<string, object> metadata = await client.MetadataManager
    .CreateFileMetadataAsync(fileId: "12345", metadataValues, "enterprise", "customerInfo");
```

</Tab>

<Tab title="Java">

```java
BoxFile file = new BoxFile(api, "12345");

file.createMetadata(
  "customerInfo",
  "enterprise",
  new Metadata()
    .add("name", "Box, Inc")
    .add("industry", "Technology")
    .add("tav", 100000)
);
```

</Tab>

<Tab title="Python">

```py
metadata = {
  'name': 'Box, Inc',
  'industry': 'Technology',
  'tav': 1000000
}

client.file(file_id='11111').metadata(scope='enterprise', template='customerInfo').set(metadata)
```

</Tab>

<Tab title="Node">

```js
client.files.addMetadata(
  '12345', 
  client.metadata.scopes.ENTERPRISE, 
  "customerInfo", 
  {
    name: "Box, Inc",
    industry: "Technology",
    tav: 1000000
  }
).then(metadata => {
  // ...
});
```

</Tab>

</Tabs>

<Message warning>

この例の`industry`フィールドは`enum`フィールドであるため、値にはこのフィールドで使用できるオプションのいずれかを指定する必要があります。それ以外の値を指定するとエラーが発生します。

</Message>

このAPIにより、新しく作成されたメタデータインスタンスが返されます。

```json
{
  "name": "Box, Inc",
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

ファイルにメタデータを適用しました

</Next>
