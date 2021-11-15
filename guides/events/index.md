---
rank: 120
alias_paths: []
category_id: events
subcategory_id: null
is_index: true
id: events
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/index.md
---
# Events

The event feed provides a way for an application to subscribe to any actions
performed by any user or users in an enterprise.

## User vs Enterprise events

Depending upon the `stream_type`, the [`GET /events`](e://get_events) API
enables subscribing to live events across the enterprise or for a particular
user, or querying historical events across the enterprise.

### User events

User Events provide low latency stream of events for the currently authenticated
user. This event stream is how Box keeps Box Drive updated, but is also made
available for developer use.

The emphasis of this feed is to return the complete results quickly, which means
that Box may return events more than once or out of chronological order.
Duplicate events can be identified by their event IDs.

Unlike the enterprise events streams, the user events stream does not support
filtering for specific events. The three user events stream_types return
slightly different subsets of the user events dataset for different purposes.

<!-- markdownlint-disable line-length -->

| Stream Type |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| `all`       | Returns everything for a user (default)                                                 |
| `changes`   | Returns events that may cause file tree changes such as file updates or collaborations |
| `sync`      | Is similar to changes but only applies to synced folders                                |

<!-- markdownlint-enable line-length -->

### Enterprise events

Enterprise events provide an event feed for all users and content in an
enterprise. Depending upon the `stream_type` your application can either
subscribe to live events or query historical events. Access to these
`stream_types` is limited to users with admin permissions to
`Run new reports and access existing reports`.

Unlike the user events stream, the enterprise events stream supports filtering
based on event type but does not support long polling. Across the two
stream_types the dataset is exactly the same. Events can be deduplicated across
the two stream_types using their event IDs.

<!-- markdownlint-disable line-length -->

| Stream Type |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| `admin_logs`       | Enables querying historical events up to one year                                                 |
| `admin_logs_streaming`   | Enables subscribing to live
events                      |

<!-- markdownlint-enable line-length -->

#### Live Monitoring

To monitor recent events that have been generated within Box across the
enterprise, set the `stream_type` to `admin_logs_streaming`.

The emphasis for this feed is on low latency rather than chronological
accuracy, which means that Box may return events more than once and out of
chronological order. Events are returned via the API around 12 seconds after
they are processed by Box. The 12 second buffer ensures that new events are not
written after your cursor position. Only two weeks of events are available via
this `stream_type`.

#### Historical Querying

To query historical events across the enterprise up to one year old, set the
`stream_type` to `admin_logs`.

The emphasis for this feed is on completeness over latency, which means that
Box will deliver admin events in chronological order and without duplicates,
but with higher latency than the user or `admin_logs_streaming` feed. Consuming
events in near real time may lead to missed events as events can arrive later
than your filtering window.