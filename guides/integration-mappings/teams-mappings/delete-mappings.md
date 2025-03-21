---
rank: 5
related_endpoints:
  - delete_teams_integration_mappings_id
related_guides:
  - integration-mappings/teams-mappings/list-mappings
  - integration-mappings/teams-mappings/create-mappings
  - integration-mappings/teams-mappings/update-mappings
required_guides: []
related_resources: []
alias_paths: []
category_id: integration-mappings
subcategory_id: integration-mappings/teams-mappings
is_index: false
id: integration-mappings/teams-mappings/delete-mappings
type: guide
total_steps: 4
sibling_id: integration-mappings/teams-mappings
parent_id: integration-mappings/teams-mappings
next_page_id: ''
previous_page_id: integration-mappings/teams-mappings/update-mappings
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/teams-mappings/delete-mappings.md
---
# Delete Teams integration mappings

The `DELETE integration_mappings_teams_id` call removes the mapping between
the channel and the folder.
A new mapping and a new folder in the default folder structure will be created
when the next file is uploaded to the channel.
Deleting the mapping does not delete the Box folder or the Teams channel.

<Samples id='delete_integration_mappings_teams_id' >

</Samples>