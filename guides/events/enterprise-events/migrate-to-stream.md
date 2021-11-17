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
# Migrating From History To Stream

Box recommends that applications subscribing to live events through
`admin_logs` migrate to `admin_logs_streaming`. `admin_logs_streaming` provides
lower latency and ensures that late arriving events will not be missed. Events
can be deduplicated between `admin_logs` and `admin_logs_streaming` by their
event IDs.

To migrate from `admin_logs` to `admin_logs_streaming` please
perform the following steps:

## 1. Existing requests will look something like the below

<!-- markdownlint-disable line-length -->

```bash
curl https://api.box.com/2.0/events?stream_type=admin_logs&stream_position=1632893855 \
  -H "authorization: Bearer <ACCESS_TOKEN>"
```
<!-- markdownlint-enable line-length -->

## 2. Begin overlapping new requests with `admin_logs_streaming`

- Start two weeks ago and backfill:
<!-- markdownlint-disable line-length -->

```curl
curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=0 \
  -H "authorization: Bearer <ACCESS_TOKEN>"
```
<!-- markdownlint-enable line-length -->

or

- Start now and run in parallel:
<!-- markdownlint-disable line-length -->

```curl
curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=now \
  -H "authorization: Bearer <ACCESS_TOKEN>"
```
<!-- markdownlint-enable line-length -->

## 3. Paginate through results until now and deduplicate the `admin_logs`events

<!-- markdownlint-disable line-length -->

```curl
curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=1632893855 \
  -H "authorization: Bearer <ACCESS_TOKEN>"
```
<!-- markdownlint-enable line-length -->

## 4. Continue to overlap until confident

## 5. Turn off old `admin_logs` requests

<ImageFrame center shadow border>

![Stream Migration Flow](images/migrate_to_stream.png)

</ImageFrame>

When compared to `admin_logs`, `admin_logs_streaming` differs in the
following ways:

- Returns events in near real time, about 12 seconds after they are
processed by Box, rather than in chronological order
- Contains duplicates
- Does not support `created_after` and `created_before` filter parameters,
since they are only relevant to historical querying
- Provides 2 weeks of history