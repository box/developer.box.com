---
category_id: metadata
subcategory_id: metadata/3-fields
is_index: true
id: metadata/fields
rank: 3
type: guide
total_steps: 5
sibling_id: metadata
parent_id: metadata
next_page_id: metadata/fields/enum
previous_page_id: metadata/fields/float
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/3-fields/0-index.md
---
# Metadata fields

A [metadata template field][r_field] describes a specific
piece of data within a metadata template. For example, the ID of an invoice
might be represented as an `id` field on an `invoiceData` template.

Every metadata template contains a list of `field` objects, and each field is of
one of the following types:

|                                                   |                                               |
|---------------------------------------------------|-----------------------------------------------|
| [`string`](g://metadata/fields/string)            | A text field                                  |
| [`float`](g://metadata/fields/float)              | A numeric input field                         |
| [`date`](g://metadata/fields/date)                | A date picker field                           |
| [`enum`](g://metadata/fields/enum)                | A dropdown list for selecting 1 value         |
| [`multiSelect`](g://metadata/fields/multi-select) | A dropdown list for selecting multiple values |

## Basic field types

The basic field types are a `string` for a text field, `float` for a numeric
field, and `date` for a date-time picker field.

## Lists field types

Additionally, metadata templates support two field types to represent dropdown
lists. An `enum` field represents a list of predefined items that a user can
select, while a `multiSelect` field represents a list of items where the user
can select more than one value.

[r_field]: r://metadata-template/#param-fields