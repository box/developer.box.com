---
rank: 3
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
required_guides: []
alias_paths: []
---

# Migrating From History To Stream

Box recommends that applications subscribing to live events through
`admin_logs` migrate to `admin_logs_streaming`. `admin_logs_streaming` provides
lower latency and ensures that late arriving events will not be missed. Events
can be deduplicated between `admin_logs` and `admin_logs_streaming` by their
event IDs.

To migrate from `admin_logs` to `admin_logs_streaming` please
perform the following steps:

- Existing requests will look something like the below:

  <!-- markdownlint-disable line-length -->
  ```bash
  curl https://api.box.com/2.0/events?stream_type=admin_logs&stream_position=1632893855 \
    -H "authorization: Bearer <ACCESS_TOKEN>"
  ```
  <!-- markdownlint-enable line-length -->

- Begin overlapping new requests with `admin_logs_streaming`, either:
  - Start two weeks ago and backfill:

  <!-- markdownlint-disable line-length -->
  ```bash
  curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=0 \
    -H "authorization: Bearer <ACCESS_TOKEN>"
  ```
  <!-- markdownlint-enable line-length -->

  - Start now and run in parallel:

  <!-- markdownlint-disable line-length -->
  ```bash
  curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=now \
    -H "authorization: Bearer <ACCESS_TOKEN>"
  ```
  <!-- markdownlint-enable line-length -->

- Paginate through all results until now and deduplicate with `admin_logs`
  events

  <!-- markdownlint-disable line-length -->
  ```bash
  curl https://api.box.com/2.0/events?stream_type=admin_logs_streaming&stream_position=1632893855 \
    -H "authorization: Bearer <ACCESS_TOKEN>"
  ```
  <!-- markdownlint-enable line-length -->

- Continue to overlap until confident
- Turn off old `admin_logs` requests

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
