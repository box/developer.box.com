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

* Box Signリクエストを送信する (`sendSignRequests`)

### Box Hubs

* Hubの項目を追加する (`tkAddHubItem`)
* Hubをコピーする (`tkCopyHub`)
* Hubを作成する (`tkCreateHub`)
* Hubコラボレーションを作成する (`tkCreateHubCollaboration`)
* すべてのHubを取得する (`tkGetAllHubs`)
* 企業のHubを取得する (`tkGetEnterpriseHubs`)
* IDを指定してHubを取得する (`tkGetHubById`)
* Hubコラボレーションを取得する (`tkGetHubCollaborations`)
* Hubを更新する (`tkUpdateHub`)
* Hubコラボレーションを更新する (`tkUpdateHubCollaboration`)

### Box AI

* Box AIで項目IDを指定して質問する (`askBoxAI`)
* Box AIでフィールドを指定して抽出する (`extractBoxAI`)
* Box AIでメタデータテンプレートを指定して抽出する (`extractBoxAI`)
* Box AIでSObjectタイプを指定して抽出する (`extractBoxAI`)
* Box AIで項目IDを指定してテキストを生成する (`generateBoxAI`)

### Doc Gen

* Doc Genテンプレートを作成する (`createDocGenTemplate`)
* レコード用のDoc Genを生成する (`generateDocGenForRecord`)
* Doc Genのバッチを送信する (`submitDocgenBatch`)
* Doc Genのバッチステータスを取得する (`getDocgenBatch`)

### ファイルのBoxメタデータとアクション

* ファイルIDを指定してBoxメタデータを作成する (`tkCreateBoxMetadataByFileId`)
* ファイルIDを指定してBoxメタデータを削除する (`tkDeleteBoxMetadataByFileId`)
* ファイルIDを指定してBoxメタデータを取得する (`tkGetBoxMetadataByFileId`)
* ファイルIDを指定してBoxメタデータを更新する (`tkUpdateBoxMetadataByFileId`)
* ファイルを移動する (`tkMoveFile`)
* 最後の項目を取得する (`getLastItem`)
* 最近使用した項目を取得する (`GetRecentItems`)

### フォルダのBoxメタデータとアクション

* フォルダIDでBoxメタデータを作成する (`tkCreateBoxMetadataByFolderId`)
* フォルダIDでBoxメタデータを削除する (`tkDeleteBoxMetadataByFolderId`)
* フォルダIDでBoxメタデータを取得する (`tkGetBoxMetadataByFolderId`)
* フォルダIDでBoxメタデータを更新する (`tkUpdateBoxMetadataByFolderId`)

### フォルダ管理

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
* フォルダを更新する (`tkUpdateFolder`)
* フォルダIDを指定してBoxフォルダのコンテンツを取得する (`tkGetFolderContents`)

### カスケードポリシー

* メタデータカスケードポリシーを作成する (`tkCreateMetadataCascadePolicy`)
* メタデータカスケードポリシーを削除する (`tkDeleteBoxMetadataByFolderId`)
* フォルダIDでメタデータカスケードポリシーを取得する (`tkGetMetadataCascadePoliciesByFolderId`)
* IDでメタデータカスケードポリシーを取得する (`tkGetMetadataCascadePolicyById`)

### コラボレーション

* コラボレーションを作成する (`tkCreateCollaboration`)
* レコードにコラボレーションを作成する (`tkCreateCollaborationOnRecord`)
* コラボレーションを削除する (`tkDeleteCollaboration`)
* コラボレーションを編集する (`tkEditCollaboration`)

### Slack統合

<!--alex ignore -->

* Slackチャンネルマッピングを作成する (`tkCreateSlackChannelMapping`)
* Slackチャンネルアクセス管理を無効に設定する (`tkSetSlackChannelAccessManagementDisabled`)

<!--alex enable -->

### その他/ユーティリティ

* 添付ファイルからファイルを作成する (`tkCreateFileFromAttachment`)
* 統合アクティビティを有効にする (`tkEnableAppActivity`)
* 検索する (`search`)

<!--alex enable -->

[methods]: g://tooling/salesforce-toolkit/methods

[Salesforce Flows]: https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5
