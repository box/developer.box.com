---
rank: 3
related_guides:
  - embed/box-view/create-preview
required_guides:
  - embed/box-view/setup
alias_paths: []
---

# Upload Files

To generate a preview embed link for a file, that file needs to be uploaded to
Box to be converted for us. Conversion is triggered automatically upon upload
(for most document types) or on first preview (for video and 3D) and no
explicit action is required by the user to convert once the file is uploaded.
In either case, conversion is triggered only once per file, and the generated
assets are available for as long as the original file is present in Box.

## Uploading a File

To upload a file using the [Box SDKs](pages://sdks-and-tools/) or directly with
the APIs, you need to use the client ID and app token that were generated
during [application setup](guide://embed/box-view/setup) to authenticate your
application.

<CTA to='guide://authentication/app-token/'>
  Authenticate your application
</CTA>

Once an authenticated client has been created, it may be used to upload files
directly to the app token application to be converted.

<CTA to='guide://uploads/direct/for-new-file/'>
  Upload files to Box
</CTA>
