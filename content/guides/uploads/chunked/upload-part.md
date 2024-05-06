---
rank: 4
related_endpoints:
  - put_files_upload_sessions_id
related_guides:
  - uploads/chunked/commit-session
related_pages: []
required_guides:
  - uploads/chunked/create-session
related_resources:
  - upload_part
alias_paths: []
---

# Upload Part

When you want to upload a large file,
you can split it into smaller parts and
upload them using the Upload Part API.

## Create Upload Session

First, [create an upload session][createsession]. The resulting
object defines the size of each part and the number of parts to upload.

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

## Split File

Split the file into parts to be uploaded.
If you want to use the command line,
use the `split` command:

```bash
split -b <PART_SIZE> <FILE_NAME> <YOUR_PART_NAME>
```

For example:

```bash
split -b 8388608 video.mp3 videopart
```

This will result in your file divided into several files.

## Get SHA Digest

To get the value for the `SHA` digest,
use the following openSSL command
to encode the file part:

```bash
openssl sha1 -binary <FILE_PART_NAME> | base64
```

For example:

```bash
openssl sha1 -binary videoparta | base64
```

The result is a base-64 encoded message used to verify the upload.

## Upload Part

Upload the bytes for the part you want to upload, specifying the byte
range for the part and the `SHA` digest to ensure the content is
uploaded correctly.

<Samples id='put_files_upload_sessions_id' />

### Content Range

Each part’s size must be exactly equal in size to the part size
specified in the upload session that you created.
One exception is the last part of the file, as
this can be smaller. The `Content-Range` parameter
definition follows this pattern:

```yaml
-H "Content-Range: bytes <LOWER_BOUND>-<HIGHER_BOUND>/<TOTAL_SIZE>"
```

When providing the value for `Content-Range`, remember that:

* The lower bound of each part's byte range must be a multiple of the part size.
* The higher bound must be a multiple of the part size - 1.

For example, if the part size is `8388608`,
the content range for the first two parts will be:

```yaml
-H "Content-Range: bytes 0-8388607/32127641" \ ## first part
-H "Content-Range: bytes 8388608-16777215/32127641" \ ## second part
```

## Response

After each upload, the resulting response includes
the `ID` and `SHA` of the part uploaded.

```json
{
  "part_id": "6F2D3486",
  "offset": 16777216,
  "size": 3222784,
  "sha1": "134b65991ed521fcfe4724b7d814ab8ded5185dc"
}
```

<Message warning>
  Keep all the JSON responses from all part
  uploads as they are needed to [commit the session][commit].
</Message>

## Range Overlap

If a part upload request fails with any error code
`range_overlaps_existing_part` then the application
made a mistake in cutting up the file into parts
and tried to upload a part into a range that already had
content uploaded for it. The application should assume
that this last part was not persisted to the session.

## Parallel uploads

Although you can upload the parts in parallel, try to upload them in
order as much as is possible. Parts with a lower byte offset should be uploaded
before parts with a higher byte offset.

The recommended approach is to upload 3 to 5 parts in parallel from a queue
of parts, ordered by byte offset. If a part upload fails, retry it
before you upload further parts.

[commit]: g://uploads/chunked/commit-session
[createsession]: g://uploads/chunked/create-session