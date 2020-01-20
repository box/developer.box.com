---
rank: 1
alias_paths: []
category_id: metadata
subcategory_id: metadata/templates
id: metadata/templates
type: guide
is_index: true
total_steps: 1
sibling_id: metadata
parent_id: metadata
next_page_id: ''
previous_page_id: ''
---

# Metadata Templates

A [Metadata Template][template] describes a set of key/value
pairs that can be assigned to a file or folder.

For example, an `invoiceData` template might hold data about an invoice, having
a field for the invoice ID as well as the purchase order ID.

A file or folder can have multiple distinct template [instances][instance]
associated with it, such as a `marketingCollateral` template instance and a
`retentionPolicy` template instances.

## Template & Key Name

When a metadata template is created a `templateKey` is automatically generated
from the `name` of the template, removing any spaces and irregular characters in
the name, and transforming it to camel case format.

For example, a metadata template that is named
`Test Name (with-special_) Characters` will have a `templateKey` of
`testNameWithspecialCharacters`.

This template key is then used when making any API requests to get the template's
information or assign it to an item.

## Metadata Scopes

Template instances are also grouped by into two distinct groups, or **scopes**.

* **`global`**: a group of templates that is available to everyone using Box,
  regardless of the enterprise they are in. An example is the
  `global.properties` template that serves as a place to put free-form key/value
  `string` pairs without any additional schema associated with it.
* **`enterprise_*`**: a group of templates defined by that specific enterprise.
  These templates are either created by admin's in the web application, or by
  applications using the API.

## Types

Templates support four attributes types: `string`, `enum`, `float`, and `date`.
Dates are in a RFC3339 format with up to millisecond precision.

## Restrictions

Creating metadata templates is restricted to users with admin permission. This
means that only admins, or co-admins who have been granted rights to **Create
and edit metadata templates for your company** by the admin can use the web app
or the API to manage templates.

There is a limit of 500 templates per enterprise.

For more information on how to structure a metadata template, please refer to
[this Box Community page][community].

[instance]: g://metadata/instances
[template]: g://metadata/templates
[community]: https://community.box.com/t5/How-to-Guides-for-Admins/How-to-Create-the-Right-Metadata-Structure-for-your-Enterprise/ta-p/43960
