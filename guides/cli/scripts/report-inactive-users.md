---
rank: 4
related_endpoints: []
related_guides:
  - authentication/oauth2
  - cli/scripts/provision-users-folders
  - cli/scripts/deprovision-users
  - cli/scripts/user-zones-mass-update
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []
category_id: cli
subcategory_id: cli/scripts
is_index: false
id: cli/scripts/report-inactive-users
type: guide
total_steps: 7
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: cli/scripts/manage-groups-collaborations
previous_page_id: cli/scripts/user-zones-mass-update
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/report-inactive-users.md
fullyTranslated: true
---
# 非アクティブなユーザーのレポート

このスクリプトは、一定の日数の間非アクティブであったユーザーのリストをCSVファイルで生成します。スクリプトによって以下の手順が実行されます。

1. `user`ロールを持つユーザーを探します。

   <message>

   このスクリプトでは、他のロール (`AppUser`など) は考慮していません。

   </message>

2. [Box Events][boxevents]を使用して、そのユーザーが一定の日数の間に操作を行ったかどうかを確認します。デフォルトのイベントタイプのリストは、`LOGIN`、`UPLOAD`、`COPY`、`MOVE`、`PREVIEW`、`DOWNLOAD`、`EDIT`、`DELETE`、`UNDELETE`、`LOCK`、`UNLOCK`、`NEW_USER`です。このリストはスクリプトの設定で変更できます。

3. 操作を行わなかったユーザーを、非アクティブなユーザーが含まれている`.csv`ファイルに追加します。このファイルは他のスクリプト ([ユーザーのプロビジョニング解除][deprovisionscript]など) の入力として使用できます。

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

<message>

問題が発生する場合は、[.NET Core](https://dotnet.microsoft.com/download)と[PowerShell][pwsh]の両方をインストールしたかどうか確認してください。

</message>

### Box CLI

スクリプトを使用するには、Box CLIをインストールし、構成する必要があります。これは、[クイックスタートガイド][quickstart]の手順を実行することで行うことができます。ログインに使用するユーザーは、Boxのメイン管理者または共同管理者である必要があります。

## スクリプトの構成

1. `boxcli` GitHubリポジトリを複製してこの例のフォルダにcdコマンドで移動するか、[`examples`][examples]ディレクトリからファイルをダウンロードします。

```bash
    git clone https://github.com/box/boxcli.git
    cd boxcli/examples/Inactive\ Users\ Report/

```

2. スクリプトでUser Eventをスキャンする日数を設定します。この値を指定しなかった場合やデフォルト設定のままにした場合は、スクリプトによって入力するよう求められます。

```bash
    $daysInactive = "10"

```

3. (省略可) レポート出力ファイル名を変更するには、`ReportOutputFile`パラメータを定義します。

```bash
    $ReportOutputFile = $ReportName + ".csv"

```

4. (省略可) イベントタイプを変更するには、`eventType`パラメータのリストを定義します。

```bash
    $eventType = "LOGIN,UPLOAD,COPY,MOVE"

```

## スクリプトの実行

PowerShellコマンドを実行します。

```bash
pwsh

```

スクリプトを実行します。

```bash
./Inactive_Users_Report.ps1

```

スクリプトの実行が完了すると、以下のような出力が表示されます。

```bash
Transfered employee content Managed User 1
with User ID: 19927131476 to Employee Archive Folder
Deleted user 19927131476
Deleted employee Managed User 1

```

## ログ

ログは、メインフォルダ内の`logs`フォルダに格納されます。以下のログファイルにアクセスできます。

* `Inactive_Users_Report_all.txt`: すべてのログエントリが含まれています。
* `Inactive_Users_Report_errors.txt`: エラーのみが含まれています。

[scripts]: https://github.com/box/boxcli/tree/main/examples

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2

[quickstart]: g://cli/quick-start/create-oauth-app/

[boxevents]: https://developer.box.com/reference/resources/event/

[deprovisionscript]: g://cli/scripts/deprovision-users

[console]: https://app.box.com/developers/console

[auth]: g://authentication/oauth2/oauth2-setup

[examples]: https://github.com/box/boxcli/tree/main/examples/Inactive%20Users%20Report
