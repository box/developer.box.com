---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/powershell-script-templates
rank: 5
total_steps: 6
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/next-steps
previous_page_id: tooling/cli/quick-start/options-and-bulk-commands
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/5-powershell-script-templates.md
fullyTranslated: true
---
# Box CLIでのPowerShellスクリプトの使用

CLIはそれ自体がすでに強力ですが、PowerShellスクリプトと併用すると、繰り返し発生するタスクをさらに短時間で完了することができます。Boxでは、開発をすぐに開始できるように、BoxのCLI GitHubリポジトリ内にサンプル[スクリプト][scripts]フォルダを作成しました。

クイックスタートのこの手順では、ユーザーの作成とプロビジョニングの自動化[スクリプト][script-1]テンプレートを使用します。

このスクリプトでは、Box CLIを使用して、ユーザー (管理者またはサービスアカウント) が所有するオンボーディングフォルダ構造の作成と管理対象ユーザーの一括作成を実行し、新しく作成したフォルダ構造に新しいユーザーをビューアー/アップローダーのロールを持つコラボレータとして追加することでそのユーザーのプロビジョニングを行います。

<message type="warning"></message>

クイックスタートのこの手順を実行できるのは、管理者権限を持つサービスアカウントまたはユーザーのみです。Box管理者以外のユーザーの場合、またはサービスアカウントを使用していない場合は、この手順をスキップできます。

</Message>

<!-- INSERT VIDEO ONCE COMPLETE HERE-->

## ユースケース

この例で紹介するユースケースでは、ユーザーの自動作成を説明します。

* `.csv`ファイルを使用してユーザーを一括で読み込む
* あらかじめ決められたフォルダ構造に各ユーザーを関連付ける
* JSONファイルを使用してそのフォルダ構造を定義する
* 必要に応じて、ローカルドライブからのアップロードによりフォルダ構造を作成する

## 前提条件

### Windows

