---
type: quick-start
hide_in_page_nav: true
related_endpoints:
  - put_metadata_templates_id_id_schema
related_guides:
  - metadata/templates/create
  - metadata/templates/update
category_id: metadata
subcategory_id: metadata/1-quick-start
is_index: false
id: metadata/quick-start/update-template
rank: 5
total_steps: 7
sibling_id: metadata/quick-start
parent_id: metadata/quick-start
next_page_id: metadata/quick-start/create-query
previous_page_id: metadata/quick-start/update-instance
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/1-quick-start/5-update-template.md
---
# メタデータテンプレートの更新

既存のメタデータテンプレートの更新方法を見てみましょう。

メタデータテンプレートの更新は、テンプレート自体を直接変更するのではなく、**操作**を利用して実行されます。この方法では、ファイルおよびフォルダにすでに適用されている既存のメタデータインスタンスを更新できます。

<CTA to="g://metadata/templates/update">

テンプレートの更新の詳細を確認する

</CTA>

この場合は、`Name`フィールドが少しあいまいであることを認識しているため、`customerInfo`テンプレートの`Name`フィールドを`Company Name`に変更したいとしましょう。`editField`操作を使用することで、テンプレートと、ファイルまたはフォルダに適用されている可能性のあるテンプレートのすべてのインスタンスのフィールドの`displayName`および`key`を変更できます。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="cURL">

```sh
curl -X PUT https://api.box.com/2.0/metadata_templates/enterprise/blueprintTemplate/schema \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -H "content-type: application/json" \
     -d '[
       {
         "op": "editField",
         "fieldKey": "name",
         "data": {
           "key": "company_name",
           "displayName": "Company Name"
         }
       }
     ]'
```

</Tab>

<Tab title=".NET">

```c#
var updates = new List<BoxMetadataTemplateUpdate>()
{
  new BoxMetadataTemplateUpdate()
  {
      Op = MetadataTemplateUpdateOp.editField,
      FieldKey = "name",
      Data = new {
          key = "company_name",
          displayName = "Company Name"
      }
  }
};
BoxMetadataTemplate updatedTemplate = await client.MetadataManager
    .UpdateMetadataTemplate(updates, "enterprise", "customerData");
```

</Tab>

<Tab title="Java">

```java
List<MetadataTemplate.FieldOperation> updates = new ArrayList<MetadataTemplate.FieldOperation>();

String editField = "{\"op\":\"editField\",\"fieldKey\":\"name\",\"data\":{\"key\":\"company_name\",\"displayName\":\"Company Name\"}}";
updates.add(new MetadataTemplate.FieldOperation(editField));

MetadataTemplate.updateMetadataTemplate(api, "enterprise", "customerData", updates);
```

</Tab>

<Tab title="Python">

```py
template = client.metadata_template('enterprise', 'customerData')
updates = template.start_update()
updates.edit_field('name', key='company_name', display_name="Company Name")
template.update_info(updates)
```

</Tab>

<Tab title="Node">

```js
var operations = [
  {
    op: 'editField',
    fieldKey: 'name',
    data: { 
      key: 'company_name',
      displayName: "Company Name" 
    }
  }
];

client.metadata.updateTemplate(
  'enterprise', 
  'customerData', 
  operations
).then(template => {
  //.. 
});
```

</Tab>

</Tabs>

このAPIにより、更新されたメタデータテンプレートが返されます。

```json
{
  "id": "100ac693-a468-4b37-9535-05984b804dc2",
  "type": "metadata_template",
  "templateKey": "customerInfo",
  "scope": "enterprise_34567",
  "displayName": "Customer Info",
  "hidden": false,
  "copyInstanceOnItemCopy": false,
  "fields": [
    {
      "id": "5c6a5906-003b-4654-9deb-472583fc2930",
      "type": "string",
      "key": "company_name",
      "displayName": "Company Name",
      "hidden": false
    },
    {
      "id": "cf3eb5b8-52ef-456c-b175-44354a27e289",
      "type": "enum",
      "key": "industry",
      "displayName": "Industry",
      "options": [
        {"key": "Technology"},
        {"key": "Healthcare"},
        {"key": "Legal"}
      ],
      "hidden": false
    },
    {
      "id": "5c6a5906-4654-9deb-003b-472583fc2930",
      "type": "float",
      "key": "tav",
      "displayName": "Total account value",
      "hidden": false
    }
  ]
}
```

操作によってテンプレートを更新した場合は、テンプレートのインスタンスもすべて自動的に更新されるという利点があります。この場合、前の手順で作成したインスタンスは次のようになります。

```json
{
  "company_name": "Box",
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
