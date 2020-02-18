---
rank: 100
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: files
subcategory_id: null
is_index: false
id: files/limitations
type: guide
total_steps: 2
sibling_id: files
parent_id: files
next_page_id: ''
previous_page_id: files
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/files/limitations.md
---

# Limitations

A few limitations exists when working with files.

## Name restrictions

There are some restrictions to a file's name. Names containing non-printable
ASCII characters, forward and backward slashes (`/`, `\`), and protected names like
`.` and `..` are automatically sanitized by removing the non-allowed characters.
