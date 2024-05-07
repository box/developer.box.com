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
category_id: events
subcategory_id: events/parameters
is_index: false
id: events/parameters/stream-types
type: guide
total_steps: 2
sibling_id: events/parameters
parent_id: events/parameters
next_page_id: events/parameters
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/parameters/stream-types.md
---
# Stream Types

| Stream Types       | Scope       | Purpose           | Description                           | Retention           | Access Pattern
| ------------------ | ------------ | -----------------|--------------------------------------|---------------------|------------------
| `admin_logs` | A single enterprise (for authorized admins) | Historical Queries | Enables querying historical events up to one year | 365 Days | Filter by time frame, then paginate through the response by `stream_position` |
| `admin_logs_streaming` | A single enterprise (for authorized admins) | Near real time subscriptions | Enables subscribing to live events in near real time | 14 Days | Poll using the `stream_position` |
| `all` (default) | A single user (for any user) | Near real time subscriptions | Returns everything for a user | 21 Days | Poll or long-poll using the `stream_position` |
| `changes` | A single user (for any user) | Near real time subscriptions | Returns events that may cause file tree changes such as file updates or collaborations | 21 Days | Poll or long-poll using the `stream_position` |
| `sync` | A single user (for any user) | Near real time subscriptions | Is similar to `changes` but only applies to synced folders | 31 Days | Poll or long-poll using the `stream_position` |