---
rank: 9
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
id: cli/scripts/slack-integration-mappings
type: guide
total_steps: 7
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: ''
previous_page_id: cli/scripts/deprovision-users
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/slack-integration-mappings.md
fullyTranslated: true
---
# Slack統合フォルダマッピングの管理

<!-- markdownlint-disable line-length -->

このスクリプトは、BoxをSlackのコンテンツストアとして使用している場合に、SlackとBox間のフォルダマッピングの管理に役立ちます。現在のSlackチャンネルとBoxフォルダのマッピングのリストが作成されるため、入力用のcsvに基づいてマッピングを作成または更新できます。このスクリプトではすべての権限が維持されます。

For more details, you can checkout the [Github repo][1].

## 前提条件

### Clone script

Clone this GitHub repo or download files from the `/examples` directory

```bash
git clone https://github.com/box/boxcli.git
```

### Windows

[.NET Core](https://dotnet.microsoft.com/download)の最新バージョンのインストール

### MacOSおよびLinux

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

<message>

問題が発生する場合は、[.NET Core](https://dotnet.microsoft.com/download)と[PowerShell][pwsh]の両方をインストールしたかどうか確認してください。

</message>

### Box CLI Install

Configure and install the Box CLI using the OAuth [CLI Setup Quick Start][oauth-guide]. Make sure the user you use is an admin or co-admin.

### Enterprise configuration

* Configure and [install Box for Slack][install-slack] in the relevant Slack work spaces and organizations
* Box as the [content layer for Slack][content-layer] in enabled

## スクリプトの実行

ディレクトリを、スクリプトが格納されているフォルダに変更します。この例では、`Integration Mappings`フォルダになります。

```pwsh
rvb@lab:~/box-cli/examples/Integration Mappings$ pwsh
PowerShell 7.2.4
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

PS /home/rvb/box-cli/examples/Integration Mappings>
```

Run the script with EXTRACT to extract current mappings:

```pwsh
./integration-mappings.ps1 -Action EXTRACT
```

または

Run the script with UPDATE to update current mappings:

```pwsh
./integration-mappings.ps1 -Action UPDATE
```

または

Run the script with CREATE to create new mappings:

```pwsh
./integration-mappings.ps1 -Action CREATE -MappingPath ./mapping_create_example.csv
```

By default, the csv file will save to and load from ./mappings.csv. If you wish to change this location, you can pass in a new path like so:

```pwsh
./integration-mappings.ps1 -Action EXTRACT -MappingPath ./mappings_new_location.csv
```

If you don't specify parameters, the script will prompt you to enter them.

スクリプトの実行が完了すると、以下のような出力が表示されます。

When creating a mapping on a new channel, you must input a Box folder id, Slack channel id and Slack org id. You may use a Slack workspace ID in lieu of the org id. In that case, you would replace the csv column header `SlackOrgId` with `SlackWorkspaceId`.

```pwsh
Starting Process
Applying new mappings
Output [...]
All bulk input entries processed successfully.
```

## ログ

ログは、メインフォルダ内の`logs`フォルダに格納されます。以下のログファイルにアクセスできます。

* `Integration-mappings_all.txt`: すべてのログエントリが含まれています。
* `Integration-mappings_errors.txt`: エラーのみが含まれています。

## Disclaimer

This project is a collection of open source examples and should not be treated as an officially supported product. Use at your own risk and as a source of example how to use Box CLI.

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2

[oauth-guide]: https://developer.box.com/guides/cli/quick-start/

[install-slack]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration

[content-layer]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack

[1]: https://github.com/box/boxcli/tree/main/examples/Integration%20Mappings
