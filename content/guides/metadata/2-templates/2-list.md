---
required_guides:
  - metadata/scopes
related_endpoints:
  - get_metadata_templates_enterprise
  - get_metadata_templates_global
related_guides:
  - metadata/templates/get
  - metadata/templates/create
  - metadata/templates/update
related_resources: 
  - metadata_templates
---

# List all metadata templates

Metadata templates can be listed for either the [enterprise or the global
scope][scopes].

## List global templates

To list all global metadata templates, call the [`GET
/metadata_templates/global`][get_global] API endpoint.

<Samples id="get_metadata_templates_global" />

<Message>
  This API returns a list of all the metadata templates created by Box and made
  available to all enterprises.
</Message>

## List current enterprise's templates

To list all templates metadata templates created for usage within the current
enterprise, call the [`GET  /metadata_templates/enterprise`][get_enterprise] API
endpoint.

<Samples id="get_metadata_templates_enterprise" />

<Message>
  This API returns a list of all the metadata templates created by this
  enterprise, and these templates are only available to apply to files in this enterprise.
</Message>

## Pagination

This API uses [marker-based pagination][pagination] and can return a
`next_marker` value in the response body to indicate that more templates might
be available.

[scopes]: g://metadata/scopes
[get_global]: e://get_metadata_templates_global
[get_enterprise]: e://get_metadata_templates_enterprise
[pagination]: g://api-calls/pagination/marker-based
