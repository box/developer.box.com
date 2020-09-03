---
rank: 11
related_endpoints:
  - delete_web_links
  - delete_web_links_trash
related_guides:
  - trash/restore-web-link
required_guides: []
related_resources:
  - web-link
category_id: trash
subcategory_id: null
is_index: false
id: trash/permanently-delete-web-link
type: guide
total_steps: 6
sibling_id: trash
parent_id: trash
next_page_id: trash
previous_page_id: trash/restore-web-link
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/trash/permanently-delete-web-link.md
---
# Permanently Delete Web Link

Once a web link has been moved to the trash, it will stay in the trash for 30
days by default before being purged. Administrators of Business or
Enterprise accounts can alter the purge window. If you wish to permanently
delete the web link from the trash before the purge window expires, make a
`DELETE` request to `/web_links/:web_link_id/trash` using the trashed web
link's `ID`.

<Samples id='delete_web_links_id_trash' >

</Samples>