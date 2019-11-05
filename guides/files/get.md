---
rank: 1
related_endpoints:
  - get_files_id
related_guides:
  - downloads/file
required_guides: []
alias_paths: []
cId: files
scId: null
id: files/get
isIndex: false
---

# Get File Information

To get a file's information, not it's content, call the
[`GET /files/:id`](e://get-files-id) API with the `id` of the file.

<Samples id='get_files_id' >

</Samples>

## File ID

The `id` for any file can be determined by visiting a file in the web
application and copying the `id` from the URL. For example, for the URL
`https://*.app.box.com/file/123` the `file_id` is `123`.

## Additional fields

To get more of the fields for a file, make sure to pass along the `fields`
query parameter.

<CTA to='g://api-calls/request-extra-fields'>
Learn about requesting extra fields

</CTA>
