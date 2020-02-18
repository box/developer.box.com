---
rank: 2
related_endpoints:
  - get_retention_policies_id
related_guides:
  - retention-policies/list
related_resources:
  - retention_policy
required_guides: []
alias_paths: []
category_id: retention-policies
subcategory_id: null
is_index: false
id: retention-policies/get
type: guide
total_steps: 2
sibling_id: retention-policies
parent_id: retention-policies
next_page_id: retention-policies
previous_page_id: retention-policies/list
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/retention-policies/get.md
---

# Get Retention Policy

To get the information for a specific Retention Policy that has been created in
an enterprise, call the [`GET /retention_policies/:id`][retention] API endpoint
with the `id` of the policy.

<Samples id='get_retention_policies_id' >

</Samples>

## Required Scopes

Before using any of the Retention Policy APIs, an application must have the
right scopes enabled. See [Required Scopes][scopes] for more details.

[retention]: e://get_retention_policies_id
[scopes]: g://retention-policies#required-scopes
