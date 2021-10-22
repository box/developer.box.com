---
rank: 7
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-enterprise
required_guides: []
alias_paths: []
---

# Sign Events

## Document Events

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
    "sign_request": {
        "status": "created",
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
        "signer":null
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
        "signer": null
    }
}
```

### Cancelled

A `SIGN_DOCUMENT_CANCELLED` `event_type` is produced when a sign request is
cancelled via API or UI.

The`additional_details` payload will provide the following details:

```json
"additional_details": {
    "sign_request": {
        "status": "cancelled",
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
        "signer": null
    }
}
```

## Signer Events

### Assigned

A `SIGN_DOCUMENT_ASSIGNED` `event_type` is produced when a sign request is
successfully sent to a signer. 

The`additional_details` payload will provide the following details:

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

### Viewed by Signer

A `SIGN_DOCUMENT_VIEWED_BY_SIGNER` `event_type` is produced when a sign request
signer clicks on **Review Document** in the signing email or visits the signing
URL. 

The`additional_details` payload will provide the following details:

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

### Downloaded

A `SIGNER_DOWNLOADED` `event_type` is produced when a signer downloads the
signing document.

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

### Signed

A `SIGN_DOCUMENT_SIGNED` `event_type` is produced when a signer completes the
sign request.

The`additional_details` payload will provide the following details:

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

### Declined

A `SIGN_DOCUMENT_DECLINED` `event_type` is produced when a sign request signer
declines the request. 

The`additional_details` payload will provide the following details:

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
