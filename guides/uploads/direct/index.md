---
rank: 1
alias_paths: []
category_id: uploads
subcategory_id: uploads/direct
is_index: true
id: uploads/direct
type: guide
total_steps: 2
sibling_id: uploads
parent_id: uploads
next_page_id: uploads/direct/file-version
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/uploads/direct/index.md
---
# Direct Uploads

The most straightforward way to upload a file to Box is using a direct upload.
Direct uploads allow an application to upload a file in one request. For file
sizes over 50MB we recommend using the [chunked upload endpoint][cu].

The maximum file size limit for uploads to Box varies depending on your account
type. For more details, please refer to our [pricing comparison page][pcp].

* Free personal: 250 MB
* Starter: 2 GB
* Business: 5 GB
* Business Plus: 15 GB
* Enterprise: 50 GB
* Digital Workplace Suite: 50 GB
* Digital Workplace Global Suite: 50 GB
* Digital Business Suite: 50 GB
* Digital Business Global Suite: 50 GB
* Enterprise Plus: 150 GB
* Enterprise Advanced: 500 GB

To confirm the file size limit for your account, log into Box. Click on the
circle in the top right corner and select **Account Settings** from the dropdown
menu. On the page that displays, scroll down to the **Account Details**
section. Your **Max File Size** is listed here.

## Upload domain

Uploads to Box happen via a different domain (`upload.box.com`) than regular API
calls. This is something to keep in mind when writing your own upload code. All
official Box SDKs will take care of choosing the right domain for each API call.

[cu]: g://uploads/chunked
[pcp]: https://www.box.com/pricing