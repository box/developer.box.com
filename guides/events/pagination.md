---
rank: 10
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-enterprise
  - events/for-user
required_guides: []
alias_paths: []
category_id: events
subcategory_id: null
is_index: false
id: events/pagination
type: guide
total_steps: 5
sibling_id: events
parent_id: events
next_page_id: events
previous_page_id: events/shield-alert-events
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/events/pagination.md
---
# ストリーム位置のページ割り

イベントストリームのページ割りは、`stream_position`パラメータの使用によって機能します。

最初に、`stream_position`クエリパラメータを指定せずにリクエストを[`GET /events`](e://get_events) APIに送信します。

```curl
curl https://api.box.com/2.0/events \
  -H "authorization: Bearer ACCESS_TOKEN"
```

このAPIにより、使用可能なすべてのイベントが古い方から順に返されます。応答には`next_stream_position`値も含まれており、これを使用して、ストリーム内の次の位置に対する次のAPI呼び出しを実行できます。

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
