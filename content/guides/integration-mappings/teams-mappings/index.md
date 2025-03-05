---
rank: 1
related_endpoints:
 - delete_teams_integration_mappings_id
 - get_integration_mappings_teams
 - post_integration_mappings_teams
 - put_integration_mappings_teams_id
related_guides:
 - integration-mappings/teams-mappings/list-mappings
 - integration-mappings/teams-mappings/create-mapping
 - integration-mappings/teams-mappings/update-mapping
 - integration-mappings/teams-mappings/delete-mapping
required_guides: []
related_resources: []
alias_paths: []
---
# Teams integration mappings

Before you can start working with [Teams][2] integration mapping API,
perform the below steps.

## Prerequisites

* Admin or Co-Admin role
* [Box for Microsoft Teams][1] integration installed

## Create a Box application

1. Create a [platform app with OAuth authentication][3] in the [Box developer console][4].
2. Open the application and enable the **Manage enterprise properties** application scope under **Configuration** > **Required Access Scopes**.

## Authorization

To authorize your integration mappings requests:

1. Navigate to the [platform app][5] that you have created as one of the prerequisites.
2. Generate a [developer token][6] and add it to the HTTP header of each request:

```bash
Authorization: Bearer {developer_token}
```

<Message info>
  The developer token is valid for 60 minutes. After that time you need
  to generate it again.
</Message>

[1]: https://support.box.com/hc/en-us/articles/360050737154-Assigning-a-Default-Box-Folder-to-a-Teams-Channel-or-Chat
[2]: https://support.box.com/hc/en-us/articles/360044667034-Introducing-Box-for-Microsoft-Teams
[3]: g://authentication/oauth2/oauth2-setup
[4]: https://app.box.com/developers/console
[5]: g://applications/app-types/platform-apps
[6]: g://authentication/tokens/developer-tokens