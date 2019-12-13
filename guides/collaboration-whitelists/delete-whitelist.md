---
rank: 3
related_endpoints:
  - delete_collaboration_whitelist_entries_id
related_guides:
  - collaborations
  - collaboration-whitelists/list-whitelists
  - collaboration-whitelists/create-whitelist
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
cId: collaboration-whitelists
scId: null
id: collaboration-whitelists/delete-whitelist
isIndex: false
---

<!-- alex disable whitelist -->

# Delete Collaboration Whitelist

Deleting a collaboration whitelist entry will remove the ability for
collaborations to be created between your enterprise and the domain listed in
that whitelist.

To delete a collaboration whitelist, supply the domain whitelist entry ID to
the delete request, which is returned when [creating a new whitelist entry][create]
or [listing whitelists in the enterprise][list];

<Samples id='delete_collaboration_whitelist_entries_id' >

</Samples>

[create]: guide://collaboration-whitelists/create-whitelist
[list]: guide://collaboration-whitelists/list-whitelists
