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
total_steps: 4
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

* フォルダIDでBoxメタデータを作成する (`createBoxMetadataByFolderId`)
* コラボレーションを作成する (`createCollaboration`)
* レコードにコラボレーションを作成する (`createCollaborationOnRecord`)
* 添付ファイルからファイルを作成する (`createFileFromAttachment`)
* フォルダを作成する (`createFolder`)
* フォルダの関連付けを作成する (`createFolderAssociation`)
* レコードID用のフォルダを作成する (`createFolderForRecordId`)
* テンプレートからレコードID用のフォルダを作成する (`createFolderForRecordIdFromTemplate`)
* メタデータカスケードポリシーを作成する (`createMetadataCascadePolicy`)
* レコードID用のオブジェクトフォルダを作成する (`createObjectFolderForRecordId`)
* Slackチャンネルマッピングを作成する (`mapSfdcRecordToSlackChannel`)
* フォルダIDでBoxメタデータを削除する (`deleteBoxMetadataByFolderId`)
* コラボレーションを削除する (`deleteCollaboration`)
* メタデータカスケードポリシーを削除する (`deleteMetadataCascadePolicyById`)
* コラボレーションを編集する (`editCollaboration`)
* アプリアクティビティを有効にする (`enableAppActivity`)
* フォルダIDでBoxメタデータを取得する (`getBoxMetadataByFolderId`)
* SalesforceレコードIDでフォルダの関連付けを取得する (`getFolderAssociationsByRecordId`)
* レコードIDでフォルダIDを取得する (`getFolderIdByRecordId`)
* フォルダURLを取得する (`getFolderUrl`)
* フォルダIDでメタデータカスケードポリシーを取得する (`getMetadataCascadePoliciesByFolderId`)
* IDでメタデータカスケードポリシーを取得する (`getMetadataCascadePolicyById`)
* レコードIDでオブジェクトフォルダを取得する (`getObjectFolderByRecordId`)
* フォルダIDでレコードIDを取得する (`getRecordIdByFolderId`)
* ルートフォルダIDを取得する (`getRootFolderId`)
* フォルダ用URLを取得する (`getUrlForFolder`)
* フォルダを移動する (`moveFolder`)
* Slackチャンネルアクセス管理を無効に設定する (`setSlackChannelAccessManagementDisabled`)
* フォルダIDでBoxメタデータを更新する (`updateBoxMetadataByFolderId`)

<!--alex enable -->

[methods]: g://tooling/salesforce-toolkit/methods

[Salesforce Flows]: https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5
