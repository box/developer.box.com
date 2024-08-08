---
rank: 4
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: api-calls/permissions-and-errors
is_index: false
id: api-calls/permissions-and-errors/expiration
type: guide
total_steps: 6
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: api-calls/permissions-and-errors/app-diagnostics-report
previous_page_id: api-calls/permissions-and-errors/scopes
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/permissions-and-errors/expiration.md
---
# Token & URL Expiration

Across the Box API there are a few tokens, codes, and URLs that automatically
expire. The following is a quick overview of their respective expiration times.

|                       |                                |
| --------------------- | ------------------------------ |
| [Authorization Codes] | Expires after 30 seconds       |
| [Access Tokens]       | expires after 60 minutes       |
| [Refresh Tokens]      | Expires after 60 days or 1 use |
| [Download URLs]       | Expires after 15 minutes       |

See each respective guide for more details.

[Authorization Codes]: g://authentication/oauth2
[Access Tokens]: g://authentication/tokens
[Refresh Tokens]: g://authentication/tokens/refresh
[Download URLs]: g://downloads