---
rank: 2
related_endpoints:
  - get_retention_policies_id
related_guides:
  - retention-policies/list
related_resource:
  - retention_policy
required_guides: []
alias_paths: []
---

# Get Retention Policy

To get the information for a specific Retention Policy that has been created in
an enterprise, call the [`GET /retention_policies/:id`][retention] API endpoint
with the `id` of the policy.

<Samples id='get_retention_policies_id' />

## Required Scopes

Before using any of the Retention Policy APIs, an application must have the
right scopes enabled. See [Required Scopes][scopes] for more details.

[retention]: e://get_retention_policies_id
[scopes]: g://retention-policies#required-scopes
