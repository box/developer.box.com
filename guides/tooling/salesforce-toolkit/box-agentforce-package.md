---
rank: 5
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/salesforce-toolkit
is_index: false
id: tooling/salesforce-toolkit/box-agentforce-package
type: guide
total_steps: 5
sibling_id: tooling/salesforce-toolkit
parent_id: tooling/salesforce-toolkit
next_page_id: ''
previous_page_id: tooling/salesforce-toolkit/ui-elements
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/salesforce-toolkit/box-agentforce-package.md
fullyTranslated: true
---
# Box for Agentforce Extension package

The [Box for Agentforce Extension package][agentforce] is an extension of the Box for Salesforce managed package. This extension provides reusable Agentforce [actions][actions] that help automate workflows and enhance intelligent agent—based processes within Salesforce. It builds on the core features of the Box for Salesforce package and uses global, invocable Apex methods to improve functionality. The Box for Agentforce Extension package references the methods by using the Box name space in Agentforce Actions.

## Agentforceフローのメソッド

以下のリストには、Agentforceで呼び出し可能な[メソッド][methods]の例を示しています。

### フォルダとファイルの管理

* フォルダの作成
* フォルダの関連付けを作成
* レコードID用のフォルダを作成
* テンプレートからレコードID用のフォルダを作成
* フォルダIDでフォルダのコンテンツを取得
* レコードIDでフォルダIDを取得
* フォルダURLを取得
* フォルダの移動
* レコードIDでオブジェクトフォルダを取得
* フォルダIDでレコードIDを取得
* フォルダ用URLを取得

### メタデータの管理

* ファイルIDでBoxメタデータを作成
* フォルダIDでBoxメタデータを作成
* ファイルIDでBoxメタデータを削除
* フォルダIDでBoxメタデータを削除
* フォルダIDでBoxメタデータを更新
* ファイルIDでBoxメタデータを取得
* フォルダIDでBoxメタデータを取得

### コラボレーション

* コラボレーションを作成
* レコードにコラボレーションを作成
* コラボレーションを編集
* コラボレーションを削除

### その他のアクション

<!--alex ignore -->

* 添付ファイルからファイルを作成
* Doc Genのバッチを取得
* SalesforceレコードIDでフォルダの関連付けを取得
* フォルダIDでメタデータカスケードポリシーを取得
* IDでメタデータカスケードポリシーを取得
* メタデータカスケードポリシーを作成
* メタデータカスケードポリシーを削除
* Slackチャンネルマッピングを作成
* Slackチャンネルアクセス管理を無効に設定
  <!--alex enable -->

[agentforce]: https://support.box.com/hc/en-us/articles/40370228349331-Installing-Box-for-Agentforce

[methods]: g://tooling/salesforce-toolkit/methods

[actions]: g://tooling/salesforce-toolkit/flow-actions
