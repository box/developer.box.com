---
rank: 1
alias_paths: []
---

# Direct Uploads

The most straightforward way to upload a file to Box is using a direct upload.
Direct uploads allow an application to upload a file in one request. For file
sizes over 50MB we recommend using the Chunk Upload APIs.

The maximum file size that can be uploaded via this API depends on your
enterprise's Box plan, which at the time of writing is as follows.

* Free personal: 250 MB
* Starter: 2 GB
* Business/Enterprise: 5 GB
* Digital Workplace Suite: 5 GB
* Digital Workplace Global Suite: 5 GB
* Digital Business Suite: 32 GB

## Upload domain

Uploads to Box happen via a different domain (`upload.box.com`) than regular API
calls. This is something to keep in mind when writing your own upload code. All
the Box SDKs will take care of choosing the right domain for the right API call.
