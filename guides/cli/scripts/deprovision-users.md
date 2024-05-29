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
id: cli/scripts/deprovision-users
type: guide
total_steps: 7
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: cli/scripts/slack-integration-mappings
previous_page_id: cli/scripts/metadata-extraction
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/deprovision-users.md
fullyTranslated: true
---
# ユーザーのプロビジョニング解除とフォルダのアーカイブ

このスクリプトを使用すると、ユーザーのリストによるプロビジョニング解除と削除が可能です。スクリプトでは以下の手順が実行されます。

1. `EmployeeArchiveFolderName`パラメータで指定された、別のユーザーのルートフォルダにユーザーコンテンツを転送します。
2. ユーザーを削除します。

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
    git clone https://github.com/box/boxcli.git boxcli
    cd boxcli/examples/User\ Deprovisioning/

```

2. 削除する従業員のリストを`.csv`で作成します。

   ヘッダー行は次のようになります。

```bash
    name, email

```

    where:

    * `name` is the name of the user in Box.
    * `email` is the primary email address of the user in Box.

    For example:

    |`name`| `email`|
    |------|--------|
    |Managed User 1| `ManagedUser1@test.com`|
    |Managed User 2| `ManagedUser2@test.com`|
    |Managed User 3| `ManagedUser3@test.com`|

### パラメータのリスト

| `Parameter`                 | `Description`                                                                                                                                                | `Required` | `Default Value`                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ----------------------------------------------------- |
| `EmployeeList`              | 削除する従業員が記載された従業員リストCSVのパス。                                                                                                                                   | はい         | -                                                     |
| `SkipTransferContent`       | このフラグを設定すると、スクリプトの実行時に、削除前にユーザーコンテンツの転送をスキップします。設定しない場合は、ユーザーのコンテンツが転送されます。                                                                                  | いいえ        | `False`                                               |
| `NewFilesOwnerID`           | ユーザーの削除前にファイルの転送先となるユーザーのID。指定しなかった場合、スクリプトは、対話形式で入力を求めるか、現在認証されているユーザーのIDを使用してコンテンツを受け取ります。                                                                 | いいえ        | 指定しなかった場合、スクリプトは、対話形式で入力を求めるか、現在認証されているユーザーのIDを使用します。 |
| `EmployeeArchiveFolderName` | `SkipTransferContent`が`False`に設定されている場合にユーザーのコンテンツの移動先となるフォルダの名前。この名前のフォルダがそのユーザーの`NewFilesOwnerID`ルートフォルダにすでに存在する場合は、そのフォルダが使用されます。存在しない場合は、新しいフォルダが作成されます。 | はい         | `Employee Archive`                                    |
| `DryRun`                    | 削除/作成/更新の呼び出しは行われず、読み取りの呼び出しのみが行われるモードでスクリプトを実行するかどうかを決定するフラグ。                                                                                               | いいえ        | `False`                                               |

### スクリプトのパラメータの定義

パラメータを渡すには、以下のオプションを使用できます。

* スクリプトでハードコードされた値を使用します。

    このオプションを使用するには、実行する前に、[スクリプトのパラメータセクション][parameters]に記載されている必須パラメータをすべて更新します。

* パラメータを指定してスクリプトを実行します。

    コマンドを指定するときにパラメータを指定できます。以下に例を示します。

```bash
    PS > ./Users_Deprovision.ps1 -EmployeeList ./Employees_to_delete.csv `
    -NewFilesOwnerID  123456789
    -EmployeeArchiveFolderName "Employee Archive"

```

    or

```bash
    PS > ./Users_Deprovision.ps1 -EmployeeList ./Employees_to_delete.csv `
    -SkipTransferContent

```

    If you don't specify parameters, the script will prompt you to enter it.

```bash
    PS > ./Users_Deprovision.ps1
    Please enter the path to the employee list CSV file:
    ./Employees_to_delete.csv
    Please specify the user ID of the user who will own the files of the users being deprovisioned.
    Press Enter if you want to use the current user as the new owner.
    User ID: 1234567689
    Starting User Deprovisioning script...

```

## スクリプトの実行

これで、あとはスクリプトを実行するだけです。

1. PowerShellコマンドを実行します。

```bash
    pwsh

```

2. スクリプトを実行します:

```bash
    ./Users_Deprovision.ps1

```

    When all parameters are defined, you will see following output to confirm the script started:

```bash
    PS /home/rvb/box-cli/examples/User Deprovisioning> ./Users_Deprovision.ps1
    Starting User Deprovisioning script...

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

[parameters]: https://github.com/box/boxcli/tree/main/examples/User%20Deprovisioning/Users_Deprovision.ps1#L17-L36

[employeelist]: https://github.com/box/boxcli/blob/main/examples/User%20Deprovisioning/Users_Deprovision.ps1#L12
