---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Metadata queries

A [metadata query][query] provides a way to find files and
folders by searching for the metadata attached to them.

For example, to find the all files for an invoice with a certain ID, the query
would look for all files and folders with the `invoiceData` template attached to
it and a value of `id = :id`, where `:id` would be the value of the invoice.

## Authentication

The metadata query API can be used by applications that have been authenticated
using traditional [OAuth 2.0][oauth] or [JWT][jwt].

[query]: g://metadata/queries
[oauth]: g://authentication/oauth2
[jwt]: g://authentication/jwt
