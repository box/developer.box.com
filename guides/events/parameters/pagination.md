---
rank: 3
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
  - events/user-events/for-user
required_guides: []
alias_paths:
  - /guides/events/pagination
  - /guides/events/pagination/
category_id: events
subcategory_id: events/parameters
is_index: false
id: events/parameters/pagination
type: guide
total_steps: 2
sibling_id: events/parameters
parent_id: events/parameters
next_page_id: ''
previous_page_id: events/parameters/stream-types
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/parameters/pagination.md
---
# Stream Position Pagination

Paginating the event stream works through the use of the `stream_position`
parameter.

First, send a request to the [`GET /events`](e://get_events) API without a
`stream_position` query parameter.

```curl
curl https://api.box.com/2.0/events \
    -H "authorization: Bearer ACCESS_TOKEN"
```

The API will return all available events beginning with the oldest. The response
will also include a `next_stream_position` value that can be used to make the
next API call for the next place in the stream.

```curl
curl https://api.box.com/2.0/events?stream_position=388720462721 \
    -H "authorization: Bearer ACCESS_TOKEN"
```

The `stream_position` can also be set to `now` to return the most recent stream
position.

```curl
curl https://api.box.com/2.0/events?stream_position=now \
    -H "authorization: Bearer ACCESS_TOKEN"
```

In this case, the API returns an empty list and a `next_stream_position` that
can be used for the next call.