* [.NET Core](https://dotnet.microsoft.com/download)の最新バージョンのインストール

### MacOSおよびLinux

* [PowerShell][pwsh]のインストール

問題が発生する場合は、[.NET Core](https://dotnet.microsoft.com/download)と[PowerShell][pwsh]の両方をインストールしたかどうか確認してください

### 構成済みのBoxアプリケーション

Boxアプリケーションを作成しておく必要があります。まだの場合は、このクイックスタートガイドの[手順1][Step 1]を参照してください。または、[開発者コンソール][console]に移動し、[OAuth 2.0を使用した設定][auth]ガイドに従ってください。

## スクリプトのダウンロード

```bash
git clone https://github.com/box/boxcli.git box-cli
cd box-cli/examples/User\ Creation\ \&\ Provisioning/
```

## スクリプトの構成の変更

このスクリプトは、自分の環境で実行するために調整する必要があります。

### ユーザーリストの準備

ユーザーを読み込むには、サンプルファイル`Employees_1.csv`、`Employees_5.csv`、`Employees_10.csv`を使用できます。それぞれのファイルでは、新しいユーザーが1人、5人、10人読み込まれます。

これらのファイルをテスト実行用にカスタマイズします。たとえば、`Employees_1.csv`を次のデータで更新します。

```bash
firstName,lastName,email
Isaac,Newton,abc@abc.local
```

`Users_Create_Provision.ps1`スクリプトファイルでは、読み込む`.csv`ファイルを指定します。たとえば、`Employees_1.csv`の場合は、次のようになります。

```bash
# Set Employee List CSV Path
$EmployeeList = "./Employees_1.csv"
```

### フォルダ構造の作成

フォルダ構造は、JSONファイルから作成するか、ローカルドライブからアップロードすることができます。

### JSONファイルを使用する場合

`Folder_Structure.json`ファイルは、作成するフォルダ構造を表します。たとえば、`Market Research`フォルダと`Sales Plays`フォルダを作成し、それぞれにサブフォルダ`Statistics`と`Big Pharma`を作成するとします。

スクリプトファイル`Users_Create_Provision.ps1`には、選択肢となるオプションもいくつかあります。

スクリプトのフォルダ作成セクションでは、`Onboarding`フォルダがハードコードされています。つまり、`Folder_Structure.json`ファイルに記述されるフォルダが何であっても、それらは`Onboarding`フォルダの下に作成されます。

```bash
# First create Onboarding folder owned by current user
$script:OnboardingFolderId = box folders:create 0 "Onboarding" --id-only 
Write-Output "Created a user owned Onboarding folder with id: $($OnboardingFolderId)"
```

`Folder_Structure.json`ファイルの場所を設定します。

```bash
# Onboarding Folder Structure: Set either path build off JSON or directly
# upload a local folder
$FolderStructureJSONPath = "./Folder_Structure.json"
# $LocalUploadPath = "./OnboardingLocalUpload"
```

### ローカルドライブからアップロードする場合

次のスクリプトでは、ローカルファイルシステムから直接フォルダ構造をアップロードする例を示しています。これを試す場合は、パスを自分のローカルフォルダに設定してください。

```bash
# Onboarding Folder Structure: Set either path build off JSON or directly
# upload a local folder
# $FolderStructureJSONPath = "./Folder_Structure.json"
$LocalUploadPath = "./OnboardingLocalUpload"
```

`New-Folder-Structure`の呼び出しをコメントにし、次のセクションをコメント解除します。

```bash
# Create Folder Structure from JSON
# New-Folder-Structure

# OR directly upload Folder structure to current user's root folder
# from local directory

$script:OnboardingFolderId = box folders:upload $LocalUploadPath --id-only
Write-Output "Uploaded local folder structre to current user's root folder 
with $($script:OnboardingFolderId)"
```

## スクリプトの実行

この時点で必要なのは、スクリプトの実行だけです。ディレクトリを、スクリプトが格納されているフォルダに変更します。この例では、`User Creation & Provisioning`フォルダになります。

```bash
rvb@lab:~/box-cli/examples/User Creation & Provisioning$ pwsh
PowerShell 7.2.4
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

PS /home/rvb/box-cli/examples/User Creation & Provisioning>
```

スクリプトの実行:

```bash
PS /home/rvb/box-cli/examples/User Creation & Provisioning> ./Users_Create_Provision.ps1
Starting User Creation & Provisioning script...


firstName lastName email
--------- -------- -----
Isaac     Newton   abc@abc.local
Extracting folder structure
Found current User ID: 18622116055

Created a user owned Onboarding folder with id: 164734146745

Created subfolder Market Research under Onboarding folder with id: 164735375585

Created subfolder under Statistics folder with id: 164734956242

Created subfolder Sales Plays under Onboarding folder with id: 164735683001

Created subfolder under Big Pharma folder with id: 164736160637
Creating employee Managed User account with first name: Isaac, last name: 
Newton, email: abc@abc.local, and

Created Managed user with id: 19605663027

Type: collaboration
ID: '37250833128'
Created By:
    Type: user
    ID: '18622116055'
    Name: Rui Barbosa
    Login: barduinor@gmail.com
Created At: '2022-06-07T13:58:05-07:00'
Modified At: '2022-06-07T13:58:05-07:00'
Expires At: null
Status: accepted
Accessible By:
    Type: user
    ID: '19605663027'
    Name: Isaac Newton
    Login: abc@abc.local
Invite Email: null
Role: viewer uploader
Acknowledged At: '2022-06-07T13:58:05-07:00'
Item:
    Type: folder
    ID: '164734146745'
    Sequence ID: '0'
    ETag: '0'
    Name: Onboarding
Collaborated Managed User Isaac Newton to current user's 
Onboarding folder for provisioning
```

## まとめ

* Box CLIと共にPowerShellスクリプトを使用した、ユーザーのプロビジョニングと最初のフォルダツリーの作成の自動化を確認しました。

<Next>

サンプルスクリプトを使用して繰り返し発生するタスクを自動化する方法を理解しました

</Next>

[scripts]: https://github.com/box/boxcli/tree/main/examples

[script-1]: https://github.com/box/boxcli/tree/main/examples/User%20Creation%20&%20Provisioning

[jwt-cli]: g://tooling/cli/jwt-cli

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2

[Step 1]: g://tooling/cli/quick-start/create-oauth-app/

[console]: https://app.box.com/developers/console

[auth]: g://authentication/oauth2/oauth2-setup
