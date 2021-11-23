---
rank: 3
related_endpoints:
  - get_events
related_guides:
  - events/enterprise-events/for-enterprise
  - events/user-events/for-user
required_guides: []
alias_paths:
  - /guides/events/event-triggers
  - /guides/events/event-triggers/
category_id: events
subcategory_id: events/event-triggers
is_index: false
id: events/event-triggers/event-source
type: guide
total_steps: 3
sibling_id: events/event-triggers
parent_id: events/event-triggers
next_page_id: events/event-triggers
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/event-triggers/event-source.md
---
# Event Source

If a user or item triggers an event, The response of the
[`GET /events`](e://get_events) endpoint contains an event source object.

## User Source Object

If a user triggers an event, the source object will be the standard
representation of the [user resource](e://resources/user).

```json
{
  "source": {
    "id": 11446498,
    "type": "user",
    "address": "900 Jefferson Ave, Redwood City, CA 94063",
    "avatar_url": "https://www.box.com/api/avatar/large/181216415",
    "created_at": "2012-12-12T10:53:43-08:00",
    "job_title": "CEO",
    "language": "en",
    "login": "ceo@example.com",
    "max_upload_size": 2147483648,
    "modified_at": "2012-12-12T10:53:43-08:00",
    "name": "Aaron Levie",
    "notification_email": {
      "email": "notifications@example.com",
      "is_confirmed": true
    },
    "phone": 6509241374,
    "space_amount": 11345156112,
    "space_used": 1237009912,
    "status": "active",
    "timezone": "Africa/Bujumbura"
  }
}
```

## Item Source Object

If an item triggers an event, the source object will be the
[event source resource](e://resources/event-source).

<Message type='notice'>

The below example contains a `classification` object. This does not appear if
the item does not have a classification set. Also, it does not appear for
every event type.

</Message>

```json
{
  "source": {
    "item_type": "file",
    "item_id": "8903212345",
    "item_name": "example.docx",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "11446498",
      "name": "Aaron Levie",
      "login": "notifications@example.com"
    },
    "classification": {
      "name": "Top Secret"
    }
  }
}
```