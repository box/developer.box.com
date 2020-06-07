---
rank: 1
related_endpoints:
  - post_files_id
  - delete_files_id
related_guides:
  - trash/permanently-delete-file
required_guides: []
related_resources:
  - files
category_id: trash
subcategory_id: null
is_index: false
id: trash/restore-file
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash/permanently-delete-file
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/trash/restore-file.md
---

# Restore File

To restore a file that has been moved to the trash, but has not yet been
purged, make a `POST` request to the `/files/:file_id` endpoint. This will
place the file in the original folder if it is still available, or you
optionally can specify a `parent` folder.

<Samples id='post_files_id' >

</Samples>
