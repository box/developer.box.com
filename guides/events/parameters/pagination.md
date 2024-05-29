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
fullyTranslated: true
---
# ストリーム位置のページ割り

イベントストリームのページ割りは、`stream_position`パラメータの使用によって機能します。

最初に、`stream_position`クエリパラメータを指定せずにリクエストを[`GET /events`](e://get_events) APIに送信します。

```curl
curl https://api.box.com/2.0/events \
    -H "authorization: Bearer ACCESS_TOKEN"

```

このAPIにより、使用可能なすべてのイベントが古い方から順に返されます。レスポンスには`next_stream_position`値も含まれており、これを使用して、ストリーム内の次の位置に対する次のAPIコールを実行できます。

```curl
curl https://api.box.com/2.0/events?stream_position=388720462721 \
    -H "authorization: Bearer ACCESS_TOKEN"

```

`stream_position`は、最も近いストリーム位置が返されるよう`now`に設定することもできます。

```curl
curl https://api.box.com/2.0/events?stream_position=now \
    -H "authorization: Bearer ACCESS_TOKEN"

```

この場合、APIによって空のリストと、次の呼び出しに使用できる`next_stream_position`が返されます。
