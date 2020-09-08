---
related_endpoints:
  - get_file_requests_id
related_guides:
  - file-requests/copy
required_guides: []
related_resources:
  - file_request
---

# Get information for a File Request

To get details about an existing [file request](g://file-requests/template),
 all you need is its unique ID.

```curl
curl -i -X GET "https://api.box.com/2.0/file_requests/42037322" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

<Message notice>

The ID of a file request can be determined by visiting the Box web
app and inspecting the URL. Please 
[check our guide](g://file-requests/template) on setting up a file
request template to learn how to determine a file request ID.

</Message>
