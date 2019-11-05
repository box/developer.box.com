---
rank: 4
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
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
[Access Tokens]: g://authentication/access-tokens
[Refresh Tokens]: g://authentication/access-tokens/refresh
[Download URLs]: g://downloads
