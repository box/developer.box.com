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
# Box for Agentforce拡張パッケージ

[Box for Agentforce拡張パッケージ][agentforce]は、Box for Salesforce管理パッケージの拡張機能です。この拡張機能は、Salesforce内でワークフローを自動化したり、インテリジェントなエージェントベースのプロセスを強化したりするのに役立つ、再利用可能なAgentforce[アクション][actions]を提供します。これは、Box for Salesforceパッケージのコア機能を基に作成されており、グローバルで呼び出し可能なApexメソッドを使用して機能性を高めます。Box for Agentforce拡張パッケージでは、Agentforceアクション内でBoxの名前空間を使用することでメソッドを参照します。

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

### Box Hubs

* Get Hubs
* Get Hub Collaborations
* Copy Hub
* Create Hub
* Get Hub by ID

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
