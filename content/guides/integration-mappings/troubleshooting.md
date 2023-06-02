---
rank: 2
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

# Troubleshooting - validation errors

As the integration mappings API performs different types of
validation, some errors might occur. You can find descriptions
and solutions to these common errors below.

## Service account is not a co-owner of the folder

The [Box as Content Layer for Slack][1] service account must be added
as an owner or co-owner of the folder to manage collaborations and uploads.

`Box as File Storage for Slack (user id: 123, user email:
user@example.com) must be a collaborator in role co-owner or owner
of the folder example123, before it can be mapped to the channel
123example. Please create a collaboration or ensure the ownership for
Box as File Storage for Slack and retry.`

To resolve this error, add the service account (you can use the ID or email
provided in the error message) as an owner or co-owner of the folder.
You can do it through Box UI or using Box SDK.

### Box SDK

Use Box SDK to automatically create a co-owner collaboration of the
service account on the Slack channel - Box folder mapping.
To do so, use the below script:

```bash
const BoxSDK = require('box-node-sdk');
const axios = require('axios');


const integrationMappingsAPIURL = 'https://api.box.com/2.0/integration_mappings/slack'
const boxFolderId = 'PASTE YOUR FOLDER ID HERE';
const slackChannelId = 'PASTE YOUR CHANNEL ID HERE';
const slackOrgId = 'PASTE YOUR SLACK ORG ID HERE (CHANGE TO WORKSPACE ID IF NECESSARY)';
const developerToken = 'PASTE YOUR DEVELOPER TOKEN HERE';

let serviceAccountId = '<PLACEHOLDER>';

const client = BoxSDK.getBasicClient(developerToken);

async function postIntegrationMappingSlack(){

 return axios.post(integrationMappingsAPIURL, {
  partner_item: {
   id: slackChannelId,
   slack_org_id: slackOrgId, // change slack_org_id to slack_workspace_id if you Box for Slack is installed per workspace
   type: "channel"
  },
  box_item: {
   id: boxFolderId,
   type: "folder"
  }
 }, {
  headers: {
   'Authorization': `Bearer ${developerToken}`
  }
 });

}

function isPlaceholder(str){
 return str === '<PLACEHOLDER>';
}

async function addCoowner(serviceAccountId, folderId){
  await client.collaborations.createWithUserID(serviceAccountId, folderId, 'co-owner')
}

async function extractServiceAccountId() {

 try {
  await postIntegrationMappingSlack();
 } catch (error){
  return error.response.data.context_info.service_account_id;
 }
}

async function runCreateSlackChannelBoxFolderMapping() {

 if(isPlaceholder(serviceAccountId)){
  serviceAccountId = await extractServiceAccountId()
  console.log(`Service account id: ${serviceAccountId} remains constant and so to avoid calling the Box API twice, replace serviceAccountId in the script with ${serviceAccountId}.`)
 }

 await addCoowner(serviceAccountId, boxFolderId);
 await postIntegrationMappingSlack();

}

module.exports = { runCreateSlackChannelBoxFolderMapping }
```

<Message notice>
 Make sure to replace `PLACEHOLDER` with the logged value of
 `serviceAccountId`.
</Message>

## Channel is already mapped to a folder in Box

API returns the following error when you attempt to create
a mapping for a channel that already has a Box folder mapped:

`Channel: 123example is already mapped to a folder in Box.`

If you wanted to start using a new folder, use `GET` to retrieve
the `id` of the mapping and then the `UPDATE` method to update the
target Box folder.

## Channel was not found

API returns this error if the Slack bot associated with the integration
can not retrieve information about the channel.

`Channel: example123 was not found. If it is a private channel,
ensure that Box has been added to the channel.`

Ensure that the `partner_item` is correct - make sure you provide `slack_org_id`
for org installations and `slack_workspace_id` for workspace ones. If the
channel is private, ensure that the Slack bot has been added to the channel.

## Channel not suitable for Custom File Storage (CFS)

`Channel: example123 is not suitable for CFS. Slack Connect channels with
a pending Connect status can not be mapped to Box folders.`

Slack Connect channels (cross enterprise channels) are currently not supported
as a part of Box as a Content Layer for Slack.

## Box folder externally owned

Box folder selected for mapping must be owned by the enterprise that the Admin
is part of.

`Box folder: 123example cannot be mapped, because it is externally owned. Mapped folder must belong to the enterprise: example_enterprise.`

## Custom File Storage (CFS) turned off

API returns this error when you're trying to create the mapping for an
enterprise that has Box for Slack installed, but did not enable [Box as a Content Layer for Slack][1].

## Box enterprise mismatch

API returns this error when there is a mismatch between the Admin’s enterprise
and Box for Slack configuration. See [Installing and Using the Box for Slack][2]
for information on how to enable Box for Slack.

[1]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack
[2]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration
