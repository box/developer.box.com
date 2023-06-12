---
rank: 7
related_endpoints:
  - delete_integration_mappings_slack_id
  - get_integration_mappings_slack
  - post_integration_mappings_slack
  - put_integration_mappings_slack_id
related_guides:
  - integration-mappings/index
required_guides: []
related_resources: []
alias_paths: []
category_id: integration-mappings
subcategory_id: integration-mappings/slack-mappings
is_index: false
id: integration-mappings/slack-mappings/integration-mappings-sdk
type: guide
total_steps: 7
sibling_id: integration-mappings/slack-mappings
parent_id: integration-mappings/slack-mappings
next_page_id: integration-mappings/slack-mappings/troubleshooting
previous_page_id: integration-mappings/slack-mappings/delete-mapping
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/slack-mappings/integration-mappings-sdk.md
---
# Create Integration Mapping with Box SDK

Use Box SDK to automatically create the Integration Mapping,
including a co-owner collaboration of the
service account on the Slack channel - Box folder mapping.
To do so, use this script:

<!-- markdownlint-disable line-length -->

```js
const BoxSDK = require('box-node-sdk');
const axios = require('axios');

const integrationMappingsApiUrl = 'https://api.box.com/2.0/integration_mappings/slack'
const boxFolderId = 'PASTE YOUR FOLDER ID HERE';
const slackChannelId = 'PASTE YOUR CHANNEL ID HERE';
const slackOrgId = 'PASTE YOUR SLACK ORG ID HERE (CHANGE TO WORKSPACE ID IF NECESSARY)';
const developerToken = 'PASTE YOUR DEVELOPER TOKEN HERE';

let serviceAccountId = '<PLACEHOLDER>';

const client = BoxSDK.getBasicClient(developerToken);

async function postIntegrationMappingSlack(){

 return axios.post(integrationMappingsApiUrl, {
  partner_item: {
   id: slackChannelId,
   slack_org_id: slackOrgId, // change slack_org_id to slack_workspace_id if Box for Slack is installed on the workspace level
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
 try {
  await client.collaborations.createWithUserID(serviceAccountId, folderId, 'co-owner')
 } catch (error){
  if(error.response.body.code === 'user_already_collaborator'){
   console.log('Service account already collaborated in the co-owner role.')
  } else {
   throw error;
  }
 }
}

async function logServiceAccountId() {
 try {
  await postIntegrationMappingSlack();
 } catch (error) {
  console.log(`Replace the value of serviceAccountId with: ${error.response.data.context_info.service_account_id} and re-run the script.`)
 }
}

async function createSlackIntegrationMapping() {

 if(isPlaceholder(serviceAccountId)){
  await logServiceAccountId();
 } else {
  await addCoowner(serviceAccountId, boxFolderId);
  await postIntegrationMappingSlack();
 }

}

module.exports = { createSlackIntegrationMapping }
```
<!-- markdownlint-enable line-length -->

<Message notice>

Make sure to replace `PLACEHOLDER` with the logged value of
`serviceAccountId`.

</Message>