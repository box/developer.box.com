---
rank: 4
related_endpoints:
  - post_integration_mappings_slack_id
related_guides:
  - integration-mappings/slack-mappings/update-mapping
  - integration-mappings/slack-mappings/list-mappings
  - integration-mappings/slack-mappings/delete-mapping
required_guides:
  - integration-mappings/slack-mappings/setup
related_resources: []
alias_paths: []
category_id: integration-mappings
subcategory_id: integration-mappings/slack-mappings
is_index: false
id: integration-mappings/slack-mappings/create-mapping
type: guide
total_steps: 7
sibling_id: integration-mappings/slack-mappings
parent_id: integration-mappings/slack-mappings
next_page_id: integration-mappings/slack-mappings/update-mapping
previous_page_id: integration-mappings/slack-mappings/list-mappings
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/slack-mappings/create-mapping.md
---
# Create Integration Mapping

To create a mapping, you need `box_item` and `partner_item` which are
references to a Box folder and a Slack channel, respectively.

<Samples id='post_integration_mappings_slack' >

</Samples>

You can provide option that override the default settings for the created
mapping.
For example `is_access_management_disabled` disables creating
collaborations on the Box folder, assuming that
the admin handles the accesses.

## Set service accounts as co-owner

Box as the Content Layer for Slack uses a service account
to manage content and collaborators inside channel folders.
Before the mapping can be created,
this service account requires a co-owner
role on the folder that is being mapped.

That is why, of the service account is not a collaborator on the folder,
you will most likely, get the `SERVICE_ACCOUNT_IS_NOT_A_COOWNER_OR_OWNER`
error response. You can use the data in the response to make sure the
service account has the necessary role to perform the mapping.

```json
"context_info": {
    "service_account_id": "12345678",
    "service_account_email": "AutomationUser000@email.com",
}
```

The easiest way to create the collaboration
is to:

1. Copy the  `service_account_email` from `context_info`.
2. In the folder settings, use the `Invite People`
option to invite the service account as a collaborator.