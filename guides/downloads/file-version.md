---
rank: 2
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
id: downloads/file-version
type: guide
total_steps: 6
sibling_id: downloads
parent_id: downloads
next_page_id: downloads/get-url
previous_page_id: downloads/file
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/downloads/file-version.md
---
# Download File Version

To download a specific file version, pass the [`GET /files/:id/content`][api]
the ID of the file to get the content for, as well as its version ID.

<Samples id='get_files_id_content' variant='for_version' >

</Samples>

## Download URL

When not using the SDKs, this API call will return a `HTTP 302 Found` status
code, with a `location` header containing a link to the download URL, which
looks something like this.

```sh
https://dl.boxcloud.com/d/1/[long-random-string]/download
```

By using the `-L` flag in cURL we are able to automatically follow this
redirect.

<Message>

In our SDKs this will result in the binary data to be downloaded. In the API
this will result in a download URL being returned via the `location` header.

It is possible to [get the download URL][downloadurl] via the SDKs as well.

</Message>

## Download URL expiry

Although this download URL can be passed to a user's browser to allow them to
download the file, the URL does expire and should be requested again for any
further downloads.

## File not ready

If the file is not ready to be downloaded yet a `retry-after` header will be
returned indicating the time in seconds after which the file will be available
for the client to download.

This response can occur when the file was uploaded immediately before the
download request.

[api]: e://get_files_id_content
[downloadurl]: g://downloads/get-url