---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Common errors

Metadata query API errors mostly are [similar to errors returned by other
APIs][errors], however at this time some invalid client requests may result in a
server-side error with a HTTP status code in the `5XX` range rather than an
appropriate `400 Bad Request` error. 

This is a known issue which will be addressed soon.

[errors]: g://api-calls/permissions-and-errors/common-errors