---
rank: 2
related_endpoints:
  - put_folders_id
related_guides:
  - folders/update
required_guides:
  - folders/create
related_resources:
  - folder
alias_paths: []
cId: folders
scId: null
id: folders/update
isIndex: false
---

# Update a folder

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
