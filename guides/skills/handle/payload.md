---
rank: 2
related_endpoints: []
related_guides: []
related_pages: []
required_guides:
  - applications/custom-skills
related_resources:
  - skill_invocation
alias_paths: []
cId: skills
scId: skills/handle
id: skills/handle/payload
isIndex: false
---

# Parse Skills Payload

When a new file is uploaded, copied, or moved to a folder monitored by a Skills
app, the invocation URL that was specified during application setup and
authentication will receive an event payload from Box.

The event payload will contain all information needed to read in the content of
the uploaded file to send to a processing system, such as a machine learning
system, and to write metadata back to the file once the processing system has
completed.

## Example Payload

<Tabs>

  <Tab title='Skills JSON Payload'>

<!-- markdownlint-disable line-length -->

```json
{
  "type": "skill_invocation",
  "skill": {
    "id": "137",
    "type": "skill",
    "name": "Hello World Skill",
    "api_key": "hxel2s12wd2h9r8ne103c4gjbqefofih"
  },
  "token": {
    "write": {
      "access_token": "REDACTED",
      "expires_in": 1540924150,
      "restricted_to": "[{\"scope\":\"gcm\"},{\"scope\":\"item_upload\",\"object_id\":340708371275,\"object_type\":\"file\"},{\"scope\":\"manage_skill_invocations\"}]",
      "token_type": "bearer"
    },
    "read": {
      "access_token": "REDACTED",
      "expires_in": 1540924150,
      "restricted_to": "[{\"scope\":\"gcm\"},{\"scope\":\"item_read\",\"object_id\":340708371275,\"object_type\":\"file\"}]",
      "token_type": "bearer"
    }
  },
  "status": {
    "state": "invoked",
    "message": "",
    "error_code": "",
    "additional_info": ""
  },
  "id": "fd1d2e53-35f5-41fb-9c25-4ba326daf2f9_341016304",
  "created_at": "2018-10-29T11:29:09-07:00",
  "trigger": "FILE_CONTENT",
  "enterprise": {
    "type": "enterprise",
    "id": "94713934",
    "name": "Important Photo"
  },
  "source": {
    "type": "file",
    "id": "340708371275",
    "name": "200386_main.jpg",
    "sequence_id": "0",
    "file_version": {
      "id": "359740326875"
    },
    "owner_enterprise_id": "94713934",
    "parent": {
      "id": "56598494243"
    },
    "old_parent_id": "56598494243",
    "collab_accessible_by": {
      "type": "",
      "id": "",
      "name": "",
      "login": ""
    },
    "size": 150031
  },
  "event": {
    "event_id": "fd1d2e53-35f5-41fb-9c25-4ba326daf2f9",
    "event_type": "ITEM_UPLOAD",
    "created_at": "2018-10-29T11:29:09-07:00",
    "created_by": {
      "type": "user",
      "id": "6122733934",
      "name": "Box Skills",
      "login": "boxskills-dev@boxdemo.com"
    },
    "source": {
      "type": "file",
      "id": "340708371275",
      "name": "200386_main.jpg",
      "sequence_id": "0",
      "file_version": {
        "id": "359740326875"
      },
      "owner_enterprise_id": "94713934",
      "parent": {
        "id": "56598494243"
      },
      "old_parent_id": "56598494243",
      "collab_accessible_by": {
        "type": "",
        "id": "",
        "name": "",
        "login": ""
      }
    }
  },
  "parameters": {}
}
```

<!-- markdownlint-enable line-length -->

  </Tab>

</Tabs>

## Payload Components

The Skills event payload can be broken down into the following top level objects:

<!-- markdownlint-disable line-length -->

| Object       | Description                                                                                                                                                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`       | The type of event, which will always be `skill_invocation`.                                                                                                                                                                                                                                                |
| `skill`      | Details of the Custom Skills app that sent the event. This information should be used to verify the source of the request.                                                                                                                                                                                 |
| `token`      | Two [downscoped tokens](guide://authentication/access-tokens/downscope) for accessing the uploaded file. The `read` token should be used to download the file for the processing system, and the `write` token should be used to store metadata back to the uploaded file once the processing is complete. |
| `status`     | The status of the event.                                                                                                                                                                                                                                                                                   |
| `id`         | The unique event ID                                                                                                                                                                                                                                                                                        |
| `created_at` | When the event was created.                                                                                                                                                                                                                                                                                |
| `trigger`    | The type of action that triggered the event.                                                                                                                                                                                                                                                               |
| `enterprise` | Information about the Enterprise where the event was triggered from. This information should be used to verify the source of the request.                                                                                                                                                                  |
| `source`     | Information on the file that was uploaded that triggered the event. Use this information to make API requests to download the file and store metadata back to the file.                                                                                                                                    |
| `event`      | The Skills event information.                                                                                                                                                                                                                                                                              |
| `parameters` | Additional details that may be sent with the event.                                                                                                                                                                                                                                                        |

<!-- markdownlint-enable line-length -->

At a bare minimum, the following three pieces of information needed to download
the file and update metadata for the file:

- **Read token**: Located within the `token` object, the read token will allow
  you   to call the [download file endpoint](endpoint://get_files_id) to
  download the file content to send to the processing system.
- **Write token**: Located within the `token` object, the write token will allow
  you to call the
  [create metadata on file endpoint](e://post_files_id_metadata_id_id)
  once the file processing has completed.
- **File ID**: Located within the `source` object, the file ID will be needed by
  the above two endpoints to determine which file should be downloaded or have
  metadata applied to it.
