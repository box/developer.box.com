---
rank: 6
related_endpoints: []
related_guides:
  - authentication/oauth2
  - cli/quick-start/powershell-script-templates
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []
category_id: cli
subcategory_id: cli/scripts
is_index: false
id: cli/scripts/metadata-extraction
type: guide
total_steps: 7
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: cli/scripts/deprovision-users
previous_page_id: cli/scripts/manage-groups-collaborations
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/metadata-extraction.md
fullyTranslated: true
---
# メタデータの抽出

このスクリプトでは、任意のBoxフォルダ内のすべてのファイルとフォルダのメタデータの詳細を抽出し、その結果を各メタデータテンプレートのCSVスプレッドシートに保存します。

## 前提条件

### Windows

[.NET Core](https://dotnet.microsoft.com/download)の最新バージョンのインストール

### macOSおよびLinux

[PowerShell][pwsh]をインストールします。`pwsh`コマンドを実行して、インストール結果をテストします。

```bash
pwsh

```

どのディレクトリでこのコマンドを実行するかに応じて、出力が異なる場合があります。以下に例を示します。

```bash
PowerShell 7.2.5
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

PS /Users/user/repos/boxcli/examples>

```

<Message>

問題が発生する場合は、[.NET Core](https://dotnet.microsoft.com/download)と[PowerShell][pwsh]の両方をインストールしたかどうか確認してください。

</Message>

### Box CLI

スクリプトを使用するには、Box CLIをインストールし、構成する必要があります。これは、[クイックスタートガイド][quickstart]の手順を実行することで行うことができます。

## スクリプトの構成

1. `boxcli` GitHubリポジトリを複製してこの例のフォルダにcdコマンドで移動するか、[`examples`][examples]ディレクトリからファイルをダウンロードします。

```bash
    git clone https://github.com/box/boxcli.git
    cd boxcli/examples/Metadata\ Extraction/

```

2. `folderID`および`userID`パラメータを指定して、スキャンするフォルダとスクリプトを実行するユーザーをスクリプトに指示します。

```bash
    [string]$FolderID = "",
    [string]$UserID = "",

```

    If you don't want to specify the parameters directly in the script,
    you can either pass them as flags or allow the script
    to prompt you to enter them. A sample command with flags looks as follows:

```bash
    ./Metadata-extraction.ps1 -folderId 123456789 -userId 123456789

```

## スクリプトの実行

1. PowerShellコマンドを実行します。

```bash
    pwsh

```

2. スクリプトを実行します。

```bash
    ./Metadata-extraction.ps1 -folderId 123456789 -userId 123456789

```

    When the script finishes, you will see the following
    output or a similar one.

```bash
    Pulling data from Folder ID: 173961139760
    metadata as user ID: 20718545815
    Reading Item ID: 1016853559790
    Metadata saved to: MetadataTemplate_properties.csv

```

## ログ

ログは、メインフォルダ内の`logs`フォルダに格納されます。以下のログファイルにアクセスできます。

* `Metadata-extraction_all.txt`: すべてのログエントリが含まれています。
* `Metadata-extraction_errors.txt`: エラーのみが含まれています。

[scripts]: https://github.com/box/boxcli/tree/main/examples

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2

[quickstart]: g://cli/quick-start/create-oauth-app/

[console]: https://app.box.com/developers/console

[auth]: g://authentication/oauth2/oauth2-setup

[examples]: https://github.com/box/boxcli/tree/main/examples/Metadata%20Extraction
