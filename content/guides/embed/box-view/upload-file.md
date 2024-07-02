---
rank: 3
related_guides:
  - embed/box-view/create-preview
required_guides:
  - embed/box-view/setup
alias_paths: []
---

# Upload Files

To generate a preview embed link for a file, the file must be uploaded to
Box. For most file types, conversion is triggered automatically upon upload.
However, for video and 3D files, it is triggered upon first preview. No explicit
action is required by the user to begin conversion. In either case, conversion
is triggered only once per file, and the generated assets are available for as
long as the original file is stored in Box.

## Uploading a File

To upload a file using the [Box SDKs](pages://sdks-and-tools/) or directly with
the APIs, you need to use the client ID and App Token that are generated
during [application setup](guide://embed/box-view/setup) to authenticate your
application.

<CTA to='guide://authentication/app-token'>
  Authenticate your application
</CTA>

Once an authenticated client has been created, it may be used to upload files
directly to the App Token application for conversion.

<CTA to='guide://uploads/direct/file'>
  Upload files to Box
</CTA>
