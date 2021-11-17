---
rank: 2
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
  - events/user-events/for-user
  - events/user-events/polling
  - events/parameters/pagination
required_guides: []
alias_paths: []
---

# Stream Types

<!-- markdownlint-disable line-length -->

| Stream Types       | Scope       | Purpose           | Description                           | Retention           | Access Pattern
| ------------------ | ------------ | -----------------|--------------------------------------|---------------------|------------------
| `admin_logs` | A single enterprise (for authorized admins) | Historical Queries | Enables querying historical events up to one year | 365 Days | Filter by time frame, then paginate through the response by `stream_position` |

<!-- markdownlint-enable line-length -->