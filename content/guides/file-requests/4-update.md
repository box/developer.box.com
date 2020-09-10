---
related_endpoints:
  - put_file_requests_id
related_guides: 
  - file-requests/copy
  - file-requests/get
required_guides: []
related_resources:
  - file_request
---

# Update a File Request

To update some of the basic details for an existing 
file request, all you need is its unique ID.

<Samples id='put_file_requests_id' />

For more details on the different fields that can be updated when creating
a template, please see the reference documentation for the
[`POST /file-requests/:id/update`](e://put_file_requests_id) API.

<Message notice>

The ID of a file request can be determined by visiting the Box web
app and inspecting the URL. Please 
[check our guide](g://file-requests/template) on setting up a file
request template to learn how to determine a file request ID.

</Message>
