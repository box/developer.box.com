---
rank: 5
related_endpoints: []
related_guides:
  - authentication/jwt
  - applications/custom-apps/jwt-setup
related_pages:
  - sdks-and-tools
required_guides:
  - applications/custom-apps/jwt-setup
related_resources: []
alias_paths:
  - /docs/box-cli
  - /docs/installation-and-setup
  - /docs/commands-and-actions
  - /docs/command-line-interface-cli
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/cli
type: guide
total_steps: 6
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks
previous_page_id: tooling/sdks/node
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/sdks/cli.md
---
# Box CLIのインストール

Box Command Line Interface (CLI)は、ターミナルウィンドウまたはコマンドプロンプトからBox APIにリクエストを行うためのツールです。

Windows用およびmacOS用のインストーラが提供されていますが、その他の環境でもCLIを構築するためのRawソースコードを利用できます。

## Windows用およびmacOS用インストーラ 

お使いのマシンに最新のCLIをインストールするには、最新リリースに対応する最新の`.exe`(Windowsの場合)または`.pkg`(macOSの場合)をダウンロードします。

<CTA to="https://github.com/box/boxcli/releases">

最新のCLIインストーラをダウンロード

</CTA>

## LinuxとNodeのインストール

さらに、CLIは、任意のプラットフォーム(Linuxなど)にNodeパッケージとしてインストールすることができます。このためには、[Node JS](https://nodejs.org/)をマシンにインストールしておく必要があります。

```bash
npm install --global @box/cli
```

## ソースコード

[GitHubページ][cli]でCLIのソースコードも提供されています。

## はじめに

最初に、JWTでサーバー側認証を使用して[Boxカスタムアプリを設定][jwt-guide]し、[開発者コンソール][devconsole]のアプリの設定ページからJSON構成ファイルをダウンロードします。次に、構成ファイルを指定してCLIをセットアップします。

```cli
box configure:environments:add [PATH_TO_CONFIG_FILE]
```

次に、JWTアプリのサービスアカウントのコンテンツのリストを指定して、最初のAPI呼び出しを行います。

```cli
box folders:get 0
```

<Message>

すべてのアカウントのルートフォルダのIDは常に`0`です。JWTアプリケーションは、実際の管理対象ユーザーとして自動的に認証するのではなく、代わりにサービスアカウントを使用します。詳細については、[ユーザータイプ](g://authentication/user-types)を参照してください。

</Message>

## 設定とコマンド

CLI環境をセットアップし、CLIインストール後の操作を開始する手順については、[Box CLIに関するGitHubページ][cli]を参照してください。

このGitHubページには、上級CLIユーザーの参考となりそうなその他のガイドも用意されています。

* [オートコンプリートの設定][cli-autocomplete]
* [別のアプリの構成][cli-add-config]
* [アカウントの切り替え][cli-switch]
* [コマンドの全一覧][cli-commands]

[cli]: https://github.com/box/boxcli

[cli-releases]: https://github.com/box/boxcli/releases

[cli-getting-started]: https://github.com/box/boxcli#getting-started

[cli-commands]: https://github.com/box/boxcli#command-topics

[jwt-guide]: g://applications/custom-apps/jwt-setup

[devconsole]: https://app.box.com/developers/console

[cli-autocomplete]: https://github.com/box/boxcli/blob/master/docs/autocomplete.md

[cli-switch]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsswitch-user-userid

[cli-add-config]: https://github.com/box/boxcli/blob/master/docs/configure.md#box-configureenvironmentsadd-path
