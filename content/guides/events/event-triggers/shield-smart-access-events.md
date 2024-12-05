---
rank: 8
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
required_guides: []
alias_paths:
  - /guides/events/shield-alert-events
  - /guides/events/shield-alert-events/
---

# Shield Smart Access Events

[Smart Access][smartaccess] enables Box Admins to define and enforce
classification-based access policies to control access and prevent the
unintentional leakage of sensitive content.

Smart Access policies can be configured in
[enforced or monitoring mode][monitoringmode]. In all event types,
a field named `controlMode` appears to say whether the policy is in `enforced`
or `monitoring` mode.

## Download and Print Restriction

If an admin creates a Shield access policy that enforces download or print
restriction and an end user is blocked from downloading or printing a file, an
event is
produced within the [enterprise event][events] stream. If the access policy is
set to monitor potential download and print violations,
events will also be generated
when a user is viewing a folder with a file restricted from download or print,
viewing a file in preview that is restricted from download or print, and when a
user requests to download a file through the API that is restricted from
download or print. These events follow the standard event object schema and the
`event_type` value set to `SHIELD_DOWNLOAD_BLOCKED`.

If downloading is blocked, the `additional-details` payload of the
`SHIELD_DOWNLOAD_BLOCKED` event will provide the below details.

For the Box Web App, the `additional_details` payload will
provide the following details:

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 38495726173,
      "size": 370,
      "sha1": "db0a61e73b5e6985d190134e0a4b9982c716afeb"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": null,
    "additional_info": "",
    "created_at": "2022-02-22T10:35:08-08:00",
    "classification": "Confidential",
    "controlMode": "enforced"
  }
}
```

For the Box Desktop App, the `additional_details` payload will
provide the following details:

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": {
      "service": 254429,
      "name": "Box Drive"
    },
    "additional_info": "",
    "created_at": "2022-02-22T10:38:58-08:00",
    "classification": "Confidential",
    "controlMode": "enforced"
  },
  "service_id": "254429",
  "service_name": "Box Drive"
}
```

