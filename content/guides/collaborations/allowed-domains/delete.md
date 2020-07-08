---
rank: 3
related_endpoints:
  - delete_collaboration_whitelist_entries_id
related_guides:
  - collaborations
  - collaborations/allowed-domains/list
  - collaborations/allowed-domains/create
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/collaboration-whitelists/delete-whitelist
---

# Remove a previously allowed domain for collaboration

Deleting a domain from the list of allowed collaboration domains will remove the
ability for collaborations to be created between your enterprise and users in
that domain.

To remove a domain from the allowed list, supply the ID of the list entry to
the delete request. This ID is returned when [allowing a new domain][create]
or [listing the allowed domains in the enterprise][list];

<Samples id='delete_collaboration_whitelist_entries_id' />

[create]: guide://collaborations/allowed-domains/create
[list]: guide://collaborations/allowed-domains/list
