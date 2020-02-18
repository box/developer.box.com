---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/deep-linking
  - /docs/deep-linking-to-box-mobile-apps
category_id: best-practices
subcategory_id: null
is_index: false
id: best-practices/mobile-deep-linking
type: guide
total_steps: 3
sibling_id: best-practices
parent_id: best-practices
next_page_id: best-practices/branding-guidelines
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/best-practices/mobile-deep-linking.md
---

# Mobile Deep Linking

Box’s mobile applications support deep linking into folder and file objects.
From a web page or native app it is possible to deep link to open an object
directly in Box.

The following URLs are supported in Box’s mobile applications:

<!-- markdownlint-disable line-length -->

| Application     | Object Type | Deep Link URL                          | iOS & Android |
| --------------- | ----------- | -------------------------------------- | ------------- |
| **Box**         | Folder      | `boxapp://folder?id=[folderid]`        | Version 3.7+  |
|                 | File        | `boxapp://file?id=[fileid]`            |               |
|                 | Shared Link | `boxapp://sharedlink?url=[sharedlink]` |               |
|                 |             |                                        |               |
| **Box for EMM** | Folder      | `boxemm://folder?id=[folderid]`        | Version 3.7+  |
|                 | File        | `boxemm://file?id=[fileid]`            |               |
|                 | Shared Link | `boxemm://sharedlink?url=[sharedlink]` |               |

<!-- markdownlint-enable line-length -->
