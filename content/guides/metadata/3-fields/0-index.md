---
---

# Metadata fields

A [metadata template field][r_field] describes a specific
piece of data within a metadata template. For example, the ID of an invoice
might be represented as an `id` field on an `invoiceData` template.

Every metadata template contains a list of `field` objects, and each field is of
one of the following types:

<!-- markdownlint-disable line-length -->

|                                                   |                                               |
|---------------------------------------------------|-----------------------------------------------|
| [`string`](g://metadata/fields/string)            | A text field                                  |
| [`float`](g://metadata/fields/float)              | A numeric input field                         |
| [`date`](g://metadata/fields/date)                | A date picker field                           |
| [`enum`](g://metadata/fields/enum)                | A dropdown list for selecting 1 value         |
| [`multiSelect`](g://metadata/fields/multi-select) | A dropdown list for selecting multiple values |

<!-- markdownlint-enable line-length -->

## Basic field types

The basic field types are a `string` for a text field, `float` for a numeric
field, and `date` for a date-time picker field.

## Lists field types

Additionally, metadata templates support two field types to represent dropdown
lists. An `enum` field represents a list of predefined items that a user can
select, while a `multiSelect` field represents a list of items where the user
can select more than one value.

[r_field]: r://metadata-template/#param-fields
