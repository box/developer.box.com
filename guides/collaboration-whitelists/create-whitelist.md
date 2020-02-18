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
category_id: collaboration-whitelists
subcategory_id: null
is_index: false
id: collaboration-whitelists/create-whitelist
type: guide
total_steps: 3
sibling_id: collaboration-whitelists
parent_id: collaboration-whitelists
next_page_id: collaboration-whitelists/list-whitelists
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/collaboration-whitelists/create-whitelist.md
---

<!-- alex disable whitelist -->

# Create Collaboration Whitelist

Creating a new collaboration whitelist will set a new domain, such as
`example.com`, for which collaborations may be created within the enterprise.

<Samples id='post_collaboration_whitelist_entries' >

</Samples>

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
