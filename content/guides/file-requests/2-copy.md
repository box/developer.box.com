---
related_endpoints:
  - post_file_requests_id_copy
related_guides: []
required_guides:
  - file-requests/template
related_resources:
  - file_request
---

# Copy a File Request

To create a copy of an existing [template](g://file-requests/template) file
request, all you need is its unique ID, and the ID of the folder to apply the
new file request to.

<Samples id='post_file_requests_id_copy' />

<Message notice>

The ID of a folder and file request can be determined by visiting the Box web
app and inspecting the URL.

The folder ID is the number at the end of the URL when visiting a folder, for
example `app.box.com/folder/123` is the URL for the folder with ID `123`.

For a file request, please [check our guide](g://file-requests/template)
on setting up a file request template to learn how to determine a file request
ID.

</Message>

## Updating a file request on copy

It is possible to make some basic changes to a file request when copying from
a template. The file request's title, description, status and a few more other
settings can be updated when the file request is copied from the template.

```curl
curl -i -X POST "https://api.box.com/2.0/file_requests/2342235/copy" \
    -H "Authorization: Bearer <ACCESS_TOKEN>" \
    -d '{
      "title": "Please upload required documents",
      "description": "Please upload required documents",
      "status": "active",
      "is_email_required": true,
      "is_description_required": false,
      "folder": {
        "id": "342323423"
      }
    }'
```

<Message notice>

For more details on the different fields that can be updated when creating
a template, please see the reference documentation for the
[`POST /file-requests/:id/copy`](e://post_file_requests_id_copy) API.

</Message>
