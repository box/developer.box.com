---
rank: 4
related_endpoints: []
related_guides:
  - authentication/jwt
  - cli/scripts/provision-users-folders
  - cli/scripts/deprovision-users
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/jwt/jwt-setup
related_resources: []
category_id: cli
subcategory_id: cli/scripts
is_index: false
id: cli/scripts/user-zones-mass-update
type: guide
total_steps: 5
sibling_id: cli/scripts
parent_id: cli/scripts
next_page_id: cli/scripts/report-inactive-users
previous_page_id: cli/scripts/provision-users-folders
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/scripts/user-zones-mass-update.md
fullyTranslated: true
---
# ユーザーのゾーンの更新

この[スクリプト][script]は、マルチゾーンのBoxテナント内の特定のデータ保管場所のゾーンにユーザーをプロビジョニングします。スクリプトによって以下の手順が実行されます。

<!-- markdownlint-disable line-length -->

1. 管理者または共同管理者のログインメールアドレスを使用して、関連付けられた企業とその企業に割り当てられているゾーンポリシーを検索します。割り当てられているゾーンポリシーは、特に指定がない限り、すべてのユーザーが継承します。これは、**デフォルトゾーン**とも呼ばれることもあります。
2. ユーザーのメールアドレスとゾーンマッピングが含まれる入力`.csv`ファイルに基づいて、ゾーン割り当てを行います。

<message>

通常、このスクリプトはユーザーのゾーンを初めてプロビジョニングするときに1回使用します。ただし、ゾーンの割り当てを更新するために、以降の実行でも使用できます。

</message>

ゾーンの割り当てに管理コンソールを使用する場合は、[こちらのガイド][zonesguide]を参照してください。Box Zonesの詳細については、[公式ウェブサイト][zonespage]を参照してください。

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

### JWT認証を使用するアプリケーションの設定

このスクリプトを使用するには、[JWT認証を使用するBoxアプリケーション][jwtapp]が必要です。

アプリを作成する際は、\[**構成**] タブで以下の設定を構成します。

* \[**アプリアクセスレベル**] で \[`App + Enterprise Access`] を選択します。
* \[**アプリケーションスコープ**] > \[**管理操作**] の順に移動して、\[`Manage Enterprise Properties`]、\[`Manage Users`] を選択します。
* \[**高度な機能**] で \[`Generate user access tokens`] を選択します。

### 管理者設定の調整

Boxの管理者または共同管理者に`Manage Users`以上の権限があることを確認します。この設定を確認するには、以下の手順に従います。

1. 管理コンソールの \[**ユーザーとグループ**] セクションに移動します。
2. 確認するユーザーアカウントをクリックします。
3. \[**ユーザーアクセス権限を編集**] セクションに移動して、ユーザーとグループに管理者権限を付与します。 

## `.csv`ファイルの準備

`.csv`ファイルには、**Email**と**Region**というヘッダーを設定した2つの列が必要です。 

* **Email**列には、Boxユーザーのプライマリメールアドレスを含めます。 
* **Region**列には、スクリプトでユーザーを割り当てるゾーンのユーザーフレンドリ名 (ユーザーが理解しやすい名前) を含めます。この名前は、ゾーンの定義に使用する[ZonesTable][zonestable]というハッシュテーブルで指定します。キーはゾーンのユーザーフレンドリ名であり、対応する値はゾーンのグローバルIDです。 

  ```bash
  $ZonesTable = @{
  US = "100001"             #US
  GermanyIreland = "100002" #Germany/Ireland with in region uploads/downloads/previews
  Australia = "100003"      #Australia
  Japan = "100004"          #Japan with in region uploads/downloads/previews
  Canada = "100005"         #Canada
  JapanSingapore = "100007" #Japan/Singapore with in region uploads/downloads/previews
  UKGermany = "100008"      #UK/Germany
  UK = "100009"             #UK with in region uploads/downloads/previews
  France = "100012"         #France
  }

  ```

<message>

Consult the Box Consulting or Customer Success manager to get the IDs corresponding to the zones enabled in a specific enterprise.

</message>

このスクリプトには、以下のようなメールアドレスとゾーン名が含まれているサンプル入力`.csv`ファイルが用意されています。

| Email                                         | Region         |
| --------------------------------------------- | -------------- |
| [betty@company.com](mailto:betty@company.com) | US             |
| [roger@company.com](mailto:roger@company.com) | France         |
| [sally@company.com](mailto:sally@company.com) | JapanSingapore |

## スクリプトの構成

この`.csv`ファイルを指すように`UserZonesUpdatePath`を設定します。

```bash
$UserZonesUpdatePath = "./your_file_name.csv"
```

`adminEmail`を、このスクリプトでゾーンの割り当てに使用するアカウントの管理者または`co-admin`のログインメールアドレスに更新します。この値を指定しない場合、スクリプト実行時に指定するよう求められます。

```bash
$adminEmail = "john@box.com"
```

## スクリプトの実行

ディレクトリを、スクリプトが格納されているフォルダに変更します。この例では、`Mass Update User Zones`フォルダになります。

```bash
rvb@lab:~/box-cli/examples/Mass Update User Zones$ pwsh
PowerShell 7.2.4
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.

PS /home/rvb/box-cli/examples/Mass Update User Zones>
```

スクリプトを実行します。

```bash
./Mass_Update_User_Zones.ps1
```

### オプションのフラグ

To run the script in a simulation mode, add the `DryRun` boolean flag. Dry run doesn't mean that API calls won't be made, but that any create/update/delete calls will be skipped.

```bash
./Mass_Update_User_Zones.ps1 -DryRun
```

## ログ

ログは、メインフォルダ内の`logs`フォルダに格納されます。以下のログファイルにアクセスできます。

* `Mass_Update_User_Zones_all.txt`: すべてのログエントリが含まれています。
* `Mass_Update_User_Zones_errors.txt`: エラーのみが含まれています。

<!-- markdownlint-enable line-length -->

[zonesguide]: https://support.box.com/hc/en-us/articles/360044193533-Assigning-Zones-through-the-Admin-Console

[script]: https://github.com/box/boxcli/tree/main/examples/Mass%20Update%20User%20Zones

[zonespage]: https://www.box.com/zones

[zonestable]: https://github.com/box/boxcli/blob/main/examples/Mass%20Update%20User%20Zones/Mass_Update_User_Zones.ps1#L23

[jwtapp]: g://cli/cli-docs/jwt-cli

[scripts]: https://github.com/box/boxcli/tree/main/examples

[pwsh]: https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.2

[console]: https://app.box.com/developers/console