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
---

# Sign Events

Audit Box Sign events using the enterprise events stream. To learn more about
Box Sign, visit our [guide][sign-guide].

<Message warning>
  The status provided below in each `additional_details` payload may differ
  from the example based on the specific sign request details. For example,
  if the requester is the only signer, the status of the `SIGN_DOCUMENT_CREATED`
  event will immediately be `viewed`.
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

### Converted

A `SIGN_DOCUMENT_CONVERTED` `event_type` is produced when a sign request is
converted to a `.pdf` for signing.

The`additional_details` payload will provide the following details:

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
    "signer":null,
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

### Completed

A `SIGN_DOCUMENT_COMPLETED` `event_type` is produced when all signers have
successfully signed the document.

The`additional_details` payload will provide the following details:

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

### Cancelled

A `SIGN_DOCUMENT_CANCELLED` `event_type` is produced when a sign request is
cancelled by the requester via API or UI.

The`additional_details` payload will provide the following details:

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

### Expired

A `SIGN_DOCUMENT_EXPIRED` `event_type` is produced when a sign request expired
with incomplete signatures.

The`additional_details` payload will provide the following details:

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

## Signer Events

### Assigned

A `SIGN_DOCUMENT_ASSIGNED` `event_type` is produced when a sign request is
successfully sent to a signer.

The`additional_details` payload will provide the following details:

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

### Viewed by Signer

A `SIGN_DOCUMENT_VIEWED_BY_SIGNER` `event_type` is produced when a sign request
signer clicks on **Review Document** in the signing email or visits the signing
URL.

The`additional_details` payload will provide the following details:

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

### Downloaded

A `SIGNER_DOWNLOADED` `event_type` is produced when a signer downloads the
signing document.

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

### Forwarded

A `SIGNER_FORWARDED` `event_type` is produced when a signer downloads the
signing document.

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

### Signed

A `SIGN_DOCUMENT_SIGNED` `event_type` is produced when a signer completes the
sign request.

The`additional_details` payload will provide the following details:

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

### Declined

A `SIGN_DOCUMENT_DECLINED` `event_type` is produced when a sign request signer
declines the request.

The`additional_details` payload will provide the following details:

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
