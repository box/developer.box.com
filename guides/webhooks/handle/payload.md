---
rank: 2
related_guides:
  - webhooks/manage/create
  - webhooks/handle/setup-signatures
  - webhooks/handle/verify-signatures
required_guides:
  - webhooks/manage/create
alias_paths: []
id: webhooks/handle/payload
cId: webhooks
scId: webhooks/handle
isIndex: false
---

# Webhook payload

When an event triggers a webhook for a file or a folder, it make a HTTP call to the
`address` specified when the webhook was created. The payload of this call
contains some request headers, and a JSON body.

## Payload headers

The payload sent by a webhook has the following Box-specific headers.

<!-- markdownlint-disable line-length -->

| Header                    | Description                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `BOX-DELIVERY-ID`         | A unique ID assigned by Box that identifies the delivered webhook payload. When Box retries a webhook this ID will change, while the ID in the body of the payload remains the same. |
| `BOX-DELIVERY-TIMESTAMP`  | An RFC-3339 timestamp that identifies the time that the payload was sent at.                                                                                                         |
| `BOX-SIGNATURE-PRIMARY`   | A [signature][verify_sigs] created using the primary signature key configured for this webhook.                                                                                                     |
| `BOX-SIGNATURE-SECONDARY` | A [signature][verify_sigs] created using the secondary signature key configured for this webhook.                                                                                                   |
| `BOX-SIGNATURE-VERSION`   | Value is always `1`.                                                                                                                                                                 |
| `BOX-SIGNATURE-ALGORITHM` | Value is always `HmacSHA256` .                                                                                                                                                       |

<!-- markdownlint-enable line-length -->

For example:

```sh
BOX-DELIVERY-ID:          673a081b-bb4b-4d45-b4f1-4131a29c1d07
BOX-DELIVERY-TIMESTAMP:   2016-07-11T10:10:33-07:00
BOX-SIGNATURE-PRIMARY:    isCeDp7mLR41/MjcSEFLag9bWmpJkgmN80Je4VIESdo=
BOX-SIGNATURE-SECONDARY:  1UbiiKS7/2o5vNIlyMh7e5QGCHq8lflWFgEF+YWBugI=
BOX-SIGNATURE-VERSION:    1
BOX-SIGNATURE-ALGORITHM:  HmacSHA256
USER-AGENT:               Box-WH-Client/0.1
```

<Message>

We recommend [setting up][setup_sigs] and [verifying signatures][verify_sigs]
of the webhook payloads.

</Message>

## Payload body

The body of a webhook payload is a JSON object that describes the file or folder
(target) that triggered the webhook, as well as the event that has been
triggered.

<!-- markdownlint-disable line-length -->

| Field        | Description                                                                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`       | Value is always `webhook_event`.                                                                                                                             |
| `id`         | A unique ID assigned by Box that identifies the event. When Box retries a webhook this ID will not change, while the ID in the header changes between calls. |
| `created_at` | The time/date that the event was triggered at.                                                                                                               |
| `trigger`    | The name of the event that triggered the event, for example `FILE.UPLOADED`.                                                                                 |
| `webhook`    | The webhook for which this event triggered.                                                                                                                  |
| `created_by` | The user that triggered this event.                                                                                                                          |
| `source`     | The item that triggered this event, for example the file that was uploaded to the target folder                                                              |

<!-- markdownlint-enable line-length -->

For example:

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
