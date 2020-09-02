---
type: quick-start
hide_in_page_nav: true
related_guides:
  - metadata/scopes
  - metadata/templates/create
related_endpoints:
  - post_metadata_templates_schema
category_id: metadata
subcategory_id: metadata/1-quick-start
is_index: false
id: metadata/quick-start/create-template
rank: 2
total_steps: 7
sibling_id: metadata/quick-start
parent_id: metadata/quick-start
next_page_id: metadata/quick-start/create-instance
previous_page_id: metadata/quick-start
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/1-quick-start/2-create-template.md
---
# カスタムメタデータテンプレートの作成

会社用のカスタムメタデータテンプレートを作成するには、[直接BoxのAPI](e://post_metadata_templates)を使用するかBox SDKのいずれかを使用して新しいテンプレートを作成します。

この`customerInfo`テンプレートでは、3つのフィールドを持つテンプレートを作成します。1つ目のフィールドは顧客の`name`を保持するテキストフィールド、2つ目のフィールドは顧客の業種`industry`に使用できる値のドロップダウンリスト、3つ目のフィールドは年間契約額の合計(`tav`)を表します。

<CTA to="g://metadata/fields">

各種フィールドタイプについて確認する

</CTA>

このテンプレートを作成するには、フィールドの構成と各フィールドの表示名を渡す必要があります。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="cURL">

```sh
curl -X POST https://api.box.com/2.0/metadata_templates/schema \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -H "content-type: application/json" \
     -d '{
      "scope": "enterprise",
      "displayName": "Customer Info",
      "fields": [
        {
          "type": "string",
          "displayName": "Name"
        },
        {
          "type": "enum",
          "displayName": "Industry",
          "options": [
            {"key": "Technology"},
            {"key": "Healthcare"},
            {"key": "Legal"}
          ]
        },
        {
          "type": "float",
          "displayName": "Total account value",
          "key": "tav"
        }
      ]
    }'
```

</Tab>

<Tab title=".NET">

```c#
var templateParams = new BoxMetadataTemplate()
{
  DisplayName = "Customer Info",
  Scope = "enterprise",
  Fields = new List<BoxMetadataTemplateField>()
  {
    new BoxMetadataTemplateField()
    {
      Type = "string",
      DisplayName = "Name"
    },
    new BoxMetadataTemplateField()
    {
      Type = "enum",
      DisplayName = "Industry",
      Options = new List<BoxMetadataTemplateFieldOption>()
      {
        new BoxMetadataTemplateFieldOption() { Key = "Technology" },
        new BoxMetadataTemplateFieldOption() { Key = "Healthcare" },
        new BoxMetadataTemplateFieldOption() { Key = "Legal" }
      }
    },
    new BoxMetadataTemplateField()
    {
      Type = "float",
      DisplayName = "Total account value",
      Key="tav"
    },
  }
};
BoxMetadataTemplate template = await  client.MetadataManager.CreateMetadataTemplate(templateParams);
```

</Tab>

<Tab title="Java">

```java
MetadataTemplate.Field name = new MetadataTemplate.Field();
name.setType("string");
name.setDisplayName("Name");

MetadataTemplate.Field industry = new MetadataTemplate.Field();
industry.setType("enum");
industry.setDisplayName("Industry");

MetadataTemplate.Option technology = new MetadataTemplate.Option();
technology.setKey("Technology");

MetadataTemplate.Option healthcare = new MetadataTemplate.Option();
healthcare.setKey("Healthcare");

MetadataTemplate.Option legal = new MetadataTemplate.Option();
legal.setKey("Legal");

List<MetadataTemplate.Option> options = new ArrayList<MetadataTemplate.Option>();
options.add(technology);
options.add(healthcare);
options.add(legal);

MetadataTemplate.Field tav = new MetadataTemplate.Field();
tav.setType("float");
tav.setDisplayName("Total account value");
tav.setKey("tav");

List<MetadataTemplate.Field> fields = new ArrayList<MetadataTemplate.Field>();
fields.add(name);
fields.add(industry);
fields.add(tav);

MetadataTemplate template = MetadataTemplate.createMetadataTemplate(api, "enterprise", "customerInfo", "Customer Info", false, fields);
```

</Tab>

<Tab title="Python">

```py
from boxsdk.object.metadata_template import MetadataField, MetadataFieldType

fields = [
  MetadataField(MetadataFieldType.STRING, 'Name')
  MetadataField(MetadataFieldType.ENUM, 'Industry', options=['Technology', 'Healthcare', 'Legal'])
]
template = client.create_metadata_template('Customer Info', fields)
```

</Tab>

<Tab title="Node">

```js
client.metadata.createTemplate(
  'Customer Info',
  [
    {
      type: 'string',
      displayName: 'Name'
    },
    {
      type: 'enum',
      displayName: 'Industry',
      options: [
        {key: 'Technology'},
        {key: 'Healthcare'},
        {key: 'Legal'}
      ]
    },
    {
      type: 'float',
      displayName: 'Total account value',
      key: 'tav'
    }
  ]
).then(template => {
  // ...
});
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

<Message warning>

# 管理者権限が必須

メタデータテンプレートの作成は、管理者権限を持つユーザーに制限されています。つまり、管理者、または管理者から**会社のメタデータテンプレートの作成および編集**権限が付与されている共同管理者だけがウェブアプリまたはAPIを使用してテンプレートを管理できます。

</Message>

このAPIにより、新しく作成されたメタデータテンプレートが返されます。

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
      "key": "name",
      "displayName": "Name",
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

<Message notice>

# テンプレートキー

テンプレートキーは、明示的に設定しませんでしたが、`displayName`値から自動的に派生します。この場合、`templateKey`は`customerInfo`になります。

</Message>

<Next>

カスタムテンプレートを作成しました

</Next>
