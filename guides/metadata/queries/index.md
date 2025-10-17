---
related_endpoints: []
required_guides: []
category_id: metadata
subcategory_id: metadata/5-queries
is_index: true
id: metadata/queries
rank: 5
type: guide
total_steps: 7
sibling_id: metadata
parent_id: metadata
next_page_id: metadata/queries/pagination
previous_page_id: metadata/queries/errors
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/0-index.md
---
# Metadata queries

A metadata query provides a way to find files and
folders by searching for the metadata attached to them.

For example, to find the all files for an invoice with a certain ID, the query
would look for all files and folders with the `invoiceData` template attached to
it and a value of `id = :id`, where `:id` would be the value of the invoice.

## Authentication

The metadata query API can be used by applications that have been authenticated
using traditional [OAuth 2.0][oauth] or [JWT][jwt].

[oauth]: g://authentication/oauth2
[jwt]: g://authentication/jwt