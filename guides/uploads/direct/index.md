---
rank: 1
alias_paths: []
category_id: uploads
subcategory_id: uploads/direct
id: uploads/direct
type: guide
is_index: true
total_steps: 2
sibling_id: uploads
parent_id: uploads
next_page_id: uploads/direct/file-version
previous_page_id: ''
---

# Direct Uploads

The most straightforward way to upload a file to Box is using a direct upload.
Direct uploads are restricted to a maximum file size of `50MB` and upload a file
by making 1 API call.

## Upload domain

Uploads to Box happen via a different domain (`upload.box.com`) than regular API
calls. This is something to keep in mind when writing your own upload code. All
the Box SDKs will take care of choosing the right domain for the right API call.
