---
rank: 3
related_endpoints:
  - put_folders_id
related_guides:
  - folders/single/update
required_guides: []
related_resources:
  - folder
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/rename
type: guide
total_steps: 7
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/move
previous_page_id: folders/single/update
---

# Rename Folder

To rename a folder in Box you will need to provide our API with a new `name` for
the folder.

<Samples id='put_folders_id' variant='rename' >

</Samples>

<Message type='notice'>

# Name restrictions

There are some restrictions to the file name. Names containing non-printable
ASCII characters, forward and backward slashes (`/`, `\`), as well as names
with trailing spaces are prohibited.

Additionally, the names `.` and `..` are reserved names and therefore
also prohibited.

</Message>
