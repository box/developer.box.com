---
type: quick-start
hide_in_page_nav: true
related_endpoints:
  - put_metadata_templates_id_id_schema
related_guides:
  - metadata/templates/create
  - metadata/templates/update
---

# Update a metadata template

As a final step, let's look at how we can update an existing metadata template.

Updates to metadata templates are performed through **operations** rather than
directly changing the template itself. This method allows you to update any
existing metadata instances that are already applied to files and folders.

<CTA to='g://metadata/templates/update'>
  Learn more about updating templates
</CTA>

In this case, let's assume that we realized that having a `Name` field is a bit
ambiguous, and so we to change the `Name` field of the `customerInfo` template
to `Company Name` instead. By using the `editField` operation we can change the
`displayName` and the `key` of the field on the template and on every instance
of the template that might be applied to a file or folder.

<!-- markdownlint-disable line-length -->

<Tabs>
  <Tab title='cURL'>

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
  <Tab title='.NET'>

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
  <Tab title='Java'>

```java
List<MetadataTemplate.FieldOperation> updates = new ArrayList<MetadataTemplate.FieldOperation>();

String editField = "{\"op\":\"editField\",\"fieldKey\":\"name\",\"data\":{\"key\":\"company_name\",\"displayName\":\"Company Name\"}}";
updates.add(new MetadataTemplate.FieldOperation(editField));

MetadataTemplate.updateMetadataTemplate(api, "enterprise", "customerData", updates);
```

  </Tab>
  <Tab title='Python'>

```py
template = client.metadata_template('enterprise', 'customerData')
updates = template.start_update()
updates.edit_field('name', key='company_name', display_name="Company Name")
template.update_info(updates)
```

  </Tab>
  <Tab title='Node'>

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

The API will return the updated metadata template.

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
    }
  ]
}
```

Updating the template through operations has the benefit that any instance of
the template is automatically updated as well. In this case, the instance we
created in previous steps would now look something like this.

```json
{
  "company_name": "Box",
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
