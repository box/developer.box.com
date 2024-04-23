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
category_id: downloads
subcategory_id: null
is_index: false
id: downloads/get-url
type: guide
total_steps: 7
sibling_id: downloads
parent_id: downloads
next_page_id: downloads/shared-link
previous_page_id: downloads/file-version
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/downloads/get-url.md
---
# Get Download URL

The official Box SDKs return the binary data when downloading a file. To get the
download URL for the data instead, use the following SDK methods.

<Samples id='get_files_id_content' variant='get_url' >

</Samples>

<Message warning>

# Redirects

If you are not using one of our SDKs its important to make sure your HTTP
client does not automatically follow HTTP redirects. When redirects are
automatically followed, your code will detect the `location` header returned
by the API and follow it to get the binary data.

</Message>

## Download URL expiry

Although this download URL can be passed to a user's browser to allow them to
download the file, the URL does expire and should be requested again for any
further downloads. In most cases the download URL is valid for 15 minutes, after
which a new URL needs to be requested. This expiration time may be subject to
change without any prior notification.

[api]: e://get_files_id_content