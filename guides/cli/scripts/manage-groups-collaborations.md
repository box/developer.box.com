---
rank: 5
related_endpoints: []
related_guides:
  - authentication/oauth2
  - cli/scripts/provision-users-folders
  - cli/scripts/deprovision-users
  - cli/scripts/user-zones-mass-update
  - cli/scripts/report-inactive-users
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []
category_id: cli
subcategory_id: cli/scripts
is_index: false
id: cli/scripts/manage-groups-collaborations
type: guide
total_steps: 7
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: cli/scripts/metadata-extraction
previous_page_id: cli/scripts/report-inactive-users
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/manage-groups-collaborations.md
fullyTranslated: true
---
# グループとコラボレーションの管理

## スクリプト構造

このスクリプトでは、Box CLIを使用して、グループの作成や更新、グループへのユーザーの追加、グループとフォルダの間のコラボレーションの作成を行います。このスクリプトは、2つのパートから構成されています (以下のセクションで詳しく説明します)。両方のパートを実行することも、オプションのフラグを使用して実行するパートを決めることもできます。

### グループの作成または更新

1. このスクリプトでは、`UserGroupAdditionPath`パラメータに指定した`.csv`ファイルを使用します。このファイルには、グループ名とユーザーのメールアドレスが記載されています。このファイルを作成する際には、複数のユーザーに同じグループ名を使用することも、1人のユーザーを複数のグループに割り当てることもできます。以下に例を示します。

   | `GroupName` | `UserEmail`             |
   | ----------- | ----------------------- |
   | Group1      | `ManagedUser1@test.com` |
   | Group1      | `ManagedUser2@test.com` |
   | Group2      | `ManagedUser3@test.com` |
   | Group3      | `ManagedUser1@test.com` |

2. グループが存在しない場合は、スクリプトによってそのグループが作成されます。グループが存在する場合は、指定したデータに基づいてエントリが更新されます。

### コラボレーションの作成または更新

1. このスクリプトでは、`CollaborationsCreationPath`パラメータに指定した`.csv`ファイルを使用します。このファイルには、グループ名、フォルダID、コラボレーションロールが記載されています。

2. スクリプトでは、行ごとに、グループが存在するかどうか、そのグループがすでに対応するフォルダにコラボレータとして追加されていないかどうかを確認します。以下に例を示します。

   | `GroupName` | `FolderId` | `CollaborationRole` |
   | ----------- | ---------- | ------------------- |
   | Group1      | 1111111    | editor              |
   | Group2      | 1111111    | viewer_uploader     |
   | Group2      | 2222222    | viewer              |
   | Group3      | 1111111    | viewer_uploader     |

3. 両方の条件を満たしている場合、`CollaborationRole`列で定義されたロールを使用してグループがフォルダに割り当てられます。また、グループはすでに存在していても、`CollaborationRole`を変更した場合、スクリプトの実行時に`-UpdateExistingCollabs`フラグを渡すと、コラボレーションロールが更新されます。

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
    cd boxcli/examples/Mass\ Groups\ \&\ Collaborations\ Update/

```

2. グループとユーザーのメールアドレスのリストが含まれる`.csv`ファイルのパスを設定します。

```bash
    $UserGroupAdditionPath = "./User_Group_Addition.csv"

```

    * `UserEmail` is the primary email address for the user in Box.
    * `GroupName` is the name of the group.

3. グループとユーザーのメールアドレスのリストが含まれる`.csv`ファイルに独自のパスを設定します。

```bash
    $CollaborationsCreationPath = "./Collaborations_Creation.csv"

```

    * `GroupName` is name of the group the script will add as a collaborator to the folder.
    * `FolderId` is the folder ID the collaborator will be added to.
    * `CollaborationRole` is the name of the role used when creating a collaboration.

    You can configure the available roles by setting the `AvailableCollaborationRoles` parameter:

```bash
    $AvailableCollaborationRoles = @("editor", "viewer", "previewer", "uploader", "previewer_uploader", "viewer_uploader", "co-owner")

```

## スクリプトの実行

1. PowerShellコマンドを実行します。

```bash
    pwsh

```

2. スクリプトを実行します。

```bash
    ./Mass_Groups_Collabs_Update.ps1

```

### オプションのフラグ

フラグを使用すると、スクリプトの特定の部分を実行またはスキップできます。

* グループがすでに特定のフォルダのコラボレータとして設定されているものの、その役割が.`csv`ファイルで定義されたものとは異なる場合は、スクリプトによってそのことが通知されます。スクリプトによって既存のコラボレーションが変更されることはありません。`.csv`ファイルで定義された役割で既存のコラボレーションを更新するには、スクリプトを実行する際に追加の`-UpdateExistingCollabs`フラグを設定します。

```bash
    Mass_Groups_Collabs_Update.ps1 -UpdateExistingCollabs

```

* コラボレーションを作成せずにグループを更新するには、スクリプトの実行時に`-SkipCollabsCreation`ブール値フラグを追加します。

```bash
    Mass_Groups_Collabs_Update.ps1 -SkipCollabsCreation

```

* グループを更新せずにコラボレーションを作成するには、スクリプトの実行時に`-SkipGroupsUpdate`ブール値フラグを追加します。

```bash
    Mass_Groups_Collabs_Update.ps1 -SkipGroupsUpdate

```

## ログ

ログは、メインフォルダ内の`logs`フォルダに格納されます。以下のログファイルにアクセスできます。

* `Mass_Groups_Collabs_Update_all.txt`: すべてのログエントリが含まれています。
* `Mass_Groups_Collabs_Update_errors.txt`: エラーのみが含まれています。

[examples]: https://github.com/box/boxcli/tree/main/examples

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2

[quickstart]: g://cli/quick-start/create-oauth-app/

[console]: https://app.box.com/developers/console

[auth]: g://authentication/oauth2/oauth2-setup
