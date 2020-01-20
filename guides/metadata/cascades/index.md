---
rank: 3
alias_paths: []
category_id: metadata
subcategory_id: metadata/cascades
id: metadata/cascades
type: guide
is_index: true
total_steps: 0
sibling_id: metadata
parent_id: metadata
next_page_id: ''
previous_page_id: ''
---

# Metadata Cascade Policies

A Metadata Cascade Policy describes automatic cascading behavior for a
[Metadata Instance][instance] on a folder, allowing the metadata to
automatically be applied to all the items within that folder.

For example, an application might assign the `projectData` metadata template to
a project folder, including the value of the project ID. By then assigning the
cascade policy to this template it allows Box to automatically apply that same
metadata to any existing and new files or folders within that folder.

## Permissions

Any user with edit permissions on a folder can create metadata cascade policies
for that given folder. Policies are assigned to exactly one folder and exactly
one metadata instance on that folder.

## Limitations

There is some delay from file upload to the metadata being applied. This very
much depends on the number of items in a folder.

[instance]: g://metadata/instances
