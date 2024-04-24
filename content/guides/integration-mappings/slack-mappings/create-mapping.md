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
---

# Create Slack Integration Mapping

Use the `POST integration_mappings/slack/:integration_mapping_id`
call to create a mapping. To make it work,
you need `box_item` and `partner_item` parameters,
which refer to a Box folder and a Slack channel, respectively.

<Message info>
Remember that before the mapping can be created,
this service account must be set as a co-owner
role on the folder that is being mapped.
If you encounter any errors, see the [troubleshooting guide][1].
</Message>

<Samples id='post_integration_mappings_slack' />

You can provide options that change the default settings for the
created mapping. For example setting `is_access_management_disabled` to
`true` will disable collaboration management. Slack channel members will
not become collaborators on the channel folder and no shared links will
be created for channels with 1000+ members.

## Create Slack Integration Mapping with Box SDK

Use Box SDK to automatically create the Integration Mapping,
including a co-owner collaboration of the
service account on the Slack channel - Box folder mapping.
To do so, use this script:

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

<Message notice>
  Make sure to replace `PLACEHOLDER` with the logged value of
  `serviceAccountId`.
</Message>

[1]: g://integration-mappings/slack-mappings/troubleshooting