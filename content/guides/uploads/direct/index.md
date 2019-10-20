---
rank: 1
alias_paths: []
---

# Direct Uploads

The most straightforward way to upload a file to Box is using a direct upload.
Direct uploads are restricted to a maximum file size of `50MB` and upload a file
by making 1 API call.

## Upload domain

Uploads to Box happen via a different domain (`upload.box.com`) than regular API
calls. This is something to keep in mind when writing your own upload code. All
the Box SDKs will take care of choosing the right domain for the right API call.
