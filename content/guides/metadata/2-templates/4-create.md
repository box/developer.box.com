---
related_endpoints:
  - post_metadata_templates_schema
related_guides:
  - metadata/scopes
  - metadata/templates/list
  - metadata/templates/update
required_guides:
  - metadata/scopes
related_resources: 
  - metadata_templates
---

# Create a metadata template

To create a metadata template, pass a `scope`, `displayName` and an optional set
of `fields` to the [`POST /metadata_templates/schema`][e_create_template] API.

<Samples id='post_metadata_templates_schema' />

<Message notice>
  Metadata templates can only be created for the `enterprise` scope. Templates
  can not be created for the `global` scope.
</Message>

<Message warning>
  # Admin permissions required

  Creating metadata templates is restricted to users with admin permission. This
  means that only admins, or co-admins who have been granted rights to **Create
  and edit metadata templates for your company** by the admin can use the web
  app or the API to manage templates.
</Message>

## Template Fields 

The `fields` attribute represents the set of individual fields that a user can
fill in on a template. For example, a `customer` template might have a `name`
field of type `string`.

Template fields can be of `string`, `enum`, `float`, `date`, `enum` or
`multiSelect` type. Each field requires at least a `type`, `displayName` and `key`.

```json
{
  "scope": "enterprise",
  "displayName": "Customer",
  "fields": [
    {
      "type": "string",
      "key": "name",
      "displayName": "Name"
    }
  ]
}
```

The `enum` and `multiSelect` field types represent a dropdown list where a user
can select respectively one or many options from a list of items.

```json
{
  "scope": "enterprise",
  "displayName": "Customer",
  "fields": [
    {
      "type": "enum",
      "key": "industry",
      "displayName": "Industry",
      "options": [
        {"key": "Technology"},
        {"key": "Healthcare"},
        {"key": "Legal"}
      ]
    }
  ]
}
```
    
<CTA to="g://metadata/fields">
  Learn more about Metadata Template Fields
</CTA>

## Template Keys

When a metadata template is created, a `templateKey` is automatically generated
from the `displayName` of the template unless a `templateKey` is explicitly
provided. When creating the template key any spaces and irregular
characters in the name are removed, and the string is transformed to camel case.

For example, a metadata template that is named
`Test Name (with-special_) Characters` will have a `templateKey` of
`testNameWithspecialCharacters`.

This template key is then used when making any API requests to get the
template's information or assign it to an item.

[user-types]: page://platform/user-types
[e_create_template]: e://post_metadata_templates_schema