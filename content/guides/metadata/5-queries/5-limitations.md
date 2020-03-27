---
related_endpoints:
  - post_metadata_queries_execute_read
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
