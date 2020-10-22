---
rank: 1
related_endpoints:
  - post_folders
related_guides:
  - folders/single/update
  - folders/single/copy
required_guides: []
related_resources:
  - folder
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/create
type: guide
total_steps: 10
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/update
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/folders/single/create.md
---
# Create Folder

To create a folder in Box you will need to provide our API with a `name` for the
new folder, as well as the `id` of the `parent` folder that you would like to
create the new folder within.

<Samples id='post_folders' >

</Samples>

<Message type='notice'>

# Name restrictions

There are some restrictions to the file name. Names containing non-printable
ASCII characters, forward and backward slashes (`/`, `\`), as well as names
with trailing spaces are prohibited.

Additionally, the names `.` and `..` are reserved names and therefore
also prohibited.

</Message>