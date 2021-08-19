---
rank: 3
related_endpoints:
  - get_events
related_guides:
  - events/for-enterprise
  - events/for-user
required_guides: []
alias_paths: []
category_id: events
subcategory_id: null
is_index: false
id: events/event-triggers
type: guide
total_steps: 6
sibling_id: events
parent_id: events
next_page_id: events/polling
previous_page_id: events/for-enterprise
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/event-triggers.md
---
# Event Triggers

Events appear in the event stream based on upon actions committed by users,
items, or other resources. The response of the [`GET /events`](e://get_events)
endpoint contains a source object that differs based upon the resource that
triggered the event.

## User Source Object

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

```json
{
  "source": {
    "item_type": "file",
    "item_id": "11429270340",
    "item_name": "testfile.docx",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "6148078226",
      "name": "Dina Staging",
      "login": "dbirioukova+staging@boxdemo.com"
    },
    "classification": {
      "name": "JustTest"
    }
  }
}
```

[user]: e://resources/user
[event_source]: e://resources/event-source