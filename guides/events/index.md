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
performed by any user, users, or service in an enterprise.

## User vs Enterprise events

Depending upon the `stream_type`, the [`GET /events`](e://get_events) API
enables subscribing to live events across the enterprise or for a particular
user, or querying historical events across the enterprise.

### User events

User events provides a low latency stream of events relevant to the currently
authenticated user. This event stream is how Box keeps [Box Drive][drive] up to
date, but is also made available for developer use.

The emphasis of this feed is to return the complete results quickly, which means
that Box may return events more than once or out of chronological order.
Duplicate events can be identified by their event IDs.

Unlike the enterprise events streams, the user events stream does not support
filtering for specific events. The three user events stream_types return
slightly different subsets of the user events dataset for different purposes.

| Stream Type |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| `all`       | Returns everything for a user (default)                                                 |
| `changes`   | Returns events that may cause file tree changes such as file updates or collaborations |
| `sync`      | Is similar to changes but only applies to synced folders                                |

### Enterprise events

Enterprise events provide an event feed for all users and content in an
enterprise Box instance. Depending upon the `stream_type` your application can
either subscribe to live events or query historical events. Access to these
stream types is limited to users with admin permissions to
**Run new reports and access existing reports**.

Unlike the user events stream, the enterprise events stream supports filtering
based on event type but does not support long polling. Across the two
stream types the dataset is exactly the same. Events can be deduplicated across
the two stream types using their event IDs.

| Stream Type |                                                                                         |
| ----------- | --------------------------------------------------------------------------------------- |
| `admin_logs`       | Enables querying historical events up to one year                                                 |
| `admin_logs_streaming`   | Enables subscribing to live events in near real time                     |

#### Live Monitoring

To monitor recent events that have been generated within Box across the
enterprise, set the `stream_type` to `admin_logs_streaming`. This is also known
as the Enterprise Event Stream API.

The emphasis for this feed is on low latency rather than chronological
accuracy, which means that Box may return events more than once and out of
chronological order. Events are returned via the API in near real time after
they are processed by Box. A small delay/buffer ensures that new events are not
written after your cursor position. Only two weeks of events are available via
this `stream_type`.

#### Historical Querying

To query historical events across the enterprise up to one year old, set the
`stream_type` to `admin_logs`. This is also known as the Enterprise Event
History API.

The emphasis for this feed is on completeness over latency, which means that
Box will deliver admin events in chronological order and without duplicates,
but with higher latency than the user or `admin_logs_streaming` feed. Consuming
events in near real time may lead to missed events as events can arrive later
than your filtering window.

[drive]:https://www.box.com/drive