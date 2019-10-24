---
rank: 1
related_endpoints:
  - post_collaboration_whitelist_entries
related_guides:
  - collaborations
  - collaboration-whitelists/list-whitelists
  - collaboration-whitelists/delete-whitelist
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
cId: collaboration-whitelists
scId: null
id: collaboration-whitelists/create-whitelist
isIndex: false
---

# Create Collaboration Whitelist

Creating a new collaboration whitelist will set a new domain, such as
`example.com`, for which collaborations may be created within the enterprise.

The
[create collaboration whitelist endpoint](endpoint://post_collaboration_whitelist_entries)
will require the `domain` to allow the collaborations between, and a
`direction`, which may be set to:

* `inbound`: Whether external users may be collaborated in on content in your
enterprise.
* `outbound`: Whether your enterprise managed users may be collaborated in on
content owned within an external enterprise.
* `both`: Both of the above.

Supply both parameter to set up the new collaboration whitelist.

<Samples id='post_collaboration_whitelist_entries' >

</Samples>
