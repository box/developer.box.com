---
rank: 8
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

このスクリプトは、BoxをSlackのコンテンツストアとして使用している場合に、SlackとBox間のフォルダマッピングの管理に役立ちます。現在のSlackチャンネルとBoxフォルダのマッピングのリストが作成されるため、入力用のcsvに基づいてマッピングを作成または更新できます。このスクリプトではすべての権限が維持されます。

詳細については、[GitHubリポジトリ][1]で確認できます。

## 前提条件

### スクリプトの複製

このGitHubリポジトリを複製するか、`/examples`ディレクトリからファイルをダウンロードします

```bash
git clone https://github.com/box/boxcli.git

```

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

<message>

問題が発生する場合は、[.NET Core](https://dotnet.microsoft.com/download)と[PowerShell][pwsh]の両方をインストールしたかどうか確認してください。

</message>

### Box CLIのインストール

OAuth [CLIの設定クイックスタート][oauth-guide]を使用して、Box CLIを構成してインストールします。使用しているユーザーが管理者または共同管理者であることを確認してください。

### エンタープライズ設定

* 適切なSlackワークスペースやオーガナイゼーションで[Box for Slackを構成してインストール][install-slack]します
* [Slackのコンテンツレイヤー][content-layer]としてのBoxが有効になっています

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

EXTRACTを指定してスクリプトを実行すると、現在のマッピングが抽出されます:

```pwsh
./integration-mappings.ps1 -Action EXTRACT

```

または

UPDATEを指定してスクリプトを実行すると、現在のマッピングが更新されます:

```pwsh
./integration-mappings.ps1 -Action UPDATE

```

または

CREATEを指定してスクリプトを実行すると、新しいマッピングが作成されます:

```pwsh
./integration-mappings.ps1 -Action CREATE -MappingPath ./mapping_create_example.csv

```

デフォルトでは、csvファイルが./mappings.csvに保存され、./mappings.csvから読み込まれます。この場所を変更する場合は、次のように新しいパスを渡します:

```pwsh
./integration-mappings.ps1 -Action EXTRACT -MappingPath ./mappings_new_location.csv

```

パラメータを指定しなかった場合は、スクリプトによって、パラメータを入力するよう求められます。

スクリプトの実行が完了すると、以下のような出力が表示されます。

新しいチャンネルにマッピングを作成する際は、BoxフォルダID、SlackチャンネルID、およびSlackオーガナイゼーションIDを入力する必要があります。オーガナイゼーションIDの代わりにSlackワークスペースIDを使用できます。その場合は、csvの列見出し`SlackOrgId`を`SlackWorkspaceId`に置き換えます。

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

## 免責

このプロジェクトは、オープンソースの例を集めたものであるため、公式にサポートされている製品として扱わないでください。Box CLIの使用方法は、自己責任の下、例の情報源として利用してください。

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2

[oauth-guide]: https://developer.box.com/guides/cli/quick-start/

[install-slack]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration

[content-layer]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack

[1]: https://github.com/box/boxcli/tree/main/examples/Integration%20Mappings
