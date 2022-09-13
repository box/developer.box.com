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
---

# Create Folder

To create a folder in Box you will need to provide our API with a `name` for the
new folder, as well as the `id` of the `parent` folder that you would like to
create the new folder within.

<Samples id='post_folders' />

<Message type='notice'>
  # Name restrictions
  
  There are some restrictions to the folder name. Names containing non-printable
  ASCII characters, forward and backward slashes (`/`, `\`), as well as names
  with trailing spaces are prohibited.

  Additionally, the names `.` and `..` are reserved names and therefore
  also prohibited.
</Message>