For Box Mobile apps, the `additional_details` payload will
provide the following details:

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 38495726173,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": {
      "service": 4715,
      "name": "Box for Android"
    },
    "additional_info": "",
    "created_at": "2022-01-18T14:51:37-08:00",
    "classification": "Confidential",
    "controlMode": "monitoring"
  },
  "service_id": "4715",
  "service_name": "Box for Android"
}
```

## External collaboration restriction

If an external collaboration invitation is restricted, an event is produced
within the [enterprise event][events] stream. These events follow
the standard event object schema, with the `event_type` value set
to: `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`,
`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`,
`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`
`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION`, or
`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`.

If an external collaboration invitation is blocked, the `additional-details`
payload of the `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED` or
`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION` event will provide
the following details:

```json
"additional_details": {
  "shield_external_collab_enforcement": {
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "inviter": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "invitee": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "accessUser": null,
    "service": null,
    "additionalInfo": "",
    "createdAt": null,
    "justification": null,
    "classification": "Confidential",
    "controlMode": "enforced"
  }
}
```

If an external collaboration invitation is justified, the `additional_details`
payload of the `SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED` event will provide the
following details:

```json
"additional_details": {
  "shield_external_collab_enforcement": {
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "testFile.docx",
      "file_version_id": 123456789,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "inviter": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "invitee": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "accessUser": null,
    "service": null,
    "additionalInfo": "",
    "createdAt": null,
    "justification": {
      "justification_id": "17786127",
      "request_at": 1644874023,
      "requested_by": {
        "type": "user",
        "id": 123456789,
        "name": "Some Name",
        "login": "somename@box.com"
      },
      "request_type": "EXTERNAL_COLLAB",
      "item": {
        "type": "file",
        "id": 987654321,
        "name": "testFile.docx",
        "file_version_id": 941051265322,
        "size": 11640,
        "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
      },
      "user": {
        "type": "user",
        "id": 123456789,
        "name": "Some Name",
        "login": "somename@box.com"
      },
      "title": "Approved",
      "description": "",
      "additional_info": null,
      "approved_by": {
        "type": "user",
        "id": 123456789,
        "name": "Some Name",
        "login": "somename@box.com"
      },
      "action": "APPROVED",
      "action_at": 1644874023,
      "details": null
    },
    "classification": "Confidential",
    "controlMode": "enforced"
  }
}
```

If external collaboration access is blocked, the `additional_details`
payload of the `SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED` or
`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION` event will provide
the following details:

```json
"additional_details": {
  "shield_external_collab_enforcement": {
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "inviter": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "invitee": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "accessUser": null,
    "service": null,
    "additionalInfo": "",
    "createdAt": null,
    "justification": null,
    "classification": "Confidential",
    "controlMode": "enforced"
  }
}
```

If a Shield justification is approved, an event is produced within the
[enterprise event][events] stream. These events follow the
standard event object schema and the `event_type` value set
to `SHIELD_JUSTIFICATION_APPROVAL`.

The `additional_details` payload will provide the following details:

```json
"additional_details": {
  "shield_justification": {
    "justification_id": "18428718",
    "request_at": 1645556286,
    "requested_by": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "request_type": "EXTERNAL_COLLAB",
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "title": "Partner Project",
    "description": "",
    "additional_info": null,
    "approved_by": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "action": "APPROVED",
    "action_at": 1645556286,
    "details": null
  }
}
```

<Message>
  Admins, please note that you may see two enterprise events instead of one when
  a justification is chosen from the share modal. For example, one
  `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION` event and one
  `SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED` event.
</Message>

## Integration Restriction

If a 3rd-party application, including published custom applications with which
your organization is integrated, is restricted from downloading a file or a
folder, an event is produced within the [enterprise event][events] stream.
These events follow the standard event object schema, with the `event_type`
value set to `SHIELD_DOWNLOAD_BLOCKED`.

For 3rd-party applications, the `additional_details` payload will provide the
following details:

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 875644956551,
      "name": "blaha.docx",
      "file_version_id": 941051265322,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "access_user": {
      "type": "user",
      "id": 11754686560,
      "name": "Ming Feng",
      "login": "mfeng+demo@boxdemo.com"
    },
  "service": "docusign",
  "additional_info": "",
  "created_at": "2022-01-18T14:53:53-08:00",
  "classification": "Confidential",
  "controlMode": "enforced"
}
```

For custom applications, the `additional_details` payload will provide the
following details:

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": {
      "service": 123456,
      "name": "CustomApp"
    },
    "additional_info": "",
    "created_at": "2022-01-18T13:31:25-08:00",
    "classification": "Confidential",
    "controlMode": "enforced"
  },
  "service_id": "123456",
  "service_name": "CustomApp"
}
```

## FTP Restriction

If download of a file or folder is restricted via the FTP protocol, an event is
produced within the [enterprise event][events] stream. These events follow the
standard event object schema, with the `event_type` value
set to `SHIELD_DOWNLOAD_BLOCKED`.

The `additional_details` payload will provide the following details:

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "textFile.txt",
      "file_version_id": 987654321,
      "size": 3606,
      "sha1": "ab7a79ff8e2a6b576e1c62d850290a09312fb387"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": {
      "service": 4082,
      "name": "Box FTP Server"
    },
    "additional_info": "",
    "created_at": "2022-01-18T14:19:51-08:00",
    "classification": null,
    "controlMode": "enforced"
  },
  "service_id": "4082",
  "service_name": "Box FTP Server"
}
```
<!-- i18n-enable localize-links -->
[smartaccess]: https://support.box.com/hc/en-us/articles/7711416297747-About-Smart-Access
[monitoringmode]: https://support.box.com/hc/en-us/articles/14596333776403-Shield-Access-Policy-Settings
<!-- i18n-disable localize-links -->
[events]: g://events/enterprise-events/for-enterprise/
