---
rank: 3
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/salesforce-toolkit
is_index: false
id: tooling/salesforce-toolkit/flow-actions
type: guide
total_steps: 5
sibling_id: tooling/salesforce-toolkit
parent_id: tooling/salesforce-toolkit
next_page_id: tooling/salesforce-toolkit/ui-elements
previous_page_id: tooling/salesforce-toolkit/samples
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/salesforce-toolkit/flow-actions.md
fullyTranslated: true
---
# フローアクション

Salesforceツールキットには、管理者が以下の[メソッド][methods]を呼び出す際に使用できるラッパーが用意されています。このツールキットを使用すると、Box for Salesforceユーザーは[Salesforceフロー][Salesforce Flows]を使用して、自動化ソリューション (フォルダ構造など) を構築できます。

## Salesforceフローのメソッド

以下のリストには、[Salesforceフロー][Salesforce Flows]で呼び出し可能なすべてのメソッドを示しています。

<!--alex ignore -->

### Box Sign

* Send Box Sign Request (`sendSignRequests`)

### Box Hubs

* Add Hub Item (`tkAddHubItem`)
* Copy Hub (`tkCopyHub`)
* Create Hub (`tkCreateHub`)
* Create Hub Collaboration (`tkCreateHubCollaboration`)
* Get All Hubs (`tkGetAllHubs`)
* Get Enterprise Hubs (`tkGetEnterpriseHubs`)
* Get Hub by ID (`tkGetHubById`)
* Get Hub Collaborations (`tkGetHubCollaborations`)
* Update Hub (`tkUpdateHub`)
* Update Hub Collaboration (`tkUpdateHubCollaboration`)

### Box AI

* Box AI Ask by Item Id (`askBoxAI`)
* Box AI Extract by Fields (`extractBoxAI`)
* Box AI Extract by Metadata Template (`extractBoxAI`)
* Box AI Extract by SObject Type (`extractBoxAI`)
* Box AI Generate Text by Item Id (`generateBoxAI`)

### Doc Gen

* Create Doc Gen Template (`createDocGenTemplate`)
* Generate Doc Gen For Record (`generateDocGenForRecord`)
* Submit Doc Gen Batch (`submitDocgenBatch`)
* Get Doc Gen Batch Status (`getDocgenBatch`)

### File Box Metadata and actions

* Create Box Metadata by File Id (`tkCreateBoxMetadataByFileId`)
* Delete Box Metadata by File Id (`tkDeleteBoxMetadataByFileId`)
* Get Box Metadata by File Id (`tkGetBoxMetadataByFileId`)
* Update Box Metadata by File Id (`tkUpdateBoxMetadataByFileId`)
* Move File (`tkMoveFile`)
* Get Last Item (`getLastItem`)
* Get Recent Items (`GetRecentItems`)

### Folder Box Metadata and actions

* フォルダIDでBoxメタデータを作成する (`tkCreateBoxMetadataByFolderId`)
* フォルダIDでBoxメタデータを削除する (`tkDeleteBoxMetadataByFolderId`)
* フォルダIDでBoxメタデータを取得する (`tkGetBoxMetadataByFolderId`)
* フォルダIDでBoxメタデータを更新する (`tkUpdateBoxMetadataByFolderId`)

### Folder management

* フォルダを作成する (`tkCreateFolder`)
* フォルダの関連付けを作成する (`tkCreateFolderAssociation`)
* レコードID用のフォルダを作成する (`tkCreateFolderForRecordId`)
* テンプレートからレコードID用のフォルダを作成する (`tkCreateFolderForRecordIdFromTemplate`)
* レコードID用のオブジェクトフォルダを作成する (`tkCreateObjectFolderForRecordId`)
* SalesforceレコードIDでフォルダの関連付けを取得する (`tkGetFolderAssociationsByRecordId`)
* レコードIDでフォルダIDを取得する (`tkGetFolderIdByRecordId`)
* フォルダURLを取得する (`tkGetFolderUrl`)
* レコードIDでオブジェクトフォルダを取得する (`tkGetObjectFolderByRecordId`)
* フォルダIDでレコードIDを取得する (`tkGetRecordIdByFolderId`)
* ルートフォルダIDを取得する (`tkGetRootFolderId`)
* フォルダ用URLを取得する (`tkGetUrlForFolder`)
* フォルダを移動する (`tkMoveFolder`)
* Update Folder (`tkUpdateFolder`)
* Get Box Folder Contents by Folder Id (`tkGetFolderContents`)

### Cascade policies

* メタデータカスケードポリシーを作成する (`tkCreateMetadataCascadePolicy`)
* メタデータカスケードポリシーを削除する (`tkDeleteBoxMetadataByFolderId`)
* フォルダIDでメタデータカスケードポリシーを取得する (`tkGetMetadataCascadePoliciesByFolderId`)
* IDでメタデータカスケードポリシーを取得する (`tkGetMetadataCascadePolicyById`)

### コラボレーション

* コラボレーションを作成する (`tkCreateCollaboration`)
* レコードにコラボレーションを作成する (`tkCreateCollaborationOnRecord`)
* コラボレーションを削除する (`tkDeleteCollaboration`)
* コラボレーションを編集する (`tkEditCollaboration`)

### Slack integration

<!--alex ignore -->

* Slackチャンネルマッピングを作成する (`tkCreateSlackChannelMapping`)
* Slackチャンネルアクセス管理を無効に設定する (`tkSetSlackChannelAccessManagementDisabled`)

<!--alex enable -->

### Other / utilities

* 添付ファイルからファイルを作成する (`tkCreateFileFromAttachment`)
* 統合アクティビティを有効にする (`tkEnableAppActivity`)
* Search (`search`)

<!--alex enable -->

[methods]: g://tooling/salesforce-toolkit/methods

[Salesforce Flows]: https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5
