---
rank: 7
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
total_steps: 6
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: cli/scripts/deprovision-users
previous_page_id: cli/scripts/report-inactive-users
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/metadata-extraction.md
fullyTranslated: true
---
# メタデータの抽出

このスクリプトでは、任意のBoxフォルダ内のすべてのファイルとフォルダのメタデータの詳細を抽出し、その結果を各メタデータテンプレートのCSVスプレッドシートに保存します。

## 前提条件

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

<Message>

問題が発生する場合は、[.NET Core](https://dotnet.microsoft.com/download)と[PowerShell][pwsh]の両方をインストールしたかどうか確認してください。

</Message>

### Boxアプリケーション

スクリプトを使用するには、OAuth 2.0認証を使用するBoxアプリケーションが必要です。該当するアプリケーションがない場合は、[開発者コンソール][console]に移動して、[OAuth 2.0を使用した設定][auth]ガイドに従ってください。

## スクリプトの構成

1. `boxcli` GitHubリポジトリを複製するか、[`examples`][examples]ディレクトリからファイルをダウンロードします。

   ```bash
   git clone https://github.com/box/boxcli.git
   ```

<!---->

````

2. Specify the `folderID` and `userID` parameters to tell the script which
   folder to scan, and who is the user running the script.

   ```bash
   [string]$FolderID = "",
   [string]$UserID = "",
````

   パラメータをスクリプトで直接指定しない場合は、フラグとして渡すか、スクリプトで入力を求めるプロンプトを表示することができます。フラグを使用したコマンドのサンプルは次のようになります。

```bash
./Metadata-extraction.ps1 -folderId 123456789 -userId 123456789
```

## スクリプトの実行

1. ディレクトリを、スクリプトが格納されているフォルダに変更します。この例では、`Metadata Extraction`フォルダになります。

   ```bash
   rvb@lab:~/box-cli/examples/Metadata Extraction$ pwsh
   PowerShell 7.2.4
   Copyright (c) Microsoft Corporation.
   https://aka.ms/powershell
   Type 'help' to get help.
   PS /home/rvb/box-cli/examples/Metadata Extraction>
   ```

2. スクリプトを実行します。

   ```bash
   ./Metadata-extraction.ps1 -folderId 123456789 -userId 123456789
   ```

   スクリプトが終了すると、以下のような出力が表示されます。

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
