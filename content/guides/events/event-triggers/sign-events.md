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
---

# Sign Events

Audit Box Sign events using the enterprise events stream. To learn more about
Box Sign, visit our [guide][sign-guide].

<Message warning>
  The status provided below in each `additional_details` payload may differ
  from the example based on the specific sign request details. For example,
  if the requester is the only signer, the status of the `SIGN_DOCUMENT_CREATED`
  event wilL immediately be `viewed`.
</Message>

## Document Events

### Created

A `SIGN_DOCUMENT_CREATED` `event_type` is produced when a sign request is
created via API or UI. At this stage the sign request is not sent to signers
yet. 

The`additional_details` payload will provide the following details:

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

### Converted

A `SIGN_DOCUMENT_CONVERTED` `event_type` is produced when a sign request is
converted to a `.pdf` for signing.

The`additional_details` payload will provide the following details:

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

### Completed

A `SIGN_DOCUMENT_COMPLETED` `event_type` is produced when all signers have
successfully signed the document.

The`additional_details` payload will provide the following details:

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

### Cancelled

A `SIGN_DOCUMENT_CANCELLED` `event_type` is produced when a sign request is
cancelled by the requester via API or UI.

The`additional_details` payload will provide the following details:

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

### Expired

A `SIGN_DOCUMENT_EXPIRED` `event_type` is produced when a sign request expired
with incomplete signatures.

The`additional_details` payload will provide the following details:

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

## Signer Events

### Assigned

A `SIGN_DOCUMENT_ASSIGNED` `event_type` is produced when a sign request is
successfully sent to a signer. 

The`additional_details` payload will provide the following details:

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

### Forwarded

A `SIGNER_FORWARDED` `event_type` is produced when a signer downloads the
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

[sign-guide]: g://box-sign