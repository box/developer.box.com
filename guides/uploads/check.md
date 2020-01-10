---
rank: 1
related_endpoints:
  - options_files_content
  - options_files_id_content
  - post_files_content
  - post_files_id_content
related_guides:
  - uploads/direct/file
  - uploads/direct/file-version
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: uploads
subcategory_id: null
id: uploads/check
type: guide
is_index: false
total_steps: 1
sibling_id: uploads
parent_id: uploads
next_page_id: uploads
previous_page_id: ''
---

<!-- alex disable failed -->

# Preflight Check

The Pre-flight check API allows an application to verify that a file will be
accepted by Box before it uploads any bytes. It can both be used for new files,
as well as uploading new versions of existing files.

## Checklist

Preflight checks perform all the same checks as if the file was
actually uploaded including:

* The permission of the application and the user to upload to the folder
* Any file name collisions
* Any file size caps and limits
* Any folder and file name restrictions
* Any folder and account storage quotas

## Check for new file

To perform a check for a new file, call the
[`OPTIONS /files/content`](e://options_files_content) API with the same
parameters (except for the binary content) as if uploading an actual file.

<Samples id='options_files_content' >

</Samples>

## Check for new file version

To perform a check for a new version of a file, call the
[`OPTIONS /files/:id/content`](e://options_files_content) API with the same
parameters (except for the binary content) as if uploading an actual file.

<Samples id='options_files_id_content' >

</Samples>

## Checks & Chunk Uploads

When performing a [chunked upload][chunked], performing a preflight check is not
required as [creating an Upload Session][chunkedsession] also performs a
preflight check.

## Response codes

When the API call detects any problems, a HTTP `409 Conflict` status code is
returned with a message to describe the possible conflict. If no problems were
discovered, it returns a HTTP `200 OK` status code and the upload can proceed.

A `200 OK` response does not guarantee that the upload call will actually
succeed. Pre-flight checks have show to reduce failed uploads by over 99%, yet
concurrency issues still come into play when uploading a file.

Highly active folders, common filenames, and accounts near their quota
limits may get a `200 OK` for the preflight check, and then have a real conflict
during the actual upload.

## Response body

In many cases, the preflight check will return valuable data in the API response
when a conflict has been detected. For example, when a name collision has been
detected, the application can use the `SHA-1` that is returned in the error
response to check if the existing file is identical to the one it is trying to
upload.

[chunked]: g://uploads/chunked
[chunkedsession]: g://uploads/chunked/create-session
