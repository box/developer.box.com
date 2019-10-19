---
rank: 2
related_endpoints:
  - get_legal_hold_policies_id
related_guides:
  - legal-holds/list
related_resource:
  - legal_hold_policy
required_guides: []
alias_paths: []
cId: legal-holds
scId: null
id: legal-holds/get
isIndex: false
---

# Get a Legal Hold Policy

To get the information for a specific Legal Hold policy that has been created in
an enterprise, call the [`GET /legal_hold_policies/id`][legal_hold] API endpoint
with the `id` of the policy.

<Samples id='get_legal_hold_policies' >

</Samples>

## Required Scopes

Before using any of the Legal Hold APIs, an application must have the right
scopes enabled. See [Required Scopes][scopes] for more details.

[legal_hold]: e://get_legal_hold_policies_id
[scopes]: g://legal-holds#required-scopes
