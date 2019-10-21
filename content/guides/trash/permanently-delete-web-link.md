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
---

# Permanently Delete Web Link

Once a web link has been moved to the trash, it will remain in the trash for 30
days by default before being purged. Administrators of Business or
Enterprise accounts can alter the purge window. If you wish to permanently
delete the web link from the trash before the purge window expires, make a
`DELETE` request to `/web_links/:web_link_id/trash` using the trashed web
link's `ID`.

<Samples id='delete_web_links_id_trash' />
