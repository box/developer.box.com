---
rank: 2
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/signatures-v2
required_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/signatures-v2
alias_paths:
  - /webhooks/handle/retries
  - /webhooks/handle/payload
category_id: webhooks
subcategory_id: webhooks/v2
is_index: true
id: webhooks/v2
type: guide
total_steps: 6
sibling_id: webhooks
parent_id: webhooks
next_page_id: webhooks/v2/update-v2
previous_page_id: webhooks/v2/list-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/index.md
fullyTranslated: true
---
# V2 Webhook

## フロー

<ImageFrame center width="400" shadow border>

![Webhookフロー](../images/webhook.png)

</ImageFrame>

When an event triggers a webhook for a file or a folder, it makes a HTTP call to the `address` specified when the webhook was created. The payload of this call contains some request headers, and a JSON body.

## ペイロードヘッダー

Webhookによって送信されたペイロードには、以下のBox固有のヘッダーが含まれます。

<!-- markdownlint-disable line-length -->

| ヘッダー                      | 説明                                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BOX-DELIVERY-ID`         | A unique ID assigned by Box that identifies the delivered webhook payload. When Box retries a webhook this ID will change, while the ID in the payload body remains the same. |
| `BOX-DELIVERY-TIMESTAMP`  | An RFC-3339 timestamp that identifies when the payload was sent.                                                                                                              |
| `BOX-SIGNATURE-PRIMARY`   | このWebhook用に設定されたプライマリ署名キーを使用して作成された[署名][verify_sigs]。                                                                                                                         |
| `BOX-SIGNATURE-SECONDARY` | このWebhook用に設定されたセカンダリ署名キーを使用して作成された[署名][verify_sigs]。                                                                                                                         |
| `BOX-SIGNATURE-VERSION`   | 値は常に`1`。                                                                                                                                                                      |
| `BOX-SIGNATURE-ALGORITHM` | 値は常に`HmacSHA256`。                                                                                                                                                             |

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

<Message type="warning">

HTTP header names are case insensitive. Your client should convert all header names to a standardized lowercase or uppercase format before trying to determine the value of a header.

</Message>

## ペイロード本文

Webhookペイロードの本文は、Webhookをトリガーしたファイルまたはフォルダ (ターゲット)、およびトリガーされたイベントを記述するJSONオブジェクトです。

<!-- markdownlint-disable line-length -->

| フィールド        | 説明                                                                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`       | 値は常に`webhook_event`。                                                                                                                                        |
| `id`         | A unique ID assigned by Box that identifies an event. When Box retries a webhook this ID will not change, while the ID in the header changes between calls. |
| `created_at` | The time/date when an event was triggered at.                                                                                                               |
| `trigger`    | The name of the action that triggered an event, for example `FILE.UPLOADED`.                                                                                |
| `webhook`    | The webhook ID for which an event triggered.                                                                                                                |
| `created_by` | The user that triggered an event.                                                                                                                           |
| `source`     | The item that triggered an event, for example the file that was uploaded to the target folder.                                                              |

<!-- markdownlint-enable line-length -->

Example:

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

## 再試行

<!--alex ignore failed-->

Boxがペイロードを送信してから30秒以内に、`200`から`299`の範囲のHTTPステータスコードを含むレスポンスが表示されない場合、Webhookペイロードの配信は失敗します。

<!--alex ignore failure-->

When delivery of a webhook fails, Box will resend it up to 10 times. The initial retry takes place 5 minutes after the failure. From there, an exponential back-off strategy is used to avoid overloading the destination server. By using exponential back- off, Box will wait an increasingly longer time for every retry.

<Message type="notice">

BoxはWebhook配信を最大10回再試行します。この回数は今後変更される可能性があります。

</Message>

[setup_sigs]: g://webhooks/v2/signatures-v2

[verify_sigs]: g://webhooks/v2/signatures-v2
