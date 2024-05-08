---
rank: 2
related_endpoints:
  - post_files_upload_sessions
  - post_files_id_upload_sessions
related_guides:
  - uploads/chunked/upload-part
  - uploads/chunked/commit-session
related_pages: []
required_guides: []
related_resources:
  - upload_session
alias_paths: []
category_id: uploads
subcategory_id: uploads/chunked
is_index: false
id: uploads/chunked/create-session
type: guide
total_steps: 5
sibling_id: uploads/chunked
parent_id: uploads/chunked
next_page_id: uploads/chunked/with-sdks
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/uploads/chunked/create-session.md
---
# Create Upload Session

To create an upload session, call the
[`POST /files/upload_sessions`][createsession] API with the desired `file_name`
and `folder_id` to put the file in, as well as the `file_size` of the file to be
uploaded.

<Samples sample='post_files_upload_sessions' >

</Samples>

To create a session for a new version of an existing file, call the
[`POST /files/:id/upload_sessions`][createsessionversion] API instead. In this
case, the `file_name` and `folder_id` are only required when renaming or moving
the file in the process.

<Samples sample='post_files_id_upload_sessions' >

</Samples>

## Pre-flight Check

Creating an upload session also performs a [preflight check][check], making it
unnecessary to do so separately when working with chunked uploads.

## Response

When a session is created successfully the response includes an [Upload
Session][uploadsession] that includes a session ID, the number of parts, the
part sizes, as well as links to the relevant next API endpoints to use.

```json
{
  "id": "F971964745A5CD0C001BBE4E58196BFD",
  "type": "upload_session",
  "session_expires_at": "2012-12-12T10:53:43-08:00",
  "part_size": 1024,
  "total_parts": 1000,
  "num_parts_processed": 455,
  "session_endpoints": {
    "upload_part": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD",
    "commit": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD/commit",
    "abort": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD",
    "list_parts": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD/parts",
    "status": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD",
    "log_event": "https://upload.box.com/api/2.0/files/upload_sessions/F971964745A5CD0C001BBE4E58196BFD/log"
  }
}
```

The upload session defines the size of the parts to use when uploading the
individual parts.

[createsession]: e://post_files_upload_sessions
[createsessionversion]: e://post_files_id_upload_sessions
[check]: g://uploads/check
[uploadsession]: r://upload_session