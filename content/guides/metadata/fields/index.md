---
rank: 2
---

# Metadata fields

Every metadata template contains a list of `field`, representing items that a
user (or an application) can fill in when the template is assigned to a file or
folder.

Each [Metadata Field][r_field] is of one of the following types:
[`string`](g://metadata/fields/string), [`float`](g://metadata/fields/float),
[`date`](g://metadata/fields/date), [`enum`](g://metadata/fields/enum), or
[`multiSelect`](g://metadata/fields/multi-select)

## Basic field types

The basic field types are a `string` for a text field, `float` for a numeric
field, and `date` for a date-time picker field.

## Lists field types

Additionally, metadata templates support two field types to represent dropdown
lists. An `enum` field represents a list of predefined items that a user can
select, while a `multiSelect` field represents a list of items where the user
can select more than one value.

[r_field]: r://metadata_field
