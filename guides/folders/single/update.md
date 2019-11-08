---
rank: 2
related_endpoints:
  - put_folders_id
related_guides:
  - folders/single/update
required_guides:
  - folders/single/create
related_resources:
  - folder
alias_paths: []
cId: folders
scId: folders/single
id: folders/single/update
isIndex: false
---

# Update Folder

To update a folder in Box you will need to call the following API.

<Samples id='put_folders_id' >

</Samples>

## Name restrictions

There are some restrictions to the file name. Names containing non-printable
ASCII characters, forward and backward slashes (`/`, `\`), as well as names
with trailing spaces are prohibited.

Additionally, the special names `.` and `..` are reserved names and therefore
also prohibited.

## Timeout

Timeout for this operation is 60 seconds. The operation will complete
after a `HTTP 503` has been returned.
