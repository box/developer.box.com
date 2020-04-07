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
---

# Get Download URL

The official Box SDKs return the binary data when downloading a file. To get the
download URL for the data instead, use the following SDK methods.

<Samples id='get_files_id_content' variant='get_url' />

<Message warning>
 
# Redirects

If you ar enot using one of our SDKs its important to make sure your HTTP client
does not automatically follow HTTP redirects. When redirects are automatically
followed, your code will detect the `Location` header returned by the API and
follow it to get the binary data.

</Message>

## Download URL expiry

Although this download URL can be passed to a user's browser to allow them to
download the file, the URL does expire and should be requested again for any
further downloads. In most cases the download URL is valid for 15 minutes, after
which a new URL needs to be requested. This expiration time may be subject to
change without any prior notification.

[api]: e://get_files_id_content
