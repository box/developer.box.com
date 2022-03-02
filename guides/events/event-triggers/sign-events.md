---
rank: 7
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
total_steps: 3
sibling_id: events/event-triggers
parent_id: events/event-triggers
next_page_id: ''
previous_page_id: events/event-triggers/shield-alert-events
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/event-triggers/sign-events.md
fullyTranslated: true
---
# Signイベント

Audit Box Sign events using the enterprise events stream. To learn more about Box Sign, visit our [guide][sign-guide].

<Message warning>

The status provided below in each `additional_details` payload may differ from the example based on the specific sign request details. For example, if the requester is the only signer, the status of the `SIGN_DOCUMENT_CREATED` event wilL immediately be `viewed`.

</Message>

## ドキュメントイベント

### 作成

APIまたはUIを使用して署名リクエストが作成されると、`SIGN_DOCUMENT_CREATED` `event_type`が生成されます。この段階ではまだ署名リクエストは署名者に送信されません。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
    "sign_request": {
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
        "signer":null
        }
    }
}
```

### 変換

署名リクエストが署名用の`.pdf`に変換されると、`SIGN_DOCUMENT_CONVERTED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
    "sign_request": {
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
        "requestor": {
            "id": "13579246",
            "type": "user",
            "name": "John Doe",
            "login": "johndoe@box.com"
        },
        "signer":null
        }
    }
}
```

### 完了

署名者全員がドキュメントへの署名を正常に完了すると、`SIGN_DOCUMENT_COMPLETED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
    "sign_request": {
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
        "requestor": {
            "id": "13579246",
            "type": "user",
            "name": "John Doe",
            "login": "johndoe@box.com"
        },
        "signer": null
    }
}
```

### キャンセル

リクエスト送信者がAPIまたはUIで署名リクエストをキャンセルすると、`SIGN_DOCUMENT_CANCELLED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
    "sign_request": {
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
        "requestor": {
            "id": "13579246",
            "type": "user",
            "name": "John Doe",
            "login": "johndoe@box.com"
        },
        "signer": null
    }
}
```

### 期限切れ

署名が完了しないまま署名リクエストが期限切れになると、`SIGN_DOCUMENT_EXPIRED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
    "sign_request": {
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
        "requestor": {
            "id": "13579246",
            "type": "user",
            "name": "John Doe",
            "login": "johndoe@box.com"
        },
        "signer": null
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
        }
    }
}
```

### 署名者による表示

署名リクエストの署名者が署名用メールの \[**ドキュメントをレビュー**] をクリックするか、署名用URLにアクセスすると、`SIGN_DOCUMENT_VIEWED_BY_SIGNER` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
    "sign_request": {
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
        }
    }
}
```

### ダウンロード

署名者が署名用ドキュメントをダウンロードすると、`SIGNER_DOWNLOADED` `event_type`が生成されます。

```json
"additional_details": {
    "sign_request": {
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
        }
    }
}
```

### 転送

署名者が署名用ドキュメントをダウンロードすると、`SIGNER_FORWARDED` `event_type`が生成されます。

```json
"additional_details": {
    "sign_request": {
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
        }
    }
}
```

### 署名

署名者が署名リクエストを完了すると、`SIGN_DOCUMENT_SIGNED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
    "sign_request": {
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
        }
    }
}
```

### 拒否

署名リクエストの署名者がリクエストを拒否すると、`SIGN_DOCUMENT_DECLINED` `event_type`が生成されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
    "sign_request": {
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
        }
    }
}
```

[sign-guide]: g://box-sign
