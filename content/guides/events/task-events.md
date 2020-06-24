---
rank: 5
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-enterprise
required_guides: []
alias_paths: []
---

# Task events

Task events provide details about updates to tasks and task assignments in an
enterprise.

The possible events produced for tasks are:

1. A new task created (`TASK_CREATE`)
1. An existing task updated (`TASK_UPDATE`)
1. A task assigned to a user (`TASK_ASSIGNMENT_CREATE`)
1. A task assignment updated (`TASK_ASSIGNMENT_UPDATE`)
1. A task assignment removed (`TASK_ASSIGNMENT_DELETE`)

All these task events will be produced within the
[enterprise event][g://events/for-enterprise/] stream (not the user stream) and
will follow the standard event object schema, with the `event_type` set to the
name of the event. For example.

```js
{
  "source": {
    "item_type": "file",
    "item_id": "123",
    "item_name": "github_PNG20 (3) (2).png",
    "parent": {
      "type": "folder",
      "name": "2020-02-27",
      "id": "1234"
    },
    "owned_by": {
      "type": "user",
      "id": "12345",
      "name": "Jane Doe",
      "login": "email@example.com"
    }
  },
  "created_by": {
    "type": "user",
    "id": "12345",
    "name": "Jane Doe",
    "login": "email@example.com"
  },
  "action_by": null,
  "created_at": "2020-04-02T22:26:55-07:00",
  "event_id": "66585c35-97a8-4882-9fec-ce7e178b2e53",
  "event_type": "TASK_UPDATE",
  "type": "event",
  "additional_details": {
    "size": 67801,
    "task": {
      "isCompleted": false,
      "due": "2020-07-06T10:49:44-07:00",
      "id": "1234567",
      "description": "task description",
      "creatorId": "567890"
    },
    "version_id": "26954851916",
    "service_id": "12345",
    "service_name": "Another App"
  }
}
```

Information about the specific task that triggered the event
will be supplied within the `additional_details` object.

## A new task created

When a task is created it will trigger a `TASK_CREATE` event. It provide the
details about the task that triggered the event in the `additional_details` attribute.

```js
{
  ...,
  "event_type": "TASK_CREATE",
  "additional_details": {
    "task": {
      "id": "1234567",
      "due_at": "2020-07-06T10:49:44-07:00",
      "message": "My task description",
      "created_by": {
        "id": 123456,
        "login": "email@example.com"
      }
    },
    "size": 5875,
    "version_id": "712094977889",
    "service_id": "123",
    "service_name": "Box Elements"
  },
  ...
}
```

## An existing task updated

When a task's text or other details are updated, it will trigger a `TASK_UPDATE`
event. It provide the details about the task that triggered the event in the
`additional_details` attribute.

```js
{
  ...,
  "event_type": "TASK_UPDATE",
  "additional_details": {
    "task": {
      "id": "1234567",
      "due_at": "2020-07-06T10:49:44-07:00",
      "message": "New task description",
      "created_by": {
        "id": 123456,
        "login": "email@example.com"
      }
    },
    "size": 5875,
    "version_id": "712094977889",
    "service_id": "123",
    "service_name": "Box Elements"
  },
  ...
}
```
