---
rank: 0
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
category_id: tooling
subcategory_id: tooling/cli
is_index: true
id: tooling/cli
type: guide
total_steps: 1
sibling_id: tooling
parent_id: tooling
next_page_id: tooling/cli/jwt-cli
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/index.md
fullyTranslated: true
---
# CLI

Box Command Line Interface (CLI) は、ターミナルウィンドウまたはコマンドプロンプトからBox APIにリクエストを行うためのツールです。

## はじめに

[Get started using the Box CLI with OAuth 2.0][qs].

## Box CLI Using JWT Authentication

If you would rather use our [server authentication][jwt] method, check out [this][jwt-page] guide.

## 高度な機能

このGitHubページには、上級CLIユーザーの参考となりそうなその他のガイドも用意されています。

* [オートコンプリートの設定][cli-autocomplete]
* [別のアプリの構成][cli-add-config]
* [アカウントの切り替え][cli-switch]
* [トークンのキャッシュ][cache]
* [オートコンプリート][ac]

[cli]: https://github.com/box/boxcli

[cli-autocomplete]: https://github.com/box/boxcli/blob/master/docs/autocomplete.md

[cli-switch]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsswitch-user-userid

[cli-add-config]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsadd-path

[qs]: g://tooling/cli/quick-start/

[cache]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsupdate-name

[ac]: https://github.com/box/boxcli/blob/master/docs/autocomplete.md

[jwt]: g://authentication/jwt

[jwt-page]: g://tooling/cli/jwt-cli
