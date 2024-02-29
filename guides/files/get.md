---
rank: 1
related_endpoints:
  - get_files_id
related_guides:
  - downloads/file
required_guides: []
alias_paths: []
category_id: files
subcategory_id: null
is_index: false
id: files/get
type: guide
total_steps: 2
sibling_id: files
parent_id: files
next_page_id: files/limitations
previous_page_id: ''
source_url: 'https://github.com/box/developer.box.com/blob/main/content/guides/files/get.md'
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