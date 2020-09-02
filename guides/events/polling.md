---
rank: 3
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
id: events/polling
type: guide
total_steps: 5
sibling_id: events
parent_id: events
next_page_id: events/shield-alert-events
previous_page_id: events/for-enterprise
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/events/polling.md
---
# ロングポーリングイベント

Boxアカウントでアクティビティのリアルタイム通知を取得するために、[`OPTIONS /events`](e://options_events) APIのロングポーリング機能を使用できます。

<Samples id="options_events">

</Samples>

<Message warning>

ロングポーリングはユーザーイベントにのみ使用できます。エンタープライズイベントではロングポーリングがサポートされません。

</Message>

## ロングポーリング

ロングポーリングでは、HTTPリクエストを開き、サーバーが応答を送信するまでそのリクエストを開いたままにして、そのプロセスを何度も繰り返して更新された応答を受信します。

<Message>

SDKには、新しいイベントに対するロングポーリングにより、イベントフィードをイベントストリームに変換するためのサポートが組み込まれています。

</Message>

### ロングポーリングURL

ロングポーリングを使用するには、まず、リクエストを[`OPTIONS /events`](e://options_events) APIに送信し、ロングポーリングURLを取得します。

```curl
curl -X OPTIONS https://api.box.com/2.0/events \
    -H "authorization: Bearer ACCESS_TOKEN"
```

```json
{
  "chunk_size": 1,
  "entries": [
    {
      "type": "realtime_server",
      "url": "http://2.realtime.services.box.net/subscribe?channel=cc807c9c4869ffb1c81a&stream_type=all",
      "ttl": 10,
      "max_retries": 10,
      "retry_timeout": 610
    }
  ]
}
```

### リアルタイムサーバー

次に、指定されたURLに`GET`リクエストを実行してイベントのリッスンを開始します。監視対象のアカウントでイベントが発生すると、`new_change`という値を持つ応答が送信されます。応答にはその他の詳細は含まれていません。

この単一の応答は、最新の既知の`stream_position`を使用して`GET /events`エンドポイントにリクエストを送信するなど、後続の処理を促すことを目的としています。

### 切断と再接続

サーバーは、この応答を送信した後に接続を閉じます。この時点でアプリケーションがイベントのリッスンを再開するには、ロングポーリングのプロセスを繰り返す必要があります。

アプリケーションがリアルタイムサーバーに接続してもその後しばらくイベントが発生しないと、接続が閉じられ、`reconnect`という値が返されます。この状況になると、アプリケーションはプロセスを再開するために`OPTIONS /events`に対する新しい呼び出しを実行する必要があります。

### タイムアウトと再試行

`retry_timeout`で指定した秒数以内にアプリケーションがイベントを受け取らなければ、アプリケーションはリアルタイムサーバーに再接続できます。これは、ネットワークエラーが発生すると必要になる場合があります。

アプリケーションがリアルタイムサーバーに対して`GET`リクエストを送信したときに`max_retries`エラーが返された場合は、`/events` APIに対して`OPTIONS`呼び出しを実行してプロセスを再開する必要があります。
