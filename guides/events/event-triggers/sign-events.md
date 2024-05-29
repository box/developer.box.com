---
rank: 9
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
required_guides: []
alias_paths:
  - /guides/events/sign-events
  - /guides/events/sign-events/
category_id: events
subcategory_id: events/event-triggers
is_index: false
id: events/event-triggers/sign-events
type: guide
total_steps: 5
sibling_id: events/event-triggers
parent_id: events/event-triggers
next_page_id: ''
previous_page_id: events/event-triggers/shield-smart-access-events
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/event-triggers/sign-events.md
fullyTranslated: true
---
# Signイベント

Box Signイベントの監査には、Enterprise Event Streamを使用します。Box Signの詳細については、[ガイド][sign-guide]を参照してください。

<Message warning>

以下に示す各`additional_details`ペイロードのステータスは、具体的な署名リクエストの詳細に基づいた例とは異なる場合があります。たとえば、リクエスト送信者が唯一の署名者の場合は、`SIGN_DOCUMENT_CREATED`イベントのステータスがすぐに`viewed`になります。

</Message>

## ドキュメントイベント

### 作成

APIまたはUIを使用して署名リクエストが作成されると、`SIGN_DOCUMENT_CREATED` `event_type`が生成されます。この段階ではまだ署名リクエストは署名者に送信されません。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "sent",
    "signer_ip_address": null,
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": null,
    "template": {
      "id": "987abC5423",
      "template_type": "Signing",
      "name": "Work Contact"
    },
    "batch_send": {
      "id": "W23YVL46"
    },
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "sender_message": {
      "subject": "Can you please sign this document?",
      "message": "This document shows the terms agreed to on the phone."
    },
    "forward": null
  }
}

```

### 変換

署名リクエストが署名用の`.pdf`に変換されると、`SIGN_DOCUMENT_CONVERTED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "created",
    "signer_ip_address": null,
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": null,
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "sender_message": {
      "subject": "",
      "message": ""
    },
    "forward": null
  }
}

```

### 完了

署名者全員がドキュメントへの署名を正常に完了すると、`SIGN_DOCUMENT_COMPLETED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "signed",
    "signer_ip_address": null,
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": null,
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "sender_message": {
      "subject": "",
      "message": ""
    },
    "forward": null
  }
}

```

### キャンセル

リクエスト送信者がAPIまたはUIで署名リクエストをキャンセルすると、`SIGN_DOCUMENT_CANCELLED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "cancelled",
    "signer_ip_address": null,
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": null,
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "sender_message": {
      "subject": "",
      "message": ""
    },
    "forward": null
  }
}

```

### 期限切れ

署名が完了しないまま署名リクエストが期限切れになると、`SIGN_DOCUMENT_EXPIRED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "expired",
    "signer_ip_address": null,
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": null,
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "sender_message": {
      "subject": "",
      "message": ""
    },
    "forward": null
  }
}

```

## 署名者イベント

### 割り当て

署名リクエストが問題なく署名者に送信されると、`SIGN_DOCUMENT_ASSIGNED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "sent",
    "signer_ip_address": "",
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": {
      "id": "246813579",
      "type": "user",
      "name": "Jane Doe",
      "login": "janedoe@example.com"
    },
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "ready_sign_link": {
      "id": "aaae45bb-e89b-12d3-a456-426614174000"
    },
    "sender_message": {
      "subject": "",
      "message": ""
    },
    "forward": null
  }
}

```

### 署名者による表示

署名リクエストの署名者が署名用メールの \[**ドキュメントをレビュー**] をクリックするか、署名用URLにアクセスすると、`SIGN_DOCUMENT_VIEWED_BY_SIGNER` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "viewed",
    "signer_ip_address": "",
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": {
      "id": "246813579",
      "type": "user",
      "name": "Jane Doe",
      "login": "janedoe@example.com"
    },
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "ready_sign_link": {
      "id": "aaae45bb-e89b-12d3-a456-426614174000"
    },
    "sender_message": {
      "subject": "",
      "message": ""
    },
    "forward": null
  }
}

```

### ダウンロード

署名者が署名用ドキュメントをダウンロードすると、`SIGNER_DOWNLOADED` `event_type`が生成されます。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "viewed",
    "signer_ip_address": "",
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": {
      "id": "246813579",
      "type": "user",
      "name": "Jane Doe",
      "login": "janedoe@example.com"
    },
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "ready_sign_link": {
      "id": "aaae45bb-e89b-12d3-a456-426614174000"
    },
    "sender_message": {
      "subject": "",
      "message": ""
    },
    "forward": {
      "forwarded_to_email": "janedoe@box.com",
      "forwarded_reason": "Please sign",
      "forwarded_at": "2022-03-03T12:04:20-10:00"
    }
  }
}

```

### 転送

署名者が署名用ドキュメントをダウンロードすると、`SIGNER_FORWARDED` `event_type`が生成されます。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "viewed",
    "signer_ip_address": "",
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": {
      "id": "246813579",
      "type": "user",
      "name": "Jane Doe",
      "login": "janedoe@example.com"
    },
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "ready_sign_link": {
      "id": "aaae45bb-e89b-12d3-a456-426614174000"
    },
    "sender_message": {
      "subject": "Can you please sign this document?",
      "message": "This document shows the terms agreed to on the phone."
    },
    "forward": {
      "forwarded_to_email": "somename@box.com",
      "forwarded_reason": "I need to forward to my business partner.",
      "forwarded_at": "2022-02-03T10:04:52-08:00",
    },
  }
}

```

### 署名

署名者が署名リクエストを完了すると、`SIGN_DOCUMENT_SIGNED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "signed",
    "signer_ip_address": "",
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": {
      "id": "246813579",
      "type": "user",
      "name": "Jane Doe",
      "login": "janedoe@example.com"
    },
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "ready_sign_link": {
      "id": "aaae45bb-e89b-12d3-a456-426614174000"
    },
    "sender_message": {
      "subject": "Can you please sign this document?",
      "message": "This document shows the terms agreed to on the phone."
    },
    "forward": null
  }
}

```

### 拒否

署名リクエストの署名者がリクエストを拒否すると、`SIGN_DOCUMENT_DECLINED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "sign_request": {
    "sign_request_id": "123e4567-e89b-12d3-a456-426614174000",
    "sign_request_short_id": "426614174000",
    "status": "declined",
    "signer_ip_address": "",
    "requestor_ip_address": "",
    "files": [
      {
        "id": "1234567890",
        "type": "file",
        "name": "example_doc.pdf",
        "parent": {
          "id": "987654321",
          "type": "folder"
        }
      }
    ],
    "expires": null,
    "requestor": {
      "id": "13579246",
      "type": "user",
      "name": "John Doe",
      "login": "johndoe@box.com"
    },
    "signer": {
      "id": "246813579",
      "type": "user",
      "name": "Jane Doe",
      "login": "janedoe@example.com"
    },
    "template": null,
    "batch_send": null,
    "redirection": {
      "redirect_url": "https://www.google.com",
      "declined_redirect_url": "https://www.googledecline.com"
    },
    "ready_sign_link": {
      "id": "aaae45bb-e89b-12d3-a456-426614174000"
    },
    "sender_message": {
      "subject": "",
      "message": ""
    },
    "forward": null
  }
}

```

[sign-guide]: g://box-sign
