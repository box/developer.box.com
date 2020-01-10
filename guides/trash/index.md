---
rank: 150
category_id: trash
subcategory_id: null
id: trash
type: guide
is_index: true
total_steps: 6
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: trash/permanently-delete-web-link
---

# Trash

Before items are deleted they might end up in a user's trash. The trash can be
managed by a user through any of the Box apps, and by an application via the
API.

## Two-stage Deletion Process

Box uses a two-stage process to remove or **trash** [files], [folders], and
[web links] before permanently deleting them.

By default, items can be restored after they are **trashed** within a 30 day
time frame before they are **purged**. The purge window can be modified by
an enterprise administrator.

More details can be found in the Box community article on [Managing Trash]

[files]: https://box.dev/en/reference/resources/file/
[folders]: https://box.dev/en/reference/resources/folder/
[web links]: https://box.dev/en/reference/resources/web-link/
[Managing Trash]: https://community.box.com/t5/Managing-Files-and-Folders/Manage-Trash/ta-p/19212
