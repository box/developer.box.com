---
rank: 7
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
required_guides: []
alias_paths: []
---

# Shield Information Barrier Events

Information barrier prevents exchanges or
communication that could lead to conflicts of interest
or potential legal issues.
For example, admins can use information barrier
to separate teams based on projects to prevent collaboration on
content restricted to specific groups.

## Events triggered when information barrier is configured

Configuring information barrier produces
events in the [enterprise event][events] stream. For example,
activating or deactivating the barrier triggers an event.

These events follow
the standard event object schema with the `event_type` value
set to one of the following:

* `SHIELD_INFORMATION_BARRIER_ENABLED`
* `SHIELD_INFORMATION_BARRIER_PENDING`
* `SHIELD_INFORMATION_BARRIER_DISABLED`

### Shield information barrier enabled

A `SHIELD_INFORMATION_BARRIER_ENABLED` event is triggered when
the information barrier is enabled for a file or folder.
For example:

```json
{
  "chunk_size": 1,
  "next_stream_position": "1152923169537420243",
  "entries": [
    {
      "source": {
        "barrier_id": 123456,
        "barrier_status": "ENABLED",
        "barrier_segments": [
          {
            "name": "8",
            "member_count": 1
          },
          {
            "name": "9",
            "member_count": 1
          }
      ]
      },
      "created_by": {
        "type": "user",
        "id": "12345667",
        "name": "Unknown User",
        "login": "user@email.com"
      },
      "action_by": null,
      "created_at": "2022-10-04T17:42:53-07:00",
      "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
      "event_type": "SHIELD_INFORMATION_BARRIER_ENABLED",
      "ip_address": "Unknown IP",
      "type": "event",
      "session_id": null,
      "additional_details": null
    }
  ]
}

```

### Shield information barrier pending

A `SHIELD_INFORMATION_BARRIER_PENDING` event is triggered
when the information barrier is not yet enabled
for a particular file or folder. The activation process
was triggered, but the information barrier is not yet
in place.
For example:

```json
{
  "chunk_size": 1,
  "next_stream_position": "1152923169531664551",
  "entries": [
    {
      "source": {
        "barrier_id": 123456,
        "barrier_status": "PENDING",
        "barrier_segments": [
          {
            "name": "8",
            "member_count": 1
          },
          {
            "name": "9",
            "member_count": 1
          }
        ]
      },
      "created_by": {
        "type": "user",
        "id": "12345667",
        "name": "Unknown User",
        "login": "user@email.com"
      },
      "action_by": null,
      "created_at": "2022-10-04T16:06:57-07:00",
      "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
      "event_type": "SHIELD_INFORMATION_BARRIER_PENDING",
      "ip_address": "Unknown IP",
      "type": "event",
      "session_id": null,
      "additional_details": null
    }
  ]
}
```

### Shield information barrier deactivated

A `SHIELD_INFORMATION_BARRIER_DISABLED` event is triggered when
the information barrier is deactivated
for a particular file or folder.
For example:

```json
{
  "chunk_size": 1,
  "next_stream_position": "1152923169767928414",
  "entries": [
    {
      "source": {
        "barrier_id": 1234567,
        "barrier_status": "DISABLED",
        "barrier_segments": [
          {
            "name": "8",
            "member_count": 1
          },
          {
            "name": "9",
            "member_count": 1
          }
        ]
      },
      "created_by": {
        "type": "user",
        "id": "123435567",
        "name": "Unknown User",
        "login": "user@email.com"
      },
      "action_by": null,
      "created_at": "2022-10-07T09:44:41-07:00",
      "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
      "event_type": "SHIELD_INFORMATION_BARRIER_DISABLED",
      "ip_address": "Unknown IP",
      "type": "event",
      "session_id": null,
      "additional_details": null
    }
  ]
}
```

## Events triggered by restricted actions

When the information barrier is set up,
each user attempt to perform restricted actions
or access restricted data
also results in events. These events follow
the standard event object schema with the `event_type` value
set to one of the following:

* `SHIELD_INFORMATION_BARRIER_GROUP_ADD_USER_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_COLLAB_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_ITEM_OWNER_TRANSFER_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_SHARED_ITEM_ACCESS_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_ITEM_MOVE_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_ITEM_COPY_BLOCKED`

### Adding user blocked

A `SHIELD_INFORMATION_BARRIER_GROUP_ADD_USER_BLOCKED` event is
triggered when the information barrier prohibits
adding a user to a specific group.

The `additional_details` payload provides details of the
restricted groups.

```json
{
  "source": {
    "type": "user",
    "id": "123456677",
    "name": "Unknown User",
    "login": "user@email.com"
  },
  "created_by": {
    "type": "user",
    "id": "12345666",
    "name": "Unknown User",
    "login": "user@email.com"
  },
  "action_by": null,
  "created_at": "2022-10-07T09:26:50-07:00",
  "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
  "event_type": "SHIELD_INFORMATION_BARRIER_GROUP_ADD_USER_BLOCKED",
  "ip_address": "10.1.2.3",
  "type": "event",
  "session_id": null,
  "additional_details": {
    "group_id": "12345678",
    "group_name": "Support"
  }
}

```

### Collaboration blocked

A `SHIELD_INFORMATION_BARRIER_COLLAB_BLOCKED` event is triggered
when the information barrier prohibits adding
collaborations for users that have restricted access
to a file or folder.

The `additional_details` payload provides details of the restricted
collaboration.

