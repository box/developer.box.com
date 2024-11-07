---
rank: 2
related_endpoints: []
related_guides:
  - api-calls/permissions-and-errors/common-errors
  - api-calls/permissions-and-errors/rate-limits
required_guides: []
alias_paths: []
---

# Status codes

The following rules can be applied to interpret the HTTP status
codes received when using the Box API.

| HTTP Status |                                                                                                                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `200-299`   | Box received, understood, and accepted the API request. The request has either completed or is in the process of being completed.                                                                                             |
| `300-399`   | Box received, understood, and accepted the API request, yet the client must take further action in order to complete the request. Often this includes redirect to other URLs.                                                 |
| `400-499`   | An client error occurred when handling the request, often because the client either did not provide the right parameters, did not have access to the resources, or tried to perform an action that is otherwise not possible. |
| `500-599`   | Box received and accepted the request, but an error occurred within Box while handling it. These errors signify a problem with Box, not a problem with the client's request                                                   |
