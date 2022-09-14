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
id: cli/scripts/deprovision-users
type: guide
total_steps: 5
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: ''
previous_page_id: cli/scripts/manage-groups-collaborations
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/deprovision-users.md
fullyTranslated: true
---
# ユーザーのプロビジョニング解除とフォルダのアーカイブ

このスクリプトを使用すると、ユーザーのリストによるプロビジョニング解除と削除が可能です。スクリプトでは以下の手順が実行されます。

1. 現在の管理者ユーザーのルートフォルダ`Employee Archive`にユーザーコンテンツを転送します。
2. ユーザーを削除します。

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

<message>

問題が発生する場合は、[.NET Core](https://dotnet.microsoft.com/download)と[PowerShell][pwsh]の両方をインストールしたかどうか確認してください。

</message>

### Boxアプリケーション

スクリプトを使用するには、OAuth 2.0認証を使用するBoxアプリケーションが必要です。該当するアプリケーションがない場合は、[開発者コンソール][console]に移動して、[OAuth 2.0を使用した設定][auth]ガイドに従ってください。

## スクリプトの構成

`boxcli` GitHubリポジトリを複製するか、[`examples`][examples]ディレクトリからファイルをダウンロードします。

```bash
git clone https://github.com/box/boxcli.git
```

従業員のリストが含まれるCSVファイルのパスを指定します。

```bash
$EmployeeList = "./Employees_to_delete.csv"
```

削除対象の従業員アカウントが記載された`Employees_to_delete.csv`入力ファイルを、削除対象アカウントのメールアドレスを指定してカスタマイズします。以下に例を示します。

```bash
name,email
Managed User 1,ManagedUser1@test.com
```

(省略可) ユーザーの削除前にユーザーコンテンツの転送をスキップするには、`TransferContent`パラメータを`N`に設定します。

```bash
$TransferContent = "N"
```

(省略可) `EmployeeArchiveFolderName`を任意の名前に変更します。

```bash
$EmployeeArchiveFolderName = "Employee Archive"
```

## スクリプトの実行

ディレクトリを、スクリプトが格納されているフォルダに変更します。この例では、`User Deprovisioning`フォルダになります。

```bash
rvb@lab:~/box-cli/examples/User Deprovisioning$ pwsh
PowerShell 7.2.4
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.
  
PS /home/rvb/box-cli/examples/User Deprovisioning>
```

スクリプトを実行します。

```bash
./Users_Deprovision.ps1
```

スクリプトの実行が完了すると、以下のような出力が表示されます。

```bash
Transfered employee content Managed User 1
with User ID: 19927131476 to Employee Archive Folder
Deleted user 19927131476
Deleted employee Managed User 1
```

### オプションのフラグ

To run the script in a simulation mode, add the `DryRun` boolean flag. Dry run doesn't mean that API calls won't be made, but that create/update/delete calls will be skipped.

```bash
./Users_Deprovision.ps1 -DryRun
```

## ログ

ログは、メインフォルダ内の`logs`フォルダに格納されます。以下のログファイルにアクセスできます。

* `Users_Deprovision_all.txt`: すべてのログエントリが含まれています。
* `Users_Deprovision_errors.txt`: エラーのみが含まれています。

[scripts]: https://github.com/box/boxcli/tree/main/examples

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2

[quickstart]: g://cli/quick-start/create-oauth-app/

[console]: https://app.box.com/developers/console

[auth]: g://authentication/oauth2/oauth2-setup

[examples]: https://github.com/box/boxcli/tree/main/examples/User%20Deprovisioning

[employeelist][employeelist]:\[<https://github.com/box/boxcli/blob/main/examples/User%20Deprovisioning/Users_Deprovision.ps1#L12>