```json
{
  "source": {
    "folder_id": "12334556",
    "folder_name": "Contracts",
    "user_id": "1234567",
    "user_name": "Unknown User",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "12345678",
      "name": "Unknown User",
      "login": "user@email.com"
    }
  },
  "created_by": {
    "type": "user",
    "id": "16335351460",
    "name": "Unknown User",
    "login": "user@email.com"
  },
  "action_by": null,
  "created_at": "2022-10-05T14:15:14-07:00",
  "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
  "event_type": "SHIELD_INFORMATION_BARRIER_COLLAB_BLOCKED",
  "ip_address": "Unknown IP",
  "type": "event",
  "session_id": null,
  "additional_details": {
    "type": "box://event/additional_details/collaboration",
    "collab_id": "0",
    "is_performed_by_admin": false
  }
}

```

### Shared item access blocked

A `SHIELD_INFORMATION_BARRIER_SHARED_ITEM_ACCESS_BLOCKED` event is triggered when the information barrier prohibits accessing a file or folder using the shared link.

The `additional_details` payload provides details of the shared link and additional security information.

```json
{
  "source": {
    "item_type": "folder",
    "item_id": "123456789",
    "item_name": "Contracts",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "123456789",
      "name": "Unknown User",
      "login": "user@email.com"
    }
  },
  "created_by": {
    "type": "user",
    "id": "123456789",
    "name": "Unknown User",
    "login": "user@email.com"
  },
  "action_by": null,
  "created_at": "2022-10-06T13:27:58-07:00",
  "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
  "event_type": "SHIELD_INFORMATION_BARRIER_SHARED_ITEM_ACCESS_BLOCKED",
  "ip_address": "Unknown IP",
  "type": "event",
  "session_id": null,
  "additional_details": {
    "shared_link_id": "abcdefghijklm",
    "security_information": {
      "accessFromSharedObject": {
        "sharedId": 123456789,
        "sharedName": "abcdefghijklmnop",
        "passwordSet": false,
        "accessLevel": "open",
        "createdAt": "2022-10-06T13:27:21-07:00"
      }
    }
  }
}

```

### Moving item blocked

A `SHIELD_INFORMATION_BARRIER_ITEM_MOVE_BLOCKED` event is triggered when the
information barrier prohibits moving an item (a file or a folder) to a
a folder the user has no access to.

The `additional_details` payload provides details of the folder.

```json
{
  "source": {
    "item_type": "folder",
    "item_id": "123456789",
    "item_name": "Contracts",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "123456789",
      "name": "Unknown User",
      "login": "user@email.com"
    }
  },
  "created_by": {
    "type": "user",
    "id": "123456789",
    "name": "Unknown User",
    "login": "user@email.com"
  },
  "action_by": null,
  "created_at": "2022-10-06T13:26:58-07:00",
  "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
  "event_type": "SHIELD_INFORMATION_BARRIER_ITEM_MOVE_BLOCKED",
  "ip_address": "Unknown IP",
  "type": "event",
  "session_id": null,
  "additional_details": {
    "destination_folder": {
      "item_type": "folder",
      "item_id": "123456789",
      "item_name": "Contracts Signed"
    }
  }
}

```

### Copying item blocked

A `SHIELD_INFORMATION_BARRIER_ITEM_COPY_BLOCKED` event is triggered when the
information barrier prohibits copying an item (a file or a folder) to a
a folder the user has no access to.

The `additional_details` payload provides details of the destination
folder.

```json
{
  "source": {
    "item_type": "folder",
    "item_id": "123456789",
    "item_name": "Contracts",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "123456789",
      "name": "Unknown User",
      "login": "user@email.com"
    }
  },
  "created_by": {
    "type": "user",
    "id": "123456789",
    "name": "Unknown User",
    "login": "user@email.com"
  },
  "action_by": null,
  "created_at": "2022-10-05T14:25:15-07:00",
  "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
  "event_type": "SHIELD_INFORMATION_BARRIER_ITEM_COPY_BLOCKED",
  "ip_address": "Unknown IP",
  "type": "event",
  "session_id": null,
  "additional_details": {
    "destination_folder": {
      "item_type": "folder",
      "item_id": "123456789",
      "item_name": "Contracts Signed"
    }
  }
}
```

### Item transfer ownership blocked

A `SHIELD_INFORMATION_BARRIER_ITEM_OWNER_TRANSFER_BLOCKED` event is triggered
when the information barrier prohibits transferring the item ownership to a
user that is subject to restrictions.

The `additional_details` payload provides details of the user that cannot
be set as the new owner.

```json
{
  "source": {
    "item_type": "folder",
    "item_id": "",
    "item_name": "All Files",
    "parent": {
      "type": "folder",
      "name": "",
      "id": ""
    },
    "owned_by": {
      "type": "user",
      "id": "123456789",
      "name": "Unknown User",
      "login": "user@email.com"
    }
  },
  "created_by": {
    "type": "user",
    "id": "123456789",
    "name": "Unknown User",
    "login": "user@email.com"
  },
  "action_by": null,
  "created_at": "2022-10-07T09:29:20-07:00",
  "event_id": "f82c3ba03e41f7e8a7608363cc6c0390183c3f83",
  "event_type": "SHIELD_INFORMATION_BARRIER_ITEM_OWNER_TRANSFER_BLOCKED",
  "ip_address": "10.1.2.3",
  "type": "event",
  "session_id": null,
  "additional_details": {
    "restricted_user": {
      "type": "user",
      "id": "123456789",
      "name": "Unknown User",
      "login": "user@email.com"
    },
    "service_id": "123456789",
    "service_name": "App"
  }
}
```

[events]: g://events/enterprise-events/for-enterprise/