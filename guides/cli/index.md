---
rank: 35
related_endpoints: []
related_guides:
  - authentication/oauth2
  - authentication/oauth2/oauth2-setup
  - authentication/jwt
  - authentication/jwt/jwt-setup
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
  - authentication/jwt/jwt-setup
related_resources: []
alias_paths:
  - /docs/box-cli
  - /docs/installation-and-setup
  - /docs/commands-and-actions
  - /docs/command-line-interface-cli
  - /guides/tooling/cli
category_id: cli
subcategory_id: null
is_index: true
id: cli
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: 'https://github.com/box/developer.box.com/blob/main/content/guides/cli/index.md'
fullyTranslated: true
---
# CLI

Box Command Line Interface (CLI) は、ターミナルウィンドウまたはコマンドプロンプトからBox APIにリクエストを行うためのツールです。

## クイックスタート

[OAuth 2.0を使用したBox CLIの使用を開始する][qs]。

## CLIの設定と使用

* [サーバー認証][jwt]方法を使用するには、[こちら][jwt-page]のガイドを参照してください。
* [CCG認証][ccg]方法を使用するには、[こちら][ccg-page]のガイドを参照してください。
* CLIコマンドを使用して一括操作を行うには、[こちら][bulk]のガイドを参照してください。

## サンプルスクリプト

Box CLIの使用自体が役に立ちますが、PowerShellスクリプトと組み合わせるとさらに強力になります。反復タスクの自動化を開始できるように、スクリプトテンプレートの[ライブラリ][scripts]を作成しました。

* [サンプルスクリプトを探す][scripts-docs]

## 高度な機能

このGitHubページには、上級CLIユーザーの参考となりそうなその他のガイドも用意されています。

* [オートコンプリートの設定][cli-autocomplete]
* [別のアプリの構成][cli-add-config]
* [アカウントの切り替え][cli-switch]
* [トークンのキャッシュ][cache]

[cli]: https://github.com/box/boxcli

[cli-autocomplete]: https://github.com/box/boxcli/blob/main/docs/autocomplete.md

[cli-switch]: https://github.com/box/boxcli/blob/main/docs/configure.md#box-configureenvironmentsswitch-user-userid

[cli-add-config]: https://github.com/box/boxcli/blob/main/docs/configure.md#box-configureenvironmentsadd-path

[qs]: g://cli/quick-start/

[cache]: https://github.com/box/boxcli/blob/main/docs/configure.md#box-configureenvironmentsupdate-name

[jwt]: g://authentication/jwt

[jwt-page]: g://cli/cli-docs/jwt-cli

[scripts]: https://github.com/box/boxcli/tree/main/examples

[scripts-docs]: g://cli/scripts/index

[ccg]: g://authentication/client-credentials

[ccg-page]: https://github.com/box/boxcli/tree/main/docs/configure.md#box-configureenvironmentsadd-path

[bulk]: https://github.com/box/boxcli/blob/main/docs/Bulk%20actions/README.md
