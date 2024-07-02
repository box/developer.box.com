---
rank: 4
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
  - events/user-events/for-user
required_guides: []
alias_paths:
  - /guides/events/polling
  - /guides/events/polling/
---

# Long-Poll Events

To get real-time notification of activity in a Box account you can use the long
poll feature of the [`OPTIONS /events`](e://options_events) API.

<Samples id='options_events' />

<Message warning>
  Long polling is only available for user events. Enterprise events do not
  support long polling.
</Message>

## Long Polling

Long polling involves opening an HTTP request and keeping it open until the
server sends a response, then repeating the process over and over to receive
updated responses.

<Message>
  The SDKs have built-in support for turning the event feeds into an event
  stream by long polling for new events.
</Message>

### Long Poll URL

To use long polling, first send an request to the
[`OPTIONS /events`](e://options_events) API to retrieve the long poll URL.

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

### Real-Time Servers

Next, make a `GET` request to the provided URL to begin listening for events. If
an event occurs in an account that is being monitored the application will
receive a response with the value `new_change`. The response contains no other
details.

This single response serves as a prompt to take further action such as
sending a request to the `GET /events` endpoint with the last known
`stream_position`.

### Disconnect & Reconnect

After the server sends this response it closes the connection. The application
must now repeat the long poll process to begin listening for events again.

If no events occur for a while after the application connects to the real-time
server the connection will close with a `reconnect` value. When this happens the
application should make a new call to `OPTIONS /events` to restart the process.

### Timeouts & Retries

If the application receive no events in `retry_timeout` seconds then the
application can reconnect to the real-time server. This might be necessary in
due to network errors.

If the application receive a `max_retries` error when making a `GET` request to
the real-time server then it must restart the process by making an `OPTIONS` call
to the `/events` API.
