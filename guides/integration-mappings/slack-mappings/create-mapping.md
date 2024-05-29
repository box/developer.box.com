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
total_steps: 6
sibling_id: integration-mappings/slack-mappings
parent_id: integration-mappings/slack-mappings
next_page_id: integration-mappings/slack-mappings/update-mapping
previous_page_id: integration-mappings/slack-mappings/list-mappings
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/slack-mappings/create-mapping.md
fullyTranslated: true
---
# Slack統合マッピングの作成

`POST integration_mappings/slack/:integration_mapping_id`呼び出しを使用してマッピングを作成します。この呼び出しを動作させるには、`box_item`パラメータと`partner_item`パラメータが必要です。これらのパラメータはそれぞれ、BoxフォルダとSlackチャンネルを示します。

<Message info>

マッピングを作成するには、このサービスアカウントを、マッピングされるフォルダの共同所有者のロールとして設定しておく必要があることに注意してください。エラーが発生した場合は、[トラブルシューティングガイド][1]を参照してください。

</Message>

<Samples id="post_integration_mappings_slack">

</Samples>

作成されたマッピングのデフォルト設定を変更するオプションを指定できます。たとえば、`is_access_management_disabled`を`true`に設定すると、コラボレーションの管理が無効になります。Slackのチャンネルメンバーはチャンネルフォルダのコラボレータにならず、1000人以上のメンバーがいるチャンネルに共有リンクは作成されません。

## Box SDKによるSlack統合マッピングの作成

Box SDKを使用すると、SlackチャンネルとBoxフォルダのマッピングでのサービスアカウントによる共同所有者のコラボレーションなど、統合マッピングを自動的に作成できます。それには、次のスクリプトを使用します。

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

`PLACEHOLDER`をログに記録された`serviceAccountId`の値に必ず置き換えてください。

</Message>

[1]: g://integration-mappings/slack-mappings/troubleshooting
