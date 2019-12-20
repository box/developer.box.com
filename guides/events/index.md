---
rank: 190
alias_paths: []
cId: events
scId: null
id: events
isIndex: true
---

# Events

The event feed provides a way for an application to subscribe to any actions
performed by any user or users in an enterprise.

## User vs Admin events

The [`GET /events`](e://get_events) API provides a way to subscribe to
events by users. By passing along a `stream_type` the application can subscribe
to a set of different event.

### User events

User Events provide low latency stream of events for the currently authenticated
user.

The emphasis of this feed is to return the complete results quickly, which means
that Box may return events more than once or out of order. Duplicate events can
be identified by their event IDs.

The user events stream does not support filtering for specific events (like
`ITEM_CREATE`) but does support filtering by `stream_type` to provide different
streams for different purposes.

<!-- markdownlint-disable line-length -->

| Stream Type |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| `all`       | Returns everything for a user (default)                                                 |
| `changes`   | Returns events that may cause file tree changes such as file updates or collaborations. |
| `sync`      | Is similar to changes but only applies to synced folders                                |

<!-- markdownlint-enable line-length -->

### Admin events

Admin Events provide an event feed for all users and content in an enterprise.

It requires the `stream_type` to be set to `admin_logs` and for the call to be
made by a user with admin permissions to **Run new reports and access existing
reports**.

The emphasis for this feed is on completeness over latency, which means that Box
may deliver admin events with higher latency than the user feed. Unlike the user
events stream, the admin events stream supports filtering for specific events
but does not support long polling.
