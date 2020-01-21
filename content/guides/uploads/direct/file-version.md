---
rank: 2
related_endpoints:
  - options_files_id_content
  - post_files_id_content
related_guides: []
related_pages: []
required_guides:
  - uploads/check
related_resources: []
alias_paths: []
---

# Upload File Version

To upload a new version of a file to Box via direct upload, make an API call to
the [`POST /files/:id/content`][upload] API with the content of the file, the
desired file name, and the folder ID.

<Samples id='post_files_id_content' />

<Message>
  # Preflight check

  To prevent wasting time and bandwidth uploading a file that is going to be
  rejected it is recommended to perform a [pre-flight check][preflight] before
  uploading the file.
</Message>

## Request Format

The request body of this API uses a content type of `multipart/form-data`. This
is used to transmit two parts, namely the file attributes and the file's actual
content.

The first part is called `attributes` and contains a JSON object with
information about the file, including the name of the file and the `id` of the
parent folder.

The following is an example a `test.txt` being uploaded to the root folder of
the user.

```sh
POST /api/2.0/files/123/content HTTP/1.1
Host: upload.box.com
Authorization: Bearer [ACCESS_TOKEN]
Content-Length: 343
Content-Type: multipart/form-data; boundary=------------------------9fd09388d840fef1

--------------------------9fd09388d840fef1
Content-Disposition: form-data; name="attributes"

{"name":"test.txt", "parent":{"id":"0"}}
--------------------------9fd09388d840fef1
Content-Disposition: form-data; name="file"; filename="test.txt"
Content-Type: text/plain

Test file text.

--------------------------9fd09388d840fef1--
```

<Message warning>
  The `attributes` JSON part of the multi-part body must come before the `file`
  part of the multipart form data. When out of order, the API will return a HTTP
  `400` status code with an error code of `metadata_after_file_contents`.
</Message>

## Options

To learn more about all the parameters available when uploading files, head over
to the [reference documentation for this API call][upload]. These parameters
include a `Content-MD5` that can be set to ensure a file is not corrupted in
transit, and the ability to explicitly specify the file creation time at a
different time than the upload time.

For file versions an additional [`If-Match` header][consistency] can be passed
along to prevent overwriting a file that has already been updated since the
application last inspected the content.

## Restrictions

Direct uploads are limited to a maximum file size of 50MB. For larger files,
please use the [chunked upload APIs][chunked].

Upload limits are dictated by the type of account of the authenticated user.
More information can be found [in our community article on this topic][fsizes].

[preflight]: g://uploads/check
[chunked]: g://uploads/chunked
[upload]: e://post_files_id_content
[consistency]: g://api-calls/ensure-consistency
[fsizes]: https://community.box.com/t5/Upload-and-Download-Files-and/Understand-the-Maximum-File-Size-You-Can-Upload-to-Box/ta-p/50590
