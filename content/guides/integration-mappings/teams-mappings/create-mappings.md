---
rank: 3
related_endpoints:
 - post_integration_mappings_teams
related_guides:
 - integration-mappings/teams-mappings/list-mappings
 - integration-mappings/teams-mappings/update-mappings
 - integration-mappings/teams-mappings/delete-mappings
required_guides:
 - integration-mappings/teams-mappings/index
related_resources: []
alias_paths: []
---
# Create Teams integration mappings

Use the `POST integration_mappings_teams` call to create a mapping.
To make it work, you need the `box_item` and the `partner_item` parameters,
which refer to a Box folder and a Teams channel, respectively.

<!-- sample post-integration-mappings-teams -->