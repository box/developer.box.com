---
rank: 3
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
required_guides: []
alias_paths: []
category_id: events
subcategory_id: events/enterprise-events
is_index: false
id: events/enterprise-events/migrate-to-stream
type: guide
total_steps: 2
sibling_id: events/enterprise-events
parent_id: events/enterprise-events
next_page_id: ''
previous_page_id: events/enterprise-events/for-enterprise
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/enterprise-events/migrate-to-stream.md
---
# Migrate to Admin Logs Streaming

Box recommends that applications subscribing to live events through
`admin_logs` migrate to `admin_logs_streaming`. `admin_logs_streaming` provides
lower latency and ensures that late arriving events will not be missed. Events
can be deduplicated between `admin_logs` and `admin_logs_streaming` by their
event IDs. To migrate from `admin_logs` to `admin_logs_streaming` please
perform the following steps:

* Existing requests will look something like the below:

```sh
GET /events?steam_type=admin_logs&stream_position=1632893855
```

* Begin overlapping new requests with `admin_logs_streaming`, either:

* Start two weeks ago and backfill:

```sh
GET /events?steam_type=admin_logs_streaming&stream_position=0
```

* Start now and run in parallel:

```sh
GET /events?steam_type=admin_logs_streaming&stream_position=now
```