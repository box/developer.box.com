---
rank: 7
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
required_guides: []
alias_paths: []
category_id: events
subcategory_id: events/event-triggers
is_index: false
id: events/event-triggers/shield-information-barrier-events
type: guide
total_steps: 5
sibling_id: events/event-triggers
parent_id: events/event-triggers
next_page_id: events/event-triggers/shield-smart-access-events
previous_page_id: events/event-triggers/shield-alert-events
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/event-triggers/shield-information-barrier-events.md
fullyTranslated: true
---
# Shield情報バリアイベント

情報バリアは、利益相反または潜在的な法的問題につながる可能性のあるやり取りやコミュニケーションを防止します。たとえば、管理者は情報バリアを使用して、プロジェクトに基づいてチームを分け、特定のグループに制限されたコンテンツでのコラボレーションを防ぐことができます。

## 情報バリアの設定時にトリガーされるイベント

情報バリアを設定すると、[Enterprise Event][events] Streamにイベントが作成されます。たとえば、バリアをアクティブ化または非アクティブ化すると、イベントがトリガーされます。

これらのイベントは、`event_type`値が次のいずれかに設定されている、標準的なイベントオブジェクトスキーマに従います。

* `SHIELD_INFORMATION_BARRIER_ENABLED`
* `SHIELD_INFORMATION_BARRIER_PENDING`
* `SHIELD_INFORMATION_BARRIER_DISABLED`

### Shield情報バリアの有効化

`SHIELD_INFORMATION_BARRIER_ENABLED`イベントは、ファイルまたはフォルダに対して情報バリアを有効化するとトリガーされます。以下に例を示します。

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

### Shield情報バリアが保留中

`SHIELD_INFORMATION_BARRIER_PENDING`イベントは、特定のファイルまたはフォルダに対して情報バリアがまだ有効になっていないときにトリガーされます。アクティブ化のプロセスはトリガーされたものの、情報バリアがまだ設定されていません。以下に例を示します。

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

### Shield情報バリアの非アクティブ化

`SHIELD_INFORMATION_BARRIER_DISABLED`イベントは、特定のファイルまたはフォルダに対して情報バリアを非アクティブにするとトリガーされます。以下に例を示します。

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

## 制限されたアクションによってトリガーされるイベント

情報バリアが設定されているときに、各ユーザーが制限されたアクションの実行や制限されたデータへのアクセスを試みた場合もイベントが発生します。これらのイベントは、`event_type`値が次のいずれかに設定されている、標準的なイベントオブジェクトスキーマに従います。

* `SHIELD_INFORMATION_BARRIER_GROUP_ADD_USER_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_COLLAB_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_ITEM_OWNER_TRANSFER_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_SHARED_ITEM_ACCESS_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_ITEM_MOVE_BLOCKED`
* `SHIELD_INFORMATION_BARRIER_ITEM_COPY_BLOCKED`

### ユーザーの追加のブロック

`SHIELD_INFORMATION_BARRIER_GROUP_ADD_USER_BLOCKED`イベントは、情報バリアによって、特定のグループへのユーザーの追加が禁止された場合にトリガーされます。

`additional_details`ペイロードでは、制限されたグループの詳細が提供されます。

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

### コラボレーションのブロック

`SHIELD_INFORMATION_BARRIER_COLLAB_BLOCKED`イベントは、情報バリアによって、ファイルまたはフォルダへのアクセスが制限されているユーザーのコラボレーションの追加が禁止された場合にトリガーされます。

`additional_details`ペイロードでは、制限されたコラボレーションの詳細が提供されます。

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

### 共有項目へのアクセスのブロック

`SHIELD_INFORMATION_BARRIER_SHARED_ITEM_ACCESS_BLOCKED`イベントは、情報バリアによって、共有リンクを使用したファイルまたはフォルダへのアクセスが禁止された場合にトリガーされます。

`additional_details`ペイロードでは、共有リンクとその他のセキュリティに関する情報の詳細が提供されます。

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

### 項目の移動のブロック

`SHIELD_INFORMATION_BARRIER_ITEM_MOVE_BLOCKED`イベントは、情報バリアによって、ユーザーがアクセスできないフォルダへの項目 (ファイルまたはフォルダ) の移動が禁止された場合にトリガーされます。

`additional_details`ペイロードでは、フォルダの詳細が提供されます。

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

### 項目のコピーのブロック

`SHIELD_INFORMATION_BARRIER_ITEM_COPY_BLOCKED`イベントは、情報バリアによって、ユーザーがアクセスできないフォルダへの項目 (ファイルまたはフォルダ) のコピーが禁止された場合にトリガーされます。

`additional_details`ペイロードでは、宛先フォルダの詳細が提供されます。

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

### 項目の所有権の移管のブロック

`SHIELD_INFORMATION_BARRIER_ITEM_OWNER_TRANSFER_BLOCKED`イベントは、情報バリアによって、制限の対象となっているユーザーへの項目の所有権の移管が禁止された場合にトリガーされます。

`additional_details`ペイロードでは、新しい所有者として設定できないユーザーの詳細が提供されます。

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
