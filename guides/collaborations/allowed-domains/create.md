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
category_id: collaborations
subcategory_id: collaborations/allowed-domains
is_index: false
id: collaborations/allowed-domains/create
type: guide
total_steps: 3
sibling_id: collaborations/allowed-domains
parent_id: collaborations/allowed-domains
next_page_id: collaborations/allowed-domains/list
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/allowed-domains/create.md
---
# Allow a domain for collaboration

An enterprise that normally restricts creating collaborations can
add domains, such as `example.com`, to a list for which collaborations may be
created within the enterprise.

<Samples id='post_collaboration_whitelist_entries' >

</Samples>

The
[endpoint](endpoint://post_collaboration_whitelist_entries)
will require the `domain` to allow the collaborations between, and a
`direction`, which may be set to:

* `inbound`: Whether external users may be collaborated in on content in your enterprise.
* `outbound`: Whether your enterprise managed users may be collaborated in on content owned within an external enterprise.
* `both`: Both of the above.

Supply both parameter to set up the new allowed domain.

<Samples id='post_collaboration_whitelist_entries' >

</Samples>