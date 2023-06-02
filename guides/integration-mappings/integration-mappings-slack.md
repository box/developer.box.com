---
rank: 1
related_endpoints:
  - delete_integration_mappings_slack_id
  - get_integration_mappings_slack
  - post_integration_mappings_slack
  - put_integration_mappings_slack_id
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: integration-mappings
subcategory_id: null
is_index: false
id: integration-mappings/integration-mappings-slack
type: guide
total_steps: 2
sibling_id: integration-mappings
parent_id: integration-mappings
next_page_id: integration-mappings/troubleshooting
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/integration-mappings-slack.md
---
# Integration Mapping Between Slack and Box Folders

[Integration mappings API][1] allows the Box Enterprise Admin (EA) to
manage the Slack channel and Box folder mappings within the Box enterprise.
You can select a specific folder instead of using the default one that is
created for the channel automatically.

## Prerequisites

Before starting work with integration mappings API make sure that:

- you have an Admin or a Co-admin role
- you installed [Box for Slack][2] in the relevant Slack workspace or
organizations
- you enabled the [Box as Content Layer for Slack][3] 
- you created a [custom app][4] with application scope **Manage enterprise
properties** in the [Box developer console][5]

<Message info>

For Slack-side channel validation, the [integration mappings API][4]
is calling the Slack API.

</Message>

## Authorization

To authorize your integration mappings requests, add a developer token
to the HTTP header of each request: `Authorization: Bearer {developer_token}`.

<Message info>

The developer token is valid for 60 minutes. After that time you need
to generate it again.

</Message>

## Managing the integration mappings

The integration mappings API for Slack offers standard endpoints for mapping
management: `get`, `post`, `put`, and `delete`.

[`GET /integration_mappings/slack`][6] fetches and filters the mappings,
both the ones created manually by the admin and the ones created
automatically by the integration.

<!-- markdownlint-disable line-length -->

```bash
curl --location --request GET 'https://api.box.com/2.0/integration_mappings/slack?partner_item_id=C987654321&box_item_id=123456789' \
--header 'Authorization: Bearer {{token}}' \
```
<!-- markdownlint-enable line-length -->

[`POST /integration_mappings/slack`][7] creates a new mapping. Required
parameters are `box_item` and `partner_item`. They are references to a Box
folder and a Slack channel, respectively.
You can provide option that override the default settings for the created
mapping, for example `is_access_management_disabled` disables creating
collaborations on the Box folder, assuming that the admin handles accesses
themselves.

<!-- markdownlint-disable line-length -->

```bash
curl --location --request POST 'https://api.box.com/2.0/integration_mappings/slack' \
--header 'Authorization: Bearer {{token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "partner_item": {
        "id": "C987654321",
        "type": "channel",
        "slack_workspace_id": "T5555555"
    },
    "box_item": {
        "id": "123456789",
        "type": "folder"
    }
}'
```
<!-- markdownlint-enable line-length -->

[`PUT /integration_mappings/slack/:integration_mapping_id`][8] updates options
of the mapping or the target Box folder.

<!-- markdownlint-disable line-length -->

```bash
curl --location --request PUT 'https://api.box.com/2.0/integration_mappings/slack/512521' \
--header 'Authorization: Bearer {{token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "options": {
        "is_access_management_disabled": true
    }
}'
```
<!-- markdownlint-enable line-length -->

[`DELETE /integration_mappings/slack/:integration_mapping_id`][9] deletes the
integration mapping, which results in creation
of a new default channel folder when the next file is uploaded.
When the mapping is deleted, neither the Box folder, nor the Slack channel
are deleted.

<!-- markdownlint-disable line-length -->

```bash
curl --location --request DELETE 'https://api.box.com/2.0/integration_mappings/slack/512521' \
--header 'Authorization: Bearer {{token}}' \
--data-raw ''
```
<!-- markdownlint-ebable line-length -->

[1]: r://integration-mapping
[2]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration
[3]: r://get-integration-mappings-slack
[4]: g://applications/custom-apps
[5]: https://app.box.com/developers/console
[6]: r://get-integration-mappings-slack
[7]: r://post-integration-mappings-slack
[8]: r://put-integration-mappings-slack
[9]: r://delete-integration-mappings-slack