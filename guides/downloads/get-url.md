---
rank: 3
related_endpoints:
  - get_files_id_content
related_guides:
  - downloads/file
  - uploads/direct/file
required_guides: []
related_resources: []
alias_paths: []
cId: downloads
scId: null
id: downloads/get-url
isIndex: false
---

# Get Download URL

The official Box SDKs return the binary data when downloading a file. To get the
download URL for the data instead, use the following SDK methods.

<Samples id='get_files_id_content' variant='get_url' >

</Samples>

## Download URL expiry

Although this download URL can be passed to a user's browser to allow them to
download the file, the URL does expire and should be requested again for any
further downloads.

[api]: e://get_files_id_content
