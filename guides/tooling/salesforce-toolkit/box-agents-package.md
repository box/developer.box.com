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
id: tooling/salesforce-toolkit/box-agents-package
type: guide
total_steps: 5
sibling_id: tooling/salesforce-toolkit
parent_id: tooling/salesforce-toolkit
next_page_id: ''
previous_page_id: tooling/salesforce-toolkit/ui-elements
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/salesforce-toolkit/box-agents-package.md
fullyTranslated: true
---
# Box for Agentforce拡張パッケージ

[Box for Agentforce拡張パッケージ][agentforce]は、Box for Salesforce管理パッケージの拡張機能です。この拡張機能は、Salesforce内でワークフローを自動化したり、インテリジェントなエージェントベースのプロセスを強化したりするのに役立つ、再利用可能なAgentforce[アクション][actions]を提供します。これは、Box for Salesforceパッケージのコア機能を基に作成されており、グローバルで呼び出し可能なApexメソッドを使用して機能性を高めます。Box for Agentforce拡張パッケージでは、Agentforceアクション内でBoxの名前空間を使用することでメソッドを参照します。

## Agentforceフローのメソッド

以下のリストには、Agentforceで呼び出し可能な[メソッド][methods]の例を示しています。

### フォルダとファイルの管理

* フォルダの作成
* フォルダの関連付けを作成する
* レコードID用のフォルダを作成する
* テンプレートからレコードID用のフォルダを作成する
* フォルダIDでフォルダのコンテンツを取得する
* レコードIDでフォルダIDを取得する
* フォルダURLを取得する
* フォルダの移動
* レコードIDでオブジェクトフォルダを取得する
* フォルダIDでレコードIDを取得する
* フォルダ用URLを取得する

### メタデータの管理

* ファイルIDでBoxメタデータを作成する
* フォルダIDでBoxメタデータを作成する
* ファイルIDでBoxメタデータを削除する
* フォルダIDでBoxメタデータを削除する
* フォルダIDでBoxメタデータを更新する
* ファイルIDでBoxメタデータを取得する
* フォルダIDでBoxメタデータを取得する

### コラボレーション

* コラボレーションを作成する
* レコードにコラボレーションを作成する
* コラボレーションを編集する
* コラボレーションを削除する

### その他のアクション

<!--alex ignore -->

* 添付ファイルからファイルを作成する
* Doc Genのバッチを取得する
* SalesforceレコードIDでフォルダの関連付けを取得する
* フォルダIDでメタデータカスケードポリシーを取得する
* IDでメタデータカスケードポリシーを取得する
* メタデータカスケードポリシーを作成する
* メタデータカスケードポリシーを削除する
* Slackチャンネルマッピングを作成する
* Slackチャンネルアクセス管理を無効に設定する
  <!--alex enable -->

[agentforce]: https://support.box.com/hc/en-us/articles/40370228349331-Installing-Box-for-Agentforce

[methods]: g://tooling/salesforce-toolkit/methods

[actions]: g://tooling/salesforce-toolkit/flow-actions
