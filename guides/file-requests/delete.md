---
related_endpoints:
  - delete_file_requests_id
related_guides: []
required_guides:
  - file-requests/copy
  - file-requests/get
related_resources:
  - file_request
category_id: file-requests
subcategory_id: null
is_index: false
id: file-requests/delete
rank: 5
type: guide
total_steps: 5
sibling_id: file-requests
parent_id: file-requests
next_page_id: file-requests
previous_page_id: file-requests/update
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/file-requests/5-delete.md
---
# Delete a File Request

To delete a file request, all you need is its unique ID.

```curl
curl -i -X DELETE "https://api.box.com/2.0/file_requests/42037322" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

<Message notice>

The ID of a file request can be determined by visiting the Box web
app and inspecting the URL. Please
[check our guide](g://file-requests/template) on setting up a file
request template to learn how to determine a file request ID.

</Message>