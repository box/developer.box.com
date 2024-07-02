---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/deep-linking
  - /docs/deep-linking-to-box-mobile-apps
  - /best-practices/mobile-deep-linking
---

# Deep Linking

Box’s mobile applications support deep linking into folder and file objects.
From a web page or native app it is possible to deep link to open an object
directly in Box.

The following URLs are supported in Box’s mobile applications:

| Application     | Object Type | Deep Link URL                          | iOS & Android |
| --------------- | ----------- | -------------------------------------- | ------------- |
| **Box**         | Folder      | `boxapp://folder?id=[folderid]`        | Version 3.7+  |
|                 | File        | `boxapp://file?id=[fileid]`            |               |
|                 | Shared Link | `boxapp://sharedlink?url=[sharedlink]` |               |
|                 |             |                                        |               |
| **Box for EMM** | Folder      | `boxemm://folder?id=[folderid]`        | Version 3.7+  |
|                 | File        | `boxemm://file?id=[fileid]`            |               |
|                 | Shared Link | `boxemm://sharedlink?url=[sharedlink]` |               |
