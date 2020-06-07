---
rank: 10
related_endpoints:
  - post_web_links_id
related_guides:
  - trash/permanently-delete-web-link
required_guides: []
related_resources:
  - web-link
category_id: trash
subcategory_id: null
is_index: false
id: trash/restore-web-link
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash/permanently-delete-web-link
previous_page_id: trash/permanently-delete-folder
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/trash/restore-web-link.md
---

# Restore Web Link

To restore a web link that has been moved to the trash, but has not yet been
purged, make a `POST` request to the `/web_links/:web_link_id` endpoint. This
will place the web link in the original parent folder if it is still
available, you optionally can specify a `parent` folder.

<Samples id='post_web_links_id' >

</Samples>
