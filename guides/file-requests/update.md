---
related_endpoints:
  - put_file_requests_id
related_guides:
  - file-requests/copy
  - file-requests/get
required_guides: []
related_resources:
  - file_request
category_id: file-requests
subcategory_id: null
is_index: false
id: file-requests/update
rank: 4
type: guide
total_steps: 5
sibling_id: file-requests
parent_id: file-requests
next_page_id: file-requests/delete
previous_page_id: file-requests/get
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/file-requests/4-update.md
---
# Update a File Request

To update some of the basic details for an existing
file request, all you need is its unique ID.

<Samples id='put_file_requests_id' >

</Samples>

For more details on the different fields that can be updated when creating
a template, please see the reference documentation for the
[`POST /file-requests/:id/update`](e://put_file_requests_id) API.

<Message notice>

The ID of a file request can be determined by visiting the Box web
app and inspecting the URL. Please
[check our guide](g://file-requests/template) on setting up a file
request template to learn how to determine a file request ID.

</Message>