---
type: quick-start
hide_in_page_nav: true
related_guides:
  - metadata/scopes
related_endpoints:
  - get_metadata_templates_global
  - get_metadata_templates_enterprise
---

# List all metadata templates

It's likely your enterprise already has a list of metadata templates that you
can use right off-the-shelve without having to create your own.

In general, metadata templates are either available to only your enterprise or
to every enterprise using Box. The `scope` of a template defines if a template
is available to everyone (`global`) or only to your enterprise (`enterprise`).

<CTA to='g://metadata/scopes'>Learn more about metadata scopes</CTA>

## Listing templates

A few [global templates](e://get_metadata_templates_global) are available to all
customers.

<Samples id="get_metadata_templates_global" />

Many of these templates are for Box's internal use, yet your application can use
and apply these. More useful are templates [created by applications and admins
within your enterprise](e://get_metadata_templates_enterprise) to hold data
specific to your enterprise's needs.

<Samples id="get_metadata_templates_enterprise" />

## A metadata template

A [metadata template][template] describes a set of key/value
pairs that can be assigned to a file or folder.

For example, a `customerInfo` template might hold data about a customer,
having a field for the customer name as well as the customer's industry.

```json
{
  "id": "100ac693-a468-4b37-9535-05984b804dc2",
  "type": "metadata_template",
  "templateKey": "customerInfo",
  "scope": "enterprise_12345",
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

<Next>I've listed the templates available to me</Next>

[template]: g://metadata/templates
