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
category_id: integration-mappings
subcategory_id: integration-mappings/teams-mappings
is_index: false
id: integration-mappings/teams-mappings/create-mappings
type: guide
total_steps: 4
sibling_id: integration-mappings/teams-mappings
parent_id: integration-mappings/teams-mappings
next_page_id: integration-mappings/teams-mappings/update-mappings
previous_page_id: integration-mappings/teams-mappings/list-mappings
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/teams-mappings/create-mappings.md
---
# Create Teams integration mappings

Use the `POST integration_mappings_teams` call to create a mapping.
To make it work, you need the `box_item` and the `partner_item` parameters,
which refer to a Box folder and a Teams channel, respectively.