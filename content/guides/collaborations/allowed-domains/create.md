---
rank: 1
related_endpoints:
  - post_collaboration_whitelist_entries
related_guides:
  - collaborations
  - collaborations/allowed-domains/list
  - collaborations/allowed-domains/delete
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /guides/collaboration-whitelists/create-whitelist
---

# Allow a domain for collaboration

An enterprise that normally restricts creating collaborations can
add domains, such as `example.com`, to a list for which collaborations may be
created within the enterprise. 

<Samples id='post_collaboration_whitelist_entries' />

The
[endpoint](endpoint://post_collaboration_whitelist_entries)
will require the `domain` to allow the collaborations between, and a
`direction`, which may be set to:

* `inbound`: Whether external users may be collaborated in on content in your
enterprise.
* `outbound`: Whether your enterprise managed users may be collaborated in on
content owned within an external enterprise.
* `both`: Both of the above.

Supply both parameter to set up the new allowed domain.

<Samples id='post_collaboration_whitelist_entries' />
