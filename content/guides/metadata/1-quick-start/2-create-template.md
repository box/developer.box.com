---
type: quick-start
hide_in_page_nav: true
related_guides:
  - metadata/scopes
  - metadata/templates/create
related_endpoints:
  - post_metadata_templates_schema
---

# Create a custom metadata template

To create a custom metadata template for your enterprise you can use [our API
directly](e://post_metadata_templates) or one of our SDKs to create a new
template.

For this `customerInfo` template, we're going to create a template with 2
fields. The first field is a text field to hold the customer's `name`, and the
second is a dropdown list of the possible values for the `industry` the customer
operates in.

<CTA to='g://metadata/fields'>Learn about the different field types</CTA>

To create this template we need to pass in the configuration for the fields, as
well as a display name for the field.

<!-- markdownlint-disable line-length -->

<Tabs>
  <Tab title='cURL'>

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
        }
      ]
    }'
```

  </Tab>
  <Tab title='.NET'>

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
  }
};
BoxMetadataTemplate template = await  client.MetadataManager.CreateMetadataTemplate(templateParams);
```

  </Tab>
  <Tab title='Java'>

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

List<MetadataTemplate.Field> fields = new ArrayList<MetadataTemplate.Field>();
fields.add(name);
fields.add(industry);

MetadataTemplate template = MetadataTemplate.createMetadataTemplate(api, "enterprise", "customerInfo", "Customer Info", false, fields);
```

  </Tab>
  <Tab title='Python'>

```py
from boxsdk.object.metadata_template import MetadataField, MetadataFieldType

fields = [
  MetadataField(MetadataFieldType.STRING, 'Name')
  MetadataField(MetadataFieldType.ENUM, 'Industry', options=['Technology', 'Healthcare', 'Legal'])
]
template = client.create_metadata_template('Customer Info', fields)
```

  </Tab>
  <Tab title='Node'>

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
  # Admin permissions required

  Creating metadata templates is restricted to users with admin permission. This
  means that only admins, or co-admins who have been granted rights to **Create
  and edit metadata templates for your company** by the admin can use the web
  app or the API to manage templates.
</Message>

The API will return the newly created metadata template.

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
    }
  ]
}
```

<Message notice>
  # Template key

  Although you did not explicitly set the template key the key is automatically
  derived from the `displayName` value. In this case, the `templateKey` would be
  `customerInfo`.
</Message>

<Next>I've created a custom template</Next>