---
rank: 10
related_endpoints:
 - post_web_links_id
related_guides:
- trash/permanently-delete-web-link
required_guides: []
related_resources:
  - web-link
---

# Restore Web Link

To restore a web link that has been moved to the trash, but has not yet been
purged, make a `POST` request to the `/web_links/:web_link_id` endpoint. This
will place the web link in the original parent folder if it is still
available, you optionally can specify a `parent` folder.

<Samples id='post_web_links_id' />
