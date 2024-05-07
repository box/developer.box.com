---
rank: 5
related_endpoints:
  - put_files_id
related_guides:
  - shared-links/create-or-update
  - shared-links/remove
  - shared-links/find-for-item
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: shared-links
subcategory_id: null
is_index: false
id: shared-links/permissions
type: guide
total_steps: 4
sibling_id: shared-links
parent_id: shared-links
next_page_id: shared-links
previous_page_id: shared-links/remove
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/shared-links/permissions.md
---
# Shared Link Permissions

The shared link resource has three permissions that can be updated using the
`permissions` field: `can_preview`, `can_download`, `can_edit`.

<Message type='warning'>

The `can_edit` option can only be `true` for files. Also, if the admin has
restricted shared links from having edit access in the admin console, you
will not be able to set `can_edit` to `true`.

</Message>

```curl
curl -i -X PUT 'https://api.box.com/2.0/files/123456789?fields=shared_link' \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer [ACCESS TOKEN]' \
    -d '{
      "shared_link": {
        "permissions": {
          "can_preview": true,
          "can_download": true,
          "can_edit": true
        }
      }
    }'
```