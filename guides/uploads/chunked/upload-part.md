---
rank: 2
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
category_id: uploads
subcategory_id: uploads/chunked
is_index: false
id: uploads/chunked/upload-part
type: guide
total_steps: 5
sibling_id: uploads/chunked
parent_id: uploads/chunked
next_page_id: uploads/chunked/commit-session
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/uploads/chunked/upload-part.md
---

# Upload Part

To upload a part, first [create an upload session][createsession]. The resulting
object defines the size of each part and the number of parts to upload.

Then, upload the bytes for the part you want to upload, specifying the byte
range for the part, as well as the `SHA` digest to ensure the content is
uploaded correctly.

<Samples id='put_files_upload_sessions_id' >

</Samples>

## Part Size

Each part’s size must be exactly equal in size to the part size specified in the
upload session that was created. One exception is the last part of the file, as
this is allowed to be smaller.

<Message>

# Tip

As a result, the lower bound of each part's byte range should be
a multiple of the part size.

</Message>

## Response

After each upload, the resulting response includes the ID and SHA of the part
uploaded.

```json
{
  "part_id": "6F2D3486",
  "offset": 16777216,
  "size": 3222784,
  "sha1": "134b65991ed521fcfe4724b7d814ab8ded5185dc"
}
```

<Message warning>

The client is recommended to log keep all the JSON responses from all part
uploads as they are needed to [commit the session][commit].

</Message>

## Range Overlap

If a part upload request fails with any error code
`range_overlaps_existing_part` then the application made a mistake in cutting up
the file into parts and tried to upload a part into a range that already had
content uploaded for it. The application should assume that this last part was not
persisted to the session.

## Parallel uploads

Although parts can be uploaded in parallel, parts **should** be uploaded in
order as much as is possible. Parts with a lower byte offset should be uploaded
before parts with a higher byte offset.

The recommended approach is to upload 3 to 5 parts in parallel from a queue
of parts, ordered by byte offset. If a part upload fails, it should be retried
before later parts are uploaded.

[commit]: g://uploads/chunked/commit-session
[createsession]: g://uploads/chunked/create-session
