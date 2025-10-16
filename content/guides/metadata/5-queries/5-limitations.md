---
related_endpoints: []
required_guides: []
---
# Limitations

A few limits apply to the the metadata query APIs.

## Files and folders

​A metadata query will only return items (files or folders) to which the
requesting user has at least `previewer` access.

## Enterprise vs Global templates

A metadata query only works with metadata templates that have been created by
that enterprise. A query will not return results based on the content of free
form key-value pairs stored in the `​global.properties` template.

## Classification metadata templates

Box uses metadata templates to power its content classification. These metadata
templates can not be used in metadata queries, as they will most likely run
into issues regarding large results sets. More on this next.

There are no immediate plans to start supporting these queries in the future.
