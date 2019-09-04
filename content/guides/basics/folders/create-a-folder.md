---
rank: 1
tag: folders
related_endpoints:
  - post_folders_id
related_guides:
  - basics/folders/-folder
  - basics/folders/copy-a-folder
required_guides: []
alias_paths: []
---

# Create a folder

To create a folder in Box you will need to provide our API with a `name` for the
new folder, as well as the `id` of the `parent` folder that you would like to
create the new folder within.

<Samples id='post_folders' />

<Message>
  # Name restrictions
  
  There are some restrictions to the file name. Names containing non-printable
  ASCII characters, forward and backward slashes (`/`, `\`), as well as names
  with trailing spaces are prohibited.

  Additionally, the special names `.` and `..` are reserved names and therefore
  also prohibited.
</Message>
