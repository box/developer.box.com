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
---

# Integration Mapping Between Slack Channels and Box Folders

When [Box as the Content Layer][1] is enabled, Box folder is created for
each channel, and all files sent in this channel are uploaded to
these folders.
The [Integration Mappings API][2] allows the Box Enterprise Admin (EA) to
customize the upload folder of the Slack channel to any folder within
the enterprise instead of relying on the default one.

## Prerequisites

Before starting work with Integration Mappings API make sure that:

- you have an Admin or a Co-admin role
- you installed [Box for Slack][3] in the relevant Slack workspace or
organizations
- you enabled the [Box as Content Layer for Slack][4] 
- you created a [custom app][5] with application scope **Manage enterprise
properties** in the [Box developer console][6]
- you added the service account of _Box as Content Layer for Slack_
as an owner or a co-owner (either with Box UI or Box SDK)

<Message info>
 For Slack-side channel validation, the [Integration Mappings API][4]
 is calling the Slack API.
</Message>

## Authorization

To authorize your Integration Mappings requests, add a developer token
to the HTTP header of each request: `Authorization: Bearer {developer_token}`.

<Message info>
 The developer token is valid for 60 minutes. After that time you need
 to generate it again.
</Message>

## Managing the Integration Mappings

The integration mappings API for Slack offers standard CRUD methods
for mapping management: `get`, `post`, `put`, and `delete`.

[`GET /integration_mappings/slack`][7] fetches and filters the mappings,
both the ones created manually by the admin and the ones created
automatically by the integration.

<!-- markdownlint-disable line-length -->
```bash
curl --location --request GET 'https://api.box.com/2.0/integration_mappings/slack?partner_item_id=C987654321&box_item_id=123456789' \
--header 'Authorization: Bearer {{token}}' \
```
<!-- markdownlint-enable line-length -->

[`POST /integration_mappings/slack`][8] creates a new mapping. Required
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

[`PUT /integration_mappings/slack/:integration_mapping_id`][9] updates options
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

[`DELETE /integration_mappings/slack/:integration_mapping_id`][10] deletes the
Integration Mapping, which results in creation
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

[1]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack
[2]: r://integration-mapping
[3]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration
[4]: r://get-integration-mappings-slack
[5]: g://applications/custom-apps
[6]: https://app.box.com/developers/console
[7]: r://get-integration-mappings-slack
[8]: r://post-integration-mappings-slack
[9]: r://put-integration-mappings-slack
[10]: r://delete-integration-mappings-slack
