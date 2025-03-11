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
---
# Delete Teams integration mappings

The `DELETE integration_mappings_teams_id` call removes the mapping between
the channel and the folder. 
A new mapping and a new folder in the default folder structure will be created
when the next file is uploaded to the channel.
Deleting the mapping does not delete the Box folder, or the Teams channel.