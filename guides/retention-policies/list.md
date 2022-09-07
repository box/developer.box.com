---
rank: 1
related_endpoints:
  - get_retention_policies
related_guides:
  - retention-policies/get
related_resources:
  - retention_policies
required_guides: []
alias_paths: []
category_id: retention-policies
subcategory_id: null
is_index: false
id: retention-policies/list
type: guide
total_steps: 2
sibling_id: retention-policies
parent_id: retention-policies
next_page_id: retention-policies/get
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/retention-policies/list.md
---
# List All Retention Policies

To list all Retention Policies that have been created in an enterprise, call
the [`GET /retention_policies`][retention_policies] API endpoint.

<Samples id='get_retention_policies' >

</Samples>

## Required Scopes

Before using any of the Retention Policy APIs, an application must have the
right scopes enabled. See [Required Scopes][scopes] for more details.

[retention_policies]: e://get_retention_policies
[scopes]: g://retention-policies#required-scopes