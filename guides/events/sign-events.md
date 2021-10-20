---
rank: 7
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-enterprise
required_guides: []
alias_paths: []
category_id: events
subcategory_id: null
is_index: false
id: events/sign-events
type: guide
total_steps: 7
sibling_id: events
parent_id: events
next_page_id: events
previous_page_id: events/shield-alert-events
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/sign-events.md
---
# Sign Events

## Sign Document Events

### Created

A `SIGN_DOCUMENT_CREATED` `event_type` is produced when a sign request is
created via API or UI. At this stage the sign request is not sent to signers
yet.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign": {
        "request_id": "5c24789e-95a2-4dde-a470-bca164e11eee",
        "sender_ip": "",
        "signer_ip": null,
        "status": "created",
        "timestamp": 1632332167894,
        "service": "ui",
        "file": {
            "id": 1234567890,
            "name": "example.pdf",
            "parent_folder_id": 9876543210
        },
        "sender": {
            "id": 24681357,
            "name": "John Doe",
            "email": "johndoe@box.com"
        },
        "signer": {
            "id": null,
            "name": null,
            "email": null
        }
    }
}
```

### Converted

A `SIGN_DOCUMENT_CONVERTED` `event_type` is produced when a sign request is
converted to a `.pdf` for signing.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign": {
        "request_id": "eaffe00f-f7dd-4dcc-9c9c-ffe7179359c6",
        "sender_ip": "",
        "signer_ip": null,
        "status": "converted",
        "timestamp": 1632332166386,
        "service": "ui",
        "file": {
            "id": 1234567890,
            "name": "3691724427253828816.pdf",
            "parent_folder_id": 9876543210
        },
        "sender": {
            "id": 246891357,
             "name": "John Doe",
            "email": "johndoe@box.com"
        },
        "signer": {
            "id": null,
            "name": null,
            "email": null
        }
    }
}
```

### Assigned

A `SIGN_DOCUMENT_ASSIGNED` `event_type` is produced when a sign request is
successfully sent to a signer.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign": {
    "request_id": "db91dd07-c10d-4c55-9eb2-c15b2733716c",
    "sender_ip": "",
    "signer_ip": "",
    "status": "sent",
    "timestamp": 1632501841522,
    "service": "ui",
    "file": {
        "id": 1234567890,
        "name": "example.pdf",
        "parent_folder_id": 9876543210
    },
    "sender": {
         "id": 246891357,
         "name": "John Doe",
         "email": "johndoe@box.com"
    },
    "signer": {
        "id": null,
        "name": "janedoe@example.com",
        "email": "janedoe@example.com"
}
```

### Viewed by Signer

A `SIGN_DOCUMENT_VIEWED_BY_SIGNER` `event_type` is produced when a sign request
signer clicks on **Review Document** in the signing email or visits the signing
URL.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign": {
        "request_id": "1c1e6321-c198-47be-bc70-8e37b1a61631",
        "sender_ip": "",
        "signer_ip": "",
        "status": "viewed",
        "timestamp": 1632332168917,
        "service": "ui",
        "file": {
            "id": 1234567890,
            "name": "example.pdf",
            "parent_folder_id": 9876543210
        },
        "sender": {
            "id": 24681357,
            "name": "John Doe",
            "email": "johndoe@box.com"
        },
        "signer": {
            "id": null,
            "name": "Jane Doe",
            "email": "janedoe@example.com"
        }
    }
}
```

### Signed

A `SIGN_DOCUMENT_SIGNED` `event_type` is produced when a signer completes the
sign request.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign": {
        "request_id": "a44bfe5e-42dc-4fd7-9001-c55bcca94b45",
        "sender_ip": "",
        "signer_ip": "",
        "status": "signed",
        "timestamp": 1632332619270,
        "service": "ui",
        "file": {
            "id": 1234567890,
            "name": "example.pdf",
            "parent_folder_id": 9876543210
        },
        "sender": {
            "id": 13579246,
            "name": "John Doe",
            "email": "johndoe@box.com"
        },
        "signer": {
            "id": null,
            "name": "Jane Doe",
            "email": "jandoe@example.com"
        }
    }
 }
```

### Declined

A `SIGN_DOCUMENT_DECLINED` `event_type` is produced when a sign request signer
declines the request.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign": {
        "request_id": "54c046de-f5da-49a8-b1ef-640b95af8835",
        "sender_ip": "",
        "signer_ip": "",
        "status": "declined",
        "timestamp": 1632782457096,
        "service": "ui",
        "file": {
            "id": 1234567890,
            "name": "example.pdf",
            "parent_folder_id": 9876543210
        },
        "sender": {
            "id": 13579246,
            "name": "John Doe",
            "email": "johndoe@box.com"
        },
        "signer": {
            "id": null,
            "name": "Jane Doe",
            "email": "jandoe@example.com"
        }
    }
}
```

### Completed

A `SIGN_DOCUMENT_COMPLETED` `event_type` is produced when all signers have
successfully signed the document.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign": {
        "request_id": "e6b4c8c5-2c06-48c0-8d8c-4261d3b40dea",
        "sender_ip": "",
        "signer_ip": null,
        "status": "signed",
        "timestamp": 1632332619347,
        "service": "ui",
        "file": {
            "id": 1234567890,
            "name": "example.pdf",
            "parent_folder_id": 9876543210
        },
        "sender": {
        "id": 13579246,
        "name": "John Doe",
        "email": "johndoe@box.com"
        },
        "signer": {
            "id": null,
            "name": null,
            "email": null
        }
    }
}
```

### Cancelled

A `SIGN_DOCUMENT_CANCELLED` `event_type` is produced when a sign request is
cancelled via API or UI.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign": {
        "request_id": "e6b4c8c5-2c06-48c0-8d8c-4261d3b40dea",
        "sender_ip": "",
        "signer_ip": null,
        "status": "cancelled",
        "timestamp": 1632332619347,
        "service": "ui",
        "file": {
            "id": 1234567890,
            "name": "example.pdf",
            "parent_folder_id": 9876543210
        },
        "sender": {
        "id": 13579246,
        "name": "John Doe",
        "email": "johndoe@box.com"
        },
        "signer": {
            "id": null,
            "name": null,
            "email": null
        }
    }
}
```

## Signer Events

### Downloaded

A `SIGNER_DOWNLOADED` `event_type` is produced when a signer downloads the
signing document.

```json
"additional_details": {
    "sign": {
        "request_id": "b16adde5-70b5-42ff-ba58-c190693df01f",
        "sender_ip": "",
        "signer_ip": null,
        "status": "downloaded",
        "timestamp": 1632332619347,
        "service": "ui",
        "file": {
            "id": 1234567890,
            "name": "example.pdf",
            "parent_folder_id": 9876543210
        },
        "sender": {
        "id": 13579246,
        "name": "John Doe",
        "email": "johndoe@box.com"
        },
        "signer": {
            "id": null,
            "name": null,
            "email": null
        }
    }
}
```