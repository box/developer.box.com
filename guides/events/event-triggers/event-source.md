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
total_steps: 5
sibling_id: events/event-triggers
parent_id: events/event-triggers
next_page_id: events/event-triggers
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/event-triggers/event-source.md
fullyTranslated: true
---
# イベントソース

ユーザーまたは項目によってイベントがトリガーされると、[`GET /events`](e://get_events)エンドポイントのレスポンスにはイベントソースオブジェクトが含まれます。

## ユーザーソースオブジェクト

ユーザーがイベントをトリガーした場合、ソースオブジェクトは[ユーザーリソース](e://resources/user)の標準レプリゼンテーションになります。

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

## 項目ソースオブジェクト

項目がイベントをトリガーした場合、ソースオブジェクトは[イベントソースリソース](e://resources/event-source)になります。

<Message type="notice">

以下の例には`classification`オブジェクトが含まれています。これは、項目に分類が設定されていない場合は表示されません。また、一部のイベントタイプでは表示されません。

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
