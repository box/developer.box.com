---
rank: 6
related_endpoints:
 - delete_integration_mappings_slack_id
related_guides:
 - integration-mappings/slack-mappings/create-mapping
 - integration-mappings/slack-mappings/list-mappings
 - integration-mappings/slack-mappings/update-mapping
required_guides:
 - integration-mappings/slack-mappings/setup
related_resources: []
alias_paths: []
---

# Delete Slack Integration Mapping

The `DELETE integration_mappings/slack/:integration_mapping_id`
call removes the mapping between the channel and the folder. 
A new mapping and a new folder in the default folder structure will
be created when the next file is uploaded to the channel.
Deleting the mapping does not delete the Box folder, or the Slack channel.

<Samples id='delete_integration_mappings_slack_id' />