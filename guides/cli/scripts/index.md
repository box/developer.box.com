---
rank: 0
related_endpoints: []
related_guides: []
related_pages:
  - sdks-and-tools
related_resources: []
alias_paths: []
category_id: cli
subcategory_id: cli/scripts
is_index: true
id: cli/scripts
type: guide
total_steps: 7
sibling_id: cli
parent_id: cli
next_page_id: cli/scripts/provision-users-folders
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/index.md
fullyTranslated: true
---
# CLIサンプルスクリプト

Box CLIのスクリプトは、タスクの自動化に役立つよう設計されています。現在、ユーザーが使用、カスタマイズできるいくつかのPowerShellスクリプトがサンプルスクリプトライブラリで提供されています。これらのスクリプトを実行するには、Box CLIをインストールし、構成しておく必要があります。これは、[クイックスタートガイド][quickstart]に従って実行することができます。

<Message type="warning">

以下のスクリプトのほとんどでは、コマンドの実行に使用するユーザーにBoxの[管理者権限][7]が必要です。

</Message>

## PowerShellスクリプト

* [ユーザーとフォルダのプロビジョニング][1]
* [ユーザーのプロビジョニング解除とフォルダのアーカイブ][2]
* [グループとコラボレーションの管理][3]
* [非アクティブなユーザーのレポート][4]
* [メタデータの抽出][5]
* [ユーザーのゾーンの更新][6]
* [Slack統合フォルダマッピングの管理][8]

[1]: g://cli/quick-start/powershell-script-templates

[2]: g://cli/scripts/deprovision-users

[3]: g://cli/scripts/manage-groups-collaborations

[4]: g://cli/scripts/report-inactive-users

[5]: g://cli/scripts/metadata-extraction

[6]: g://cli/scripts/user-zones-mass-update

[quickstart]: g://cli/quick-start/create-oauth-app/

[7]: https://support.box.com/hc/en-us/articles/360043694174-Understanding-Administrator-and-Co-Administrator-Permissions

[8]: g://cli/scripts/slack-integration-mappings
