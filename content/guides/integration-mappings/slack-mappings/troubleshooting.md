---
rank: 7
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

# Slack Integration Mappings Troubleshooting

As the Integration Mappings API performs different types of
validation, some errors might occur. You can find descriptions
and solutions to these common errors below.

## Service account is not a co-owner of the folder

The [Box as Content Layer for Slack][1] service account must be added
as an owner or co-owner of the folder to manage collaborations and uploads.

```sh
Box as File Storage for Slack (user id: 123, user email:
user@example.com) must be a collaborator in role co-owner or owner
of the folder example123, before it can be mapped to the channel
example123. Please create a collaboration or ensure the ownership for
Box as File Storage for Slack and retry.`
```

To resolve this error use the data in the response to make sure the
service account has the necessary role to perform the mapping.

```json
"context_info": {
  "service_account_id": "12345678",
  "service_account_email": "AutomationUser_12345678_gdueygwe@boxdevedition.com",
}
```

Perform the following steps:

1. Copy the  `service_account_email` from `context_info`.
2. In the folder settings, use the `Invite People` option to invite the service account as a co-owner.

## Channel is already mapped to a folder in Box

API returns the following error when you attempt to create
a mapping for a channel that already has a Box folder mapped:

```sh
Channel: example123 is already mapped to a folder in Box.
```

If you wanted to start using a new folder, use `GET` to retrieve
the `id` of the mapping and then the `UPDATE` method to update the
target Box folder.

## Channel was not found

API returns this error if the Slack bot associated with the integration
can not retrieve information about the channel.

<!-- markdownlint-disable line-length -->
```sh
Channel: example123 was not found. If it is a private channel, ensure that Box has been added to the channel.
```
<!-- markdownlint-enable line-length -->

Ensure that the `partner_item` is correct - make sure you provide `slack_org_id`
for org installations and `slack_workspace_id` for workspace ones. If the
channel is private, ensure that the Slack bot has been added to the channel.

## Channel not suitable for Custom File Storage (CFS)

<!-- markdownlint-disable line-length -->
```sh
Channel: example123 is not suitable for CFS. Slack Connect channels with
a pending Connect status can not be mapped to Box folders.
```
<!-- markdownlint-enable line-length -->

Slack Connect channels (cross enterprise channels) are currently not supported
as a part of Box as a Content Layer for Slack.

## Box folder externally owned

Box folder selected for mapping must be owned by the enterprise that the Admin
is part of.

<!-- markdownlint-disable line-length -->
```sh
Box folder: example123 cannot be mapped, because it is externally owned. Mapped folder must belong to the enterprise: example_enterprise.
```
<!-- markdownlint-enable line-length -->

## Custom File Storage (CFS) turned off

API returns this error when you're trying to create the mapping for an
enterprise that has Box for Slack installed, but did not enable
[Box as a Content Layer for Slack][1].

## Box enterprise mismatch

API returns this error when there is a mismatch between the Admin’s enterprise
and Box for Slack configuration. See [Installing and using Box for Slack][2]
for information on how to enable Box for Slack.

[1]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack
[2]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration
