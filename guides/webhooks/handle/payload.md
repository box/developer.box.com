---
rank: 2
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/manage/for-file
  - webhooks/handle/setup-signatures
  - webhooks/handle/verify-signatures
required_guides:
  - webhooks/manage/for-file
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/handle
is_index: false
id: webhooks/handle/payload
type: guide
total_steps: 5
sibling_id: webhooks/handle
parent_id: webhooks/handle
next_page_id: webhooks/handle/retries
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/handle/payload.md
---
# Webhookペイロード

イベントによってファイルまたはフォルダのWebhookがトリガーされると、Webhookの作成時に指定した`address`に対してHTTP呼び出しが実行されます。この呼び出しのペイロードには、いくつかのリクエストヘッダーとJSON本文が含まれます。

## ペイロードヘッダー

Webhookによって送信されたペイロードには、以下のBox固有のヘッダーが含まれます。

<!-- markdownlint-disable line-length -->

| ヘッダー                      | 説明                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| `BOX-DELIVERY-ID`         | 配信されたWebhookペイロードを識別する、Boxによって割り当てられた一意のID。BoxがWebhookを再試行すると、このIDが変わりますが、ペイロードの本文のIDは変わりません。 |
| `BOX-DELIVERY-TIMESTAMP`  | ペイロードが送信された時刻を識別するRFC-3339タイムスタンプ。                                                            |
| `BOX-SIGNATURE-PRIMARY`   | このWebhook用に設定されたプライマリ署名キーを使用して作成された[署名][verify_sigs]。                                         |
| `BOX-SIGNATURE-SECONDARY` | このWebhook用に設定されたセカンダリ署名キーを使用して作成された[署名][verify_sigs]。                                         |
| `BOX-SIGNATURE-VERSION`   | 値は常に`1`です。                                                                                    |
| `BOX-SIGNATURE-ALGORITHM` | 値は常に`HmacSHA256`です。                                                                           |

<!-- markdownlint-enable line-length -->

例:

```shell
BOX-DELIVERY-ID:          673a081b-bb4b-4d45-b4f1-4131a29c1d07
BOX-DELIVERY-TIMESTAMP:   2016-07-11T10:10:33-07:00
BOX-SIGNATURE-PRIMARY:    isCeDp7mLR41/MjcSEFLag9bWmpJkgmN80Je4VIESdo=
BOX-SIGNATURE-SECONDARY:  1UbiiKS7/2o5vNIlyMh7e5QGCHq8lflWFgEF+YWBugI=
BOX-SIGNATURE-VERSION:    1
BOX-SIGNATURE-ALGORITHM:  HmacSHA256
USER-AGENT:               Box-WH-Client/0.1
```

<Message type="notice">

Webhookペイロードの[設定][setup_sigs]と[署名の検証][verify_sigs]を行うことをお勧めします。

</Message>

<Message warning>

HTTPヘッダー名では大文字と小文字が区別されないため、クライアントでは、すべてのヘッダーの名前を標準化された小文字または大文字の形式に変換してから、ヘッダーの値を確認するのが理想的です。

</Message>

## ペイロード本文

Webhookペイロードの本文は、Webhookをトリガーしたファイルまたはフォルダ(ターゲット)、およびトリガーされたイベントを記述するJSONオブジェクトです。

<!-- markdownlint-disable line-length -->

| フィールド        | 説明                                                                                   |
| ------------ | ------------------------------------------------------------------------------------ |
| `type`       | 値は常に`webhook_event`です。                                                               |
| `id`         | イベントを識別する、Boxによって割り当てられた一意のID。BoxがWebhookを再試行しても、このIDは変わりませんが、ヘッダーのIDは呼び出しのたびに変わります。 |
| `created_at` | イベントがトリガーされた日時。                                                                      |
| `trigger`    | イベントをトリガーしたイベントの名前(例: `FILE.UPLOADED`)。                                              |
| `webhook`    | このイベントがトリガーされたWebhook。                                                               |
| `created_by` | このイベントをトリガーしたユーザー。                                                                   |
| `source`     | このイベントをトリガーした項目(例: ターゲットフォルダにアップロードされたファイル)。                                         |

<!-- markdownlint-enable line-length -->

例:

```json
{
  "type": "webhook_event",
  "id": "eb0c4e06-751f-442c-86f8-fd5bb404dbec",
  "created_at": "2016-07-11T10:10:32-07:00",
  "trigger": "FILE.UPLOADED",
  "webhook": {
    "id": "53",
    "type": "webhook"
  },
  "created_by": {
    "type": "user",
    "id": "226067247",
    "name": "John Q. Developer",
    "login": "johnq@dev.name"
  },
  "source": {
    "id": "73835521473",
    "type": "file",
    "file_version": {
      "type": "file_version",
      "id": "78096737033",
      "sha1": "2c61623e86bee78e6ab444af456bccc7a1164095"
    },
    "sequence_id": "0",
    "etag": "0",
    "sha1": "2c61623e86bee78e6ab444af456bccc7a1164095",
    "name": "Test-Image-3.png",
    "description": "",
    "size": 26458,
    "path_collection": {
      "total_count": 4,
      "entries": [
        {
          "type": "folder",
          "id": "0",
          "sequence_id": null,
          "etag": null,
          "name": "All Files"
        },
        {
          "type": "folder",
          "id": "2614853901",
          "sequence_id": "4",
          "etag": "4",
          "name": "Testing"
        },
        {
          "type": "folder",
          "id": "8290186265",
          "sequence_id": "0",
          "etag": "0",
          "name": "Webhooks Base"
        },
        {
          "type": "folder",
          "id": "8290188973",
          "sequence_id": "0",
          "etag": "0",
          "name": "Webhooks"
        }
      ]
    },
    "created_at": "2016-07-11T10:10:32-07:00",
    "modified_at": "2016-07-11T10:10:32-07:00",
    "trashed_at": null,
    "purged_at": null,
    "content_created_at": "2016-06-08T11:14:04-07:00",
    "content_modified_at": "2016-06-08T11:14:04-07:00",
    "created_by": {
      "type": "user",
      "id": "226067247",
      "name": "John Q. Developer",
      "login": "johnq@dev.name"
    },
    "modified_by": {
      "type": "user",
      "id": "226067247",
      "name": "John Q. Developer",
      "login": "johnq@dev.name"
    },
    "owned_by": {
      "type": "user",
      "id": "226067247",
      "name": "John Q. Developer",
      "login": "johnq@dev.name"
    },
    "shared_link": null,
    "parent": {
      "type": "folder",
      "id": "8290188973",
      "sequence_id": "0",
      "etag": "0",
      "name": "Webhooks"
    },
    "item_status": "active"
  },
  "additional_info": []
}
```

[setup_sigs]: guide://webhooks/handle/setup-signatures

[verify_sigs]: guide://webhooks/handle/verify-signatures
